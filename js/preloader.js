window.addEventListener("load", () => {
//     document.querySelector(".preloader").style.display = "none";
//     document.querySelectorAll(".load").style.display = "";
//     document.querySelectorAll(".load").style.visibility = "visible";

    var img = document.querySelectorAll(".img");
    var img_link = document.querySelectorAll(".img_link");
    var header = document.querySelector(".header");
    var inputs = document.querySelectorAll(".inputs");
    var section_5 = document.querySelector(".section_5");
    var section_6_item_title = document.querySelectorAll(".section_6__item__title");
    var section_6_item_content = document.querySelectorAll(".section_6__item__content");
    var fas = document.querySelectorAll(".fas");
    var pop_up = document.querySelector(".pop-up");
    var close_icon = document.querySelector(".close_icon");
    var warning_text = document.querySelector(".warning-text");
    var btn_buy = document.querySelectorAll(".btn_buy");

    // Change style with scroll
    window.addEventListener("scroll", () => {
        var y = window.scrollY;
        var mobile = Boolean (window.innerWidth <= 768 ? true : false);
        if(mobile) {
            if (y >= 200) {
                header.style.backgroundColor = "rgba(0,0,0,0.5)";
            }else {
                header.style.backgroundColor = "rgba(0,0,0,0)";
            }
        }else {
            if (y >= 300) {
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
            header.style.display = "none";
        });
        element.addEventListener("mouseleave", (e) => {
            e.preventDefault();
            img_link[index].classList.remove("show");
            header.style.display = "";
        });
        element.addEventListener("touchstart", (e) => {
            e.preventDefault();
            img_link[index].classList.add("show");
            header.style.display = "none";
        });
        element.addEventListener("touchend", (e) => {
            e.preventDefault();
            img_link[index].classList.remove("show");
            header.style.display = "";
        });
        img_link[index].addEventListener("click", () => {
            alert("\nFor now the link is empty :(\n\nBut thanks for watch our job!")
        })
    });
    // Hidde or Show menu when mouse enter or leave cards
    section_5.addEventListener("mouseenter", () => {
        header.style.display = "none";
    });
    section_5.addEventListener("mouseleave", () => {
        header.style.display = "";
    });
    // Hidde or Show menu when mouse enter or leave inputs
    inputs.forEach(element => {
        element.addEventListener("mouseenter", () => {
            header.style.display = "none";
        });
        element.addEventListener("mouseleave", () => {
            header.style.display = "";
        });
    });
    // Open and close Faqs
    section_6_item_title.forEach((element, index) => {
        element.addEventListener("click", (e) => {
            e.preventDefault();
            section_6_item_content[index].classList.toggle("showFaqs");

            if (section_6_item_content[index].classList.contains("showFaqs")) {
                fas[index].classList.remove("fa-chevron-down");
                fas[index].classList.add("fa-chevron-up");
                header.style.display = "none";
                setTimeout(() => {
                    warning_text.textContent = "To see the menu, close the Faq Item";
                    pop_up.style.display = 'block';
                }, 1000);
                setTimeout(() => {
                    warning_text.textContent = "";
                    pop_up.style.display = 'none';
                }, 7000);
            }else {
                fas[index].classList.remove("fa-chevron-up");
                fas[index].classList.add("fa-chevron-down");
                pop_up.style.display = 'none';
                header.style.display = "";
                warning_text.textContent = "";
            }
        });
    });
    // Close Pop Up
    close_icon.addEventListener("click", (e) => {
        e.preventDefault();
        pop_up.style.display = "none";
        warning_text.textContent = ""
    })
    // Show Messsage when click buy button
    btn_buy.forEach(element => {
        element.addEventListener("click", (e) => {
            e.preventDefault()
            pop_up.style.display = "block";
            pop_up.style.left = "25px";
            pop_up.style.right = "unset";
            pop_up.style.backgroundColor = "rgba(38, 161, 38, 0.9)";
            warning_text.style.fontSize = "1.5rem";
            warning_text.textContent = "Thanks for your buy!!!";
            setTimeout(() => {
                pop_up.style.display = 'none';
                pop_up.style.left = "unset";
                pop_up.style.right = "";
                pop_up.style.transform = "unset";
                pop_up.style.backgroundColor = "";
                warning_text.style.fontSize = "";
                warning_text.textContent = "";
            }, 5000);
        })
    });
});
