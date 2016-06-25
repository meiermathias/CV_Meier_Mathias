$(document).ready(function(){
  'use strict';
  $('a').smoothScroll({speed:1000});
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

/*
$('div.progress').each(function(i, obj){

  var label = $(obj).find('div').text();
  var value = $(obj).find('div').attr('aria-valuenow');
  var replaceProgessDonut = $('<canvas width="400" height="400"></canvas>');
  $(obj).replaceWith(replaceProgessDonut);
var myChart = new Chart(replaceProgessDonut, {
      type: 'doughnut',
      data: {
          labels: [label],
          datasets: [{
              data: [value, 100-value],
              backgroundColor: [
                  'rgba(153, 102, 255, 0.2)'
              ],
              borderColor: [
                  'rgba(153, 102, 255, 1)'
              ],
              borderWidth: 1
          }]
      }
  });

});
  */
