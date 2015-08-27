var MakeDancer = function(top, left, timeBetweenSteps){
  // this = Object.create(MakeDancer.prototype)
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top,left);
  this.step();
}

MakeDancer.prototype.setPosition = function(top, left){
  var styleSettings = {
      top: top,
      left: left
    };
  this.$node.css(styleSettings);
};

MakeDancer.prototype.step = function(){
  //this === MakeDancerInstance
  setTimeout(this.step.bind(this),this.timeBetweenSteps);
};