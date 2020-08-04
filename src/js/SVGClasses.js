import {gsap,} from "gsap";
import {interpolate} from 'polymorph-js';

class SVGAnim {
    constructor() {
        this.anime = [];
    }

    play() {
        for (let i = 0; i < this.anime.length; i++) {
            this.anime[i].play();
        }
    }

    pause() {
        for (let i = 0; i < this.anime.length; i++) {
            this.anime[i].pause();
        }
    }
}

class SVG1 extends SVGAnim {
    constructor() {
        super();
        gsap.set("#svg-1-face", {transformOrigin: "center"});
        gsap.set("#svg-1-marijuana-leaf", {transformOrigin: "center"});
        this.anime = [
            gsap.fromTo("#svg-1-face", {
                autoAlpha: 1,
                scale: 1,
            }, {
                autoAlpha: 0,
                scale: 1.1,
                duration: 10,
                paused: true,
                repeat: -1,
                yoyoEase: "power2.inOut",
            }),
            gsap.to("#svg-1-marijuana-leaf", {
                rotate: 90,
                duration: 30,
                paused: true,
                repeat: -1,
                yoyoEase: "power2.inOut",
            })
        ];
    }
}

class SVG2 extends SVGAnim {
    constructor() {
        super();
        this.anime = [gsap.to("#svg-2-all", {
            scale: 1.2,
            transformOrigin: "top",
            duration: 30,
            paused: true,
            repeat: -1,
            yoyoEase: "power2.inOut",
        })];
        for (let i = 1; i < 4; i++) {
            this.anime.push(
                gsap.to("#svg-2-head-" + i, {
                    scale: 1 + i / 20,
                    opacity: .5 / i,
                    transformOrigin: "bottom",
                    duration: 20,
                    paused: true,
                    repeat: -1,
                    yoyoEase: "power2.inOut",
                })
            );
        }
    }
}

class SVG3 extends SVGAnim {
    constructor() {
        super();
    }
}

class SVG4 extends SVGAnim {
    constructor() {
        super();
        const interpolator = interpolate(
            ['#svg-4-pills-spot-start', '#svg-4-pills-spot-end'],
            {}
        );
        this.anime = [
            gsap.to("#svg-4-girl-01", {
                scale: 1.5,
                duration: 40,
                paused: true,
                repeat: -1,
                yoyoEase: "power2.inOut",
            }),
            gsap.to("#svg-4-boy-01", {
                scale: 1.2,
                x: window.innerWidth / 10,
                duration: 25,
                delay: -5,
                paused: true,
                repeat: -1,
                yoyoEase: "power2.inOut",
            }),
            gsap.fromTo('#svg-4-smoke .bubble', {
                opacity: 1,
                y: '+=10',
                scale: .8,
                transformOrigin: 'center',
                paused: true,
            }, {
                duration: 6,
                opacity: 0,
                y: '-=80',
                scale: 2,
                stagger: {
                    each: 3,
                    repeat: -1
                }
            }),
            gsap.to("#svg-4-drugs", {
                transformOrigin: 'center',
                rotate: 360,
                duration: 50,
                paused: true,
                repeat: -1,
                ease: "none",
            }),
            gsap.to("#svg-4-pills-spot", {
                duration: 30,
                repeat: -1,
                paused: true,
                onUpdate: function () {
                    this._targets[0].setAttribute("d", interpolator(this._time / 30));
                },
                yoyoEase: "power2.inOut",
            }),
        ];
    }
}

class SVG5 extends SVGAnim {
    constructor() {
        super();
        gsap.set("#svg-5-boy", {transformOrigin: "bottom"});
        gsap.set("#svg-5-hand", {transformOrigin: "center"});
        this.anime = [
            gsap.to("#svg-5-boy", {
                scale: 1.5,
                duration: 40,
                paused: true,
                repeat: -1,
                yoyoEase: "power2.inOut",
            }),
            gsap.to("#svg-5-hand", {
                scale: 1.5,
                y: window.innerHeight / 10,
                duration: 25,
                paused: true,
                repeat: -1,
                yoyoEase: "power2.inOut",
            }),
        ];
        let r = [3, 5, 7, 11, 13, 17];
        for (let i = 0; i < 6; i++) {
            let eid = "#svg-5-p" + (i + 1);
            gsap.set(eid, {opacity: "0"});
            this.anime.push(
                gsap.fromTo(eid, {
                    opacity: 0
                }, {
                    duration: r[i] / 17,
                    delay: -r[i] / 5,
                    opacity: .15,
                    paused: true,
                    repeat: -1,
                    yoyo: true,
                })
            );
        }
    }
}

