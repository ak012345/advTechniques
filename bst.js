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
  this.count = BST_count;
}

function insert(data) {
         var n = new Node(data, null, null);
           if (this.root == null) {
                this.root = n;
           } else {
             var current = this.root;
             var parent;
              while (true) {
                parent = current;

                if (data.size < current.data.size) {
                  current = current.left;
                  if (current == null) {
                    parent.left = n;
                    break;
                  }
                }
                else {
                  current = current.right;
                  if (current == null) {
                    parent.right = n;
                    break;
                }
              }

            }
          }
          // console.log("ROOT");
          // console.log(this.root);

          if(this.root.left != null){
            // console.log("LEFT OF ROOT");
            // console.log(this.root.left);
          }
          if(this.root.right != null){
            // console.log("RIGHT OF ROOT");
            // console.log(this.root.right);
          }
}

function BST_count(){
  return countSubtree(this.root);
}

function  countSubtree(node){
  if(node == null){
    return 0;
  }
  if(node.left == null && node.right == null){
    return 1;
  } else {
    return (countSubtree(node.left) + countSubtree(node.right));
  }

}
