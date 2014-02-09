define([''], function(){
    'use strict';

    var Controls = {
        //Move the controls to the bottom right and make them smaller
        moveControlsAside: function(){
            $('.controls').removeClass('big').addClass('mini');
            $('.toggle-button, .volume, .volume-container').addClass('small');
        },

        //Move the controls to the centre and make them bigger
        moveControlsBack: function(){
            $('.controls').removeClass('mini').addClass('big');
            $('.toggle-button, .volume, .volume-container').removeClass('small');
        },

        //Raise the volume, check that upper volume is reached and return
        raiseVolume: function(){
            var $audio = $('.audioFile')[0];
            
            if($audio.volume >= 0.99){
                return;
            }

            $audio.volume += 0.1;
        },

        //Lower the volume, check that lower volume is reached and return 
        lowerVolume: function(){            
            var $audio = $('.audioFile')[0];

            if($audio.volume <= 0.01){
                return;
            }

            $audio.volume -= 0.1;
        }
    };
    
    return Controls;
});