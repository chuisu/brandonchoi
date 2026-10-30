document.addEventListener("DOMContentLoaded", () => {
  // Find all player components on the current page
  const players = document.querySelectorAll(".epk-player-container");

  players.forEach(player => {
    const audio = player.querySelector(".epk-audio-source");
    const playBtn = player.querySelector(".epk-control-btn");
    const playIcon = player.querySelector(".icon-play");
    const pauseIcon = player.querySelector(".icon-pause");
    const timeline = player.querySelector(".epk-timeline-track");
    const progressBar = player.querySelector(".epk-progress-bar");
    const scrubber = player.querySelector(".epk-scrubber-handle");

    let isDragging = false;

    // Toggle Play/Pause UI States Safely
    function togglePlayback() {
      // Pause any other playing music items on your EPK page first
      document.querySelectorAll(".epk-audio-source").forEach(otherAudio => {
        if (otherAudio !== audio && !otherAudio.paused) {
          otherAudio.pause();
          const siblingContainer = otherAudio.closest(".epk-player-container");
          siblingContainer.querySelector(".icon-play").style.display = "block";
          siblingContainer.querySelector(".icon-pause").style.display = "none";
        }
      });

      if (audio.paused) {
        audio.play().catch(err => console.log("Audio playback play intent blocked:", err));
        playIcon.style.display = "none";
        pauseIcon.style.display = "block";
      } else {
        audio.pause();
        playIcon.style.display = "block";
        pauseIcon.style.display = "none";
      }
    }

    playBtn.addEventListener("click", togglePlayback);

    // Sync Playhead Progress Metrics
    audio.addEventListener("timeupdate", () => {
      if (!isDragging && audio.duration) {
        const percentage = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = `${percentage}%`;
        scrubber.style.left = `${percentage}%`;
      }
    });

    // Reset UI State on track end
    audio.addEventListener("ended", () => {
      playIcon.style.display = "block";
      pauseIcon.style.display = "none";
      progressBar.style.width = "0%";
      scrubber.style.left = "0%";
    });

    // Calculate Scrubber Percentage relative to layout container bounding dimensions
    function scrub(e) {
      const rect = timeline.getBoundingClientRect();
      let clickX = (e.clientX || e.touches[0].clientX) - rect.left;
      let percentage = clickX / rect.width;
      
      // Keep boundaries clamped between 0 and 100%
      if (percentage < 0) percentage = 0;
      if (percentage > 1) percentage = 1;

      const displayPercent = percentage * 100;
      progressBar.style.width = `${displayPercent}%`;
      scrubber.style.left = `${displayPercent}%`;

      if (!isDragging && audio.duration) {
        audio.currentTime = percentage * audio.duration;
      }
      return percentage;
    }

    // Bind scrubber events seamlessly across Desktop & Mobile environments
    timeline.addEventListener("mousedown", (e) => {
      isDragging = true;
      scrub(e);
    });

    window.addEventListener("mousemove", (e) => {
      if (isDragging) scrub(e);
    });

    window.addEventListener("mouseup", (e) => {
      if (isDragging) {
        isDragging = false;
        const percentage = scrub(e);
        if (audio.duration) {
          audio.currentTime = percentage * audio.duration;
        }
      }
    });
  });
});
