define([
    'js/circles'
], function(
    Circles
){
    'use strict';

    function onPlayerReady(event) {
        event.target.mute();
    }
    
    var Video = {
        setup: function(){
            var bg,
                $container = $('.animation-content'),
                width = $container.width(),
                height = $container.height(),
                x = width/2,
                y = height/2,
                radius = 1;

            $container.append('<div class="video-container"><div class="video-bg"></div></div>');

            _.delay(function(){
                $('.video-bg').addClass('circle');
            }, 50);

            _.delay(function(){
                $('.video-bg').addClass('rectangle');
            }, 500);

            _.delay(Video.initialize, 2200);
        },

        initialize: function(){
            $('.video-bg').append('<video class="video-player" id="video-player" muted width="100%" height="100%" autoplay="autoplay"><source src="video/Brighton.mp4" type="video/mp4"></video>');
        },

        pause: function(){
            document.getElementById('video-player').pause();
        },

        play: function(){
            document.getElementById('video-player').play();
        }
    };

    return Video;
});