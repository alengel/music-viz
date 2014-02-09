define([''], function(){
    'use strict';
    
    var Rainbow = {
        //Adds the rainbow template to the DOM but hides it
        addToDom: function(){
            var template = '<div class="rainbow hidden">' +
                                '<div class="red"></div>' +
                                '<div class="orange"></div>' +
                                '<div class="yellow"></div>' +
                                '<div class="green"></div>' +
                                '<div class="blue"></div>' +
                                '<div class="purple"></div>' +
                            '</div>';

            $('.animation-content').append(template);
        },

        //Shows the flag at random positions and hides it after 800ms
        show: function(){
            var $rainbow = $('.rainbow');
            $rainbow.removeClass('hidden');

            $rainbow.css('top', _.random(5, 95) + '%').css('left', _.random(5, 95) + '%');

            _.delay(function(){
                $rainbow.addClass('rotation');
            }, 100);

            _.delay(Rainbow.hide, 800);
        },

        //Hides the flag and removes the rotation
        hide: function(){
            $('.rainbow').addClass('hidden').removeClass('rotation');
        }
    };

    return Rainbow;
});