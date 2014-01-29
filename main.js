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
    Audio
) {
    'use strict';

    var MusicViz = {
        loadMainAnimation: function(){
            Audio.initialize();
        }
    };

    return MusicViz.loadMainAnimation();
});