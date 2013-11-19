ig.module(
  'game.entities.paddle-player'
)
.requires(
  'game.entities.paddle'
)
.defines(function(){

EntityPaddlePlayer = EntityPaddle.extend({

  update: function() {

    this.parent();
  }
});

});
