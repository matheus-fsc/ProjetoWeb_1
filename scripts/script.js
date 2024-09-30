document.querySelector('.menu-hamburguer').addEventListener('click', function () {
    var menu = document.querySelector('nav.menu ul');
    menu.classList.toggle('active');
});

const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const loginPopup = document.getElementById('loginPopup');
const registerPopup = document.getElementById('registerPopup');
const closeLoginPopup = document.getElementById('closeLoginPopup');
const closeRegisterPopup = document.getElementById('closeRegisterPopup');

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
