var MakeExplodingDancer = function(top, left, timeBetweenSteps){
  MakeBlinkyDancer.apply(this,arguments);
  this.$node.css('background-image');
};
MakeExplodingDancer.prototype = Object.create(MakeBlinkyDancer.prototype);
MakeExplodingDancer.prototype.constructor = MakeExplodingDancer;
MakeExplodingDancer.prototype.step = function() {
  this.oldStep();

  var topDanger = this.y()-(this.$node.outerHeight(true)/2);
  var bottomDanger = this.y()+(this.$node.outerHeight(true)/2);

  var leftDanger = this.x()-(this.$node.outerWidth(true)/2);
  var rightDanger = this.x()+(this.$node.outerWidth(true)/2);
  var targets = $('.dancer');
  var context = this;

  $('.dancer').each(function(index){
    var x = $(this).position().left;
    var y = $(this).position().top;

    if (x!== context.$node.position().left){
      if(leftDanger<x && rightDanger>x && topDanger<y && bottomDanger>y){
        //points to john if it dont work
        $(this).remove();
        context.$node.remove();
      }
    }

  });

  // for(var i=0; i<targets.length; i++){
  //   //var targets = $('.dancer');
  // }
};


      // var x1 = $window[0].offset().left;
      // var y1 = $window[0].offset().top;
      // var h1 = $window[0].outerHeight(true);
      // var w1 = $window[0].outerWidth(true);
      // var b1 = y1 + h1;
      // var r1 = x1 + w1;
      // var x2 = $div2.offset().left;
      // var y2 = $div2.offset().top;
      // var h2 = $div2.outerHeight(true);
      // var w2 = $div2.outerWidth(true);
      // var b2 = y2 + h2;
      // var r2 = x2 + w2ao