/*
 * Copyright 2016 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var vrView;


function onLoad() {
  // Load VR View.
  vrView = new VRView.Player('#vrview', {
    video: 'https://media.truex.com/file_assets/2017-06-15/20428f1f-5958-413d-9047-fd720e7299c7.mp4', //video url, host on trueX
    is_stereo: false, //false for monostereoscopic content. Only enable for stacked stereo
    width: "960",
    height: "500",
    loop: false,
    //is_debug: true,
    //default_heading: 90,
    //is_yaw_only: true,
    //is_vr_off: true, //toggle for stereo content
  });

  vrView.on('ready', onVRViewReady);

  vrView.on('play', function() {
    console.log('media play');
    console.log(vrView.getDuration());
  });
  vrView.on('pause', function() {
    console.log('media paused');
  });
  vrView.on('timeupdate', function(e) {
    var current = formatTime(e.currentTime);
    var duration = formatTime(e.duration);
    //timeContainer.innerText = current + ' | ' + duration;
    console.log('currently playing ' + current + ' secs.');
  });
  vrView.on('ended', function() {
    console.log('media ended');
    //playButton.classList.add('paused');
  });
}

function onVRViewReady() {
  console.log('vrView.isPaused', vrView.isPaused);
  // Set the initial state of the buttons.
  if (vrView.isPaused) {
    //playButton.classList.add('paused');
  } else {
    //playButton.classList.remove('paused');
  }
}

function onTogglePlay() {
  if (vrView.isPaused) {
    vrView.play();
    //playButton.classList.remove('paused');
  } else {
    vrView.pause();
    //playButton.classList.add('paused');
  }
}

function onToggleMute() {
  var isMuted = muteButton.classList.contains('muted');
  if (isMuted) {
    vrView.setVolume(1);
  } else {
    vrView.setVolume(0);
  }
  muteButton.classList.toggle('muted');
}

function formatTime(time) {
  time = !time || typeof time !== 'number' || time < 0 ? 0 : time;

  var minutes = Math.floor(time / 60) % 60;
  var seconds = Math.floor(time % 60);

  minutes = minutes <= 0 ? 0 : minutes;
  seconds = seconds <= 0 ? 0 : seconds;

  var result = (minutes < 10 ? '0' + minutes : minutes) + ':';
  result += seconds < 10 ? '0' + seconds : seconds;
  return result;
}

window.addEventListener('load', onLoad);
