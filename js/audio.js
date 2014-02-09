define([
    'js/controls'], 
function(
    Controls
){
    'use strict';

    
    
    var Audio = {
        //Bind event handlers to the physical DOM elements
        initialize: function(){
            $('.toggle-button').bind('click', this.toggleAudio);
            $('.volume-up').bind('click', Controls.raiseVolume);
            $('.volume-down').bind('click', Controls.lowerVolume);
        },

        //Call pause or play depending on toggle-button class
        toggleAudio: function() {
            $('.audioFile')[0].volume = 0.5;

            if($('.toggle-button').hasClass('play')){
                Audio.pauseAudio();
                return;
            }

            Audio.playAudio();
        },

        //Show pause button when audio is playing
        //Trigger audio-playing and move controls aside
        playAudio: function(){
            var $audio = $('.audioFile');

            $('.toggle-button').addClass('play').removeClass('pause');
            $('.bg-content').addClass('start');
            
            $audio.trigger('play-audio');

            Controls.moveControlsAside();
        },

        //Show play button when audio is paused
        //Trigger audio-paused and move controls back to centre
        pauseAudio: function(){
            var $audio = $('.audioFile');

            $('.toggle-button').removeClass('play').addClass('pause');

            $audio.trigger('pause-audio');
                        
            Controls.moveControlsBack();
        }
    };

    return Audio;
});