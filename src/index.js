import LanguageSwitcher from "./js/LanguageSwitcher";
import ViewStoryButton from "./js/ViewStoryButton";
import Story from "./js/Story";
import "./css/styles.scss";

"use strict";

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
        document.body.appendChild(langSwitcher.el);
        langSwitcher.setActive("ka");
        langSwitcher.append(story);
        const viewStoryBtn = new ViewStoryButton();
        document.body.appendChild(viewStoryBtn.el);
        viewStoryBtn.addStory(story);
        window.story = story;
        story.resize().init();
        window.onresize = () => story.resize();
    }
};