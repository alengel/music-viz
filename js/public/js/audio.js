define([
    'js/public/js/controls',
    'js/public/js/animation',
    'js/public/js/timer'], 
function(
    controls,
    animation,
    timer
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
            timer.startTimer();
        });
    }
    
    var Audio = {
        initialize: function(){
            $('.toggle-button').bind('click', this.toggleAudio);
            $('.volume-up').bind('click', this.raiseVolume);
            $('.volume-down').bind('click', this.lowerVolume);
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
            controls.moveControlsAside(); 
        },

        pauseAudio: function(){
            $('.audioFile')[0].pause();
            $('.toggle-button').removeClass('play').addClass('pause');
            controls.moveControlsBack();
        },

        raiseVolume: function(){
            if($('.audioFile')[0].volume >= 0.99){
                return;
            }
            $('.audioFile')[0].volume+=0.1;
        },

        lowerVolume: function(){            
            if($('.audioFile')[0].volume <= 0.01){
                return;
            }
            $('.audioFile')[0].volume-=0.1;
        }
    };

    return Audio;
});