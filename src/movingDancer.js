var MakeMovingDancer = function(top, left, timeBetweenSteps){
  MakeDancer.call(this,0,left,timeBetweenSteps);
  $('<img class="movingdancerimage" src ="lib/spaceinvader.png"></img>').appendTo(this.$node);
};
MakeMovingDancer.prototype = Object.create(MakeDancer.prototype);
MakeMovingDancer.prototype.constructor = MakeMovingDancer;
MakeMovingDancer.prototype.oldStep = MakeDancer.prototype.step;
MakeMovingDancer.prototype.step = function(){
  // this.oldStep();
  var context = this;
  this.$node.animate({
      top:$("body").height(),
      left:"+=20"
    },
    2000,
    function(){context.$node.remove();}
  );
  

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