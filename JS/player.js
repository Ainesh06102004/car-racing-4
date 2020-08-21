class Player{
    constructor(){
        this.name = null;
        this.rank = null;
        this.distance = 0;
        this.index = null;
    }

    getPlayercount(){
        var playercountref = database.ref('playerCount');
        playercountref.on("value", (data)=>{
            playercount = data.val();
            console.log(playercount);
        });
    }
    
    updatePlayercount(count){
        database.ref('/').update({
            playerCount: count
        });
    }
    update(){
        var playerref = "Players/Player" + this.index;
        database.ref(playerref).set({
            name: this.name,
            distance: this.distance
        });
    }
    static getPlayerinfo(){
        var playerinforef = database.ref('Players');
        playerinforef.on("value", (data)=>{
            allplayers = data.val();
        })

    }
}
