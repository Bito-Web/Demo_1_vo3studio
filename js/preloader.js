// window.addEventListener("load", () => {
//     document.querySelector(".preloader").style.display = "none";
//     document.querySelectorAll(".load").style.display = "";
//     document.querySelectorAll(".load").style.visibility = "visible";
// })

var img = document.querySelectorAll(".img");
var img_link = document.querySelectorAll(".img_link");
var header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    var y = window.scrollY;
    var mobile = Boolean (window.innerWidth <= 768 ? true : false);
    console.log(mobile);
    if(mobile) {
        if (y >= 300) {
            header.style.backgroundColor = "rgba(0,0,0,0.5)";
        }else {
            header.style.backgroundColor = "rgba(0,0,0,0)";
        }
    }else {
        if (y >= 500) {
            header.style.backgroundColor = "rgba(0,0,0,0.5)";
        }else {
            header.style.backgroundColor = "rgba(0,0,0,0)";
        }

    }
});

img.forEach((element, index) => {
    element.addEventListener("mouseenter", (e) => {
        e.preventDefault();
        img_link[index].classList.add("show");
    });
    element.addEventListener("mouseleave", (e) => {
        e.preventDefault();
        img_link[index].classList.remove("show");
    });
    element.addEventListener("touchstart", (e) => {
        e.preventDefault();
        img_link[index].classList.add("show");
    });
    element.addEventListener("touchend", (e) => {
        e.preventDefault();
        img_link[index].classList.remove("show");
    });
});