define([
    'js/trumpets',
    'js/audio',
    'js/fonts',
    'lib/raphael'], 
function(
    trumpets,
    audioHelpers,
    fonts
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
                    fonts.showWelcomeMessage();
                    break;
                case 2: 
                    fonts.changeWelcomeMessage();
                    break;
                case 3: 
                    fonts.rotateWelcomeMessage();
                    break;
                case 4:
                    fonts.moveMessage();
                    break;
                case 7:
                    fonts.removeMessage();
                    break;
                case 9:
                    trumpets.drawBackground(); 
                    trumpets.drawTrumpets();
                    break;
                case 13: 
                    trumpets.showTrumpets();
                    break;
                case 15: 
                    trumpets.showTrumpets();
                    break;
                case 19: 
                    trumpets.showTrumpets();
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
            var lowerVolumeInterval = setInterval(Animation.lowerVolume, 500);
            setTimeout(fonts.showEndMessage(), 3000);
        },

        lowerVolume: function(){
            var $audio = $('.audioFile')[0];

            if($audio.volume <= 0.01){
                return;
            }

            $audio.volume -= 0.1;
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