define([
    'js/controls'
], function(
    Controls
){
    'use strict';
    
    var Fonts = {
        addFirstFourLetters: function(){
            var $animationContent = $('.welcome-content');
            $animationContent.addClass('welcome');

            var $welcome = $('.welcome');
            $welcome.append('<span class="letter g">G</span>');
            $welcome.append('<span class="letter o">O</span>');
            $welcome.append('<span class="letter b">B</span>');
            $welcome.append('<span class="letter n">N</span>');

            _.delay(function(){
                $('.g').addClass('-in');
            }, 250);

            _.delay(function(){
                $('.o').addClass('-in');
            }, 500);

            _.delay(function(){
                $('.b').addClass('-in');
            }, 750);

            _.delay(function(){
                $('.n').addClass('-in');
            }, 1000);
        },

        addSecondFourLetters: function(){
            var $welcome = $('.welcome');
            $welcome.append('<span class="letter r">R</span>');
            $welcome.append('<span class="letter h">H</span>');
            $welcome.append('<span class="letter t">T</span>');
            $welcome.append('<span class="letter i">I</span>');

            _.delay(function(){
                $('.r').addClass('-in');
            }, 250);

            _.delay(function(){
                $('.h').addClass('-in');
            }, 500);

            _.delay(function(){
                $('.t').addClass('-in');
            }, 750);

            _.delay(function(){
                $('.i').addClass('-in');
            }, 1000);
        },

        changeWelcomeMessage: function(){
            $('.letter').addClass('change-colour');
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