import Mustache from "mustache";
import ModalTpl from "../templates/InfoModal.tpl.html";
import InfoTemplates from "../templates/info-templates.tpl.html";

class InfoModal {
    constructor() {
        this.name = "info-modal";
        let infoPageList = document.querySelector("#info-page ul.info");
        let infoTemplatesWrapper = document.createElement("div");
        infoTemplatesWrapper.innerHTML = InfoTemplates;
        let templates = infoTemplatesWrapper.getElementsByClassName("info-template");
        let self = this;
        this.triggers = [];
        for (let i = 0; i < templates.length; i++) {
            let li = document.createElement("li");
            let trigger = document.createElement("a");
            trigger.classList.add("info-modal-trigger");
            trigger.dataset.id = templates[i].id;
            trigger.dataset.html = templates[i].innerHTML;
            trigger.innerHTML = templates[i].querySelector("h3").innerHTML;
            trigger.addEventListener("click", function () {
                self.show(this);
                history.pushState({info: i}, "", "#i-" + (i + 1));
            });
            li.appendChild(trigger);
            this.triggers.push(trigger);
            infoPageList.appendChild(li);
        }
        let regex = RegExp(/#i-(\d+)/, "i");
        window.addEventListener('popstate', (event) => {
            if (self.visible) {
                self.hide();
            } else {
                let matches = regex.exec(window.location.hash);
                if (matches) {
                    let t = parseInt(matches[matches.length - 1]);
                    self.show(self.triggers[t - 1]);
                }
            }
        });
        infoTemplatesWrapper = null;
        this.modal = document.createElement("div");
        this.modal.classList.add("info-modal");
        document.body.appendChild(this.modal);
        this.visible = false;
    }

    show(el) {
        let self = this;
        this.visible = true;
        this.state = history.state;
        this.hash = window.location.hash;
        console.log(this.hash);
        this.modal.innerHTML = Mustache.render(ModalTpl, {
            content: el.dataset.html
        });
        this.modal.classList.add("show-modal");
        this.modal.getElementsByClassName("modal-close-btn")[0].addEventListener("click", () => {
            history.back();
        });
    }

    hide() {
        this.visible = false;
        this.modal.classList.remove("show-modal");
    }
}

export default InfoModal;