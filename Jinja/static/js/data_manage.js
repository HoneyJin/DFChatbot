function selectDropdownItem(option) {
    document.getElementById('dropdownButton').innerText = option;
}

function iconDecision() {
    var menuIcon = document.querySelector('.data-manage')
    menuIcon.className += ' menu-highlight'
    var icon = menuIcon.querySelector('img')
    icon.src = '/static/img/document_black.png'
}

// openfile.js
document.addEventListener("DOMContentLoaded", function () {
    let fileSelectButton = document.getElementById('fileSelectButton');
    fileSelectButton.addEventListener("click", function () {
        // Trigger click event on the file input element
        document.getElementById('fileElem').click();
    });

        // Get the file input element
        let fileInput = document.getElementById('fileElem');

        // Add change event listener to the file input element
        fileInput.addEventListener("change", function () {
            // Get the selected files
            let files = fileInput.files;
            
            // Check if any file is selected
            if (files.length > 0) {
                // Check if the selected file is of .xlsx type
                if (files[0].type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
                    // Process the file as needed
                    console.log('Selected file:', files[0].name);
                } else {
                    // If the selected file is not of .xlsx type, alert the user
                    alert('Please select only .xlsx files.');
                    // Clear the file input
                    fileInput.value = '';
                }
            }
        });
        
    // Get the drop area
    let dropArea = document.getElementById('drop-area');

    // Add dragover event listener to the drop area
    dropArea.addEventListener("dragover", function (e) {
        e.preventDefault();
        dropArea.style.background = "#f2f2f2"; // Change background color to indicate dragover
        document.getElementById('drag-text').innerText = "Drop here"; // Change text to indicate dragover
    });

    // Add dragleave event listener to the drop area
    dropArea.addEventListener("dragleave", function () {
        dropArea.style.background = "#ffffff"; // Reset background color
        document.getElementById('drag-text').innerText = "Drag & Drop your dataset here."; // Reset text
    });

    // Add drop event listener to the drop area
    dropArea.addEventListener("drop", function (e) {
        e.preventDefault();
        dropArea.style.background = "#ffffff"; // Reset background color
        document.getElementById('drag-text').innerText = "Drag & Drop your dataset here."; // Reset text

        let files = e.dataTransfer.files; // Get dropped files
        handleFiles(files); // Handle dropped files
    });

    // Function to handle dropped files
    function handleFiles(files) {
        for (let i = 0; i < files.length; i++) {
            let file = files[i];
            if (file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') { // Check if it's an .xlsx file
                console.log('Selected file:', file.name);
                // Process the file as needed
            } else {
                alert('Please drop only .xlsx files.'); // Alert user if dropped file is not .xlsx
            }
        }
    }
});
