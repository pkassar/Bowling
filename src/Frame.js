function Frame() {
  this.MAX_SCORE = 10
  this.totalFrame = []
}

Frame.prototype.addBowls = function(first, second){
  var pins = first + second;
  this._checkTen(pins);
  this.totalFrame.push(first, second);
};


Frame.prototype._checkTen = function(pins) {
  if (pins > this.MAX_SCORE) { throw new Error ("There are only 10 pins"); }
};

Frame.prototype._firstRoll = function() {
  return this.totalFrame.reduce(function (first, second) {
    return first;
  });
};

Frame.prototype.isStrike = function() {
  return this._firstRoll() === this.MAX_SCORE;
};

Frame.prototype.isSpare = function() {
  return this.totalFrameScore() === this.MAX_SCORE;
};

Frame.prototype.totalFrameScore = function() {
  return this.totalFrame.reduce((first, second) => first + second);
};
