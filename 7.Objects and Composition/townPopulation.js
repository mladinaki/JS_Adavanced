function townPopulation(input) {
    let obj = {}
    for (const el of input) {
        let [town, populate] = el.split(' <-> ');
        populate = Number(populate);

        if (!obj[town]) {
            obj[town] = 0
        }
        obj[town] += populate
    }

    Object.keys(obj).forEach((key) => {
        console.log(`${key} : ${obj[key]}`);
    })
}
townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);
