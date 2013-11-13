navigator.get_user_media = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);

function Whistli(options) {
  if ( typeof(options) === 'undefined' ) { options = {}; }

  this.context = new (window.AudioContext || window.webkitAudioContext)();

  this.analyser = this.context.createAnalyser();
  this.analyser.smoothingTimeConstant = 0;
  this.analyser.fftSize = 2048;
}

Whistli.helpers = {
  max: function(array) {
    var index = 0;
    var max_index = 0;
    var max_value = array[0];

    while(++index < array.length) {
      if(array[index] > max_value) {
        max_index = index;
        max_value = array[index];
      }
    }

    return {index: max_index, value: max_value}
  },

  rescale: function(x, min, max) {
    return ( x - min ) / ( max - min );
  }
};

Whistli.prototype.request_microphone = function(successCallback, errorCallback) {
  if ( typeof(errorCallback) === 'undefined' ) { errorCallback = function(){}; }

  navigator.get_user_media({audio:true}, function(stream) {
    this.microphone = this.context.createMediaStreamSource(stream);
    this.microphone.connect(this.analyser);

    successCallback();
  }.bind(this), errorCallback);
};

Whistli.prototype.update = function() {
  var frequency_data = new Float32Array(this.analyser.frequencyBinCount);
  this.analyser.getFloatFrequencyData(frequency_data);

  var max = Whistli.helpers.max(frequency_data)

  this._frequency = max.index * (this.context.sampleRate / this.analyser.fftSize);
  this._amplitude = max.value - this.analyser.minDecibels;
};

Object.defineProperty(Whistli.prototype, 'frequency', {
  get: function() {
    this.update();
    return this._frequency;
  }
});

Object.defineProperty(Whistli.prototype, 'amplitude', {
  get: function() {
    this.update();
    return this._amplitude;
  }
});
