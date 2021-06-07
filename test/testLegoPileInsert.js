var assert = require('assert');
var lego = require('../legos');


const Brick = lego.Brick;

const ThePile = lego.LegoPile;

describe('legoPile Test:', function() {
    const testLegoPile = new ThePile();
    describe('Insert 1 brick', function() {

        const redFiveBrick = new Brick("Red",5);
        testLegoPile.insert(redFiveBrick);


        it('Checks that first red brick is the root Node of Red BST', function() {
          assert.equal(testLegoPile.pile.RED.root.data, redFiveBrick);

        });
        it('Checks that red root has no children', function() {
          assert((testLegoPile.pile.RED.left == null) && (testLegoPile.pile.RED.right == null));
        });

    });

    describe('Insert 1 brick of each color', function() {
        const testLegoPile = new ThePile();

        const redFiveBrick = new Brick("Red",5);
        const greenFiveBrick = new Brick("green",5);
        const blueFiveBrick = new Brick("blue",5);
        const yellowFiveBrick = new Brick("yellow",5);
        const blackFiveBrick = new Brick("black",5);
        const whiteFiveBrick = new Brick("white",5);

        testLegoPile.insert(redFiveBrick);
        testLegoPile.insert(greenFiveBrick);
        testLegoPile.insert(blueFiveBrick);
        testLegoPile.insert(yellowFiveBrick);
        testLegoPile.insert(blackFiveBrick);
        testLegoPile.insert(whiteFiveBrick);


        it('Checks that first red brick is the root Nodeof Red BST', function() {
          assert.equal(testLegoPile.pile.RED.root.data, redFiveBrick);
        });
        it('Checks that red root has no children', function() {
          assert((testLegoPile.pile.RED.left == null) && (testLegoPile.pile.RED.right == null));
        });



        it('Checks that first green brick is the root Node of green BST', function() {
          assert.equal(testLegoPile.pile.GREEN.root.data, greenFiveBrick);
        });
        it('Checks that green root has no children', function() {
          assert((testLegoPile.pile.GREEN.left == null) && (testLegoPile.pile.GREEN.right == null));
        });



        it('Checks that first blue brick is the root Node of blue BST', function() {
          assert.equal(testLegoPile.pile.BLUE.root.data, blueFiveBrick);
        });
        it('Checks that blue root has no children', function() {
          assert((testLegoPile.pile.BLUE.left == null) && (testLegoPile.pile.BLUE.right == null));
        });



        it('Checks that first yellow brick is the root Node of yellow BST', function() {
          assert.equal(testLegoPile.pile.YELLOW.root.data, yellowFiveBrick);
        });
        it('Checks that yellow root has no children', function() {
          assert((testLegoPile.pile.YELLOW.left == null) && (testLegoPile.pile.YELLOW.right == null));
        });



        it('Checks that first black brick is the root Node of black BST', function() {
          assert.equal(testLegoPile.pile.BLACK.root.data, blackFiveBrick);
        });
        it('Checks that black root has no children', function() {
          assert((testLegoPile.pile.BLACK.left == null) && (testLegoPile.pile.BLACK.right == null));
        });



        it('Checks that first white brick is the root Node of white BST', function() {
          assert.equal(testLegoPile.pile.WHITE.root.data, whiteFiveBrick);
        });
        it('Checks that white root has no children', function() {
          assert((testLegoPile.pile.WHITE.left == null) && (testLegoPile.pile.WHITE.right == null));
        });

    });


    describe('insert several bricks of one color', function() {
        const testLegoPile = new ThePile();

        const redFiveBrick = new Brick("Red", 5);
        testLegoPile.insert(redFiveBrick);

        const redThreeBrick = new Brick("Red",3 );
        testLegoPile.insert(redThreeBrick);
        const redSevenBrick = new Brick("Red", 7 );
        testLegoPile.insert(redSevenBrick);

        const redTwoBrick = new Brick("Red",2 );
        testLegoPile.insert(redTwoBrick);
        const redFourBrick = new Brick("Red",4 );
        testLegoPile.insert(redFourBrick);


        const redSixBrick = new Brick("Red",6 );
        testLegoPile.insert(redSixBrick);
        const redEightBrick = new Brick("Red",8 );
        testLegoPile.insert(redEightBrick);

        it('Checks that redFiveBrick is root Node', function() {
          assert.equal(testLegoPile.pile.RED.root.data, redFiveBrick);
        });

        it('Checks that child left of red root is 3', function() {
          assert(testLegoPile.pile.RED.root.left.data.size == 3);
        });

        it('Checks that child right of red root is 7', function() {
          assert(testLegoPile.pile.RED.root.right.data.size == 7);
        });

        it('Checks that child left-left of red root is 2', function() {
          assert(testLegoPile.pile.RED.root.left.left.data.size == 2);
        });

        it('Checks that child left-right of red root is 4', function() {
          assert(testLegoPile.pile.RED.root.left.right.data.size == 4);
        });

        it('Checks that child right-left of red root is 6', function() {
          assert(testLegoPile.pile.RED.root.right.left.data.size == 6);
        });

        it('Checks that child right-right of red root is 8', function() {
          assert(testLegoPile.pile.RED.root.right.right.data.size == 8);
        });

    });

});
