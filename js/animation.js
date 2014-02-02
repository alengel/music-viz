define([
    'js/trumpets',
    'js/controls',
    'js/fonts',
    'js/shapes',
    'lib/raphael'], 
function(
    Trumpets,
    Controls,
    Fonts,
    Shapes
){
    'use strict';

    var Animation = {

        refreshInterval: null,
        counter: 0,

        initialize: function(){
            this.startTimer();
        },        

        startAnimation: function(){
            Animation.counter++;
            console.log(Animation.counter);

            switch(Animation.counter){
                case 1: 
                    Fonts.showWelcomeMessage();
                    break;
                case 2: 
                    Fonts.changeWelcomeMessage();
                    break;
                case 3: 
                    Fonts.rotateWelcomeMessage();
                    break;
                case 4:
                    Fonts.moveMessage();
                    break;
                case 6:
                    Fonts.removeMessage();
                    break;
                case 9:
                    Trumpets.drawBackground(); 
                    Trumpets.drawTrumpets();
                    break;
                case 12: 
                    Trumpets.showTrumpets();
                    break;
                case 15: 
                    Trumpets.showTrumpets();
                    break;
                case 19: 
                    Trumpets.showTrumpets();
                    break;
                case 25: 
                    Trumpets.showTrumpets();
                    break;
                case 28: 
                    Animation.endAnimation();
                    break;
                case 30: 
                    Animation.stopTimer();
                    break;
            }
        },

        endAnimation: function(){
            Animation.lowerVolumeInterval = setInterval(Controls.lowerVolume, 500);

            _.delay(function(){
                Fonts.showEndMessage();
                $('.audioFile').trigger('stop-audio');
            }, 3000);
        },

        startTimer: function(){
            Animation.refreshInterval = setInterval(Animation.startAnimation, 1000);
        },

        resetTimer: function(){
            Animation.stopTimer();
            Animation.counter = 0;
        },

        stopTimer: function(){
            clearInterval(Animation.lowerVolumeInterval);
            clearInterval(Animation.refreshInterval);
        }
    };

    return Animation;
});