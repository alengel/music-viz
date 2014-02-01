define([
    'js/audio',
    'js/animation'
], function(
    Audio,
    Animation
){
    'use strict';

    function onTransitionEnd(){
        var transEndEventNames = {
            'WebkitTransition' : 'webkitTransitionEnd',
            'MozTransition'    : 'transitionend',
            'OTransition'      : 'oTransitionEnd otransitionend',
            'msTransition'     : 'MSTransitionEnd',
            'transition'       : 'transitionend'
        },
        transEndEventName = transEndEventNames[ Modernizr.prefixed('transition') ];

        $('.bg-content').one('transitionend', function() {
            Animation.initialize();
        });
    }

    var Controller = {
        initialize: function(){
            Audio.initialize();

            $('.audioFile').on('play-audio', function() {
                Controller.playAnimation();
            });

            $('.audioFile').on('pause-audio', function() {
                 //TODO pause animation
            });
        },

        playAnimation: function(){
            var transEndEventNames = {
                'WebkitTransition' : 'webkitTransitionEnd',
                'MozTransition'    : 'transitionend',
                'OTransition'      : 'oTransitionEnd otransitionend',
                'msTransition'     : 'MSTransitionEnd',
                'transition'       : 'transitionend'
            },
            transEndEventName = transEndEventNames[ Modernizr.prefixed('transition') ];

            $('.bg-content').one('transitionend', function() {
                Animation.initialize();
            });
        }
    };

    return Controller;
});