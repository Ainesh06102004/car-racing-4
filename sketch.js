var database;
var form, game;
var playercount = 0;
var player, allplayers;
var gamestate = 0;
var car1,car2,car3,car4,cars;
var car1img,car2img,car3img,car4img,groundimg,trackimg;
var music;

function preload(){
  car1img = loadImage("images/car1.png");
  car2img = loadImage("images/car2.png");
  car3img = loadImage("images/car3.png");
  car4img = loadImage("images/car4.png");
  groundimg = loadImage("images/ground.png");
  trackimg = loadImage("images/track.jpg");
  music = loadSound("Lobby music.mp3");
}

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth - 5,displayHeight - 150);

  game = new Game();
  game.getstate();
  game.start();

}

function draw(){
  background("white");
  
 

  if(playercount === 4){
    game.updatestate(1);
  }
  if(gamestate === 1){
     game.play();
   }

   if(gamestate === 2){
     game.end();
   }
}