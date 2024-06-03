const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 3000, // 3 segundos
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 1, // Mostrar apenas uma imagem por vez
    spaceBetween: 0 // Espaço entre as imagens
});

const swiperGallery = new Swiper('.gallery.swiper-container', {
    loop: true,
    autoplay: {
        delay: 3000, // 3 segundos
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 1, // Mostrar apenas uma imagem por vez
    spaceBetween: 0 // Espaço entre as imagens
});


function toggleMenu() {
    document.querySelector('.menu').classList.toggle('active');
}

// EMAIL
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.init('4dL0a-QFs8e2zrvDS'); // Substitua 'YOUR_USER_ID' pelo seu User ID do EmailJS

    emailjs.sendForm('service_yky4tkg', 'template_cmkmklm', this)
        .then(function() {
            alert('Email enviado com sucesso!');
        }, function(error) {
            alert('Ocorreu um erro ao enviar o email: ' + JSON.stringify(error));
        });
});
