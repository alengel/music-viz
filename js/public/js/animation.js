define([
    'js/public/lib/raphael'], 
function(){
    'use strict';

    return {

        initialize: function(){
            this.drawBackground();
            // this.drawBall();
            // alert('hi'); 
        },

        drawBackground: function(){
            var bg = document.getElementById('animation-content');
            this.paper = new Raphael(bg, "100%", "100%");

            var backGround = this.paper.rect(0,0,"100%","100%");

            backGround.attr({ fill: "blue"}); 

            this.ball = this.paper.circle(50,50,30);
        },

        drawBall: function(){
            this.ball.animate({cy: 570 , cx: 400}, 500, 'ease-in', this.bounceBall);
        }       
    };
});