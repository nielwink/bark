'use strict';

const bgm = new Howl({
  src: ['./assets/audio/bgm.mp3'],
  autoplay: true,
  loop: true,
  volume: 0.5
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
let otherN;
let otherB;

function onResize() {
  if (window.innerHeight >= window.innerWidth) {
    normal = document.getElementById('normal-portrait');
    bark = document.getElementById('bark-portrait');
    otherN = document.getElementById('normal-land');
    otherB = document.getElementById('bark-land');
  } else {
    normal = document.getElementById('normal-land');
    bark = document.getElementById('bark-land');
    otherN = document.getElementById('normal-portrait');
    otherB = document.getElementById('bark-portrait');
  }

  otherN.style.display = 'none';
  otherB.style.display = 'none';
}

function danielBark() {
  const barkIndex = Math.floor(Math.random() * barkSounds.length);
  barkSounds[barkIndex].play();

  if (Math.floor(Math.random() * 3) == 1) {
    // 1 in 5 chance to play sound
    const extraIndex = Math.floor(Math.random() * extraSounds.length);
    extraSounds[extraIndex].play();
  }

  normal.style.display = 'none';
  bark.style.display = 'inline-block';
}

function danielTamed() {
  normal.style.display = 'inline-block';
  bark.style.display = 'none';
}

document.addEventListener('mousedown', e => {
  danielBark();
});
document.addEventListener('mouseup', e => {
  danielTamed();
});
document.addEventListener(
  'touchstart',
  e => {
    danielBark();
    e.preventDefault();
  },
  { passive: false }
);
document.addEventListener(
  'touchmove',
  e => {
    e.preventDefault();
  },
  { passive: false }
);
document.addEventListener('touchend', e => {
  danielTamed();
});
document.addEventListener('touchcancel', e => {
  danielTamed();
});
window.addEventListener('resize', onResize);

onResize();
