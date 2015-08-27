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

MakeDancer.prototype.randomColor = function(lor) {
    lor = lor || '';
    lor += [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)]
    if(lor.length === 6){ 
      return '#' + lor; 
    }
    return this.randomColor(lor);
  }