define([
    //3rd party libraries
    'lib/jquery',
    'lib/underscore',
    //application js files
    'js/controller'
    ], 
function(
    $,
    _,
    Controller
) {
    'use strict';

    var MusicViz = {
        initialize: function(){
            Controller.initialize();
        }
    };

    return MusicViz.initialize();
});