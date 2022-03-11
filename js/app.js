window.addEventListener("load", () => {
    // var isPageReloaded = Boolean (window.performance.navigation.TYPE_RELOAD);
    // if (isPageReloaded == true) {
    //     window.onbeforeunload = function () {
    //         window.scrollTo(0,0);
    //     }
    // }
    countdown();
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
                var secondPopUp = 7;
                setTimeout(() => {

                    if (pop_up.style.display != 'block') {
                        pop_up.style.display = 'block';
                        warning_text.textContent = "This Pop-Up will disappear in 7 seconds...";
                        setInterval(() => {
                            if(secondPopUp > 0) {
                                secondPopUp--;
                                warning_text.textContent = `This Pop-Up will disappear in ${secondPopUp} seconds...`;
                            }
                        }, 1000)
                    }
                }, 0);
                setTimeout(() => {
                    warning_text.textContent = "";
                    pop_up.style.display = 'none';
                }, 7000);
            }else {
                fas[index].style.transform = "rotateX(0deg)";
                pop_up.style.display = 'none';
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
    // Countdown
    function countdown() {
        // Set the end time
        var countDownDate = new Date("December 31, 2022 23:59:59").getTime();

        // Update the count down every 1 second
        var x = setInterval(function() {
            // Get today's date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            var day = document.querySelector(".countdown__items__day-number");
            var hour = document.querySelector(".countdown__items__hour-number");
            var minute = document.querySelector(".countdown__items__minute-number");
            var second = document.querySelector(".countdown__items__second-number");
            var day_text = document.querySelector(".countdown__items__day-text");
            var hour_text = document.querySelector(".countdown__items__hour-text");
            var minute_text = document.querySelector(".countdown__items__minute-text");
            var second_text = document.querySelector(".countdown__items__second-text");
            var countdown = document.querySelector(".countdown");
            
            // Fill number < 10 with 0 and print in HTML
            if (days < 10) { 
                day.innerHTML = "0"+days;
                day_text.innerHTML = "Day";
            }else{ 
                day.innerHTML = days;
                day_text.innerHTML = "Days";
            }
            
            if (hours < 10) {
                hour.innerHTML = "0"+hours;
                hour_text.innerHTML = "Hour";
            }else{
                hour.innerHTML = hours;
                hour_text.innerHTML = "Hours";
            }
            
            if (minutes < 10) {
                minute.innerHTML = "0"+minutes;
                minute_text.innerHTML = "Minute";
            }else{
                minute.innerHTML = minutes;
                minute_text.innerHTML = "Minutes";
            }
            
            if (seconds < 10) {
                second.innerHTML = "0"+seconds;
                second_text.innerHTML = "Second";
            }else{
                second.innerHTML = seconds;
                second_text.innerHTML = "Seconds";
            }

            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(x);
                countdown.style.display = "none";
            }
        }, 1000);
    }
    // BG Color Generator
    const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    const section_8_items = document.querySelector('.section_8');
    const color = document.querySelector('.section_8__items__item .color');
    const btn = document.querySelector('.section_8__items__item .btn');
    
    btn.addEventListener('click', () => {
        //Asignar "#" cada vez que se ejecuta el click
        let hex = '#';
        for (let i = 0; i < 6; i++) {
            //Sumarle al hex "#" los seis valores aleatorios
            hex += colors[getRandomNumber()];
        }
        //Cambiar estilos y contenido luego del obtener los 6 valores aleatorios
        color.textContent = hex;
        section_8_items.style.backgroundColor = hex;
    })

    //Recorrer colors y retornar un index aleatorio
    function getRandomNumber() {
        return Math.floor(Math.random() * colors.length);
    }

});
