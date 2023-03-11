class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  /**
   * @returns the element at the top
   */
  peek() {
    return this.top;
  }

  /**
   * add element to the top of the stack
   */
  push(element) {
    const newNode = new Node(element);
    if (this.isEmpty()) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }

    this.length++;
  }

  /**
   * removes the element at the top of the stack
   * @returns {any} the removed node
   */
  pop() {
    if (this.isEmpty()) return null;

    if (this.length === 1) {
      this.bottom = null;
    }

    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    return holdingPointer;
  }

  /**
   * @returns {boolean}
   */
  isEmpty() {
    return this.length === 0;
  }
}

const myStack = new Stack();
myStack.push("Coding");
myStack.push("is");
myStack.push("really");
myStack.push("difficult");
myStack.pop();
myStack.push("easy");
console.dir(myStack, { depth: 10 });
