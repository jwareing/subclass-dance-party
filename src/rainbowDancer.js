var MakeRainbowDancer = function(top, left, timeBetweenSteps){
  MakeDancer.apply(this,arguments);
  $('<img class="dancerimage" src ="lib/spaceinvader.png"></img>').appendTo(this.$node);
};
MakeRainbowDancer.prototype = Object.create(MakeDancer.prototype);
MakeRainbowDancer.prototype.constructor = MakeRainbowDancer;
MakeRainbowDancer.prototype.oldStep = MakeDancer.prototype.step;
MakeRainbowDancer.prototype.step = function(){
  this.oldStep();
    this.$node.css('border','10px solid ' + this.randomColor());
};