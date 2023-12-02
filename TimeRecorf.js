var rtasks = {
    day1: [],
    day2: [],
    day3: [],
    day4: [],
    day5: [],
    day6: [],
    day7: []
};

function setTasks() {
    for (var j = 1; j < 8; j++) {
        var currentDay = 'day' + j;
        var taskList = tasksObject[currentDay];

        // 현재 날짜의 리스트에 대한 정보를 저장할 객체
        var dayInfo = {
            subjects: [],
            plannedTime: 0,
            recordedTime: 0
        };

        // 현재 날짜의 모든 작업에 대한 정보를 저장
        taskList.forEach(function (task) {
            dayInfo.subjects.push(task.subject);
            dayInfo.plannedTime += parseInt(task.plannedTime) || 0;
            dayInfo.recordedTime += parseInt(task.elapsedTime) || 0;
        });

        // rtasks에 현재 날짜의 정보를 추가
        rtasks[currentDay].push(dayInfo);

        // 선택적: 저장된 정보를 콘솔에 출력
        console.log(currentDay + '의 정보:', dayInfo);
    }

    // 선택적: rtasks를 콘솔에 출력
    console.log(rtasks);
}
