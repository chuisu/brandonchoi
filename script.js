var header = document.getElementById("musicPlayer");
var sticky = header.offsetTop;
var aud = document.getElementById("musicPlayer_audio"); 
var playIcon = document.getElementById("");

window.onscroll = function() {stickyMusicBar()};

function stickyMusicBar() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

function togglePlay() {
}

$("#musicPlayer").click(function() {
  $("#musicPlayer_toolTip").hide();
//show controls
  aud.play();
  $("#musicPlayer_playpauseButton").addClass("fa fa-play");
});

$("#musicPlayer_playpauseButton").click(function() {
  if (aud.paused) {
    aud.play();
    $("#musicPlayer_playpauseButton").removeClass("fa fa-pause");
    $("#musicPlayer_playpauseButton").addClass("fa fa-play");
  }
  else {
    aud.pause();
    $("#musicPlayer_playpauseButton").removeClass("fa fa-play");
    $("#musicPlayer_playpauseButton").addClass("fa fa-pause");
  }
});
