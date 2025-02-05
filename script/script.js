// Seleciona o botão de menu e o menu mobile
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

// Adiciona um ouvinte de evento para alternar a classe "open" ao clicar no botão de menu
menuToggle.addEventListener('click', () => {
    // Adiciona ou remove a classe 'open' para mostrar/esconder o menu
    mobileMenu.classList.toggle('open');
    // Alterna a classe 'open' no botão de menu (transformando o hambúrguer em X)
    menuToggle.classList.toggle('open');
});
