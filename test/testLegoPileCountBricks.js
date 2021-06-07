var assert = require('assert');
var lego = require('../legos');


const Brick = lego.Brick;

const ThePile = lego.LegoPile;

describe('Count number of legos in pile', function() {
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

    const blueFiveBrick = new Brick("blue",5 );
    testLegoPile.insert(blueFiveBrick);

    const blueSevenBrick = new Brick("blue",7 );
    testLegoPile.insert(blueSevenBrick);

    const blueSixtBrick = new Brick("blue",6 );
    testLegoPile.insert(blueSixtBrick);

    const blueEightBrick = new Brick("blue",8 );
    testLegoPile.insert(blueEightBrick);

    it('checks that the number of bricks equals 11', function() {
      assert.equal(testLegoPile.count(), 11);
    });
});
