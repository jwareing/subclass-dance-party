var MakeMovingDancer = function(top, left, timeBetweenSteps){
  MakeDancer.apply(this,arguments);
  this.$node.css('background-image')
};
MakeMovingDancer.prototype = Object.create(MakeDancer.prototype);
MakeMovingDancer.prototype.constructor = MakeMovingDancer;
MakeMovingDancer.prototype.oldStep = MakeDancer.prototype.step;
MakeMovingDancer.prototype.step = function(){
  this.oldStep();
  var color = this.randomColor();
  this.top+=20;
  this.left+=20;
  this.$node.animate({
    top:($("body").height()/2),
    left:($("body").width()/2)
  },this.timeBetweenSteps);
  this.$node.css('border', '10px solid ' + color);
  

// $( "#clickme" ).click(function() {
//   $( "#book" ).animate({
//     opacity: 0.25,
//     left: "+=50",
//     height: "toggle"
//   }, 5000, function() {
//     // Animation complete.
//   });
// });
};