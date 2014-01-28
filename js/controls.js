define([''], function(){
    'use strict';
    
    return {
        moveControlsAside: function(){
            $('.controls').removeClass('.big').addClass('mini');
            $('.toggle-button, .volume, .volume-container').addClass('small');
        },

        moveControlsBack: function(){
            $('.controls').removeClass('mini').addClass('big');
            $('.toggle-button, .volume, .volume-container').removeClass('small');
        }
    };
});