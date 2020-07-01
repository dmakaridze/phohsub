import './css/styles.scss';

function component() {
    const element = document.createElement('div');
    element.innerText = "Cactus";
    return element;
}

document.body.appendChild(component());