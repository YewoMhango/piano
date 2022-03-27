const KEYMAP = {
    a: "D-2",
    z: "E2",
    x: "F2",
    c: "G2",
    v: "A2",
    d: "F-2",
    f: "G-2",
    g: "A-2",
    b: "B2",
    n: "C3",
    m: "D3",
    ",": "E3",
    ".": "F3",
    "/": "G3",
    j: "C-3",
    k: "D-3",
    ";": "F-3",
    q: "A3",
    w: "B3",
    1: "G-3",
    2: "A-3",
    e: "C4",
    r: "D4",
    t: "E4",
    4: "C-4",
    5: "D-4",
    y: "F4",
    u: "G4",
    i: "A4",
    o: "B4",
    7: "F-4",
    8: "G-4",
    9: "A-4",
    p: "C5",
    "[": "D5",
    "]": "E5",
    "-": "C-5",
    "=": "D-5",
    "\\": "F5",
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
