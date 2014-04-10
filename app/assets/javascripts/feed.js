var FeedAnimalsGame = FeedAnimalsGame || {
  width:      2400,
  height:     1800,
  multiplier: 3,
  feedImage: new Image(),
  cowImage:  new Image(),
  score:     0,
  hungryCow: true,

  initialize:  function(){
    var image  = this.feedImage;
    var canvas = this.gameCanvas;
    this.loadAnimals();
    image.onload = function() {
      canvas.width = FeedAnimalsGame.width;
      canvas.height = FeedAnimalsGame.height;
    }
   image.src = '/assets/hay-feed-1.png';
   canvas.addEventListener("mousemove", this.redrawFeed);
  },

  loadAnimals: function(){
    var canvas = this.gameCanvas;
    var cowImage  = this.cowImage;
    cowImage.onload = function() {
      canvas.width = FeedAnimalsGame.width;
      canvas.height = FeedAnimalsGame.height;
    }
   cowImage.src = '/assets/cow-1.png';
  },

  redrawAnimals: function(){
    var canvas = this.gameCanvas;
    var cowImage  = this.cowImage;
    canvas.width = FeedAnimalsGame.width;
    canvas.getContext("2d").drawImage(cowImage, 200, 200);
    FeedAnimalsGame.showScore();
  },

  showScore: function(){
    var canvas = FeedAnimalsGame.gameCanvas;
    var ctx = canvas.getContext("2d");
    ctx.font="80px Georgia";
    ctx.fillText("Score: " + FeedAnimalsGame.score ,1900,100);
  },

  feedCow: function(){
    if(FeedAnimalsGame.hungryCow){
      FeedAnimalsGame.score = FeedAnimalsGame.score + 100;
      FeedAnimalsGame.hungryCow = false;
    }
  },

  checkTouchAnimal: function(x,y){
    var canvas  = this.gameCanvas;
    var result  = false;
    var targetX = 200;
    var targetY = 200;
    if((x < targetX + 200) && ( targetX + 50 < x)){
      if((y < targetY + 300) && ( targetY + 250 < y)){
        result = true;
      };
    };
    return result;
  },

  redrawFeed: function(mouseEvent){
    var xPos = mouseEvent.offsetX * FeedAnimalsGame.multiplier;
    var yPos = mouseEvent.offsetY * FeedAnimalsGame.multiplier;
    FeedAnimalsGame.redrawAnimals();
    this.getContext("2d").drawImage(FeedAnimalsGame.feedImage, xPos, yPos);
    if(FeedAnimalsGame.checkTouchAnimal(xPos, yPos)){
      FeedAnimalsGame.feedCow();
    } else {
      FeedAnimalsGame.hungryCow = true;
    };
  }
};


$(function() {
  FeedAnimalsGame.gameCanvas = $('#feed-animals-game')[0];
  FeedAnimalsGame.initialize();
});
