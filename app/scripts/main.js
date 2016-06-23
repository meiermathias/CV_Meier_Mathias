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

/*var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});*/


/*var ctx = document.getElementById("fr");
var fr = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Français_TEST"],
        datasets: [{
            label: '# of Votes',
            data: [80, 20],
            backgroundColor: [
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(153, 102, 255, 1)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderWidth: 1
        }]
    }
});*/


$('div.progress').each(function(i, obj){

  var label = $(obj).find('div').text();
  var value = $(obj).find('div').attr('aria-valuenow');
  var replaceProgessDonut = $('<canvas width="400" height="400"></canvas>');
  console.log(label);
  console.log(value);
  console.log(replaceProgessDonut);
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