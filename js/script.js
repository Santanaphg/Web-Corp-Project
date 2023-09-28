const carrusel = document.querySelector("carrusel");
const btnLeft = document.querySelector(".btnLeft");
const btnRight = document.querySelector(".btnRight");
const slider = document.querySelector(".slider");
const img = document.querySelectorAll(".img");
const dot = document.querySelectorAll(".dot");
const li = document.querySelectorAll(".li");
const ul = document.querySelector(".ul");
const a = document.querySelectorAll(".a");


btnLeft.addEventListener("click", e => moveToLeft());
btnRight.addEventListener("click", e => moveToRight());


setInterval(() => {
    moveToRight()
    forEach((cadaDot, i))
}, 4000);


let operacion = 0;
let counter = 0;
let widthimg = 100;


function moveToRight() {
    if (counter >= li.length - 1) {
        counter = 0;
        operacion = 0;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.trasition = "none";
        return;
    }
    counter++;
    operacion = operacion + widthimg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.trasition = "all ease .6s"
}


function moveToLeft() {
    counter--;
    if (counter < 0) {
        counter = li.length - 1;
        operacion = widthimg * (li.length - 1);
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.trasition = "0.6s ease"
        return;
    }
    counter++;
    operacion = operacion - widthimg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.trasition = "none"



}

dot.forEach((cadaDot, i) => {
    dot[i].addEventListener("click", () => {

        let position = i;
        let operation = position * -100

        slider.style.transform = `translateX(${operation}%)`
        slider.style.trasition = "all ease .6s"
        dot.forEach((cadaDot, i) => {
            dot[i].classList.remove("activo")
        })
        dot[i].classList.add("activo")

       
    })

})



console.log(li.length);
console.log(img);
console.log(a);
console.log(ul);
console.log(dot);


