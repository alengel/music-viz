define([], function(){
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
            var $animationContent = $('.animation-content');
            
            $('.bg-content').removeClass('start');
            $animationContent.append('<div class="finish-message"><span>Reload Animation?</span></div>');

            _.delay(function(){
                $('.finish-message').addClass('final-position');
                $('.toggle-button').removeClass('small play').addClass('play-again');
                $('.volume-container').removeClass('small');

                $('.controls').removeClass('mini').addClass('controls-final');

                $('.play-again').on('click', function(){
                    $('.toggle-button').trigger('replay');
                });
            }, 1000);
        }
    };

    return Fonts;
});