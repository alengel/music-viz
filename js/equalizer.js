define([], function(){
    'use strict';

    function getColour(){
        return 'rgb(' + _.random(0, 255) + ',' + _.random(0, 255) + ',' + _.random(0, 255) + ')';
    }

    function setIntervalX(callback, delay, repetitions) {
        var x = 0;
        var intervalID = window.setInterval(function () {

           callback();

           if (++x === repetitions) {
               window.clearInterval(intervalID);
           }
        }, delay);
    }

    var Equalizer = {
        drawEqualizer: function(){
            $('.animation-content').append('<div class="equalizer"></div>');
            var bg = $('.equalizer')[0];

            this.paper = new Raphael(bg, '100%', '100%');

            this.calculateRectanglesForXAxis();
        },

        calculateRectanglesForXAxis: function(){
            var containerWidth = $('.animation-content').width(),
                x = 0,
                barWidth = 70,
                numberOfBars = Math.round(containerWidth / barWidth);

            _(numberOfBars).times(function(){
                Equalizer.drawRectangle(x, barWidth);
                x += barWidth;

                console.log('xxxxxx ', x);
            });
        },

        drawRectangle: function(x, barWidth){
            var containerHeight = $('.animation-content').height(),
                startingHeight = 0,
                y = containerHeight,
                step = _.random(4, 7),
                counter = 1,
                stepHeight = containerHeight / step,
                speed = _.random(300, 500),
                oddCount = 1, 
                evenCount = 0;

            var bar = Equalizer.paper.rect(x, y, barWidth, startingHeight);

            bar.attr({
                fill: getColour(),
                stroke:'none'
            });

            for(var i = 1; i <= (step*2 - 1); i++){
                var currentCount;
                if(i%2 === 0){
                    currentCount = evenCount++;
                } else {
                    currentCount = oddCount++;
                }

                Equalizer.animateBar(bar, speed*i, stepHeight, containerHeight, currentCount, speed);              
            }
        },

        animateBar: function(bar, delay, stepHeight, containerHeight, currentCount, speed){
            var yStart = containerHeight - stepHeight * currentCount;

            _.delay(function(){
                bar.animate({
                    y: yStart,
                    height: containerHeight - yStart
                }, speed);
            }, delay);
        }
    };

    return Equalizer;
});