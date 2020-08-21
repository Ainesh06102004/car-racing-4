class Game{
    constructor(){
        
    }
    
    getstate(){
      var gamestateref = database.ref('gamestate');
      gamestateref.on("value", function (data){
          gamestate = data.val();
      });
      console.log(gamestate);
    }

    updatestate(state){
        database.ref('/').update({
            gamestate: state
        });
    }

    async start(){
        if(gamestate === 0){
            player = new Player();
            var playercountref = await database.ref('playerCount').once("value"); 
            if(playercountref.exists()){
                playercount = playercountref.val();
                player.getPlayercount();
            }
            form = new Form();
            form.display();
        }
        car1 = createSprite(100,200);
        car2 = createSprite(300,200);
        car3 = createSprite(500,200);
        car4 = createSprite(700,200);

        car1.addImage("car1", car1img);
        car2.addImage("car2", car2img);
        car3.addImage("car3", car3img);
        car4.addImage("car4", car4img);
        
        cars = [car1,car2,car3,car4];
    }
    play(){
       form.hide();
       //music.play();
       Player.getPlayerinfo();

       if(allplayers !== undefined){
         background(groundimg);
         image(trackimg, 0, -displayHeight*4, displayWidth, displayHeight*5); 
         var index = 0;
         var x = 200;
         var y;
         
         for(var plr in allplayers){
             index = index +1;
             x = x + 230;
             y = displayHeight - allplayers[plr].distance;
             cars[index - 1].x = x;
             cars[index - 1].y = y;

             if(index === player.index){
                cars[index - 1].shapeColor = "red";
                camera.position.x = displayWidth/2;
                camera.position.y = cars[index - 1].y;
                fill("yellow");
                textSize(16);
                text(player.name,x - 16 ,y + 70);
                ellipse(x,y,60,60);

             }
            
         }

       }

       if(keyIsDown(UP_ARROW) && player.index !== null){
           player.distance = player.distance + 10;
           player.update();
       }
       if(player.distance > 4300){
           gamestate = 2;
       }

       drawSprites();
    }
    
    end(){
        console.log("game has ended");
        //music.stop();
    }
}   