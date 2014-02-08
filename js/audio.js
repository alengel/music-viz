define([
    'js/controls'], 
function(
    Controls
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
            
            $audio.trigger('play-audio');

            Controls.moveControlsAside();
        },

        pauseAudio: function(){
            var $audio = $('.audioFile');

            $('.toggle-button').removeClass('play').addClass('pause');

            $audio.trigger('pause-audio');
                        
            Controls.moveControlsBack();
        }
    };

    return Audio;
});