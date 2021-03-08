const text = document.querySelector('.text');

text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

const element = document.querySelectorAll('span'),
    svgIcon = document.querySelector('#Capa_1');
x = window.matchMedia("(max-width: 700px)");

function textMoving() {
    text.style.display = 'block';
    lenght = element.length;
    for (let i = 0; i < lenght; i++) {
        element[i].style.animationDelay = `${i * 0.07}s`;
    }
}


let flowerPath = document.querySelectorAll(".icon-hover path");

function showFlower() {
    for (let index = 0; index < flowerPath.length; index++) {
        flowerPath[index].style.display = 'block';
        flowerPath[index].classList.add('svghover');
    }
}

function adaptive(x) {
    if (x.matches) {
        svgIcon.setAttribute("height", 200);
    } else {
        svgIcon.setAttribute("height", 512);
    }

};

adaptive(x);

setTimeout(textMoving, 2400);
setTimeout(showFlower, 5000);
