import Mustache from "mustache";
import ModalTpl from "../templates/InfoModal.tpl.html";

class InfoModal {
    constructor() {
        this.triggers = document.getElementsByClassName("info-modal-trigger");
        let self = this;
        for (let i=0; i<this.triggers.length; i++){
            this.triggers[i].addEventListener("click", function () {
                self.show(this.dataset.id);
            });
        }
        this.modal = document.createElement("div");
        this.modal.classList.add("info-modal");
        document.body.appendChild(this.modal);
    }
    show(id){
        this.modal.innerHTML = Mustache.render(ModalTpl, {
            content: document.getElementById(id).innerHTML
        });
        this.modal.classList.add("show-modal");
        this.modal.getElementsByClassName("modal-close-btn")[0].addEventListener("click", ()=>{
            this.hide();
        });
    }
    hide(){
        this.modal.classList.remove("show-modal");
    }
}

export default InfoModal;