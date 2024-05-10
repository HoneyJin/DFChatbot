function selectDropdownItem(option) {
    document.getElementById('dropdownButton').innerText = option;
}

function iconDecision() {
    var menuIcon = document.querySelector('.data-manage')
    menuIcon.className += ' menu-highlight'
    var icon = menuIcon.querySelector('img')
    icon.src = '/static/img/document_black.png'
}