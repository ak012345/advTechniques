module.exports.Node = Node;
module.exports.BST = BST;

function Node(data, left, right) {
   this.data = data;
   this.left = left;
   this.right = right;
   this.show = show;
}

function show() {
      return this.data;
}

function BST() {
    this.root = null;
    this.insert = insert;
    // this.inOrder = inOrder;
}

function insert(brick) {
    var n = new Node(brick, null, null);
     if (this.root == null) {
        this.root = n;
      } else {
         var current = this.root;
         var parent;
         while (true) {
            parent = current;
            if (brick.size < current.size) {
              current = current.left;
              if (current == null) {
                 parent.left = n;
                 break;
              }
            } else {
              current = current.right;
              if (current == null) {
                 parent.right = n;
                 break;
              }
            }
          }
      }
}
