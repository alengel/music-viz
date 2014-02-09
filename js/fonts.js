define([
    'js/controls'
], function(
    Controls
){
    'use strict';
    
    var Fonts = {
        //Adds the first set of four letters of BRIGHTON after a short delay
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

        //Adds the second set of four letters of BRIGHTON after a short delay
        addSecondFourLetters: function(){
            var $welcome = $('.welcome');
            $welcome.append('<span class="letter r">R</span>');
            $welcome.append('<span class="letter h">H</span>');
            $welcome.append('<span class="letter t">T</span>');
            $welcome.append('<span class="letter i">I</span>');

            _.delay(function(){
                $('.r').addClass('-in');
            }, 500);

            _.delay(function(){
                $('.h').addClass('-in');
            }, 750);

            _.delay(function(){
                $('.t').addClass('-in');
            }, 1000);

            _.delay(function(){
                $('.i').addClass('-in');
            }, 1250);
        },

        //Changes the font-colour to a different colour
        changeWelcomeMessage: function(){
            $('.letter').addClass('change-colour');
        },

        //Moves the message off the screen
        moveMessage: function(){
            $('.welcome').addClass('move-to-right');
        },

        //Removes the message from the DOM
        removeMessage: function(){
            $('.welcome').removeClass('welcome move-to-right'); 
            $('.welcome-content').remove();
        },

        //Fades in the message at the end, moves the controls back into the centre
        //Resets the controls after a short delay
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