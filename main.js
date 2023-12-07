var time = 0;
var currentDay = 1;

function setCurrentDay(day) {
    currentDay = day;
}
$(document).ready(function () {
    $('#addTaskModal').on('show.bs.modal', function () {
        // Clear form fields when the modal is displayed
        document.getElementById('addTaskForm').reset();
    });

});

var tasks = {
    day1: [],
    day2: [],
    day3: [],
    day4: [],
    day5: [],
    day6: [],
    day7: []
};

function saveTasks() {
    // 현재 선택된 날짜의 리스트를 가져옵니다.
    for (var j = 1; j < 8; j++) {
        var currentDay = j;
        var taskList = document.getElementById('taskList' + currentDay);
        var taskItems = taskList.getElementsByClassName('task-item');

        // 리스트의 항목들을 순회하면서 정보를 저장합니다.
        tasks['day' + currentDay] = [];
        for (var i = 0; i < taskItems.length; i++) {
            var taskItem = taskItems[i];
            var subject = taskItem.getElementsByTagName('strong')[0].innerText;
            var plannedTime = taskItem.innerText.split('Planned Time: ')[1].split(' hours')[0];
            var plannedm = taskItem.innerText.split(' hours ')[1].split(' minutes')[0];
            var plannedTimeSum = plannedTime*3600+plannedm*60;

            // 정보를 저장합니다.
            tasks['day' + currentDay].push({
                subject: subject,
                plannedTime: plannedTime,
                plannedm: plannedm,
                plannedTimeSum:plannedTimeSum
            });
        }
    }

    // 저장된 정보를 콘솔에 출력합니다.
    console.log(tasks);
    var buttons = document.getElementsByTagName('button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


function submitForm() {
    // 사용자로부터 과목명과 목표 공부 시간 입력 받기
    var subject = document.getElementById('subject').value;
    var plannedTime = document.getElementById('plannedTime').value;
    var plannedm = document.getElementById('plannedm').value;
    // 입력된 값이 숫자인지 확인
    if (isNaN(plannedTime) || isNaN(plannedm) || !plannedTime || !subject || !plannedm) {
        alert('목표 공부 시간은 숫자로 입력해주세요.');
        return;
    }

    // 업무항목 목록에 새로운 항목 추가
    var taskList = document.getElementById('taskList' + currentDay);
    var taskItem = document.createElement('li');
    taskItem.className = 'task-item';
    taskItem.innerHTML = `
                <strong>${subject}</strong> - Planned Time: ${plannedTime} hours ${plannedm} minutes
                <button class="btn btn-fix" onclick="fixForm(this)">수정</button>
                <button class="btn btn-danger" onclick="removeTask(this)">삭제</button>`;
    taskList.appendChild(taskItem);

    // 모달 창 닫기
    $('#addTaskModal').modal('hide');
}

function fixForm(button) {
    // 수정할 항목 찾기
    var taskItem = button.parentElement;
    var subject = taskItem.getElementsByTagName('strong')[0].innerText;
    var plannedTime = taskItem.innerText.split('Planned Time: ')[1].split(' hours')[0];
    var plannedm = taskItem.innerText.split(' hours ')[1].split(' minutes')[0];

    // 모달 창에 기존 값 설정
    document.getElementById('subject').value = subject;
    document.getElementById('plannedTime').value = plannedTime;
    document.getElementById('plannedm').value = plannedm;

    // 모달 창에 '수정 완료' 버튼 추가
    var submitButton = document.getElementById('submitButton');
    submitButton.innerText = '수정 완료';
    submitButton.onclick = function () {
        // 사용자로부터 과목명과 목표 공부 시간 입력 받기
        var newSubject = document.getElementById('subject').value;
        var newPlannedTime = document.getElementById('plannedTime').value;
        var newPlannedm = document.getElementById('plannedm').value;

        // 입력된 값이 숫자인지 확인
        if (isNaN(newPlannedTime) || isNaN(newPlannedm) || !newPlannedTime || !newSubject || !newPlannedm) {
            alert('목표 공부 시간은 숫자로 입력해주세요.');
            return;
        }

        // 항목 수정
        taskItem.innerHTML = `
            <strong>${newSubject}</strong> - Planned Time: ${newPlannedTime} hours ${newPlannedm} minutes
            <button class="btn btn-fix" onclick="fixForm(this)">수정</button>
            <button class="btn btn-danger" onclick="removeTask(this)">삭제</button>`;

        // 모달 창 닫기
        $('#addTaskModal').modal('hide');

        // '수정 완료' 버튼을 '추가' 버튼으로 변경
        submitButton.innerText = '추가';
        submitButton.onclick = submitForm;
    };

    // 모달 창 열기
    $('#addTaskModal').modal('show');
}


function removeTask(button) {
    // 부모 엘리먼트인 task-item을 찾아서 삭제
    var taskItem = button.parentElement;
    taskItem.remove();
}


function goToNextPage() {
    var userId = document.getElementById('userId').value;

    // 아이디가 비어있으면 다음 페이지로 이동하지 않음
    if (userId.trim() === "") {
        alert("Please Enter your ID");
    } else {
        window.location.href = 'setPlan.html?userId=' + userId;
    }
}
