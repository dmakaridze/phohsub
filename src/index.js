import "./modules/ResetCSS/reset.css";
import LanguageSwitcher from "./modules/LanguageSwitcher/LanguageSwitcher";
import ViewStoryButton from "./modules/ViewStoryButton/ViewStoryButton";
import Story from "./js/Story";
import Header from "./modules/Header/Header";
import "mg-glaho-drunk";
import "./css/styles.scss";
import ScrollIcon from "./modules/ScrollIcon/ScrollIcon";
import InfoModal from "./js/InfoModal";

"use strict";

window.headerHeight = 45;
window.playerHeight = 52;

document.onreadystatechange = () => {
    if (document.readyState === "interactive") {
        let wrapper = document.getElementById("wrapper");
        const story = new Story('story', 'ka');
        window.story = story;
        if (!story.created) return;
        wrapper.appendChild(story.el);
        wrapper.appendChild(story.audio.el);
        const langSwitcher = new LanguageSwitcher({
            languages: {
                ka: "ENG",
                en: "ქარ"
            }
        });
        langSwitcher.setActive("ka");
        langSwitcher.append(story);

        let menu = document.createElement("ul");
        menu.classList.add("main-menu");

        let el = document.createElement("a");
        el.href = "#1";
        el.classList.add("home-link");
        el.innerText = "მთავარი";

        let item = document.createElement("li");
        item.appendChild(el);
        menu.appendChild(item);

        el = document.createElement("a");
        el.href = "#10";
        el.classList.add("info-link");
        el.innerText = "ინფორმაცია ნარკოტიკებზე";
        item = document.createElement("li");
        item.appendChild(el);
        menu.appendChild(item);

        el = document.createElement("a");
        el.href = "#11";
        el.classList.add("credits-link");
        el.innerText = "პროექტი";
        item = document.createElement("li");
        item.appendChild(el);
        menu.appendChild(item);

        let header = new Header("svg/cactus-green.svg", {
            menu: menu,
            langSwitcher: langSwitcher.el
        });
        header.el.style.height = window.headerHeight + "px";
        wrapper.appendChild(header.el);
        const viewStoryBtn = new ViewStoryButton();
        wrapper.appendChild(viewStoryBtn.el);
        window.scrollIcon = new ScrollIcon();
        wrapper.appendChild(scrollIcon.el);
        document.body.addEventListener("storyLoad", ()=>{
            viewStoryBtn.addStory(story);
            story.init();
            viewStoryBtn.el.addEventListener("click", ()=>{
                scrollIcon.el.style.display = "flex";
            });
            const infoModal = new InfoModal();
        });
    }
};