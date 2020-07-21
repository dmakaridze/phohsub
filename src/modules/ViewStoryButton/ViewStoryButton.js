import "bpg-glaho-web-caps";
import "./ViewStoryButton.scss";

class ViewStoryButton {
    constructor() {
        /** @type {HTMLDivElement} */
        this.el = document.createElement("div");
        this.el.classList.add("view-story-overlay");
        /** @type {HTMLDivElement} */
        let wr = document.createElement("div");
        wr.classList.add("view-story-btn-wrapper");
        this.el.appendChild(wr);
        /** @type {HTMLButtonElement} */
        this.btn = document.createElement("button");
        this.btn.classList.add("view-story-btn");
        this.btn.classList.add("flat-btn");
        this.btn.innerText = "ნახე ისტორია";
        wr.appendChild(this.btn);
    }

    /**
     *
     * @param {Story} story
     */
    addStory(story){
        this.btn.addEventListener("click", ()=>{
            this.el.style.pointerEvents = "none";
            this.el.style.display = "none";
            story.start();
        });
    }
}

export default ViewStoryButton;