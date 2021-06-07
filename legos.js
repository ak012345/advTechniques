module.exports.Brick = Brick;
module.exports.LegoPile = LegoPile;


var bst = require('./bst');
const BST = bst.BST;

function Brick(color, size) {
this.color = color.toUpperCase();
this.size = size;
}

function LegoPile(){


this.pile = new Object();
this.pile['RED'] = new BST();
this.pile['GREEN'] = new BST();
this.pile['BLUE'] = new BST();
this.pile['YELLOW'] = new BST();
this.pile['BLACK'] = new BST();
this.pile['WHITE'] = new BST();
this.insert = insertBrickByColor;
this.hasBrick = hasBrick;

}

function insertBrickByColor(brick){

  switch(brick.color) {
    case "RED":
        this.pile.RED.insert(brick);
    break;
    case "GREEN":
        this.pile.GREEN.insert(brick);
    break;
    case "BLUE":
        this.pile.BLUE.insert(brick);
    break;
    case "YELLOW":
        this.pile.YELLOW.insert(brick);
    break;
    case "BLACK":
      this.pile.BLACK.insert(brick);
    break;
    case "WHITE":
        this.pile.WHITE.insert(brick);
    break;
  }

}

function hasBrick(color, size) {
  var current = this.pile[color].root;

  if (current == null) {
    return false;
  }

  while (current.data.size != size) {
     if (size < current.data.size) {
        current = current.left;
      } else {
        current = current.right;
      }

      if (current == null) {
        return false;
      }
  }
  return true;
}
