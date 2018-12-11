var header = document.getElementById("musicPlayer");
var sticky = header.offsetTop;
var aud = document.getElementById("musicPlayer_audio"); 
var playpauseButton = document.getElementById("musicPlayer_playpauseButton");
var timeline = document.getElementById("musicPlayer_timeline");
var playhead = document.getElementById("musicPlayer_playhead");

window.onscroll = function() {stickyMusicBar()};
playpauseButton.onclick = function() {togglePlay()};
aud.ontimeupdate = function() {progressPlayhead()};
timeline.onclick = function() {}; // get the x coordinate and move the playhead there
playhead.onclick = function() {}; // maybe we don't need this? see below
playhead.onmousedown = function (){}; // start updating where the playhead is based on the mouse's x coordinates
playhead.onmouseup = function() {}; // release the playhead on the last known x coordinate and update the track's position

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
  var playPercent = 100 * (aud.currentTime / aud.duration);
  playhead.style.marginLeft = playPercent + "%";
//  console.log("we tried to move the playhead to " + playPercent + "%");
}

$("#musicPlayer").click(function() {
  if ($("#musicPlayer_toolTip").is(":visible")) {
    $("#musicPlayer_toolTip").hide();
    aud.play();
    playpauseButton.classList.add("fa");
    playpauseButton.classList.add("fa-pause");
    timeline.classList.add("musicPlayer_timeline");
    playhead.classList.add("musicPlayer_playhead");
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
