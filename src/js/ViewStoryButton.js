class ViewStoryButton {
    constructor() {
        /**
         *
         * @type {HTMLDivElement}
         */
        this.el = document.createElement("div");
        this.el.id = "view-story";
        /**
         *
         * @type {HTMLButtonElement}
         */
        this.btn = document.createElement("button");
        this.btn.id = "view-story-btn";
        this.btn.classList.add("flat-btn");
        this.btn.innerText = "ნახე ისტორია";
        this.el.appendChild(this.btn);
    }

    /**
     *
     * @param {Story} story
     */
    addStory(story){
        this.btn.addEventListener("click", ()=>{
            this.el.style.pointerEvents = "none";

        });
    }
}

export default ViewStoryButton;