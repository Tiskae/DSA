class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// FIFO
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  /**
   * @returns the first element of the queue
   */
  peek() {
    return this.first;
  }

  /**
   * add item to the end of the queue
   */
  enqueue(item) {
    const newNode = new Node(item);

    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;
  }

  /**
   * Removes the first element of the queue
   * @returns the removed element
   */
  dequeue() {
    if (this.length === 0) {
      return null;
    }

    if (this.length === 1) {
      this.last = null;
    }

    const holdingPointer = this.first;
    this.first = this.first.next;

    this.length--;

    return holdingPointer;
  }
}

const myQueue = new Queue();
myQueue.enqueue("1");
myQueue.enqueue("2");
myQueue.enqueue("3");
myQueue.enqueue("4");
myQueue.enqueue("5");
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();

console.clear();
console.dir(myQueue, { depth: 10 });
