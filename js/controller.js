define([
    'js/audio',
    'js/trumpets',
    'js/controls',
    'js/fonts',
    'js/circles',
    'js/video',
    'js/equalizer',
    'lib/raphael',
    'lib/dancer'
], function(
    Audio,
    Trumpets,
    Controls,
    Fonts,
    Circles,
    Video,
    Equalizer
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
                    console.log(this.getTime());
                },
                offKick: function ( mag ) {
                    console.log(this.getTime());
                }
            });
            kick.on();

            Controller.dancer
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
            })
            .onceAt(10, function() {
                Fonts.removeMessage();
                Trumpets.drawBackground(); 
                Video.setup();
            })
            .onceAt(14, function() {
                Trumpets.showTrumpets();
            })
            .onceAt(18, function() {
                Trumpets.showTrumpets();
            })
            .onceAt(20, function() {
                Trumpets.showTrumpets();
            })
            .onceAt(23, function(){
                $('.circles').addClass('disappear');
                Equalizer.drawEqualizer();
            })
            .onceAt(24, function() {

            })
            .onceAt(28, function() {
                Controller.endAnimation();
                kick.off();
            }).load(audio);
        },

        playAnimation: function(){
            Controller.dancer.play();

            if($('video').length){
                Video.play();
            }
        },

        pauseAnimation: function(){
            Controller.dancer.pause();
                
            if($('video').length){
                Video.pause();
            }

            if(Circles){
                Circles.pauseAnimation();
            }
        },

        resetAnimation: function(){
            Controller.dancer.pause();
            Controller.dancer.currentTime = 0;
            $('.animation-content').empty();
        },

        endAnimation: function(){
            Controller.lowerVolumeInterval = setInterval(Controls.lowerVolume, 500);

            _.delay(function(){
                $('.audioFile').trigger('stop-audio');
                window.clearInterval(Controller.lowerVolumeInterval);
                Fonts.showEndMessage();
            }, 2000);
        },

        reloadAnimation: function(){
            location.reload();
        },
    };

    return Controller;
});