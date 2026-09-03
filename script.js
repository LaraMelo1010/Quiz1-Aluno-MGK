const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box ");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const time_text = document.querySelector(".timer .time_left_txt");
const time_count = document.querySelector(".timer .timer_sec");
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

 let timeValue = 15;
 let que_number = 1;
 let que_count = 0;
 let userScore = 0;
 let widthValue = 0;
 let counter;
 let couterLine;

 start_btn.onclick =  () => {
    info_box.classList.add("activeInfo");
 }
 exit_btn.onclick =  () => {
    info_box.classList.remove("activeInfo");
 }

 continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuestions(0);
    queCounter(1);
    startTimer(15);
    startTimerLine(0);
 }
 restart_quiz.onclick = () => {
    quiz_box.classList.add("activeQuiz");
    result_box.classList.remove("activeResult");
    timeValue = 15;
    que_count = 0;
    que_number = 1;
    userScore = 0;
    widthValue = 0;
    showQuestions(que_count);
    queCounter(que_number);
    clearInterval(counter);
    clearInterval(couterLine);
    startTimer(timeValue);
    startTimerLine(widthValue);
    time_text.textContent = "Tempo restante: ";
    next_btn.classList.remove("show");
 }
 quit_quiz.onclick = () => {
    window.location.reload();
 }