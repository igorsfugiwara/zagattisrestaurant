// MENU
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');

    const menuToggle = document.querySelector('.menu-toggle');
    if (menu.classList.contains('active')) {
        menuToggle.classList.add('fixed');
    } else {
        menuToggle.classList.remove('fixed');
    }
}

function adjustMenuPosition() {
    const menuToggle = document.querySelector('.menu-toggle');
    const rect = menuToggle.getBoundingClientRect();
    const topOffset = rect.top + window.pageYOffset;

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Adiciona a classe 'fixed' ao menu hamburger quando a rolagem da tela ultrapassar a posição do menu
    if (scrollTop > topOffset) {
        menuToggle.classList.add('fixed');
    } else {
        menuToggle.classList.remove('fixed');
    }
}

// Fecha o menu ao clicar fora ou em um item
document.addEventListener('click', function (event) {
    const menu = document.querySelector('.menu');
    const menuToggle = document.querySelector('.menu-toggle');

    // Verifica se o menu está ativo
    if (menu.classList.contains('active')) {
        // Se o clique foi fora do menu e fora do botão toggle, fecha o menu
        if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
            menu.classList.remove('active');
            menuToggle.classList.remove('fixed');
        }

        // Se o clique foi em uma opção do menu, também fecha
        if (event.target.closest('.menu a')) {
            menu.classList.remove('active');
            menuToggle.classList.remove('fixed');
        }
    }
});

// Verifica a posição do menu ao rolar a tela
window.addEventListener('scroll', adjustMenuPosition);
// EMAIL
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    emailjs.init('4dL0a-QFs8e2zrvDS'); // Substitua 'YOUR_USER_ID' pelo seu User ID do EmailJS

    emailjs.sendForm('service_yky4tkg', 'template_cmkmklm', this)
        .then(function () {
            alert('Email enviado com sucesso!');
        }, function (error) {
            alert('Ocorreu um erro ao enviar o email: ' + JSON.stringify(error));
        });
});