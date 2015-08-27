var MakeBlinkyDancer = function(top, left, timeBetweenSteps){
  MakeDancer.apply(this,arguments);
};
MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;
MakeBlinkyDancer.prototype.oldStep = MakeDancer.prototype.step;
MakeBlinkyDancer.prototype.step = function(){
  this.oldStep();
  this.$node.toggle();
};