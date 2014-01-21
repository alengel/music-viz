define([
    'js/public/lib/raphael'], 
function(){
    'use strict';

    return {

        initialize: function(){
            
        }
    
    // Raphael.fn.triangle = function(x, y, size) {
    //     var path = ['M', x, y];

    //     path = path.concat(['L', 150, 25]);
    //     path = path.concat(['L', 100, 50]);

    //     return this.path(path.concat(['Z']).join(' '));
    // };

    // return {
    //     initialize: function(){
    //         var $document = $('body');

    //         this.canvas = new Raphael(0, 0, $document.width(), 1000);

    //         this.drawBackground();
    //         this.drawControls();
    //     },

    //     drawBackground: function(){
    //         var $document = $('body'),
    //             width = 400,
    //             height = 80;
    //             this.x = ($document.width() - width) / 2;
    //             this.y = ($document.height() - height) / 1.1;

    //         this.canvas.rect(this.x, this.y, width, height).attr({'fill':'#F5F5F5'});
    //         //add id to svg
    //     },

    //     drawControls: function(){
    //         this.canvas.triangle(100, 0, 50).attr({'fill': '#000000', 'stroke': 0});
    //     }        
    };
});