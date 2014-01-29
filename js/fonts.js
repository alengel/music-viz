define(['lib/raphael'], function(){
    'use strict';
    
    var Fonts = {
        showWelcomeMessage: function(){
            var $animationContent = $('#animation-content');
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
            $('.welcome-message').remove();
        },

        showEndMessage: function(){
            alert('this is the end');
        }
    };

    return Fonts;
});