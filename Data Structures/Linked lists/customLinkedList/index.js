/*
linkedList = {
    head: {
        value: 10,
        next: {
            value: 5,
            next: {
                value: 16,
                next: null
            }
        }
    }
}
*/

/*** New node class */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/*** New Linked List class */
class LinkedList {
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
      const holdingPointer = leader.next;
      leader.next = newNode;
      newNode.next = holdingPointer;
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
    } else {
      const leader = this.traverseToIndex(index - 1);
      const unwantedNode = leader.next;
      leader.next = unwantedNode.next;
    }

    this.length--;
  }

  /**
   * reverse the linked list
   * @returns the reversed list as an array
   */
  reverse() {
    if (this.length <= 1) {
      return this.head;
    }

    let leadPointer = this.head;
    let lagPointer = this.tail;

    let timesToIterate = Math.floor(this.length / 2);
    for (let i = 0; i < timesToIterate; i++) {
      const leadPointerValue = leadPointer.value;
      leadPointer.value = lagPointer.value;
      lagPointer.value = leadPointerValue;

      leadPointer = leadPointer.next;
      lagPointer = this.traverseToIndex(this.length - i - 2);
    }

    return this.printList();
  }
}

const myLinkedList = new LinkedList(4);
console.clear();
myLinkedList.append(5);
myLinkedList.prepend(3);
myLinkedList.prepend(2);
myLinkedList.prepend(1);
myLinkedList.insert(4, "Imposter");
myLinkedList.insert(5, "Zoyah");
myLinkedList.printList();
// myLinkedList.remove(5);
myLinkedList.reverse();
