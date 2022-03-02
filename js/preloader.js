window.addEventListener("load", () => {
    var isPageReloaded = Boolean (window.performance.navigation.TYPE_RELOAD);
    if (isPageReloaded == true) {
        window.onbeforeunload = function () {
            window.scrollTo(0,0);
        }
    }
    document.querySelector(".preloader").style.display = "none";
    document.querySelector("body").classList.remove("load");

    var img = document.querySelectorAll(".img");
    var img_link = document.querySelectorAll(".img_link");
    var header = document.querySelector(".header");
    var header_tag = document.querySelector("header");
    // var inputs = document.querySelectorAll(".inputs");
    // var section_5 = document.querySelector(".section_5");
    var section_6_item_title = document.querySelectorAll(".section_6__item__title");
    var section_6_item_content = document.querySelectorAll(".section_6__item__content");
    var fas = document.querySelectorAll(".fas");
    var pop_up = document.querySelector(".pop-up");
    var close_icon = document.querySelector(".close_icon");
    var warning_text = document.querySelector(".warning-text");
    var btn_buy = document.querySelectorAll(".btn_buy");
    var header_btn = document.querySelector(".header-btn");
    var header_mobile_btn = document.querySelector(".header-mobile-button");

    // Change style with scroll
    window.addEventListener("scroll", () => {
        var y = window.scrollY;
        var mobile = Boolean (window.innerWidth <= 768 ? true : false);
        if(mobile) {
            if (y >= 200) {
                header.style.backgroundColor = "rgba(0,0,0,0.7)";
                header_mobile_btn.style.backgroundColor = "rgba(0,0,0,0.7)";
                header_tag.style.zIndex = "1";
            }else {
                header_tag.style.zIndex = "0";
                header.style.backgroundColor = "rgba(0,0,0,0.3)";
                header_mobile_btn.style.backgroundColor = "rgba(0,0,0,0.3)";
            }
        }else {
            if (y >= 300) {
                header_tag.style.zIndex = "1";
                header.style.backgroundColor = "rgba(0,0,0,0.7)";
                header_mobile_btn.style.backgroundColor = "rgba(0,0,0,0.7)";
            }else {
                header_tag.style.zIndex = "0";
                header.style.backgroundColor = "rgba(0,0,0,0.3)";
                header_mobile_btn.style.backgroundColor = "rgba(0,0,0,0.3)";
            }

        }
    });
    // Show link in img with hover
    img.forEach((element, index) => {
        // var y = window.scrollY;
        var mobile = Boolean (window.innerWidth <= 768 ? true : false);
        if (mobile) {
            element.addEventListener("touchmove", () => {
                img_link[index].classList.add("show");
                // header.style.display = "none";
            }, false);
            element.addEventListener("touchend", () => {
                img_link[index].classList.remove("show");
                // header.style.display = "";
            }, false);
        }else {
            element.addEventListener("mouseenter", () => {
                img_link[index].classList.add("show");
                // y = window.scrollY;
                // if (y > 300) {
                //     header.style.display = "none";
                // }
            });
            element.addEventListener("mouseleave", () => {
                img_link[index].classList.remove("show");
                // header.style.display = "";
            });
        }
        img_link[index].addEventListener("click", () => {
            alert("\nFor now the link is empty :(\n\nBut thanks for watch our job!")
        })
    });
    // Open and close Faqs
    section_6_item_title.forEach((element, index) => {
        element.addEventListener("click", (e) => {
            e.preventDefault();
            section_6_item_content[index].classList.toggle("showFaqs");

            if (section_6_item_content[index].classList.contains("showFaqs")) {
                fas[index].style.transform = "rotateX(180deg)";
                // fas[index].style.transition = "all 0.5s ease-in-out";
                // header.style.display = "none";
                setTimeout(() => {
                    warning_text.textContent = "To see the menu, close the Faq Item";
                    pop_up.style.display = 'block';
                }, 0);
                setTimeout(() => {
                    warning_text.textContent = "";
                    pop_up.style.display = 'none';
                }, 7000);
            }else {
                fas[index].style.transform = "rotateX(0deg)";
                // fas[index].style.transition = "all 0.5s ease-in-out";
                pop_up.style.display = 'none';
                // header.style.display = "";
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
            pop_up.style.top = "50%";
            pop_up.style.bottom = "unset";
            pop_up.style.left = "25px";
            pop_up.style.right = "unset";
            pop_up.style.backgroundColor = "rgba(38, 161, 38, 0.9)";
            warning_text.style.fontSize = "1.5rem";
            warning_text.textContent = "Thanks for your buy!!!";
            setTimeout(() => {
                pop_up.style.display = 'none';
                pop_up.style.top = "unset";
                pop_up.style.bottom = "25px";
                pop_up.style.left = "unset";
                pop_up.style.right = "";
                pop_up.style.transform = "unset";
                pop_up.style.backgroundColor = "";
                warning_text.style.fontSize = "";
                warning_text.textContent = "";
            }, 5000);
        })
    });
    // Show menu mobile
    header_mobile_btn.addEventListener("click", (e) => {
        e.preventDefault();
        header.classList.toggle("show");
        if(header.classList.contains("show")) {
            header_btn.style.transform = "rotate(90deg)";
            
        }else {
            header_btn.style.transform = "rotate(0deg)";
        }
    })
});
