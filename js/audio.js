define([
    'js/animation'], 
function(
    animation
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

        $('.main-content').one('transitionend', 
        function() {
            animation.initialize();
        });
    }
    
    var Audio = {
        initialize: function(){
            $('.toggle-button').bind('click', this.toggleAudio);
            $('.volume-up').bind('click', this.raiseVolume);
            $('.volume-down').bind('click', this.lowerVolume);
            $('.play-again').bind('click', this.reloadAnimation);
        },

        toggleAudio: function() {
            $('.audioFile')[0].volume = 0.5;

            if($('.toggle-button').hasClass('play')){
                Audio.pauseAudio();
                return;
            }

            Audio.playAudio();
            onTransitionEnd();
        },

        playAudio: function(){
            $('.toggle-button').addClass('play').removeClass('pause');
            $('.main-content').addClass('start');
            
            $('.audioFile')[0].play();

            Audio.moveControlsAside();
        },

        pauseAudio: function(){
            $('.toggle-button').removeClass('play').addClass('pause');

            $('.audioFile')[0].pause();
                        
            Audio.moveControlsBack();
            animation.stopTimer();
        },

        raiseVolume: function(){
            var $audio = $('.audioFile')[0];
            
            if($audio.volume >= 0.99){
                return;
            }

            $audio.volume += 0.1;
        },

        lowerVolume: function(){            
            var $audio = $('.audioFile')[0];

            if($audio.volume <= 0.01){
                return;
            }

            $audio.volume -= 0.1;
        },

        moveControlsAside: function(){
            $('.controls').removeClass('.big').addClass('mini');
            $('.toggle-button, .volume, .volume-container').addClass('small');
        },

        moveControlsBack: function(){
            $('.controls').removeClass('mini').addClass('big');
            $('.toggle-button, .volume, .volume-container').removeClass('small');
        },

        reloadAnimation: function(){
            location.reload();
        }
    };

    return Audio;
});