define([
    'js/trumpets',
    'js/controls',
    'js/fonts',
    'js/circles',
    'js/video',
    'lib/raphael'], 
function(
    Trumpets,
    Controls,
    Fonts,
    Circles,
    Video
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
                    Circles.drawBackground();
                    Circles.setUpAnimationInterval();
                    break;
                case 6:
                    
                    break;
                case 9:
                    Trumpets.drawBackground(); 
                    Trumpets.drawTrumpets();
                    break;
                case 10:
                    Animation.clearAnimations();
                    Video.initialize();
                    // Curtains.drawCurtains();
                    break;
                case 12: 
                    Trumpets.showTrumpets();
                    Circles.remove();
                    break;
                case 15: 
                    Trumpets.showTrumpets();
                    break;
                case 19: 
                    Trumpets.showTrumpets();
                    break;
                case 20:
                    Animation.clearAnimations();
                    break;
                case 25: 
                    Trumpets.showTrumpets();
                    break;
                case 28: 
                    Animation.endAnimation();
                    break;
                case 30: 
                    Animation.resetAnimation();
                    break;
            }
        },

        pauseAnimations: function(){
            Circles.pauseAnimation();
            Video.pause();
        },

        clearAnimations: function(){
            Fonts.removeMessage();
        },

        continuePlaying: function(){
            // Animation.drawCircles();
            Video.play();
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

        stopTimer: function(){
            clearInterval(Animation.lowerVolumeInterval);
            clearInterval(Animation.refreshInterval);            
        },

        resetAnimation: function(){
            Animation.stopTimer();
            Animation.counter = 0;
        }
    };

    return Animation;
});