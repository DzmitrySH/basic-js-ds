// const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.branch = null;
  }

  root() {
    return this.branch;
  }

  add(data) {
    this.branch = ad(this.branch, data);

    function ad(b, data) {
      if (!b) {
        return new Node(data);
      } else if (b.data === data) {
        return b;
      } else if (data > b.data) {
        b.right = ad(b.right, data);
      } else {
        b.left = ad(b.left, data);
      }

      return b;
    }
  }

  has(data) {
    if (!this.branch) {
      return false;
    } else {
      let current = this.branch;

      while (current) {
        if (current.data === data) {
          return true;
        } else if (current.data > data) {
          current = current.left;
        } else {
          current = current.right;
        }
      }
      return false;
    }
  }

  find(data) {
    if (!this.branch) {
      return null;
    } else {
      let current = this.branch;

      while (current) {
        if (current.data === data) {
          return current;
        } else if (current.data > data) {
          current = current.left;
        } else {
          current = current.right;
        }
      }
      return null;
    }
  }

  remove(data) {
    this.branch = del(this.branch, data);

    function del(b, data) {
      if (!b) {
        return null;
      }

      if (data < b.data) {
        b.left = del(b.left, data);
        return b;
      } else if (data > b.data) {
        b.right = del(b.right, data);
        return b;
      } else {
        if (!b.left && !b.right) {
          return null;
        } else if (!b.left) {
          b = b.right;
          return b;
        } else if (!b.right) {
          b = b.left;
          return b;
        }

        let minR = b.right;
        while (minR.left) {
          minR = minR.left;
        }

        b.data = minR.data;
        b.right = del(b.right, minR.data);
        return b;
      }
    }
  }

  min() {
    if (!this.branch) {
      return null;
    } else {
      let min = this.branch;
      while (min.left) {
        min = min.left;
      }
      return min.data;
    }
  }

  max() {
    if (!this.branch) {
      return null;
    } else {
      let max = this.branch;
      while (max.right) {
        max = max.right;
      }
      return max.data;
    }
  }
}

module.exports = {
  BinarySearchTree
};