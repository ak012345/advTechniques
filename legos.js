module.exports.Brick = Brick;
module.exports.LegoPile = LegoPile;

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

}

function insertBrickByColor(brick){

this.pile = new LegoPile();

  switch(brick.color) {
    case RED:
        this.pile.RED(insert(brick));
    break;
    case GREEN:
        this.pile.GREEN(insert(brick));
    break;
    case BLUE:
        this.pile.BLUE(insert(brick));
    break;
    case YELLOW:
        this.pile.YELLOW(insert(brick));
    break;
    case BLACK:
      this.pile.BLACK(insert(brick));
    break;
    case WHITE:
        this.pile.WHITE(insert(brick));
    break;
  }

}
