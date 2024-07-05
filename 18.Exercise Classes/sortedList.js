class List {
  constructor(arr = []) {
    this.arr = arr.sort((a, b) => a - b);
    this.size = this.arr.length;
  }

  add(el) {
    this.arr.push(el);
    this.arr.sort((a, b) => a - b);
    this.size++;
    return;
  }

  remove(index) {
    if (index < 0 || index >= this.arr.length) {
      throw new Error("Index doest exixst");
    } else {
      this.arr.splice(index, 1);
      this.size--;
      return;
    }
  }
  get(index) {
    if (index < 0 || index >= this.arr.length) {
      throw new Error("Index doest exixst");
    } else {
      return this.arr[index];
    }
  }
  size() {
    return this.arr.length;
  }
}
let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
