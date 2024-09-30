loginBtn.onclick = function() {
    loginPopup.style.display = 'block';
}

registerBtn.onclick = function() {
    registerPopup.style.display = 'block';
}

closeLoginPopup.onclick = function() {
    loginPopup.style.display = 'none';
}

closeRegisterPopup.onclick = function() {
    registerPopup.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == loginPopup) {
        loginPopup.style.display = 'none';
    }
    if (event.target == registerPopup) {
        registerPopup.style.display = 'none';
    }
}

/* MENU PARA DISPOSITIOS MENORES */
document.querySelector('.menu-hamburguer').addEventListener('click', function (event) {
    var menu = document.querySelector('nav.menu ul');
    menu.classList.toggle('active');
    
    event.stopPropagation();
});

document.addEventListener('click', function (event) {
    var menu = document.querySelector('nav.menu ul');
    var isClickInside = menu.contains(event.target) || document.querySelector('.menu-hamburguer').contains(event.target);
    
    if (!isClickInside) {
        menu.classList.remove('active');
    }
});

/* FUNÇÃO PARA BOTÕES NÃO FUNCIONANDO */ 
function emBreve(){
    alert("Em breve");
}

