var header1 = document.getElementById("musicPlayer");
var header2 = document.getElementById("musicPlayerBackground");
var sticky1 = header1.offsetTop;
var sticky2 = header2.offsetTop;
var aud = document.getElementById("musicPlayer_audio"); 
var playpauseButton = document.getElementById("musicPlayer_playpauseButton");
var timeline = document.getElementById("musicPlayer_timeline");
var playhead = document.getElementById("musicPlayer_playhead");
var timelineWidth = timeline.offsetWidth - playhead.offsetWidth;

window.onscroll = function() {stickyMusicBar()};
playpauseButton.onclick = function() {togglePlay()};
aud.ontimeupdate = function() {progressPlayhead()};
playhead.addEventListener('mousedown', mouseDown, false);
window.addEventListener('mouseup', mouseUp, false);

function stickyMusicBar() {
  if (window.pageYOffset > sticky1) {
    header1.classList.add("sticky");
    header2.classList.add("sticky");
  } else {
    header1.classList.remove("sticky");
    header2.classList.remove("sticky");
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
//if (aud finished) {
//pause
//reset playhead
}

$("#musicPlayer").click(function() {
  if ($("#musicPlayer_toolTip").is(":visible")) {
    $("#musicPlayer_toolTip").hide();
//  buffer audio first
    aud.play();
    playpauseButton.classList.add("fa");
    playpauseButton.classList.add("fa-pause");
    timeline.classList.add("musicPlayer_timeline");
    playhead.classList.add("musicPlayer_playhead");
  }
});

//Makes timeline clickable
timeline.addEventListener("click", function (event) {
	moveplayhead(event);
	aud.currentTime = aud.duration * clickPercent(event);
}, false);

// returns click as decimal (.77) of the total timelineWidth
function clickPercent(event) {
    return (event.clientX - getPosition(timeline)) / (timeline.offsetWidth - playhead.offsetWidth);
}

function moveplayhead(event) {
    var newMargLeft = event.clientX - getPosition(timeline);

	if (newMargLeft >= 0 && newMargLeft <= (timeline.offsetWidth - playhead.offsetWidth)) {
		playhead.style.marginLeft = newMargLeft + "px";
	}
	if (newMargLeft < 0) {
		playhead.style.marginLeft = "0px";
	}
	if (newMargLeft > (timeline.offsetWidth - playhead.offsetWidth)) {
		playhead.style.marginLeft = (timeline.offsetWidth - playhead.offsetWidth) + "px";
	}
}

// getPosition
// Returns elements left position relative to top-left of viewport
function getPosition(el) {
    return el.getBoundingClientRect().left;
}

var onplayhead = false;
var wasPlaying = false;
function mouseDown() {
  onplayhead = true;
  window.addEventListener('mousemove', moveplayhead, true);
  if (!aud.paused) {
    aud.pause();
    wasPlaying = true;
  }
}

function mouseUp(event) {
  if (onplayhead == true) {
      moveplayhead(event);
      window.removeEventListener('mousemove', moveplayhead, true);
      // change current time
      aud.currentTime = aud.duration * clickPercent(event);
      if (wasPlaying == true) {
        aud.play()
      }
    }
    onplayhead = false;
    wasPlaying = false;
}

$(document).ready(function() {
	$('#mainTitle').fadeTo(669, 1).css('transform', 'translateY(0)');
	setTimeout(function() {
		$('#contentContainer').fadeTo(669, 1).css('margin-top', '0');
		$('#transition').fadeTo(669, 1).css('transform', 'translateY(0)');
	}, 669);
});

