var assert = require('assert');
var lego = require('../legos');
var bst = require('../bst');

const Brick = lego.Brick;
const BST = bst.BST;

describe('Brick BST Insert Tests:', function() {


    const testBST = new BST();
    const redFiveBrick = new Brick("Red", 5);

    testBST.insert(redFiveBrick);



    const redThreeBrick = new Brick("Red",3 );
    testBST.insert(redThreeBrick);

    const redSevenBrick = new Brick("Red", 7 );
    testBST.insert(redSevenBrick);

    const redTwoBrick = new Brick("Red",2 );
    testBST.insert(redTwoBrick);
    const redFourBrick = new Brick("Red",4 );
    testBST.insert(redFourBrick);


    const redSixBrick = new Brick("Red",6 );
    testBST.insert(redSixBrick);
    const redEightBrick = new Brick("Red",8 );
    testBST.insert(redEightBrick);

    it('Checks that redFiveBrick is root Node', function() {
      assert.equal(testBST.root.data, redFiveBrick);
    });



    it('Checks that child left of root is 3', function() {
      assert(testBST.root.left.data.size == 3);
    });

    it('Checks that child right of root is 7', function() {
      assert(testBST.root.right.data.size == 7);
    });


    it('Checks that child left-left of root is 2', function() {
      assert(testBST.root.left.left.data.size == 2);
    });

    it('Checks that child left-right of root is 4', function() {
      assert(testBST.root.left.right.data.size == 4);
    });

    it('Checks that child right-left of root is 6', function() {
      assert(testBST.root.right.left.data.size == 6);
    });

    it('Checks that child right-right of root is 8', function() {
      assert(testBST.root.right.right.data.size == 8);
    });


});
