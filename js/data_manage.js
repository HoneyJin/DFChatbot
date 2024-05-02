function iconDecision() {
    var menuIcon = document.querySelector('.data-manage')
    menuIcon.className += ' menu-highlight'
    var icon = menuIcon.querySelector('img')
    icon.src = 'img/document_black.png'
}

function gotoChatbot() {
    window.location.href = 'chatbot.html';
}