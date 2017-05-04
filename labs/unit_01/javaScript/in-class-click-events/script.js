window.onload = function() {
var button = document.getElementById("buttonOne");
  button.addEventListener("click", function() {
    alert("You have clicked button one");
});
}

var buttonTwo = document.getElementById("buttonTwo");
  buttonTwo.addEventListener("click", function() {
    var par1 = document.createElement("p");
    par1.innerHTML = "A clicked ...";
    document.getElementById("information").appendChild(par1);
});

var buttonThree = document.getElementById("buttonThree");
  buttonThree.addEventListener("click", function() {
    var par2 = document.getElementsByTagName("p")[0];
    document.getElementById("information").removeChild(par2);
});
