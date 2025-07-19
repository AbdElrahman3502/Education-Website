console.log("Welcome");

let nav = document.getElementById("calling");
let collapse= document.getElementById("callnav");
let open = false;

collapse.onclick = () => {
    if (!open) {
        nav.style.height = '70vh';
        open = true
    } else {
        nav.style.height = '0px';
        open = false
    }
}

let p = document.getElementsByClassName('para');
let btn = document.getElementsByClassName('less');

for (let i = 0; i < p.length; i++) {
    let paragraph = p[i];
    let button = btn[i];
    button.onclick = () => {
        paragraph.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ea ab. Voluptates velit reiciendis fish dog cat elephant spider ant Shell jellyfish octopus whale eagle bird chicken butterfly giraffe.";
        button.style.opacity = "0";
        button.style.marginBottom = "-2rem";
    }
    button.onmouseout = () => {
        paragraph.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ea ab. Voluptates velit reiciendis fish dog cat elephant spider ant.";
        button.style.opacity = "1";
        button.style.marginBottom = "1rem";
    }
}


for (var i = 0; i < 4; i++) {
    let number = document.querySelector(`.num${i}`);
    number.innerHTML = 3000
}

function math(h) {
    let number = document.querySelector(`.num${h}`);
    if (number.innerHTML == 3000) {
        document.querySelector(`#star${h}`).style.color = "yellow";
        number.style.color = "yellow";
        let one = +number.innerHTML + 1;
        localStorage.setItem('num', JSON.stringify(one));
        number.innerHTML = one;
    } else {
        document.querySelector(`#star${h}`).style.color = "#fff";
        number.style.color = "#fff";
        one = Number(number.innerHTML) - 1;
        localStorage.num = JSON.stringify(one);
        number.innerHTML = localStorage.num;
    }
}