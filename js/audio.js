define([
    'js/controls',
    'js/animation'], 
function(
    Controls,
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

        $('.bg-content').one('transitionend', 
        function() {
            Animation.initialize();
        });
    }
    
    var Audio = {
        initialize: function(){
            $('.toggle-button').bind('click', this.toggleAudio);
            $('.volume-up').bind('click', Controls.raiseVolume);
            $('.volume-down').bind('click', Controls.lowerVolume);
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
            $('.bg-content').addClass('start');
            
            $('.audioFile')[0].play();

            Controls.moveControlsAside();

            if(Animation.counter !== 0){
                Animation.startTimer();
            }
        },

        pauseAudio: function(){
            $('.toggle-button').removeClass('play').addClass('pause');

            $('.audioFile')[0].pause();
                        
            Controls.moveControlsBack();
            Animation.stopTimer();
        },

        reloadAnimation: function(){
            location.reload();
        }
    };

    return Audio;
});