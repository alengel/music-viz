define([''], function(){
    'use strict';
    
    var Photobooth = {
        getBottomMiddle: function(){
            $('.animation-content').append('<div class="photobooth"></div>');

            Photobooth.addPosition('bottom', 'bottom-middle');
        },

        getBottomLeft: function(){
            Photobooth.addPosition('bottom', 'bottom-left');
        },

        getBottomRight: function(){
            Photobooth.addPosition('bottom', 'bottom-right');
        },

        getCentreLeft: function(){
            Photobooth.addPosition('centre', 'centre-left');
        },

        getCentreRight: function(){
            Photobooth.addPosition('centre', 'centre-right');
        },

        getTopLeft: function(){
            Photobooth.addPosition('top', 'top-left');
        },

        getTopRight: function(){
            Photobooth.addPosition('top', 'top-right');
        },

        getTopMiddle: function(){
            Photobooth.addPosition('top', 'top-middle');
        },

        addPosition: function(level, position){
            $('.photobooth').append('<div class="'+ level + ' '+ position +'"></div>');

            _.delay(function(){
                $("." + position).addClass(position + '-in');
            }, 100);
        }
    };

    return Photobooth;
});