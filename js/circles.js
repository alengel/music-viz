define([], function(){
    'use strict';

    //Get random RGB value
    function getColour(){
        return 'rgb(' + _.random(0, 255) + ',' + _.random(0, 255) + ',' + _.random(0, 255) + ')';
    }
    
    var Circles = {
        //Draw Raphael background and append to DOM
        drawBackground: function(){
            var bg;

            Circles.circleCallCount = 1;

            $('.animation-content').append('<div class="circles"></div>');
            bg = $('.circles')[0];

            this.paper = new Raphael(bg, '100%', '100%');

            Circles.setUpAnimationInterval();
        },

        //Call drawCircles as long as there are less than 9 circles
        //Otherwise clear interval
        setUpAnimationInterval: function(){            
            Circles.circleInterval = setInterval(function(){
                if(Circles.circleCallCount < 9){
                    Circles.drawCircles(Circles.circleCallCount);
                    Circles.circleCallCount++;
                } else {
                    window.clearInterval(Circles.circleInterval);
                }
            }, 500);
        }, 

        //Draw a circle
        drawCircles: function(){
            var $container = $('.animation-content'),
                width = $container.width(),
                height = $container.height(),
                x = width/2,
                y = height/2,
                radius = 1;

            Circles.animateCircles(x, y, radius);   
        },

        //Animate a circle at the position with the passed in values
        animateCircles: function(x, y, radius){
            var colour = getColour(),
                circle = this.paper.circle(x, y, radius),
                transformSize = 900 - (Circles.circleCallCount * 100);

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

        //Clear the interval when the animation is paused
        pauseAnimation: function(){
            window.clearInterval(Circles.circleInterval);
        },

        //Remove the circles element from the DOM 
        remove: function(){
            $('.circles').remove();
        }
    };

    return Circles;
});