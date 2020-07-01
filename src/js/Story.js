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
        this.lang = lang;
        this.el = document.createElement("div");
        this.el.id = id;
    }
}

export default Story;