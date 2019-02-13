'use strict';

const bgm = new Howl({
  src: ['./assets/audio/bgm.mp3'],
  autoplay: true,
  loop: true,
  volume: 0.4
});

const barkSounds = [
  new Howl({
    src: ['./assets/audio/bark_1.mp3']
  }),
  new Howl({
    src: ['./assets/audio/bark_2.mp3']
  })
];

const extraSounds = [
  new Howl({
    src: ['./assets/audio/bites.mp3']
  }),
  new Howl({
    src: ['./assets/audio/follows_me.mp3']
  }),
  new Howl({
    src: ['./assets/audio/surprise.mp3']
  })
];

let normal;
let bark;

function setImages() {
  if (window.innerHeight >= window.innerWidth) {
    // portrait
    normal = document.getElementById('normal-portrait');
    bark = document.getElementById('bark-portrait');
  } else {
    // landscape
    normal = document.getElementById('normal-land');
    bark = document.getElementById('bark-land');
  }
}

function danielBark() {
  const barkIndex = Math.floor(Math.random() * barkSounds.length);
  barkSounds[barkIndex].play();

  if (Math.floor(Math.random() * 3) == 1) {
    // 1 in 5 chance to play sound
    const extraIndex = Math.floor(Math.random() * extraSounds.length);
    extraSounds[extraIndex].play();
  }

  setImages();

  normal.style.display = 'none';
  bark.style.display = 'inline-block';
}

function danielTamed() {
  setImages();

  normal.style.display = 'inline-block';
  bark.style.display = 'none';
}

document.addEventListener('mousedown', e => {
  danielBark();
});
document.addEventListener('mouseup', e => {
  danielTamed();
});
document.addEventListener('touchstart', e => {
  danielBark();
});
document.addEventListener('touchend', e => {
  danielTamed();
});
document.addEventListener('touchcancel', e => {
  danielTamed();
});
