var assert = require('assert');
var lego = require('../legos');
const Brick = lego.Brick;

describe('Brick Constructor Tests:', function() {

    const redFourBrick = new Brick("Red", 4);
    
    it('Should return color "Red"', function() {
      assert.equal(redFourBrick.color, "Red");
    });

    it('Should return Size 4', function() {
      assert.equal(redFourBrick.size, 4);
    });

});
