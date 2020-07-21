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
        this.people = [];
        for (let i=0; i<6; i++){
            let eid = "#svg-5-p" + (i+1);
            gsap.set(eid, {opacity: "0"});
            this.people[i] = gsap.fromTo(eid,  {
                opacity:0
            }, {
                duration: Math.random()*5,
                delay: Math.random()*5,
                opacity: 0.1 + Math.random()/5,
                paused: true,
                repeat: -1,
                yoyoEase: "power2.inOut",
            });
        }
    }

    play(){
        this.anime1.play();
        this.anime2.play();
        for (let i=0; i<6; i++){
            this.people[i].play();
        }
    }

    pause(){
        this.anime1.pause();
        this.anime2.pause();
        for (let i=0; i<6; i++){
            this.people[i].pause();
        }
    }
}

export default SVG5;