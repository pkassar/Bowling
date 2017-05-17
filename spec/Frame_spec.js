'use strict';

describe("Frame", function(){
  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  it ("inputs a score of 4 and 5", function(){
    frame.addBowls(4,5);
    expect(frame.totalFrame).toEqual[(4,5)]
  });

  it ("Throws an error if sum of two bowls is bigger than 10", function(){
    expect(function(){ frame.addBowls(8,5) }).toThrowError("There are only 10 pins");
  });

  it("checks if a strike is bowled ", function() {
    frame.addBowls(10,0);
    expect( frame.isStrike() ).toEqual(true)
  });

});
