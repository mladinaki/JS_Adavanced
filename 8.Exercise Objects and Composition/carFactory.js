function carFactory(input) {
  let car = {};

  car.model = input.model;

  if (input.power <= 90) {
    car.engine = {
      power: 90,
      volume: 1800,
    };
  } else if (input.power <= 120) {
    car.engine = {
      power: 120,
      volume: 2400,
    };
  } else if (input.power <= 200) {
    car.engine = {
      power: 200,
      volume: 3500,
    };
  }

  if (input.carriage === "hatchback") {
    car.carriage = {
      type: "hatchback",
      color: input.color,
    };
  } else {
    car.carriage = {
      type: "coupe",
      color: input.color,
    };
  }

  let size;

  if (input.wheelsize % 2 !== 0) {
    size = input.wheelsize;
  } else {
    size = input.wheelsize - 1;
  }
  car.wheelsize = [size, size, size, size];
  console.log(car);
}

carFactory({
  model: "VW Golf II",
  power: 90,
  color: "blue",
  carriage: "hatchback",
  wheelsize: 14,
  volume: 1800,
});

// { model: 'VW Golf II',
//   engine: { power: 90, volume: 1800 },
//   carriage: { type: 'hatchback',color: 'blue' },
//   wheels: [13, 13, 13, 13] }
