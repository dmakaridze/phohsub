import "./modules/ResetCSS/reset.css";
import LanguageSwitcher from "./modules/LanguageSwitcher/LanguageSwitcher";
import ViewStoryButton from "./modules/ViewStoryButton/ViewStoryButton";
import Story from "./js/Story";
import Header from "./modules/Header/Header";

import "./css/styles.scss";
import ScrollIcon from "./modules/ScrollIcon/ScrollIcon";

"use strict";

window.headerHeight = 45;
window.playerHeight = 52;

document.onreadystatechange = () => {
    if (document.readyState === "interactive") {
        const story = new Story('story', 'ka');
        if (!story.created) return;
        document.body.appendChild(story.el);
        const langSwitcher = new LanguageSwitcher({
            languages: {
                ka: "ENG",
                en: "ქარ"
            }
        });
        langSwitcher.setActive("ka");
        langSwitcher.append(story);
        let header = new Header("svg/cactus-green.svg", {
            langSwitcher: langSwitcher.el
        });
        header.el.style.height = window.headerHeight + "px";
        document.body.appendChild(header.el);
        const viewStoryBtn = new ViewStoryButton();
        document.body.appendChild(viewStoryBtn.el);
        viewStoryBtn.addStory(story);
        window.story = story;
        story.init();
        window.onresize = () => story.resize();
        const scrollIcon = new ScrollIcon();
        document.body.appendChild(scrollIcon.el);
        viewStoryBtn.el.addEventListener("click", ()=>{
            scrollIcon.el.style.display = "flex";
        });
    }
};