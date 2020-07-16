import { gsap } from "gsap";

class SVG3 {
    constructor() {
        this.anime = anime({
            targets: "#svg-7-officer",
            translateX: 100,
            duration: 20000,
            delay: 100,
            direction: 'alternate',
            loop: true,
            autoplay: false,
            easing: 'linear'
        });
    }

    play(){
        this.anime.play();
    }

    pause(){
        this.anime.pause();
    }
}

export default SVG3;