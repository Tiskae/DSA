//                                     50
//                      ______________/ \______________
//                     /                               \
//                    /                                 \
//                  25                                   75
//               __/ \__                              ___/ \___
//              /       \                            /         \
//             /         \                          /           \
//            12         37                        62           87
//           / \        /  \                     /   \        /   \
//          /   \      /    \                   /     \      /     \
//         6    18    31    43                 56     68    81     93
//        / \   / \   / \   / \               / \     / \   / \    / \
//       3   9 15 21 28 34 40 46             53  59  65  71 78  84  91  97
//      / \                       \         /            /          \
//     /   \                       \       /            /            \
//    2     4                      24     58           77             99
//                                 / \     /           /              /
//                                /   \   /           /              /
//                               22   26  52         72             96
//                                      /  \       /  \
//                                     /    \     /    \
//                                    47    55   69    83
//                                              /      / \
//                                             /      /   \
//                                            61    73    89
//                                                   \      \
//                                                    \      \
//                                                    80    95
//                                                           \
//                                                            \
//                                                            98

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    // Tree is empty
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let currNode = this.root;

    // Traverse through the correct path
    while (currNode.left || currNode.right) {
      // Node without children
      if (
        (value > currNode.value && !currNode.right) ||
        (value < currNode.value && !currNode.left)
      ) {
        break;
      }

      // value is greater, go right
      if (value > currNode.value) {
        currNode = currNode.right;
      }
      // value is less, go left
      else if (value < currNode.value) {
        currNode = currNode.left;
      }
      // value already exist, return error and stop
      else {
        break;
      }
    }

    // Append node to the appropriate direction
    if (value > currNode.value) {
      currNode.right = newNode;
    } else if (value < currNode.value) {
      currNode.left = newNode;
    } else {
      console.error("Multiple values are not allowed");
    }
  }

  lookup(value) {
    let currNode = this.root;

    while (currNode) {
      if (value === currNode.value) {
        return currNode;
      } else if (value > currNode.value) {
        currNode = currNode.right;
      } else {
        currNode = currNode.left;
      }
    }

    return null;
  }

  lookupParent(value) {
    let currNode = this.root;

    while (currNode.left || currNode.right) {
      if (value === currNode.right?.value || value === currNode.left?.value) {
        return currNode;
      } else if (value > currNode.value) {
        currNode = currNode.right;
      } else {
        currNode = currNode.left;
      }
    }

    return null;
  }

  remove(value) {
    console.log("Alaye, the thing no gree remove");

    if (!this.root) {
      return null;
    }

    let parentNode = this.lookupParent(value);

    // console.log(parentNode);

    // Value not found in tree
    if (parentNode === null) {
      return null;
    }

    // Leaf node
    if (parentNode.right.value === value) {
      parentNode.right = null;
    } else if (parentNode.left.value === value) {
      parentNode.left = null;
    }

    //

    // console.log(currNode);
  }
}

//            _____ 9 _____
//           /              \
//          /                \
//         5                 20
//       /   \             /     \
//      /     \           /       \
//     2       6         15       170
//    /\       /\        /\       / \
//   /  \     /  \      /  \     /   \
//  1    3  5    7    12  17   120  401

console.clear();
const myBinarySearchTree = new BinarySearchTree();
myBinarySearchTree.insert(9);
myBinarySearchTree.insert(20);
myBinarySearchTree.insert(5);
myBinarySearchTree.insert(2);
myBinarySearchTree.insert(6);
myBinarySearchTree.insert(15);
myBinarySearchTree.insert(170);
myBinarySearchTree.insert(1);
myBinarySearchTree.insert(3);
myBinarySearchTree.insert(5);
myBinarySearchTree.insert(7);
myBinarySearchTree.insert(12);
myBinarySearchTree.insert(17);
myBinarySearchTree.insert(120);
myBinarySearchTree.insert(401);
// myBinarySearchTree.remove(4);

// myBinarySearchTree.insert(24);
// myBinarySearchTree.insert(15);
// myBinarySearchTree.insert(62);
// myBinarySearchTree.insert(5);
// myBinarySearchTree.insert(45);
// myBinarySearchTree.insert(90);
// myBinarySearchTree.insert(8);
// myBinarySearchTree.insert(73);
// myBinarySearchTree.insert(94);
// myBinarySearchTree.insert(6);
// myBinarySearchTree.insert(86);
// myBinarySearchTree.insert(99);
// myBinarySearchTree.insert(80);
// myBinarySearchTree.insert(87);
// myBinarySearchTree.insert(77);

// console.dir(traverse(myBinarySearchTree.root), { depth: 10 });

console.dir(myBinarySearchTree, { depth: 10 });

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
