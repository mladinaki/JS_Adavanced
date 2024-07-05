class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if (
            !this._validModel(model) ||
            !this._validHorsepower(horsepower) ||
            !this._validPriceAndMiliage(price) ||
            !this._validPriceAndMiliage(mileage)
        ) {
            throw new Error("Invalid input!");
        }
        this.availableCars.push({ model, horsepower, price, mileage });
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }

    _validModel(value) {
        return typeof value == "string" && value != "";
    }
    _validHorsepower(value) {
        return Number.isFinite(value) && value >= 0;
    }
    _validPriceAndMiliage(value) {
        return typeof value == "number" && value >= 0;
    }

    sellCar(model, desiredMileage) {
        const index = this.availableCars.findIndex((x) => x.model == model);
        const matchFilter = this.availableCars[index];

        if (matchFilter == undefined) {
            throw new Error(`${model} was not found!`);
        }

        const miliageDelta = matchFilter.mileage - desiredMileage;

        const sold = {
            model: matchFilter.model,
            horsepower: matchFilter.horsepower,
        };

        if (miliageDelta <= 0) {
            sold.soldPrice = matchFilter.price;
        } else if (miliageDelta <= 40000) {
            sold.soldPrice = matchFilter.price * 0.95;
        } else {
            sold.soldPrice = matchFilter.price * 0.9;
        }

        this.soldCars.push(sold);
        this.availableCars.splice(index, 1);
        this.totalIncome += sold.soldPrice
        return `${model} was sold for ${sold.soldPrice.toFixed(2)}$`;
    }
    currentCar() {
        if (this.availableCars.length == 0) {
            return "There are no available cars";
        }

        const res = this.availableCars.map(c => `---${c.model} - ${c.horsepower} HP - ${c.mileage.toFixed(2)} km - ${c.price.toFixed(2)}$`);
        res.unshift('-Available cars:')
        return res.join('\n')
    }
    salesReport(criteria) {

        if (criteria == 'horsepower') {
            this.soldCars.sort((a, b) => b.horsepower - a.horsepower)

        } else if (criteria == 'model') {
            this.soldCars.sort((a, b) => a.model.localeCompare(b.model))

        } else {
            throw new Error("Invalid criteria!");
        }
        const result = this.soldCars.map(c => `---${c.model} - ${c.horsepower} HP - ${c.soldPrice.toFixed(2)}$`);
        result.unshift(`-${this.soldCars.length} cars sold:`)
        result.unshift(`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`)
        return result.join('\n')
    }
}
let dealership = new CarDealership('SoftAuto');

dealership.addCar('Toyota Corolla', 100, 3500, 190000);

dealership.addCar('Mercedes C63', 300, 29000, 187000);

dealership.addCar('Audi A3', 120, 4900, 240000);

dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));

