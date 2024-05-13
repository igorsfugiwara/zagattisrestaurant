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



// EMAIL
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.init('Igor Fugiwara'); // Substitua 'YOUR_USER_ID' pelo seu User ID do EmailJS

    emailjs.sendForm('4dL0a-QFs8e2zrvDS', 'kef3h9DU8BAdYK5UlaISn', this)
        .then(function() {
            alert('Email enviado com sucesso!');
        }, function(error) {
            alert('Ocorreu um erro ao enviar o email: ' + JSON.stringify(error));
        });
});