function argumentInfo(...input) {
  const obj = {};

  for (const el of input) {
    const arg = typeof el;
    console.log(`${arg}: ${el}`);

    if (!obj.hasOwnProperty(arg)) {
      obj[arg] = 0;
    }
    obj[arg] = obj[arg] + 1;
  }
  let buff = "";
  for (const [k, v] of Object.entries(obj)) {
    buff += `${k} = ${v}\n`;
    console.log(buff);
  }
}
argumentInfo("cat", 42, function () {
  console.log("Hello world!");
});
