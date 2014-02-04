define([], function(){
    'use strict';

    function getColour(){
        return 'rgb(' + _.random(0, 255) + ',' + _.random(0, 255) + ',' + _.random(0, 255) + ')';
    }
    
    var Circles = {
        drawBackground: function(){
            var bg;

            Circles.counter = 0;

            $('.animation-content').append('<div class="circles"></div>');
            bg = $('.circles')[0];

            this.paper = new Raphael(bg, '100%', '100%');
        },

        setUpAnimationInterval: function(){
            var circleCallCount = 1;
            
            Circles.circleInterval = setInterval(function(){
                if(circleCallCount < 10){
                    Circles.drawCircles(circleCallCount);
                    circleCallCount++;
                } else {
                    clearInterval(Circles.circleInterval);
                }
            }, 500);
        }, 

        drawCircles: function(circleCallCount){
            var $container = $('.animation-content'),
                width = $container.width(),
                height = $container.height(),
                x = width/2,
                y = height/2,
                radius = 1;

            Circles.animateCircles(x, y, radius, circleCallCount);   
        },

        animateCircles: function(x, y, radius, circleCallCount){
            var colour = getColour(),
                circle = this.paper.circle(x, y, radius),
                transformSize = 1000 - (circleCallCount * 100);

            circle.attr({
                fill: colour,
                stroke: colour,
                'stroke-width': '1px'
            });
            circle.animate({
                radius: 200,
                stroke: getColour(),
                fill: 'none',
                transform: 'S' + transformSize
            }, 800);
        },

        pauseAnimation: function(){
            clearInterval(Circles.circleInterval);
        },

        remove: function(){
            $('.circles').remove();
        }
    };

    return Circles;
});