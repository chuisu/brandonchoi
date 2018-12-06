var header = document.getElementById("musicPlayer");
var sticky = header.offsetTop;
var aud = document.getElementById("musicPlayer_audio"); 
var playpauseButton = document.getElementById("musicPlayer_playpauseButton");

window.onscroll = function() {stickyMusicBar()};
playpauseButton.onclick = function() {togglePlay()};

function stickyMusicBar() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

function pauseAudio() {
  aud.pause();
  playpauseButton.classList.remove("fa-pause");
  playpauseButton.classList.add("fa-play");
}

function togglePlay() {
  if (aud.paused == true) {
    alert("trying to play");
    aud.play();
    alert("should have played");
    playpauseButton.classList.remove("fa-play");
    playpauseButton.classList.add("fa-pause");
  } else {
    pauseAudio();
    alert("should have paused");
  }
}
// the reason it keeps playing after is the below function
// complete the conditional statement below to make it run only on the initial click
$("#musicPlayer").click(function() {
  if () {
    $("#musicPlayer_toolTip").hide();
    aud.play();
    playpauseButton.classList.add("fa");
    playpauseButton.classList.add("fa-pause");
  } else {
  
  }
});

//$("#musicPlayer_playpauseButton").click(function() {
//  if (aud.paused == true) {
//    alert("we clicked the button! Trying to play...");
//    aud.play();
//    $("#musicPlayer_playpauseButton").removeClass("fa fa-play");
//    $("#musicPlayer_playpauseButton").addClass("fa fa-pause");
//  } else if (aud.paused == false) {
//    alert("we clicked the button! Trying to pause...");
//    aud.pause();
//    alert("it should have paused");
//    $("#musicPlayer_playpauseButton").removeClass("fa fa-pause");
//    $("#musicPlayer_playpauseButton").addClass("fa fa-play");
//  }
//});
