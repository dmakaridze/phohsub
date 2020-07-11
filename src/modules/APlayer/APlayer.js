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
        this.audio = new Plyr(this.audio);
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
    }

    /**
     *
     */
    play() {
        this.audio.play();
    }

    /**
     *
     */
    pause() {
        if (this.audio.playing){
            this.audio.pause();
        }
    }

    /**
     *
     */
    mute() {
        this.audio.muted = true;
    }

    /**
     *
     */
    unmute() {
        this.audio.muted = false;
    }
}

export default APlayer;