function listProcessor(command, i) {
  let com = (function () {
    let str = [];
    return {
      add(el) {
        str.push(el);
      },

      remove(el) {
        str = str.filter((a) => a !== el);
      },

      print() {
        console.log(str.join(","));
      },
    };
  })();

  for (const el of command) {
    let [element, itens] = el.split(" ");
    com[element](itens);
  }
}
listProcessor(["add hello", "add again", "remove hello", "add again", "print"]);

