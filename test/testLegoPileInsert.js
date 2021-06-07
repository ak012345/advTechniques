var assert = require('assert');
var lego = require('../legos');


const Brick = lego.Brick;

const ThePile = lego.LegoPile;

describe('legoPile Test:', function() {


const testLegoPile = new ThePile();

const redFiveBrick = new Brick("Red",5);
const redThreeBrick = new Brick("Red",3);
const redSevenBrick = new Brick("Red",7);

const blueFiveBrick = new Brick("blue",5);
const blueThreeBrick = new Brick("blue",3);
const blueSevenBrick = new Brick("blue",7);



testLegoPile.insert(redFiveBrick);
it('Checks that redFiveBrick is root Node', function() {
  assert.equal(testBST.root.data, redFiveBrick);
});



testLegoPile.insert(redThreeBrick);
testLegoPile.insert(redSevenBrick);

testLegoPile.insert(blueFiveBrick);
testLegoPile.insert(blueThreeBrick);
testLegoPile.insert(blueSevenBrick);


    it('Checks that redFiveBrick is root Node', function() {
      assert.equal(testBST.root.data, redFiveBrick);
    });



});
