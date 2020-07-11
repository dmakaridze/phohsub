import "./Header.scss";
/**
 *
 */
class Header {
    /**
     *
     * @param logo
     * @param children
     */
    constructor(logo, children) {
        this.el = document.createElement("header");
        let brand = document.createElement("img");
        brand.classList.add("brand");
        brand.src = logo;
        this.el.appendChild(brand);
        this.children = children;
        for (let child in this.children){
            this.el.appendChild(this.children[child]);
        }
    }
}

export default Header;