class SVG6 extends SVGAnim {
    constructor() {
        super();
        document.getElementById("")
        const interpolator = interpolate(
            ['#svg-6-blood-01', '#svg-6-blood-01-1', '#svg-6-blood-spot'],
            {}
        );
        this.anime = [
            gsap.to("#svg-6-all", {
                scale: 1.2,
                transformOrigin: "top",
                duration: 30,
                paused: true,
                repeat: -1,
                yoyoEase: "power2.inOut",
            }),
            gsap.to("#svg-6-blood-anim", {
                duration: 30,
                repeat: -1,
                paused: true,
                onUpdate: function () {
                    this._targets[0].setAttribute("d", interpolator(this._time / 30));
                },
            }),
        ];
    }
}

class SVG7 extends SVGAnim {
    constructor() {
        super();
        this.anime = [
            gsap.to("#svg-7-officer", {
                x: -window.innerWidth / 5,
                duration: 30,
                paused: true,
                repeat: -1,
                yoyoEase: "power2.inOut",
            }),
            gsap.to("#svg-7-boy", {
                x: window.innerWidth / 6,
                duration: 25,
                paused: true,
                repeat: -1,
                yoyoEase: "power2.inOut",
            }),
        ];
    }
}

class SVG8 extends SVGAnim {
    constructor() {
        super();
        let svg = document.getElementById("svg-8");
        svg.style.background = "none";
        svg.style.zIndex = "3";
        let wrapper = svg.parentElement;
        wrapper.style.backgroundColor = "#050021";
        let soundAnim = document.createElement("div");
        soundAnim.classList.add("voice-coder");
        for (let i = 0; i < 100; i++) {
            let span = document.createElement("span");
            soundAnim.appendChild(span);
        }
        wrapper.insertBefore(soundAnim, svg);
        gsap.set("#svg-8-boy", {transformOrigin: "bottom"});
        this.anime = [gsap.to("#svg-8-boy", {
            scale: 1.5,
            opacity: 0.5,
            duration: 40,
            paused: true,
            repeat: -1,
            yoyoEase: "power2.inOut",
        })];
    }
}

class SVG9 extends SVGAnim {
    constructor() {
        super();
    }
}

class SVG10 extends SVGAnim {
    constructor() {
        super();
        const opts = {
            duration: 30,
            repeat: -1,
            paused: true,
            yoyoEase: "power2.inOut",
            transformOrigin: "bottom",
        };
        this.anime = [
            gsap.to("#svg-10-boy", Object.assign({}, opts, {
                scale: 1.3,
            })),
            gsap.to("#svg-10-kid", Object.assign({}, opts, {
                scale: .7,
            })),
            gsap.to("#svg-10-police-01", Object.assign({}, opts, {
                x: -window.innerWidth / 10,
            })),
            gsap.to("#svg-10-police-02", Object.assign({}, opts, {
                scale: 1.2,
            })),
        ];
        for (let i = 1; i < 6; i++) {
            this.anime.push(gsap.to("#svg-10-cloud-0" + i, Object.assign({}, opts, {
                duration: 15 - i * 1.5,
                x: window.innerWidth / 10,
            })));
        }
        for (let i = 1; i < 6; i++) {
            this.anime.push(gsap.to("#svg-10-tree-0" + i, Object.assign({}, opts, {
                duration: 15 - i * 1.5,
                rotate: 5,
            })));
        }
    }
}

class SVG11 extends SVGAnim {
    constructor() {
        super();
    }
}

class SVG12 extends SVGAnim {
    constructor() {
        super();
    }
}

const classes = {
    SVG1, SVG2, SVG3, SVG4, SVG5, SVG6, SVG7, SVG8, SVG9, SVG10, SVG11, SVG12
};

let SVGClassesLength = 0;
for (let i in classes) SVGClassesLength++;

class SVGClasses {
    constructor(className, opts) {
        return new classes[className](opts);
    }
}

export {SVGClasses, SVGClassesLength};