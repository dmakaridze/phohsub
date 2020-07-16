import { gsap } from "gsap";

class SVG5 {
    constructor() {
        gsap.set("#svg-5-boy", {transformOrigin: "bottom"});
        this.anime1 = gsap.to("#svg-5-boy",{
            scale: 1.5,
            duration: 40,
            paused: true,
            repeat: -1,
            yoyoEase: "power2.inOut",
        });
        gsap.set("#svg-5-hand", {transformOrigin: "center"});
        this.anime2 = gsap.to("#svg-5-hand",{
            scale: 1.5,
            x: window.innerWidth/10,
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

export default SVG5;