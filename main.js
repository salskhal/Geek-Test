const hamburger = document.querySelector(".hamburger");
const over = document.querySelector(".overlay");

hamburger.addEventListener("click", () =>{
    over.classList.toggle("show")
    hamburger.classList.toggle("open")
})