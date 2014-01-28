define([''], function(){
    'use strict';

    var Timer = {

        refreshInterval: null,
        counter: 0,

        startTimer: function(){
            this.refreshInterval = setInterval(this.countTime, 1000);
        },

        pauseTimer: function(){
            clearInterval(this.refreshInterval);
        },

        resetTimer: function(){
            clearInterval(this.refreshInterval);
            this.counter = 0;
        },

        countTime: function(){
            Timer.counter++;

            console.log(Timer.counter);
        }
    };

    return Timer;
});