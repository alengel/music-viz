define([
    'js/public/js/animation'], 
function(
    animation
){
    'use strict';

    var transEndEventNames = {
        'WebkitTransition' : 'webkitTransitionEnd',
        'MozTransition'    : 'transitionend',
        'OTransition'      : 'oTransitionEnd otransitionend',
        'msTransition'     : 'MSTransitionEnd',
        'transition'       : 'transitionend'
    },
    transEndEventName = transEndEventNames[ Modernizr.prefixed('transition') ];

    function moveControlsAside(){
        $('.controls').removeClass('.big').addClass('mini');
        $('.toggle-button, .volume, .volume-container').addClass('small');
    }

    function moveControlsBack(){
        $('.controls').removeClass('mini').addClass('big');
        $('.toggle-button, .volume, .volume-container').removeClass('small');
    }

    function onTransitionEnd(){
        $('.main-content').one('transitionend', 
        function() {
            animation.initialize(); 
        });
    }
    
    return {
        initialize: function(){
            $('.toggle-button').bind('click', this.playAudio);
            $('.volume-up').bind('click', this.raiseVolume);
            $('.volume-down').bind('click', this.lowerVolume);
        },

        playAudio: function() {
            var audioFile = $('.audioFile'),
                toggleButton = $('.toggle-button');
            audioFile[0].volume = 0.5;

            if(toggleButton.hasClass('play')){
                audioFile[0].pause();
                toggleButton.removeClass('play').addClass('pause');
                moveControlsBack();
                return;
            }

            toggleButton.addClass('play').removeClass('pause');
            $('.main-content').addClass('start');
            audioFile[0].play();
            moveControlsAside(); 

            onTransitionEnd();
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
});