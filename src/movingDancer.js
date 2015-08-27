var MakeMovingDancer = function(top, left, timeBetweenSteps){
  MakeDancer.apply(this,arguments);
};
MakeMovingDancer.prototype = Object.create(MakeDancer.prototype);
MakeMovingDancer.prototype.constructor = MakeMovingDancer;
MakeMovingDancer.prototype.oldStep = MakeDancer.prototype.step;
MakeMovingDancer.prototype.step = function(){
  this.oldStep();
  var color = this.randomColor();
  this.$node.animate({
    top:"+=20",
    left:"+=20"
  },Math.random()*1000);
  this.$node.css('border', '10px solid ' + color)
  

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