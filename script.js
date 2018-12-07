var header = document.getElementById("musicPlayer");
var sticky = header.offsetTop;
var aud = document.getElementById("musicPlayer_audio"); 
var playpauseButton = document.getElementById("musicPlayer_playpauseButton");

window.onscroll = function() {stickyMusicBar()};
playpauseButton.onclick = function() {togglePlay()};
aud.ontimeupdate = function() {progressPlayhead};

function stickyMusicBar() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

function togglePlay() {
  if (aud.paused == true) {
    aud.play();
    playpauseButton.classList.remove("fa-play");
    playpauseButton.classList.add("fa-pause");
  } else {
    aud.pause();
    playpauseButton.classList.remove("fa-pause");
    playpauseButton.classList.add("fa-play");
  }
}

function progressPlayhead() {

}

$("#musicPlayer").click(function() {
  if ($("#musicPlayer_toolTip").is(":visible")) {
    $("#musicPlayer_toolTip").hide();
    aud.play();
    playpauseButton.classList.add("fa");
    playpauseButton.classList.add("fa-pause");
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
