const casenum = ""
const username = ""
const lawname = ""
const suspectname = ""
const casename = ""
const casedescription = ""

function iconDecision() {
    var menuIcon = document.querySelector('.new-case')
    menuIcon.className += ' menu-highlight'
    var icon = menuIcon.querySelector('img')
    icon.src = 'img/file_add_black.png'
}

function gotoDataManage() {
    window.location.href = 'data_manage.html';
}

(function() {
    window.addEventListener('load', function() {
      var forms = document.getElementsByClassName('needs-validation');
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
          gotoDataManage()
        }, false);
      });
    }, false);
  })();