// Implementation of a stack using an array
// LIFO
class Stack {
  constructor() {
    this.data = [];
  }

  isEmpty() {
    return this.data.length === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.data[this.data.length - 1];
  }

  push(item) {
    this.data.push(item);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }

    return this.data.pop();
  }
}

const myStack = new Stack();
myStack.push("Coding");
myStack.push("is");
myStack.push("really");
myStack.push("difficult");
myStack.pop();
myStack.push("easy");
console.dir(myStack);
