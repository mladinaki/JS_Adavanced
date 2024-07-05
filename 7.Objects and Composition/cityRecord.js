function cityRecord(name, population, treasury) {
    const objRecord = {}

    objRecord['name'] = name;
    objRecord['population'] = population;
    objRecord['treasury'] = treasury;
   
    return objRecord
}
console.log(cityRecord("Tortuga", 7000, 15000));