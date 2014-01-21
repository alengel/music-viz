define([
    //3rd party libraries
    'js/vendor/jquery',
    'js/vendor/underscore',
    //application js files
    'js/public/js/audio',
    'js/public/js/globe'
    ], 
function(
    $,
    _,
    audioHelpers,
    globeHelpers
) {
    'use strict';

    //declare namespace
    var MusicViz = {
        initialize: function(){
            this.loadAudio();
            this.loadGlobe();
        },

        loadAudio: function(){
            audioHelpers.initialize();
        },

        loadGlobe: function(){
            globeHelpers.initialize();
        }
    };

    return MusicViz.initialize();
});