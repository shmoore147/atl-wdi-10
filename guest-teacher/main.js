$("document").ready(function() {

      alert("Everything is ready, let's do this!");
      });

// $("button").css("background-color", "hotpink");
//
$("h1").addClass("text-center");

$('#homes tr button').on('click', function() {
  $(this).parent().parent().remove();
});
//
// var $tbody = $('#homes').children().eq(1);
// $tbody.children().css('color', 'darksalmon')

// $newRow.append('<td><button class="btn btn-xs btn-danger">Remove</button></td>');

$(function() {
  var newHomes = [
    {address: "27569 Cedarwood Drive", sf: "2,535", bedrooms: 3, baths: 2.5, price: "$496,500"},
    {address: "316 Annandale Drive", sf: "1,326", bedrooms: 4, baths: 2, price: "$275,000"},
    {address: "251 Grandview Road", sf: "3,800", bedrooms: 3, baths: 2, price: "$699,900"},
    {address: "28571 Manitoba", sf: "2,960", bedrooms: 4, baths: 3.5, price: "$775,000"}
  ];

  $('#homes').on('click', 'button', function() {
    $(this).parent().parent().remove();
  });

$("#addHome").click(function() {
  var $newRow = $('<tr></tr>');
  var newHome = newHomes[0];

  $newRow.append('<td>' + newHome.address + '</td>');
  $newRow.append('<td>' + newHome.sf + '</td>');
  $newRow.append('<td>' + newHome.bedrooms + '</td>');
  $newRow.append('<td>' + newHome.baths + '</td>');
  $newRow.append('<td>' + newHome.price + '</td>');
  $newRow.append('<td><button class="btn btn-xs btn-danger">Remove</button></td>');


  $('#homes tbody').append($newRow);
});
});
