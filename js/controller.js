define([
    'js/audio',
    'js/animation'
], function(
    Audio,
    Animation
){
    'use strict';

    var Controller = {
        initialize: function(){
            Audio.initialize();

            $('.toggle-button').on('replay', this.reloadAnimation);

            $('.audioFile').on('play-audio', Controller.playAnimation());

            $('.audioFile').on('pause-audio', function() {
                 //TODO pause animation
            });

            $('.audioFile').on('stop-audio', function() {
                Audio.stopAudio();
                Animation.stopTimer();
                $('.animation-content').empty();
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
        },

        reloadAnimation: function(){
            location.reload();
        }
    };

    return Controller;
});