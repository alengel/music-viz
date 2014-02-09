define([
    'js/audio',
    'js/trumpets',
    'js/controls',
    'js/fonts',
    'js/circles',
    'js/video',
    'js/equalizer',
    'js/photobooth',
    'lib/raphael',
    'lib/dancer'
], function(
    Audio,
    Trumpets,
    Controls,
    Fonts,
    Circles,
    Video,
    Equalizer,
    Photobooth
){
    'use strict';

    var Controller = {
        initialize: function(){
            $('.toggle-button').on('replay', this.reloadAnimation);
            $('.audioFile').on('play-audio', this.playAnimation);
            $('.audioFile').on('pause-audio', this.pauseAnimation);
            $('.audioFile').on('stop-audio', this.resetAnimation);

            Audio.initialize();
            this.setupTransitionEnd();
            this.setUpAnimation();
        },

        setupTransitionEnd: function(){
            var transEndEventNames = {
                'WebkitTransition' : 'webkitTransitionEnd',
                'MozTransition'    : 'transitionend',
                'OTransition'      : 'oTransitionEnd otransitionend',
                'msTransition'     : 'MSTransitionEnd',
                'transition'       : 'transitionend'
            },
            transEndEventName = transEndEventNames[ Modernizr.prefixed('transition') ];

            $('.bg-content').one('transitionend', function() {
                Controller.playAnimation();  
            });
        },

        setUpAnimation: function(){
            var audio  = document.getElementsByTagName('audio')[0],
                counter = 0,
                kick;

            Controller.dancer = new Dancer();
            kick = Controller.dancer.createKick({
                frequency: 5,
                threshold: 0.2,
                onKick: function ( mag ) {
                    // console.log(this.getTime());
                },
                offKick: function ( mag ) {
                    // console.log(this.getTime());
                }
            });
            kick.on();

            Controller.dancer
            .between(0, 30, function() {
                console.log(this.getTime());
            })
            .onceAt(1, function() {
                Fonts.showWelcomeMessage();
            })
            .onceAt(2, function() {
                Fonts.changeWelcomeMessage();
            })
            .onceAt(3, function() {
                Fonts.rotateWelcomeMessage();
            })
            .onceAt(4, function() {
                Fonts.moveMessage();
                Circles.drawBackground();
                Trumpets.drawBackground();
            })
            .onceAt(9, function() {
                Video.setup();
            })
            .onceAt(10, function() {
                Fonts.removeMessage();
                Trumpets.showTrumpets();
                $('.trumpets').addClass('trumpets-left');
            })
            .onceAt(12, function() {
                Photobooth.getBottomMiddle();
            })
            .onceAt(13, function() {
                Photobooth.getBottomLeft();
            })
            .onceAt(14, function() {
                Photobooth.getBottomRight();
                Trumpets.showTrumpets();
                $('.trumpets').removeClass('trumpets-left').addClass('trumpets-right');
            })
            .onceAt(15, function() {
                Photobooth.getCentreLeft();
            })
            .onceAt(17, function() {
                Photobooth.getCentreRight();
                Trumpets.showTrumpets();
                $('.trumpets').removeClass('trumpets-right').addClass('trumpets-top-left');
            })
            .onceAt(17, function() {
                Photobooth.getTopLeft();
            })
            .onceAt(18, function() {
                Photobooth.getTopRight();
            })
            .onceAt(19, function() {
                Photobooth.getTopMiddle();
            })
            .onceAt(20, function() {
                Trumpets.showTrumpets();
                $('.trumpets').removeClass('trumpets-top-left').addClass('trumpets-top-right');
            })
            .onceAt(23, function(){
                Circles.remove();
                Equalizer.drawEqualizer();
            })
            .onceAt(27, function() {
                Controller.endAnimation();
                kick.off();
            }).load(audio);
        },

        playAnimation: function(){
            Controller.dancer.play();

            if($('video').length){
                Video.play();
            }

            if($('.circles').length){
                Circles.setUpAnimationInterval();
            }
        },

        pauseAnimation: function(){
            Controller.dancer.pause();
                
            if($('video').length){
                Video.pause();
            }

            if($('.circles').length){
                Circles.pauseAnimation();
            }
        },

        endAnimation: function(){
            Controller.lowerVolumeInterval = setInterval(Controls.lowerVolume, 500);
            $('.animation-content').addClass('disappear');

            _.delay(function(){
                $('.audioFile').trigger('stop-audio');
                window.clearInterval(Controller.lowerVolumeInterval);
                Fonts.showEndMessage();
            }, 3000);
        },

        resetAnimation: function(){
            Controller.dancer.pause();
            Controller.dancer.currentTime = 0;
            $('.animation-content').empty();
        },

        reloadAnimation: function(){
            location.reload();
        },
    };

    return Controller;
});