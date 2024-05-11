const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 3000, // 3 segundos
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});


function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}