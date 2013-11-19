ig.module( 
  'game.main' 
)
.requires(
  'impact.game',
  'impact.font',

  'game.entities.puck',
  'game.entities.paddle-cpu',
  'game.entities.paddle-player',

  'game.levels.main'
)
.defines(function(){

MyGame = ig.Game.extend({

  // Load a font
  font: new ig.Font( 'media/04b03.font.png' ),


  init: function() {
    ig.input.whistli = new Whistli();
    ig.input.whistli.request_microphone(function() {
      this.loadLevel( MainLevel );
    }.bind(this));
  },

  update: function() {
    // Update all entities and backgroundMaps
    this.parent();

    var puck = ig.game.getEntitiesByType( EntityPuck )[0];
    if ( puck && ( puck.pos.y < 0 || puck.pos.y > ig.system.height ) ) {
      this.loadLevelDeferred( MainLevel );
    }
  },

  draw: function() {
    // Draw all entities and backgroundMaps
    this.parent();


    // Add your own drawing code here
    var x = ig.system.width/2,
      y = ig.system.height/2;

    this.font.draw( 'It Works!', x, y, ig.Font.ALIGN.CENTER );
  }
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 60, 768, 480, 1 );

});
