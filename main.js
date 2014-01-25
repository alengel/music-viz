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

    var MusicViz = {
        initialize: function(){
            this.loadMainAnimation();
            this.loadGlobe();
        },

        loadMainAnimation: function(){
            audioHelpers.initialize();
        },

        loadGlobe: function(){
            globeHelpers.initialize();
        }
    };

    return MusicViz.initialize();
});