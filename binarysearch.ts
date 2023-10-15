class TreeNode<T> {
  constructor(public value: T, public left: TreeNode<T> | null = null, public right: TreeNode<T> | null = null) {}
}

class BinarySearchTree<T> {
  constructor(public root: TreeNode<T> | null = null) {}

  insert(value: T): void {
    this.root = this.insertRec(this.root, value);
  }

  private insertRec(node: TreeNode<T> | null, value: T): TreeNode<T> {
    if (node === null) {
      return new TreeNode(value);
    }

    if (value < node.value) {
      node.left = this.insertRec(node.left, value);
    } else if (value > node.value) {
      node.right = this.insertRec(node.right, value);
    }

    return node;
  }

  search(value: T): boolean {
    return this.searchRec(this.root, value);
  }

  private searchRec(node: TreeNode<T> | null, value: T): boolean {
    if (node === null) {
      return false;
    }

    if (node.value === value) {
      return true;
    } else if (value < node.value) {
      return this.searchRec(node.left, value);
    } else {
      return this.searchRec(node.right, value);
    }
  }
}

// Creating a binary search tree
const bst = new BinarySearchTree<number>();

// Inserting elements
bst.insert(5);
bst.insert(3);
bst.insert(8);
bst.insert(1);
bst.insert(4);
bst.insert(7);
bst.insert(9);

// Searching for elements
console.log(bst.search(4));  // Should return true
console.log(bst.search(6));  // Should return false
