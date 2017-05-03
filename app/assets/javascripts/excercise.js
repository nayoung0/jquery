// 변수 선언
var today = new Date();
var hourNow = today.getHours();
var greeting;

// 시간에 따른 인사말
if (hourNow > 18) {
    greeting = 'Good Evening~';
} else if (hourNow > 12) {
    greeting = 'Good Afternoon~';
} else if (hourNow > 0) {
    greeting = 'Good Morning~';
} else {
    greeting = 'Welcome!';
}

// 인사말 출력하기
document.write('<h3>'+greeting+'</h3>');

