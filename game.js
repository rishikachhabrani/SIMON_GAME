var gamePattern = [];

var userClickedPattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

var level = 0;


$("body").keydown(function() {

  nextSequence();
  $("h1").text("level " + level);
})



  function nextSequence() {


    userClickedPattern = []

    var randomNumber = Math.floor(Math.random() * 4);

    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    playSound(randomChosenColour);

  // console.log(gamePattern);



    $("." + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    level++;
    $("h1").text("level " + level);

};


$(".btn").click(function() {



  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  animatePress(userChosenColour);
  playSound(userChosenColour);
  // console.log(userClickedPattern);

  console.log(userClickedPattern);

  checkAnswer(userClickedPattern.length-1);

});






function checkAnswer(level) {

  if (userClickedPattern[level] == gamePattern[level]) {
    console.log("Success");

    if(userClickedPattern.length == gamePattern.length){

      setTimeout(function(){
        nextSequence();},1000
      );
    }


  } else {
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");},200);
    playSound("wrong");
    console.log("Wrong");
    $("h1").text("GAME OVER! Press any key to start");

    startOver();

  }
}


function playSound(name) {

  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();

}

function animatePress(currentColour) {
  $("." + currentColour).addClass("pressed");

  setTimeout(function() {
    $("." + currentColour).removeClass("pressed");}, 100
  );

}

function startOver(){
  level=0;
  gamePattern=[];
  userClickedPattern=[];

}


// var buttonColours = ["red", "blue", "green", "yellow"];
//
// var gamePattern = [];
// var userClickedPattern = [];
//
// var started = false;
// var level = 0;
//
// $(document).keypress(function() {
//   if (!started) {
//     $("#level-title").text("Level " + level);
//     nextSequence();
//     started = true;
//   }
// });
//
// $(".btn").click(function() {
//
//   var userChosenColour = $(this).attr("id");
//   userClickedPattern.push(userChosenColour);
//
//   playSound(userChosenColour);
//   animatePress(userChosenColour);
//
//
//   //2. Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence.
//   console.log(userClickedPattern);
//
//   checkAnswer(userClickedPattern.length-1);
//
// });
//
//
// //1. Create a new function called checkAnswer(), it should take one input with the name currentLevel
// function checkAnswer(currentLevel) {
//
//     //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
//
//
//
//     if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
//
//       console.log("success");
//
//       //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
//       if (userClickedPattern.length === gamePattern.length){
//
//         //5. Call nextSequence() after a 1000 millisecond delay.
//         setTimeout(function () {
//           nextSequence();
//         }, 1000);
//
//       }
//
//     } else {
//
//       console.log("wrong");
//
//     }
//
// }
//
// function nextSequence() {
//
//   //6. Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.
//   userClickedPattern = [];
//
//   level++;
//   $("#level-title").text("Level " + level);
//
//   var randomNumber = Math.floor(Math.random() * 4);
//   var randomChosenColour = buttonColours[randomNumber];
//   gamePattern.push(randomChosenColour);
//
//   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
//   playSound(randomChosenColour);
//   console.log(gamePattern);
// }
//
//
// function playSound(name) {
//   var audio = new Audio("sounds/" + name + ".mp3");
//   audio.play();
// }
//
// function animatePress(currentColor) {
//   $("#" + currentColor).addClass("pressed");
//   setTimeout(function () {
//     $("#" + currentColor).removeClass("pressed");
//   }, 100);
// }
