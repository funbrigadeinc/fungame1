
function startGame() {
    myGameArea.start();

    piece11 = new component(100, 100, "images/row-1-col-1.PNG", 10, 10, "image");
    piece12 = new component(100, 100, "images/row-1-col-2.PNG", 110, 10, "image");
    piece13 = new component(100, 100, "images/row-1-col-3.PNG", 210, 10, "image");

    piece21 = new component(100, 100, "images/row-2-col-1.PNG", 10, 110, "image");
    piece22 = new component(100, 100, "images/row-2-col-2.PNG", 110, 110, "image");
    piece23 = new component(100, 100, "images/row-2-col-3.PNG", 210, 110, "image");

    piece31 = new component(100, 100, "images/row-3-col-1.PNG", 10, 210, "image");
    piece32 = new component(100, 100, "images/row-3-col-2.PNG", 110, 210, "image");
    piece33 = new component(100, 100, "images/row-3-col-3.PNG", 210, 210, "image");
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 500;
        this.canvas.height = 400;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[20]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
}
}

function component(width, height, color, x, y, type) {
  this.type=type;
  if (type == "image"){
    this.image= new Image();
    this.image.src = color;
  }
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;
  this.update = function(){
    ctx = myGameArea.context;
    if(type == "image"){
      ctx.drawImage(this.image,this.x,this.y,this.width, this.height);
    } else{
      ctx.fillStyle = color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }
  this.newPos = function(){
    this.x += this.speedX;
    this.y += this.speedY;
  }
}

function updateGameArea() {
  myGameArea.clear();
  piece11.newPos();
  piece11.update();
  piece12.newPos();
  piece12.update();
  piece13.newPos();
  piece13.update();

  piece21.newPos();
  piece21.update();
  piece22.newPos();
  piece22.update();
  piece23.newPos();
  piece23.update();

  piece31.newPos();
  piece31.update();
  piece32.newPos();
  piece32.update();
  piece33.newPos();
  piece33.update();
}

function move1up()   { piece11.speedY -=2; }
function move1down() { piece11.speedY +=2; }
function move1left() { piece11.speedX -=2; }
function move1right(){ piece11.speedX +=2; }
function stop1Move() { piece11.speedX = 0;
                       piece11.speedY = 0; }

function move2up()   { piece12.speedY -=2; }
function move2down() { piece12.speedY +=2; }
function move2left() { piece12.speedX -=2; }
function move2right(){ piece12.speedX +=2; }
function stop2Move() { piece12.speedX = 0;
                       piece12.speedY = 0; }

function move3up()   { piece13.speedY -=2; }
function move3down() { piece13.speedY +=2; }
function move3left() { piece13.speedX -=2; }
function move3right(){ piece13.speedX +=2; }
function stop3Move() { piece13.speedX = 0;
                       piece13.speedY = 0; }

function move4up()   { piece21.speedY -=2; }
function move4down() { piece21.speedY +=2; }
function move4left() { piece21.speedX -=2; }
function move4right(){ piece21.speedX +=2; }
function stop4Move() { piece21.speedX = 0;
                       piece21.speedY = 0; }

function move5up()   { piece22.speedY -=2; }
function move5down() { piece22.speedY +=2; }
function move5left() { piece22.speedX -=2; }
function move5right(){ piece22.speedX +=2; }
function stop5Move() { piece22.speedX = 0;
                      piece22.speedY = 0; }

function move6up()   { piece23.speedY -=2; }
function move6down() { piece23.speedY +=2; }
function move6left() { piece23.speedX -=2; }
function move6right(){ piece23.speedX +=2; }
function stop6Move() { piece23.speedX = 0;
                       piece23.speedY = 0; }

function move7up()   { piece31.speedY -=2; }
function move7down() { piece31.speedY +=2; }
function move7left() { piece31.speedX -=2; }
function move7right(){ piece31.speedX +=2; }
function stop7Move() { piece31.speedX = 0;
                       piece31.speedY = 0; }

function move8up()   { piece32.speedY -=2; }
function move8down() { piece32.speedY +=2; }
function move8left() { piece32.speedX -=2; }
function move8right(){ piece32.speedX +=2; }
function stop8Move() { piece32.speedX = 0;
                       piece32.speedY = 0; }

function move9up()   { piece33.speedY -=2; }
function move9down() { piece33.speedY +=2; }
function move9left() { piece33.speedX -=2; }
function move9right(){ piece33.speedX +=2; }
function stop9Move() { piece33.speedX = 0;
                       piece33.speedY = 0; }
