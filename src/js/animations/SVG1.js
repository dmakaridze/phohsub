import { gsap } from "gsap";

class SVG1 {
    constructor() {
        gsap.set("#svg-1-face", {transformOrigin: "center"});
        this.anime1 = gsap.fromTo("#svg-1-face",{
            autoAlpha: 1,
            scale: 1,
        }, {
            autoAlpha: 0,
            scale: 1.1,
            duration: 10,
            paused: true,
            repeat: -1,
            yoyoEase: "power2.inOut",
        });
        gsap.set("#svg-1-marijuana-leaf", {transformOrigin: "center"});
        this.anime2 = gsap.to("#svg-1-marijuana-leaf",{
            rotate: 90,
            duration: 30,
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

export default SVG1;