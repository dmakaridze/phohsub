import "swiper/css/swiper.css"
import Swiper from "swiper";
import StoryData from "../json/story.json";
import Slide from "./Slide";

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

        for (let i =0; i<StoryData.slides.length; i++){
            let slide = new Slide(StoryData.slides[i], this);
            swWrapper.append(slide.el);
            this.slides[i] = slide;
        }

        let swPagination = document.createElement("div");
        swPagination.classList.add("swiper-pagination");
        swContainer.append(swPagination);
    }

    init() {
        this.sw = new Swiper('.swiper-container', {
            effect: "fade",
            mousewheel: true,
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            scrollbar: {
                el: '.swiper-scrollbar',
            },
            on: {
                transitionStart: function () {
                    console.log("transitionStart");
                },
                transitionEnd: function () {
                    console.log("transitionEnd");
                }
            }
        })
        return this;
    }

    resize() {
        return this;
    }
}

export default Story;

/*




    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- If we need scrollbar -->
    <div class="swiper-scrollbar"></div>


 */