function mostrarBalaoAlerta() {
    alert("Em breve");
}

document.querySelector('.menu-hamburguer').addEventListener('click', function () {
    var menu = document.querySelector('nav.menu ul');
    menu.classList.toggle('active');
});

