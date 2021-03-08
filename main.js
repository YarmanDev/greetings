const text = document.querySelector('.text');

text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

const element = document.querySelectorAll('span');

function textMoving() {
    text.style.display = 'block';
    lenght = element.length;
    for (let i = 0; i < lenght; i++) {
        element[i].style.animationDelay = `${i * 0.07}s`;
    }
}


let lol = document.querySelectorAll(".icon-hover path");

function showFlower() {
    for (let index = 0; index < lol.length; index++) {
        lol[index].style.display = 'block';
        lol[index].classList.add('svghover');
    }
}
setTimeout(textMoving, 2400);
setTimeout(showFlower, 5000);