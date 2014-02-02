define([''], function(){
    'use strict';

    function getColour(){
        var random = Math.random();

        return 'rgb(' + Math.floor(random * 255) + ', 0,' + Math.floor(random * 255) + ')';
    }
    
    var Shapes = {
        drawBackground: function(){
            var bg;

            $('.animation-content').append('<div class="circles"></div>');
            bg = $('.circles')[0];

            this.paper = new Raphael(bg, '100%', '100%');
        }, 

        drawCircles: function(){
            var $document = $(document),
                width = $document.width(),
                height = $document.height(),
                x = width/2,
                y = height/2,
                radius = 1,
                circle = this.paper.circle(x, y, radius);

            circle.attr({
                fill: getColour(),
                stroke: 'none'
            });
            circle.animate({
                radius: 100,
                transform: 'S50'
            }, 500);
        }
    };

    return Shapes;
});