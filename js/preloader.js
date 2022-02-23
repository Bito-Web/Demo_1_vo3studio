window.addEventListener("load", () => {
//     document.querySelector(".preloader").style.display = "none";
//     document.querySelectorAll(".load").style.display = "";
//     document.querySelectorAll(".load").style.visibility = "visible";

    var img = document.querySelectorAll(".img");
    var img_link = document.querySelectorAll(".img_link");
    var header = document.querySelector(".header");
    var section_5_item_title = document.querySelectorAll('.section_5__item__title');
    var section_5_item_content = document.querySelectorAll('.section_5__item__content');
    var fas = document.querySelectorAll('.fas');

    // Change style with scroll
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
    // Show link in img with hover
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
        img_link[index].addEventListener("click", () => {
            alert('\nFor now the link is empty :(\n\nBut thanks for watch our job!')
        })
    });
    // Open and close Faqs
    section_5_item_title.forEach((element, index) => {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            section_5_item_content[index].classList.toggle('showFaqs');

            if (section_5_item_content[index].classList.contains('showFaqs')) {
                fas[index].classList.remove('fa-chevron-down');
                fas[index].classList.add('fa-chevron-up');
            }else {
                fas[index].classList.remove('fa-chevron-up');
                fas[index].classList.add('fa-chevron-down');
            }
        });
    });
});
