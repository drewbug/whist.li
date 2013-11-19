ig.module(
  'game.entities.puck'
)
.requires(
  'impact.entity'
)
.defines(function(){

EntityPuck = ig.Entity.extend({

  size: { x: 12, y: 12 },
  collides: ig.Entity.COLLIDES.ACTIVE,

  animSheet: new ig.AnimationSheet( 'media/puck.png', 12, 12 ),

  bounciness: 1,

  init: function( x, y, settings ) {
    this.parent( x, y, settings );

    this.addAnim( 'main', 1, [0] );

    this.vel.x = -100;
    this.vel.y = 200;
  }
});

});