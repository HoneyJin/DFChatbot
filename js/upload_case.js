function iconDecision() {
    var menuIcon = document.querySelector('.upload-case')
    menuIcon.className += ' menu-highlight'
    var icon = menuIcon.querySelector('img')
    icon.src = 'img/file_folder_black.png'
}

document.addEventListener('DOMContentLoaded', function () {
    const rows = document.querySelectorAll("tbody tr");
    rows.forEach(row => {
        row.addEventListener("click", function() {
        const caseName = this.getAttribute("data-case-name");
        window.location.href = `chatbot.html?caseName=${encodeURIComponent(caseName)}`;
        });
    });
})

function trashcanClicked() {
    var ele = document.querySelector('.case-table > table > tbody')
    const trElements = tbodyElement.querySelectorAll('tr');
    trElements.forEach(trElement => {
        trElement.addEventListener('click', function() {
            var caseName = trElement.getAttribute('data-case-name')
            var deleteCase = confirm(`Are you sure you want to delete the case: ${caseName}?`)
            if (deleteCase) {
                trElement.remove()
            }
        })
    })
}