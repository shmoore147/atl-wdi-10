// ** BULLSEYE ** //

// STEP 3:  Highlight the element that was clicked on using the CSS `background-color: yellow`

// BONUS:  Implement setTimeout so the background is yellow for only two seconds

// EXPLORATION: Comment out event.stopPropagation in each function, and then click the inner ring. What happens?



window.onload = function() {
  var body = document.body;
  var ring1 = document.querySelector('.ring-1');
  var ring2 = document.querySelector('.ring-2');
  var ring3 = document.querySelector('.ring-3');

  body.addEventListener('click', bullseyeGame.miss);
  ring1.addEventListener('click', bullseyeGame.outerRing);
  ring2.addEventListener('click', bullseyeGame.middleRing);
  ring3.addEventListener('click', bullseyeGame.bullseye);
}
var bullseyeGame = {
  score: 0,

  updateScore: function(points) {
    var scoreElement = document.querySelector('.score');
    this.score += points

    scoreElement.innerHTML = `${this.score} points`
  },

  miss: function(event) {
    event.stopPropagation();
    alert('YOU MISSED');

    bullseyeGame.updateScore(0);
  },

  // outerRing: function(event) {
  //   event.stopPropagation();
  //   alert('10 POINTS');
  //   bullseyeGame.updateScore(10);
  // },
  //
  // middleRing: function(event) {
  //   event.stopPropagation();
  //   alert('50 POINTS');
  //   bullseyeGame.updateScore(50);
  // },
  //
  // bullseye: function(event) {
  //   event.stopPropagation();
  //   alert('100 POINTS');
  //   bullseyeGame.updateScore(100);
  // },

  outerRing: function(event) {
    event.stopPropagation();
    alert('outerRing was clicked')

    bullseyeGame.updateScore(10);
    //   bullseyeGame.updateScore(10);
    // }
  },

  middleRing: function(event) {
    event.stopPropagation();
    alert('Middle ring was clicked');
    middleRing.style.backgroundColor = "yellow";
    bullseyeGame.updateScore(50);

  },

  bullseye: function(event) {
    event.stopPropagation();
    alert('Bullseye!');
    bullseyeGame.updateScore(100);





    // document.ready(function(){
    //     ("button".click(function(){
    //         if(clicked){
    //             $(this).css('background-color', 'red');
    //             clicked  = false;
    //         } else {
    //             $(this).css('background-color', 'blue');
    //             clicked  = true;
    //         }
    //     });
    // });
  }
}
