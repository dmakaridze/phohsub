import "./LanguageSwitcher.scss";

class LanguageSwitcher {
    constructor (options){
        if (typeof options["languages"] !== "undefined"){
            this.targets = [];
            this.el = document.createElement("ul");
            this.el.id = "language-switcher";
            this.el.classList.add("language-switcher");
            this.languages = [];
            this.current = -1;
            for (let lang in options["languages"]){
                let el = document.createElement("li");
                el.innerText = options["languages"][lang];
                el.dataset.lang = lang;
                this.el.appendChild(el);
                this.languages.push(el);
                el.addEventListener("click", (ev)=>{
                    let lang = ev.target.dataset.lang;
                    this.next();
                    console.log(lang, this.targets);
                })
            }
        }
    }

    append (obj) {
        this.targets.push(obj);
    }

    setActive (lang) {
        for (let i = 0; i < this.languages.length; i++){
            if (this.languages[i].dataset.lang === lang){
                this.languages[i].classList.add("active");
                this.current = i;
                document.documentElement.lang = lang;
            } else {
                this.languages[i].classList.remove("active");
            }
        }
    }

    next () {
        if (this.current < this.languages.length - 1){
            this.current++;
        } else {
            this.current = 0;
        }
        this.setActive(this.languages[this.current].dataset.lang);
    }
}

export default LanguageSwitcher;