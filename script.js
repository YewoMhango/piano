const KEYMAP = {
  z: "C1",
  x: "D1",
  c: "E1",
  v: "F1",
  b: "G1",
  s: "Cs1",
  d: "Ds1",
  g: "Fs1",
  q: "A1",
  w: "B1",
  1: "Gs1",
  2: "As1",
  e: "C2",
  r: "D2",
  t: "E2",
  4: "Cs2",
  5: "Ds2",
  y: "F2",
  u: "G2",
  i: "A2",
  o: "B2",
  7: "Fs2",
  8: "Gs2",
  9: "As2",
  p: "C3",
  "[": "D3",
  "]": "E3",
  "-": "Cs3",
  "=": "Ds3",
  n: "F3",
  m: "G3",
  ",": "A3",
  ".": "B3",
  "/": "C4",
  j: "Fs3",
  k: "Gs3",
  l: "As3",
};

const AUDIOS = new Map();

document.querySelectorAll(".key").forEach((keyElement) => {
  keyElement.onmousedown = keyElement.ontouchstart = (ev) => {
    notePlayed(keyElement.id);
    console.log(keyElement.id);
  };

  keyElement.onmouseup = keyElement.ontouchend = (ev) => {
    noteStopped(keyElement.id);
    console.log(keyElement.id);
  };

  AUDIOS.set(keyElement.id, keyElement.querySelector("audio"));
});

document.addEventListener("keydown", (ev) => {
  if (Object.keys(KEYMAP).includes(ev.key.toLowerCase())) {
    notePlayed(KEYMAP[ev.key.toLowerCase()]);
  }
});

document.addEventListener("keyup", (ev) => {
  if (Object.keys(KEYMAP).includes(ev.key.toLowerCase())) {
    noteStopped(KEYMAP[ev.key.toLowerCase()]);
  }
});

function notePlayed(id) {
  if (!document.getElementById(id).classList.contains("pressed")) {
    document.getElementById(id).classList.add("pressed");

    AUDIOS.get(id).play();
  }
}

function noteStopped(id) {
  document.getElementById(id).classList.remove("pressed");

  let audio = AUDIOS.get(id);

  audio.pause();
  audio.currentTime = 0;
}
