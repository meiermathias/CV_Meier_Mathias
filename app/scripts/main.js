$(document).ready(function(){
  'use strict';
  $('a').smoothScroll({speed:10000});
});

// Elevator script included on the page, already.
window.onload = function() {
  var elevator = new Elevator({
    element: document.querySelector('.elevator-button'),
    targetElement: document.querySelector('#elevator-target'),
    mainAudio: '/images/panda.mp3',
    endAudio: '/images/panda.mp3'
  });
}
