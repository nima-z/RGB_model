function random() {
    return Math.floor(Math.random() * 256);
}

function randomColor() {
    const r = random();
    const g = random();
    const b = random();
    const rgbList = [r, g, b]
    return rgbList;
}

function divColor() {
    const rgb = randomColor();
    divRed.style.backgroundColor = `rgb(${rgb[0]},0,0)`;
    divRed.innerText = `${rgb[0]}`;

    divGreen.style.backgroundColor = `rgb(0,${rgb[1]},0)`;
    divGreen.innerText = `${rgb[1]}`;

    divBlue.style.backgroundColor = `rgb(0,0,${rgb[2]})`;
    divBlue.innerText = `${rgb[2]}`;

    return rgb;
}

function changeBackColor() {
    const rgb = divColor();
    const backColor = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`
    body.style.backgroundColor = backColor;
    h1.innerText = backColor;

}

const btn = document.querySelector("button");
const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const divRed = document.querySelector("#div1");
const divGreen = document.querySelector("#div2");
const divBlue = document.querySelector("#div3");

btn.addEventListener('click', changeBackColor);

