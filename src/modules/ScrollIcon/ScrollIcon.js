import "./ScrollIcon.scss";

class ScrollIcon {
    constructor() {
        this.el = document.createElement("div");
        this.el.classList.add("mouse_scroll");
        //let mouse = document.createElement("div");
        //mouse.classList.add("mouse");
        //this.el.appendChild(mouse);
        //let wheel = document.createElement("div");
        //wheel.classList.add("wheel");
        //mouse.appendChild(wheel);
        let div = document.createElement("div");
        this.el.appendChild(div);
        for (let i=0; i<3; i++){
            let sp = document.createElement("span");
            sp.classList.add("m_scroll_arrows", "arr_" + i);
            div.appendChild(sp);
        }
    }

}

export default ScrollIcon;
