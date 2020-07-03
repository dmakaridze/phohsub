import Mustache from "mustache";

class Slide {
    constructor(data, parent) {
        this.parent = parent;
        this.id = data.id;
        this.img= data.img;
        this.audio= data.audio;
        this.caption= data.caption;
        this.el = document.createElement("div");
        this.el.classList.add("swiper-slide");

        fetch("svg/" + this.img)
            .then((response) => response.text())
            .then((template) => {
                this.el.innerHTML = Mustache.render(template, { });
            });
    }
}

export default Slide;