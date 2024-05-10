var sendChatBtn = document.querySelector('.chat-input');
console.log(sendChatBtn);
var chatInput = document.querySelector('.chat-input textarea');

let userMessage;

var handleChat = () => {
    userMessage = chatInput.value.trim();
    console.log(userMessage);
}

// sendChatBtn.addEventListener('click', handleChat);

function iconDecision() {
    var menuIcon = document.querySelector('.chatbot-icon')
    menuIcon.className += ' menu-highlight'
    var icon = menuIcon.querySelector('img')
    icon.src = '/static/img/chat_black.png'
}