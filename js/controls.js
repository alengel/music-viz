define([''], function(){
    'use strict';

    var Controls = {
        moveControlsAside: function(){
            $('.controls').removeClass('big').addClass('mini');
            $('.toggle-button, .volume, .volume-container').addClass('small');
        },

        moveControlsBack: function(){
            $('.controls').removeClass('mini').addClass('big');
            $('.toggle-button, .volume, .volume-container').removeClass('small');
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
        }
    };
    
    return Controls;
});