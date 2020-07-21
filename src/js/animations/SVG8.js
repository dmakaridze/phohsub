import { gsap } from "gsap";

class SVG8 {
    constructor() {
        let svg = document.getElementById("svg-8");
        svg.style.background = "none";
        svg.style.zIndex = "3";
        let wrapper = svg.parentElement;
        wrapper.style.backgroundColor = "#050021";
        let soundAnim = document.createElement("div");
        soundAnim.classList.add("voice-coder");
        for (let i = 0; i<100; i++){
            let span = document.createElement("span");
            soundAnim.appendChild(span);
        }
        wrapper.insertBefore(soundAnim, svg);
        gsap.set("#svg-8-boy", {transformOrigin: "bottom"});
        this.anime1 = gsap.to("#svg-8-boy",{
            scale: 1.5,
            opacity: 0.5,
            duration: 40,
            paused: true,
            repeat: -1,
            yoyoEase: "power2.inOut",
        });
    }

    play(){
        this.anime1.play();
    }

    pause(){
        this.anime1.pause();
    }
}

export default SVG8;