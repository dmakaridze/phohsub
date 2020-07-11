import "./AudioPlayer.scss";

class AudioPlayer {
    constructor() {
        this.el = document.createElement("div");
        this.el.classList.add("audio-player");
        this.audio = new Audio();
        this.el.appendChild(this.audio);
        this.audio.type= 'audio/mpeg';

        let ctrls = document.createElement("div");
        ctrls.classList.add("audio-player-controls");
        this.el.appendChild(ctrls);

        this.playBtn = document.createElement("a");
        this.playBtn.classList.add("button");
        this.playBtn.id = "play-btn";
        ctrls.appendChild(this.playBtn);
        this.muteBtn = document.createElement("a");
        this.muteBtn.classList.add("button");
        this.muteBtn.id = "mute-btn";
        ctrls.appendChild(this.muteBtn);
        this.seek = document.createElement("progress");
        this.seek.classList.add("seek");
        this.seek.id = "seek";
        this.seek.value = 0.5;
        ctrls.appendChild(this.seek);
    }

    set(src) {
        this.audio.src = src;
    }

    play() {
        this.audio.play();
    }

    pause() {
        this.audio.pause();
    }

    mute() {
        this.audio.muted = true;
    }

    unmute(){
        this.audio.muted = false;
    }
}

export default AudioPlayer;