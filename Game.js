class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playeCount_Ref = await database.ref('playerCount').once("value");
      if (playeCount_Ref.exists())
      {
        playerCount = playeCount_Ref.val()
        player.getCount();
       
      }
      form = new Form()
      form.display();
    }
  }


  play()
  {
    form.hide()
    textSize(30)
    text("Game Start", 200, 100)
    Player.getPlayerInfo()
    if (allPlayers !== undefined)
    {
      var displayPosition = 100;

      

      for (var plr in allPlayers)
      {
        if (plr === ("player" +  player.index))
          fill("red")
        else
        console.log(player.index)
          fill("black")

       displayPosition += 30
        textSize(25)
        text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 100, displayPosition)
      }
    }

    if (player.index !== null && keyIsDown(UP_ARROW) )
    {
      console.log('s')
      player.distance  += 50
      player.update();
    }
  }

}
