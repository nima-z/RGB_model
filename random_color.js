const btn = document.querySelector(".btn");
const h1 = document.querySelector("h1");
const red = document.querySelector("#cirR");
const green = document.querySelector("#cirG");
const blue = document.querySelector("#cirB");
const greenRed = document.querySelector("#gR");
const blueRed = document.querySelector("#bR");
const blueGreen = document.querySelector("#bG");
const blueGreenRed = document.querySelector("#bgr");
const nav = document.querySelector("nav");

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

function circleColor() {
    const rgb = randomColor();
    red.style.backgroundColor = `rgb(${rgb[0]},0,0)`;
    // red.innerText = `${rgb[0]}`;

    green.style.backgroundColor = `rgb(0,${rgb[1]},0)`;
    // green.innerText = `${rgb[1]}`;

    blue.style.backgroundColor = `rgb(0,0,${rgb[2]})`;
    // blue.innerText = `${rgb[2]}`;

    greenRed.style.backgroundColor = `rgb(${rgb[0]},${rgb[1]},0)`;
    blueRed.style.backgroundColor = `rgb(${rgb[0]},0,${rgb[2]})`;
    blueGreen.style.backgroundColor = `rgb(0,${rgb[1]},${rgb[2]})`;
    blueGreenRed.style.backgroundColor = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
    return rgb;
}

function changeBackColor() {
    const rgb = circleColor();
    const backColor = `RGB(${rgb[0]},${rgb[1]},${rgb[2]})`
    document.body.style.backgroundColor = backColor;
    nav.style.color = backColor;
    h1.innerText = `RGB (${rgb[0]},${rgb[1]},${rgb[2]})`


}


//  command Code :
btn.addEventListener('click', changeBackColor);