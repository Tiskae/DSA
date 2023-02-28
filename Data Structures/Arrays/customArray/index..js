class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
  }

  pop() {
    const deletedVal = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return deletedVal;
  }

  delete(index) {
    const item = this.data[index];
    this.#shiftItems(index);
    return item;
  }

  #shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();
newArray.push("a");
newArray.push("b");
newArray.push("c");
newArray.push("d");
newArray.push("e");
newArray.push("f");
newArray.push("g");
newArray.push("h");
newArray.push("i");
newArray.push("j");
newArray.push("k");
newArray.pop();
newArray.pop();
newArray.delete(4);
console.log(newArray.data, newArray.length);

// console.log(newArray.data, newArray.length);
