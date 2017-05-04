$( document ).ready(function() {


  var teams = ['New York Giants', 'Washington Redskins', 'Philadelphia Eagles', 'Dallas Cowboys'];

  $(".teams-container").on("click", function() {
    // alert("You clicked a thing!");

$(this).append("<p>" + teams[0] + "<p>");

  });

});
