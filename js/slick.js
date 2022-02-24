// Init Slick
$(document).ready(function(){
    $('.section_5__items').slick({
        slidesToShow: 4,
        centerPadding: '12.5%',
        centerMode: true,
        dots: false,
        arrows: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 1336,
                settings: {
                    slidesToShow: 3,
                    dots: false,
                    arrows: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    dots: false,
                    arrows: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
});