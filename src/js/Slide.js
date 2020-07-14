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
        this.src = data.src;
        this.audio = data.audio;
        this.caption = data.caption;
        this.type = data.type;
        this.el = document.createElement("div");
        this.el.classList.add("swiper-slide");
        if (this.type === "svg" || this.type === "html"){
            fetch(this.src)
                .then((response) => response.text())
                .then((template) => {
                    this.el.innerHTML = Mustache.render(template, {});
                    if (this.type === "svg"){
                        this.svg = this.el.children[0];
                    } else if (this.type === "html"){

                    }
                    this.resize();
                    document.body.dispatchEvent(parent.slideLoad);
                });
        }
    }

    /**
     *
     */
    resize() {
        if (this.type === "svg"){
            this.h = window.innerHeight - window.headerHeight - window.playerHeight;
            let dh = (this.h - this.svg.clientHeight) / 2;
            let dw = (window.innerWidth - this.svg.clientWidth) / 2;
            this.svg.style.top = dh + "px";
            this.svg.style.left = dw + "px";
        }
    }

    /**
     *
     */
    play(){
        if (this.audio){
            this.parent.audio.set(this.audio).show().play();
        } else {
            this.parent.audio.hide();
        }
    }
}

export default Slide;