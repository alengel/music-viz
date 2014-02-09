define([
    'js/audio',
    'js/rainbow',
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
    Rainbow,
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
        //Bind all triggered events to event handlers and initialise background
        initialize: function(){
            $('.toggle-button').on('replay', this.reloadAnimation);
            $('.audioFile').on('play-audio', this.playAnimation);
            $('.audioFile').on('pause-audio', this.pauseAnimation);
            $('.audioFile').on('stop-audio', this.resetAnimation);

            Audio.initialize();
            Rainbow.addToDom();
            this.setupTransitionEnd();
            this.setUpAnimation();
        },

        //Bind cross-browser transition events to transitionend and start animation
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

        //Initialise dancer and bind all calls to the timer
        setUpAnimation: function(){
            var audio  = document.getElementsByTagName('audio')[0],
                counter = 0,
                kick;

            Controller.dancer = new Dancer();
            kick = Controller.dancer.createKick({
                threshold: 0.2,
                onKick: function () {
                    Rainbow.show();
                }
            });
            kick.on();

            Controller.dancer
            .onceAt(1, function() {
                Fonts.addFirstFourLetters();
            })
            .onceAt(2, function() {
                Fonts.addSecondFourLetters();
            })
            .onceAt(3.5, function() {
                Fonts.changeWelcomeMessage(); 
            })
            .onceAt(5, function() {
                Fonts.moveMessage();
                Circles.drawBackground();
            })
            .onceAt(9, function() {
                Video.setup();
            })
            .onceAt(10, function() {
                Fonts.removeMessage();
                Trumpets.drawBackground();
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

        //Play animation after the play button is clicked
        playAnimation: function(){
            Controller.dancer.play();

            if($('video').length){
                Video.play();
            }

            if($('.circles').length){
                Circles.setUpAnimationInterval();
            }
        },

        //Pause animation after the pause button is clicked
        pauseAnimation: function(){
            Controller.dancer.pause();
                
            if($('video').length){
                Video.pause();
            }

            if($('.circles').length){
                Circles.pauseAnimation();
            }
        },

        //Lower volume, show "Reload Animation" message and trigger "stop-audio"
        endAnimation: function(){
            Controller.lowerVolumeInterval = setInterval(Controls.lowerVolume, 500);
            $('.animation-content').addClass('disappear');

            _.delay(function(){
                $('.audioFile').trigger('stop-audio');
                window.clearInterval(Controller.lowerVolumeInterval);
                Fonts.showEndMessage();
            }, 3000);
        },

        //Clears animation content and resets audio
        resetAnimation: function(){
            Controller.dancer.pause();
            Controller.dancer.currentTime = 0;
            $('.animation-content').empty();
        },

        //Reloads the window to start again
        reloadAnimation: function(){
            location.reload();
        },
    };

    return Controller;
});