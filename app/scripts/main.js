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


var doughnutData = [
  {
    value: 70,
    color: "#1abc9c"
  },
  {
    value: 30,
    color: "#ecf0f1"
  }
];
var myDoughnut = new Chart(document.getElementById("java").getContext("2d")).Doughnut(doughnutData);

var doughnutData = [
  {
    value: 90,
    color: "#1abc9c"
  },
  {
    value: 10,
    color: "#ecf0f1"
  }
];
var myDoughnut = new Chart(document.getElementById("cSharp").getContext("2d")).Doughnut(doughnutData);

var doughnutData = [
  {
    value: 65,
    color: "#1abc9c"
  },
  {
    value: 35,
    color: "#ecf0f1"
  }
];
var myDoughnut = new Chart(document.getElementById("pascal").getContext("2d")).Doughnut(doughnutData);

var doughnutData = [
  {
    value: 80,
    color: "#1abc9c"
  },
  {
    value: 20,
    color: "#ecf0f1"
  }
];
var myDoughnut = new Chart(document.getElementById("HTMLCSS").getContext("2d")).Doughnut(doughnutData);

var doughnutData = [
  {
    value: 70,
    color: "#1abc9c"
  },
  {
    value: 30,
    color: "#ecf0f1"
  }
];
var myDoughnut = new Chart(document.getElementById("bootstrap").getContext("2d")).Doughnut(doughnutData);

var doughnutData = [
  {
    value: 50,
    color: "#1abc9c"
  },
  {
    value: 50,
    color: "#ecf0f1"
  }
];
var myDoughnut = new Chart(document.getElementById("icefacesJsf").getContext("2d")).Doughnut(doughnutData);

var doughnutData = [
  {
    value: 50,
    color: "#1abc9c"
  },
  {
    value: 50,
    color: "#ecf0f1"
  }
];
var myDoughnut = new Chart(document.getElementById("spring").getContext("2d")).Doughnut(doughnutData);

var doughnutData = [
  {
    value: 50,
    color: "#1abc9c"
  },
  {
    value: 50,
    color: "#ecf0f1"
  }
];
var myDoughnut = new Chart(document.getElementById("swing").getContext("2d")).Doughnut(doughnutData);

var doughnutData = [
  {
    value: 50,
    color: "#1abc9c"
  },
  {
    value: 50,
    color: "#ecf0f1"
  }
];
var myDoughnut = new Chart(document.getElementById("suiteOffice").getContext("2d")).Doughnut(doughnutData);
