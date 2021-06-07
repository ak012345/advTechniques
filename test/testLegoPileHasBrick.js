var assert = require('assert');
var lego = require('../legos');


const Brick = lego.Brick;

const ThePile = lego.LegoPile;

describe('Check if specific brick exist', function() {
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

    const blueEightBrick = new Brick("blue",8 );
    testLegoPile.insert(blueEightBrick);

    console.log("WORKING LOG" + testLegoPile.pile.RED.root.data)
    it('Checks if pile contains a redEightBrick', function() {
      assert.equal(testLegoPile.hasBrick("RED", 8), true);
    });

    it('Checks if pile contains a redSixBrick', function() {
      assert.equal(testLegoPile.hasBrick("RED", 6), true);
    });

    it('Checks if pile does not contain redTwelveBrick', function() {
      assert.equal(testLegoPile.hasBrick("RED", 12), false);
    });

    it('Checks if pile contains contain blueEightBrick', function() {
      assert.equal(testLegoPile.hasBrick("BLUE", 8), true);
    });

    it('Checks if pile contains contain blackEightBrick', function() {
      assert.equal(testLegoPile.hasBrick("BLACK", 8), false);
    });

});
