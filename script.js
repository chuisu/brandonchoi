window.onscroll = function() {stickyMusicBar()};

var header = document.getElementById("musicPlayer");
var sticky = header.offsetTop;

function stickyMusicBar() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

//pseudocode for music bar
//function showMusicBar() {
//  if clicked {
//    hide "LISTEN?";  
//    classList.add("shownMusicBar");
//    start playing the music;
//    }
//}
