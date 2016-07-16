$(document).ready(function(){
  'use strict';
  $('a').smoothScroll({offset: -10, speed: 400});
});

var doughnutData = [
  {
    value: 85,
    color: '#1abc9c'
  },
  {
    value: 15,
    color: '#ecf0f1'
  }
];
var myDoughnut = new Chart(document.getElementById('java').getContext('2d')).Doughnut(doughnutData);

var doughnutData = [
  {
    value: 70,
    color: '#1abc9c'
  },
  {
    value: 30,
    color: '#ecf0f1'
  }
];
var myDoughnut = new Chart(document.getElementById('cSharp').getContext('2d')).Doughnut(doughnutData);

var doughnutData = [
  {
    value: 75,
    color: '#1abc9c'
  },
  {
    value: 25,
    color: '#ecf0f1'
  }
];
var myDoughnut = new Chart(document.getElementById('pascal').getContext('2d')).Doughnut(doughnutData);

var doughnutData = [
  {
    value: 95,
    color: '#1abc9c'
  },
  {
    value: 5,
    color: '#ecf0f1'
  }
];
var myDoughnut = new Chart(document.getElementById('HTMLCSS').getContext('2d')).Doughnut(doughnutData);

var doughnutData = [
  {
    value: 85,
    color: '#1abc9c'
  },
  {
    value: 15,
    color: '#ecf0f1'
  }
];
var myDoughnut = new Chart(document.getElementById('bootstrap').getContext('2d')).Doughnut(doughnutData);

var doughnutData = [
  {
    value: 40,
    color: '#1abc9c'
  },
  {
    value: 60,
    color: '#ecf0f1'
  }
];
var myDoughnut = new Chart(document.getElementById('icefacesJsf').getContext('2d')).Doughnut(doughnutData);

var doughnutData = [
  {
    value: 30,
    color: '#1abc9c'
  },
  {
    value: 70,
    color: '#ecf0f1'
  }
];
var myDoughnut = new Chart(document.getElementById('spring').getContext('2d')).Doughnut(doughnutData);

var doughnutData = [
  {
    value: 50,
    color: '#1abc9c'
  },
  {
    value: 50,
    color: '#ecf0f1'
  }
];
var myDoughnut = new Chart(document.getElementById('swing').getContext('2d')).Doughnut(doughnutData);

var doughnutData = [
  {
    value: 95,
    color: '#1abc9c'
  },
  {
    value: 5,
    color: '#ecf0f1'
  }
];
var myDoughnut = new Chart(document.getElementById('suiteOffice').getContext('2d')).Doughnut(doughnutData);

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});