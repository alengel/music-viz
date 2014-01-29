define([
    'js/trumpets',
    'js/controls',
    'js/fonts',
    'lib/raphael'], 
function(
    Trumpets,
    Controls,
    Fonts
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
                case 13: 
                    Trumpets.showTrumpets();
                    break;
                case 15: 
                    Trumpets.showTrumpets();
                    break;
                case 19: 
                    Trumpets.showTrumpets();
                    break;
                case 25: 
                    Animation.endAnimation();
                    break;
                case 30: 
                    Animation.stopTimer();
                    break;
            }
        },

        endAnimation: function(){
            var lowerVolumeInterval = setInterval(Controls.lowerVolume, 500);
            setTimeout(Fonts.showEndMessage(), 3000);
        },

        startTimer: function(){
            Animation.refreshInterval = setInterval(Animation.startAnimation, 1000);
        },

        stopTimer: function(){
            clearInterval(Animation.refreshInterval);
        },

        resetTimer: function(){
            Animation.stopTimer();
            Animation.counter = 0;
        }
    };

    return Animation;
});