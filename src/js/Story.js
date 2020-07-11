import "swiper/css/swiper.css"
import Swiper from "swiper";
import StoryData from "../json/story.json";
import Slide from "./Slide";
import APlayer from "../modules/APlayer/APlayer";

/**
 * @class Story
 */
class Story {
    /**
     *
     * @param {string} id
     * @param {string} lang
     */
    constructor(id, lang) {
        if (typeof StoryData.slides === "undefined" || StoryData.slides.length === 0) {
            this.created = false;
            return;
        } else {
            this.created = true;
        }
        this.lang = lang;
        this.el = document.createElement("div");
        this.el.id = id;

        let swContainer = document.createElement("div");
        swContainer.classList.add("swiper-container");
        this.el.append(swContainer);

        let swWrapper = document.createElement("div");
        swWrapper.classList.add("swiper-wrapper");
        swContainer.append(swWrapper);

        this.slides = [];

        for (let i = 0; i < StoryData.slides.length; i++) {
            let slide = new Slide(StoryData.slides[i], this);
            swWrapper.append(slide.el);
            this.slides[i] = slide;
        }

        let swPagination = document.createElement("div");
        swPagination.classList.add("swiper-pagination");
        swContainer.append(swPagination);

        this.audio = new APlayer();
        document.body.appendChild(this.audio.el);
        window.playerHeight = this.audio.el.clientHeight;
    }

    /**
     *
     * @returns {Story}
     */
    init() {
        let story = this;
        this.sw = new Swiper(".swiper-container", {
            effect: "fade",
            mousewheel: true,
            direction: "vertical",
            pagination: {
                el: ".swiper-pagination",
                //type: "custom",
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + (index + 1) + '</span>';
                },
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            keyboard: {
                enabled: true,
                onlyInViewport: false,
            },
            scrollbar: {
                el: ".swiper-scrollbar",
            },
            on: {
                transitionStart: function () {
                    story.audio.pause();
                },
                transitionEnd: function () {
                    story.slides[this.activeIndex].play();
                }
            }
        });
        return this;
    }

    /**
     *
     * @returns {Story}
     */
    resize() {
        for (let i = 0; i < this.slides.length; i++) {
            this.slides[i].resize();
        }
        return this;
    }

    /**
     *
     */
    start(){
        story.slides[0].play();
    }
}

export default Story;