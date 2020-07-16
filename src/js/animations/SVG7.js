import { gsap } from "gsap";

class SVG7 {
    constructor() {
        this.anime1 = gsap.to("#svg-7-officer", {
            x: -window.innerWidth/5,
            duration: 30,
            paused: true,
            repeat: -1,
            yoyoEase: "power2.inOut",
        });
        this.anime2 = gsap.to("#svg-7-boy", {
            x: window.innerWidth/6,
            duration: 25,
            paused: true,
            repeat: -1,
            yoyoEase: "power2.inOut",
        });
    }

    play(){
        this.anime1.play();
        this.anime2.play();
    }

    pause(){
        this.anime1.pause();
        this.anime2.pause();
    }
}

export default SVG7;