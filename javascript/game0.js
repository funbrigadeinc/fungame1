
function startGame() {
    myScore = new component("30px", "Consolas", "black", 280, 40, "text");

    myGamePiece = new component(100, 100, "images/row-1-col-1.JPG", 10, 10, "image");
    piece11 = new component(100, 100, "images/row-1-col-1.JPG", 10, 10, "image");
    piece12 = new component(100, 100, "images/row-1-col-2.JPG", 110, 10, "image");
    piece13 = new component(100, 100, "images/row-1-col-3.JPG", 220, 10, "image");

    piece21 = new component(100, 100, "images/row-2-col-1.JPG", 10, 120, "image");
    piece22 = new component(100, 100, "images/row-2-col-2.JPG", 110, 120, "image");
    piece23 = new component(100, 100, "images/row-2-col-3.JPG", 220, 120, "image");

    piece31 = new component(100, 100, "images/row-3-col-1.JPG", 10, 230, "image");
    piece32 = new component(100, 100, "images/row-3-col-2.JPG", 110, 230, "image");
    piece33 = new component(100, 100, "images/row-3-col-3.JPG", 220, 230, "image");
    myGameArea.start();

}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 500;
        this.canvas.height = 400;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[20]);
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('mousedown',function(e){
          myGameArea.x = e.pageX;
          myGameArea.y = e.pageY;
        })
        window.addEventListener('mouseup',function(e){
          myGameArea.x = false;
          myGameArea.y = false;
        })
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
    } else if (type == "text"){
      ctx.font = this.width + " " + this.height;
      ctx.fillStyle = color;
      ctx.fillText(this.text, this.x, this.y);
    } else{
      ctx.fillStyle = color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }
  this.clicked = function() {
    var myleft = this.x;
    var myright = this.x + (this.width);
    var mytop = this.y;
    var mybottom = this.y + (this.height);
    var clicked = true;
    if ((mybottom < myGameArea.y) || (mytop > myGameArea.y) || (myright < myGameArea.x) || (myleft > myGameArea.x)) {
      clicked = false;
    }
    return clicked;
  }
  this.newPos = function(){
    this.x += this.speedX;
    this.y += this.speedY;
  }
}

function updateGameArea() {
  myGameArea.clear();

  if (myGameArea.x && myGameArea.y) {
    if (piece11.clicked()) {
      myGamePiece = piece11;
    }
    if (piece12.clicked()) {
      myGamePiece = piece12;
    }
    if (piece13.clicked()) {
      myGamePiece = piece13;
    }

    if (piece21.clicked()) {
      myGamePiece = piece21;
    }
    if (piece22.clicked()) {
      myGamePiece = piece22;
    }
    if (piece23.clicked()) {
      myGamePiece = piece23;
    }

    if (piece31.clicked()) {
      myGamePiece = piece31;
    }
    if (piece32.clicked()) {
      myGamePiece = piece32;
    }
    if (piece33.clicked()) {
      myGamePiece = piece33;
    }
  }
  myGamePiece.newPos();

  myScore.text = "X: " + this.x +" Y: " + this.y;
  myScore.update();

  // piece11.newPos();
  // piece12.newPos();
  // piece13.newPos();
  // piece21.newPos();
  // piece22.newPos();
  // piece23.newPos();
  // piece31.newPos();
  // piece32.newPos();
  // piece33.newPos();

    piece11.update();
    piece12.update();
    piece13.update();
    piece21.update();
    piece22.update();
    piece23.update();
    piece31.update();
    piece32.update();
    piece33.update();
    myGamePiece.update();
}

function moveup(){
  myGamePiece.speedY -=1;
}

function movedown(){
  myGamePiece.speedY +=1;
}

function moveleft(){
  myGamePiece.speedX -=1;
}

function moveright(){
  myGamePiece.speedX +=1;
}

function stopMove() {
  myGamePiece.speedX = 0;
  myGamePiece.speedY = 0;
}
