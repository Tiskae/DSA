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

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  printList() {
    const arr = [];
    let currNode = this.head;

    while (currNode !== null) {
      arr.push(currNode.value);
      currNode = currNode.next;
    }
    console.log(arr);
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;

    this.head = newNode;
    this.length++;
  }

  insert(index, value) {
    if (!(typeof index === "number" && value) || index >= this.length) {
      return console.log("Please provide the right arguments");
    }

    // use prepend method
    if (index === 0) {
      this.prepend(value);
    }
    // use append method
    else if (index === this.length - 1) {
      this.append(value);
      console.log("Append mi okoko");
    } else {
      const newLinkedList = {
        head: new Node(this.head.value),
        tail: new Node(this.head.value),
        length: 1,
      };
      let currParentNode = this.head.next;
      let currNode = newLinkedList.head;
      for (let i = 1; i < this.length; i++) {
        // Index to insert value
        if (i === index) {
          currNode.next = new Node(value);
          currNode = currNode.next;
          newLinkedList.length++;
        }

        // Copying old linked list items into new one
        currNode.next = new Node(currParentNode.value);

        // Last node
        if (i === this.length - 1) {
          newLinkedList.tail = new Node(currParentNode.value);
        }

        // Updating stuffs for next iteration
        currParentNode = currParentNode.next;
        currNode = currNode.next;
        newLinkedList.length++;
      }
      this.head = newLinkedList.head;
      this.tail = newLinkedList.tail;
      this.length = newLinkedList.length;
    }
  }
}

// 10 --> 5 --> 16
const myLinkedList = new LinkedList(10);
console.clear();
myLinkedList.append(5);
// myLinkedList.append(16);
// myLinkedList.append(1);
myLinkedList.prepend(0);
myLinkedList.prepend(-100);
myLinkedList.prepend("Who's got za keys to ma BMW?");
myLinkedList.insert(1, "Imposter");
myLinkedList.printList();
