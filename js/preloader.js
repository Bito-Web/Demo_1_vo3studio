window.addEventListener('load', () => {
    document.querySelector('.preloader').style.display = 'none';
    document.querySelectorAll('.load').style.display = 'block';
    document.querySelectorAll('.load').style.visibility = 'visible';
})

var img = document.querySelectorAll('.img');
var img_link = document.querySelectorAll('.img_link');

img.forEach((element, index) => {
    element.addEventListener('mouseenter', (e) => {
        e.preventDefault();
        img_link[index].classList.add('show');
    });
    element.addEventListener('mouseleave', (e) => {
        e.preventDefault();
        img_link[index].classList.remove('show');
    });

});