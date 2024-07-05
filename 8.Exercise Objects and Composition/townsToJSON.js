function townsToJSON(input) {
  let res = [];

  for (const el of input.slice(1)) {
    let [ ,town, latitude, longitude] = el.split(/\s*\|\s*/);
    latitude = Number(latitude).toFixed(2);
    longitude = Number(longitude).toFixed(2);
    // longitude = longitude ? longitude.split('||') :[];
    let obj = {
      Town: town,
      latitude: Number(latitude),
      longitude: Number(longitude),
    };
    res.push(obj);
  }
  let json = JSON.stringify(res);
//   return json
console.log(json);
}
townsToJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |'])