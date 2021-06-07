var assert = require('assert');
var lego = require('../legos');
var bst = require('../bst');

const Brick = lego.Brick;
const BST = bst.BST;
const LegoPile = lego.LegoPile;

describe('legoPile Test:', function() {
const redFiveBrick = new Brick("Red",5);
const redThreeBrick = new Brick("Red",3);
const redSevenBrick = new Brick("Red",7);

const blueFiveBrick = new Brick("blue",5);
const blueThreeBrick = new Brick("blue",3);
const blueSevenBrick = new Brick("blue",7);

const testLegoPile = new LegoPile();

console.log(testLegoPile);

testLegoPile.insertBrickByColor(redFiveBrick);
testLegoPile.insertBrickByColor(redThreeBrick);
testLegoPile.insertBrickByColor(redSevenBrick);

testLegoPile.insertBrickByColor(blueFiveBrick);
testLegoPile.insertBrickByColor(blueThreeBrick);
testLegoPile.insertBrickByColor(blueSevenBrick);

console.log(testLegoPile);

});
