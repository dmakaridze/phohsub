import Plyr from 'plyr';
import "plyr/dist/plyr.css";
import "./APlayer.scss";

/**
 *
 */
class APlayer {
    /**
     *
     */
    constructor() {
        this.el = document.createElement("div");
        this.el.classList.add("audio-player");
        this.audio = new Audio();
        this.el.appendChild(this.audio);
        this.audio.type = 'audio/mpeg';
        this.audio = new Plyr(this.audio, {
            blankVideo: "audio/silence.mp3",
            controls: ['play', 'progress', 'current-time', 'mute', 'volume'],
        });
    }

    /**
     *
     * @param src
     */
    set(src) {
        this.audio.source = {
            type: 'audio',
            title: '',
            sources: [
                {
                    src: src,
                    type: 'audio/mp3',
                },
            ],
        };
        return this;
    }

    /**
     *
     */
    play() {
        this.audio.play();
        return this;
    }

    /**
     *
     */
    pause() {
        if (this.audio.playing){
            this.audio.pause();
        }
        return this;
    }

    /**
     *
     */
    mute() {
        this.audio.muted = true;
        return this;
    }

    /**
     *
     */
    unmute() {
        this.audio.muted = false;
        return this;
    }

    show(){
        this.el.style.display = "block";
        return this;
    }

    hide(){
        this.el.style.display = "none";
        return this;
    }

    showProgress(){
        this.el.classList.remove("hide-progress");
    }

    hideProgress(){
        this.el.classList.add("hide-progress");
    }
}

export default APlayer;