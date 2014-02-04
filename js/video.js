define([], function(){
    'use strict';

    function onPlayerReady(event) {
        event.target.mute();
    }
    
    var Video = {
        initialize: function(){
            $('.content').append('<video class="video-player" id="video-player" width="480" height="360" autoplay="autoplay"><source src="video/Brighton.mp4" type="video/mp4"></video>');
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