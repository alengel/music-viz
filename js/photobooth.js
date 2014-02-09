define([''], function(){
    'use strict';
    
    var Photobooth = {
        //Creates the photobooth container and appends it to the DOM
        //Appends the image to bottom middle
        getBottomMiddle: function(){
            $('.animation-content').append('<div class="photobooth"></div>');

            Photobooth.addPosition('bottom', 'bottom-middle');
        },

        //Appends the image to bottom left
        getBottomLeft: function(){
            Photobooth.addPosition('bottom', 'bottom-left');
        },

        //Appends the image to bottom right
        getBottomRight: function(){
            Photobooth.addPosition('bottom', 'bottom-right');
        },

        //Appends the image to centre left
        getCentreLeft: function(){
            Photobooth.addPosition('centre', 'centre-left');
        },

        //Appends the image to centre right
        getCentreRight: function(){
            Photobooth.addPosition('centre', 'centre-right');
        },

        //Appends the image to top left
        getTopLeft: function(){
            Photobooth.addPosition('top', 'top-left');
        },

        //Appends the image to top right
        getTopRight: function(){
            Photobooth.addPosition('top', 'top-right');
        },

        //Appends the image to top middle
        getTopMiddle: function(){
            Photobooth.addPosition('top', 'top-middle');
        },

        //Utility function that returns the DOM element based on the
        //passed in parameters
        addPosition: function(level, position){
            $('.photobooth').append('<div class="'+ level + ' '+ position +'"></div>');

            _.delay(function(){
                $("." + position).addClass(position + '-in');
            }, 100);
        }
    };

    return Photobooth;
});