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

    // Traverse through the right path
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
    if (!this.root) {
      return null;
    }

    let currNode = this.root;
    while (currNode || currNode) {
      //   if (
      //     (value > currNode.value && !currNode.right) ||
      //     (value < currNode.value && !currNode.left)
      //   ) {
      //     break;
      //   }

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
}

//        9
//      /  \
//     /    \
//    4     20
//   /\     /\
//  /  \   /  \
// 1   6  15  170

console.clear();
const myBinarySearchTree = new BinarySearchTree();
myBinarySearchTree.insert(9);
myBinarySearchTree.insert(20);
myBinarySearchTree.insert(4);
myBinarySearchTree.insert(1);
myBinarySearchTree.insert(6);
myBinarySearchTree.insert(15);
myBinarySearchTree.insert(170);

// console.dir(traverse(myBinarySearchTree.root), { depth: 10 });

console.dir(myBinarySearchTree.lookup(100), { depth: 10 });

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
