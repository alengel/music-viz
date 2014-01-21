define([
    'js/public/js/controls.js',
    'js/public/lib/soundjs'], 
function(
    controls
){
    'use strict';

    function moveControlsAside(){
        $('.controls').addClass('mini');
        $('.toggle-button, .volume, .volume-container').addClass('small');
    }

    function moveControlsBack(){
        $('.controls').removeClass('mini');
        $('.toggle-button, .volume, .volume-container').removeClass('small');
    }
    
    return {
        initialize: function(){
            // this.loadAudioFile();

            $('.toggle-button').bind('click', this.playAudio);
            $('.volume-up').bind('click', this.raiseVolume);
            $('.volume-down').bind('click', this.lowerVolume);
        },

        // loadAudioFile: function(){
        //     createjs.Sound.alternateExtensions = ['mp3'];
        //     createjs.Sound.addEventListener('fileload', createjs.proxy(this.playSound, this));
        //     createjs.Sound.registerSound('js/public/assets/audio/Brighton.mp3', 'sound');
        // },

        // playSound: function(event) {
        //     var instance = createjs.Sound.play('sound');  // play using id.  Could also use full sourcepath or event.src.
            
        //     instance.addEventListener('complete', createjs.proxy(this.handleComplete, this));
        //     instance.volume = 1.0;
        // },

        playAudio: function() {
            var that = this,
                audioFile = $('.audioFile'),
                toggleButton = $('.toggle-button');
            audioFile[0].volume = 0.5;

            if(toggleButton.hasClass('play')){
                audioFile[0].pause();
                toggleButton.removeClass('play').addClass('pause');
                moveControlsBack();
                return;
            }

            toggleButton.addClass('play').removeClass('pause');
            audioFile[0].play();
            moveControlsAside(); 
        },

        raiseVolume: function(){
            if($('.audioFile')[0].volume >= 0.99){
                return;
            }
            $('.audioFile')[0].volume+=0.1;
        },

        lowerVolume: function(){            
            if($('.audioFile')[0].volume <= 0.01){
                return;
            }
            $('.audioFile')[0].volume-=0.1;
        }
    };
});