define([
    'js/controls'
], function(
    Controls
){
    'use strict';
    
    var Fonts = {
        showWelcomeMessage: function(){
            var $animationContent = $('.welcome-content');
            
            $animationContent.addClass('welcome')
                             .append('<span class="welcome-message">Brighton Music Animation</span>');
        },

        changeWelcomeMessage: function(){
            $('.welcome-message').addClass('change-colour');
        },

        rotateWelcomeMessage: function(){
            $('.welcome').addClass('rotate');
        },

        moveMessage: function(){
            $('.welcome').addClass('move-to-right');
        },

        removeMessage: function(){
            $('.welcome').removeClass('welcome rotate move-to-right'); 
            $('.welcome-content').remove();
        },

        showEndMessage: function(){
            var $animationContent = $('.content');
            
            $('.bg-content').removeClass('start');
            $animationContent.append('<div class="finish-message"><span>Reload Animation?</span></div>');

            _.delay(function(){
                $('.finish-message').addClass('final-position');
                $('.toggle-button').removeClass('play').addClass('play-again');

                Controls.moveControlsBack();

                $('.play-again').on('click', function(){
                    $('.toggle-button').trigger('replay');
                });
            }, 1000);
        }
    };

    return Fonts;
});