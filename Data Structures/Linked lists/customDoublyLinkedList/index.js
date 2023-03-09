/*** New node class */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

/*** New Linked List class */
class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  /*** prints all the element as an array */
  printList() {
    const arr = [];
    let currNode = this.head;

    while (currNode !== null) {
      arr.push(currNode.value);
      currNode = currNode.next;
    }
    console.log(arr);
  }

  /**
   * @param {Number} index
   * @returns {Node} the node at the given index
   */
  traverseToIndex(index) {
    let currNode = this.head;
    let counter = 0;

    while (counter < index) {
      currNode = currNode.next;
      counter++;
    }

    return currNode;
  }

  /**
   * appends value to the linked list
   * @param {Number} value
   */
  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  /**
   * prepends value to the linked list
   * @param {Number} value
   */
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;

    this.head.prev = newNode;

    this.head = newNode;
    this.length++;
  }

  /**
   * inserts value at the given index
   * @param {Number} index
   * @param {any} value
   */
  insert(index, value) {
    if (!index || !value) {
      return console.log("Please provide the right arguments");
    }

    // use prepend method
    if (index === 0) {
      return this.prepend(value);
    }

    // use append method
    else if (index >= this.length - 1) {
      return this.append(value);
    }

    // insert
    else {
      const newNode = new Node(value);
      const leader = this.traverseToIndex(index);
      const follower = leader.next;
      leader.next = newNode;
      follower.prev = newNode;
      newNode.prev = leader;
      newNode.next = follower;
    }

    this.length++;
  }

  /**
   * removes the node at the given index
   * @param {Number} index
   */
  remove(index) {
    if (index >= this.length) {
      return console.log("Index out of list range");
    }

    if (index === 0) {
      this.head = this.head.next;
      this.head.prev = null;
    } else {
      const leader = this.traverseToIndex(index - 1);
      const unwantedNode = leader.next;
      leader.next = unwantedNode.next;
      if (index !== this.length - 1) {
        leader.next.prev = leader;
      }
    }

    this.length--;
    // this.printList();
  }
}

const myDoublyLinkedList = new DoublyLinkedList(4);
console.clear();
myDoublyLinkedList.append(5);
myDoublyLinkedList.prepend(3);
myDoublyLinkedList.prepend(2);
myDoublyLinkedList.prepend(1);
myDoublyLinkedList.insert(4, "Imposter");
myDoublyLinkedList.insert(3, "Zoyah");
myDoublyLinkedList.prepend("To be removed");
myDoublyLinkedList.remove(7);
myDoublyLinkedList.printList();
console.dir(myDoublyLinkedList, { depth: 10 });
