function loginUser(event) {
    event.preventDefault(); // default form submit event를 막기 위한 함수
    
    // 사용자명과 비밀번호 값 가져오기
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // 사용자명 및 비밀번호 유효성 검사 로직
    if (username === 'admin' && password === '1234') {
         // 유효성 검사가 통과되면 case_select.html로 이동
        window.location.href = 'case_select.html';
    } else {
        // 유효성 검사에 실패하면 경고 메시지를 표시하거나 원하는 방식으로 처리
        alert('잘못된 사용자명 또는 비밀번호입니다.');
    }
}