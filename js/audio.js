define([
    'js/controls',
    'js/animation'], 
function(
    Controls,
    Animation
){
    'use strict';

    
    
    var Audio = {
        initialize: function(){
            $('.toggle-button').bind('click', this.toggleAudio);
            $('.volume-up').bind('click', Controls.raiseVolume);
            $('.volume-down').bind('click', Controls.lowerVolume);
        },

        toggleAudio: function() {
            $('.audioFile')[0].volume = 0.5;

            if($('.toggle-button').hasClass('play')){
                Audio.pauseAudio();
                return;
            }

            Audio.playAudio();
        },

        playAudio: function(){
            var $audio = $('.audioFile');

            $('.toggle-button').addClass('play').removeClass('pause');
            $('.bg-content').addClass('start');
            
            $audio[0].play();
            $audio.trigger('play-audio');

            Controls.moveControlsAside();

            if(Animation.counter !== 0){
                Animation.startTimer();
            }
        },

        pauseAudio: function(){
            var $audio = $('.audioFile');

            $('.toggle-button').removeClass('play').addClass('pause');

            $audio[0].pause();
            $audio.trigger('pause-audio');
                        
            Controls.moveControlsBack();
            Animation.stopTimer();
        },

        stopAudio: function(){
            var $audio = $('.audioFile')[0];

            $audio.pause();
            $audio.currentTime = 0;
        }
    };

    return Audio;
});