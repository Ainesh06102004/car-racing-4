class Form{
    constructor(){
        this.title = createElement('h2',"MULTIPLAYER CAR RACING GAME");
        this.input = createInput();
        this.button = createButton("PLAY");
        //this.checkbox = createCheckbox("I agree to all Terms & Conditions", false);
        this.resetbutton = createButton("RESET");
        }
    hide(){
        this.title.hide();
        this.greeting.hide();
        
    }
    display(){
        this.title.position(displayWidth/2 - 220, 100);
        this.input.position(displayWidth/2 - 100,300);
        this.button.position(displayWidth/2 - 40,350);
        //this.checkbox.position(displayWidth/2 - 135,400);
        this.resetbutton.position(displayWidth - 100, 50);

       /* this.checkbox.changed(()=>{
            console.log("pressed");*/
            this.button.mousePressed(()=>{
                console.log("mouse pressed");
                this.input.hide();
                this.button.hide();
                //this.checkbox.hide();
                player.name = this.input.value();
                player.getPlayercount();
                console.log(playercount);
                playercount = playercount +1;
                player.index = playercount;
                player.update();
                player.updatePlayercount(playercount);
                this.greeting = createElement('h2', "Welcome "+ player.name);
                this.greeting.position(displayWidth/2 - 100,300);
            });
        //});

        this.resetbutton.mousePressed(()=>{
            game.updatestate(0);
            player. updatePlayercount(0);
        })
    }


}
