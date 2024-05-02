let dropArea = document.getElementById('drop-area');

['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  dropArea.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
}

['dragenter', 'dragover'].forEach(eventName => {
  dropArea.addEventListener(eventName, highlight, false);
});

['dragleave', 'drop'].forEach(eventName => {
  dropArea.addEventListener(eventName, unhighlight, false);
});

function highlight(e) {
  dropArea.classList.add('dragover');
}

function unhighlight(e) {
  dropArea.classList.remove('dragover');
}

dropArea.addEventListener('drop', handleDrop, false);

function handleDrop(e) {
  let dt = e.dataTransfer;
  let files = dt.files;
  
  handleFiles(files);
}

function handleFiles(files) {
  ([...files]).forEach(uploadFile);
}

function uploadFile(file) {
  // 여기에 파일 업로드를 처리하는 로직을 작성하십시오.
  console.log(file.name);
}
