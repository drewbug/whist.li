ig.module(
  'game.entities.paddle-player'
)
.requires(
  'game.entities.paddle'
)
.defines(function(){

EntityPaddlePlayer = EntityPaddle.extend({

  update: function() {

    var x = ig.input.whistli.frequency;
    x = Whistli.helpers.rescale(x, 750, 2250);

    var range = { low: 12, high: ig.system.width - 12 - this.size.x }
    x = x * ( range.high - range.low );
    x = x + 12;

    if ( x > range.high )     { this.pos.x = range.high; }
    else if ( x < range.low ) { this.pos.x = range.low; }
    else                      { this.pos.x = x; }

    this.parent();
  }
});

});
