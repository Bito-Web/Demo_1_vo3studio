// Init Slick
$(document).ready(function(){
    $('.section_5__items').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        centerPadding: '0px',
        centerMode: false,
        dots: true,
        arrows: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 3,
                    dots: true,
                    arrows: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                    arrows: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    dots: true,
                    arrows: false,
                    centerPadding: '20px',
                }
            }
        ]
    });
});