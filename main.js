define([
    //3rd party libraries
    'lib/jquery',
    'lib/underscore',
    //application js files
    'js/audio',
    'js/globe'
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
        }
    };

    return MusicViz.initialize();
});