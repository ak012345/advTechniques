var assert = require('assert');
var lego = require('../legos');
var bst = require('../bst');

const Brick = lego.Brick;
const BST = bst.BST;

describe('Brick BST Tests:', function() {

    const redFourBrick = new Brick("Red", 4);
    const testBST = new BST();

    testBST.insert(redFourBrick);
    it('Should return true if redFourBrick is root Node', function() {
      assert.equal(testBST.root.data, redFourBrick);
    });

    it('Checks that children nodes are null', function() {
      assert((testBST.root.left == null) && (testBST.root.right == null));
    });

});
