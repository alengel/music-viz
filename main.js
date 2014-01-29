define([
    //3rd party libraries
    'lib/jquery',
    'lib/underscore',
    //application js files
    'js/audio'
    ], 
function(
    $,
    _,
    audioHelpers
) {
    'use strict';

    var MusicViz = {
        initialize: function(){
            this.loadMainAnimation();
        },

        loadMainAnimation: function(){
            audioHelpers.initialize();
        }
    };

    return MusicViz.initialize();
});