define(['js/animation'], function(Animation){
    'use strict';

    var Timer = {

        refreshInterval: null,
        counter: 0,

        startTimer: function(){
            Timer.refreshInterval = setInterval(Animation.playAnimation, 1000);
        },

        pauseTimer: function(){
            clearInterval(Timer.refreshInterval);
        },

        resetTimer: function(){
            clearInterval(Timer.refreshInterval);
            Timer.counter = 0;
        }
    };

    return Timer;
});