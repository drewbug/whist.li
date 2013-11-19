ig.module(
  'game.entities.paddle'
)
.requires(
  'impact.entity'
)
.defines(function(){

EntityPaddle = ig.Entity.extend({

  size: { x: 48, y: 12 },
  collides: ig.Entity.COLLIDES.FIXED,

  animSheet: new ig.AnimationSheet( 'media/paddle.png', 48, 12 ),

  init: function( x, y, settings ) {
    this.parent( x, y, settings );

    this.addAnim( 'main', 1, [0] );
  }
});

});
