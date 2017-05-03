$(document).ready(function () {

var rootURL = 'http://first-ajax-api.herokuapp.com/';
$('#step12').on('click', function() {
  $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/',
    method: 'GET',
    dataType: 'text'
  }).done(function(data) {
    $('#step12').append(data);
    console.log('got' + data);
  }).fail(function () {}).always(function(){
        console.log('First!');
  });

});

$('#step3456').on('click', function() {

  $.ajax({
    url: rootURL + pingpong(),
    method: 'GET',
    dataType: 'text'
}).done(function(responseData)  {
    console.log(responseData);
    $('#step3456').append(responseData);
}).fail(function () {
      console.log('The requested page could not be returned');
      $('#step3456').append('Please try harder next time');
}).always(function () {
  console.log('Thank you for your request, it has been finished');
})

$('#step7').on('click', function() {
  $.ajax({
    url: rootURL + 'count',
    method: 'GET',
    dataType: 'text'
  }).done(function(num) {
    $('#step7').append('You are the ' + num +  ' visitor!');
  }).fail(function() {
    $('#step7').append('FAILURE');
  }).always(function() {
    $('#step7').append('Thank you for your request');
  });
});

$('#step8').on('click', function() {
  $.ajax({
    url: rootURL + 'time',
    method: 'GET',
    dataType: 'text',
     data: { timezone: 'Europe/Sofia' }
  }).done(function(time) {
    $('#step8').append('The time is now: ' + time);
  }).fail(function() {
    $('#step8').append('FAILURE');
  }).always(function() {
    $('#step8').append('Thank you for your request');
  });
});

$('#step9').on('click', function() {
      $.ajax({
        url: rootURL + 'a_car',
        method: 'GET',
        dataType: 'html'
        // data: { limit: 2, stuff: 4 }
      }).done(function(car) {
        $('#step9').append(car);
      }).fail(function() {
        $('#step9').append('FAILURE!');
      }).always(function() {
        $('#step9').append('Thank you for your kind request.');
      });
    });



});

});
