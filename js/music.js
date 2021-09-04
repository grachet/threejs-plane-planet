let isMute = false

// create an AudioListener and add it to the camera
const listener = new THREE.AudioListener();
camera.add(listener);

// create a global audio source
const sound = new THREE.Audio(listener);

// load a sound and set it as the Audio object's buffer
const audioLoader = new THREE.AudioLoader();
audioLoader.load(`./music/music.mp3`, function (buffer) {
    sound.setBuffer(buffer);
    sound.setLoop(true);
    sound.setVolume(0.2);
    sound.play();
});

var soundIcon = document.getElementById('soundIcon');
soundIcon.addEventListener("click", function (e) {
    if (isMute) {
        isMute = false
        soundIcon.src = `./images/sound.svg`;
        sound.play();
    } else {
        isMute = true
        soundIcon.src = `./images/no-sound.svg`;
        sound.pause();
    }
});

window.addEventListener("keydown", function (e) {
    if (e.key === "m") {
        if (isMute) {
            isMute = false
            soundIcon.src = `./images/sound.svg`;
            sound.play();
        } else {
            isMute = true
            soundIcon.src = `./images/no-sound.svg`;
            sound.pause();
        }
    }
});

