import Mustache from "mustache";

/**
 *
 */
class Slide {
    /**
     *
     * @param data
     * @param parent
     */
    constructor(data, parent) {
        this.parent = parent;
        this.id = data.id;
        this.img = data.img;
        this.audio = data.audio;
        this.caption = data.caption;
        this.type = data.type;
        this.el = document.createElement("div");
        this.el.classList.add("swiper-slide");
        fetch("svg/" + this.img)
            .then((response) => response.text())
            .then((template) => {
                this.el.innerHTML = Mustache.render(template, {});
                this.svg = this.el.children[0];
                this.resize();
                let fileName = document.createElement("div");
                fileName.innerHTML = this.img;
                fileName.classList.add("fileName");
                this.el.appendChild(fileName);
            });
    }

    /**
     *
     */
    resize() {
        this.h = window.innerHeight - window.headerHeight - window.playerHeight;
        let dh = (this.h - this.svg.clientHeight) / 2;
        let dw = (window.innerWidth - this.svg.clientWidth) / 2;
        this.svg.style.top = dh + "px";
        this.svg.style.left = dw + "px";
    }

    /**
     *
     */
    play(){
        if (this.type === "audio"){
            this.parent.audio.set(this.audio);
            this.parent.audio.play();
        }
    }
}

export default Slide;