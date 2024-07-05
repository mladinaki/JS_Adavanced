function roadRadar(speed, area) {
    let zone = {
        'residential': 20,
        'city': 50,
        'interstate': 90,
        'motorway': 130
    }
    let refferences;
    let status;

    if (speed <= zone[area]) {
        console.log(`Driving ${speed} km/h in a ${zone[area]} zone`);
    } else {
        refferences = speed - zone[area];
        status = `reckless driving`;

        if (refferences <= 20) {
            status = `speeding`;

        } else {
            if (refferences <= 40) {
                status = `excessive speeding`;
            }
        }
        console.log(`The speed is ${refferences} km/h faster than the allowed speed of ${zone[area]} - ${status}`);
    }
}
roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');

