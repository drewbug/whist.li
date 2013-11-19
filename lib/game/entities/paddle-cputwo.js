ig.module(
  'game.entities.paddle-cputwo'
)
.requires(
  'game.entities.paddle',
  'game.entities.puck'
)
.defines(function(){

EntityPaddleCpuTwo = EntityPaddle.extend({

  update: function() {

    var puck = ig.game.getEntitiesByType( EntityPuck )[0];

    if( puck.pos.x + puck.size.x/2 > this.pos.x + this.size.x/2 ) {
      this.vel.x = 100;
    }
    else {
      this.vel.x = -100;
    }

    this.parent();
  }
});

});
