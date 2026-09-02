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

 start_btn.onclick =  () => {
    info_box.classList.add("activeInfo");
 }
 exit_btn.onclick =  () => {
    info_box.classList.remove("activeInfo");
 }