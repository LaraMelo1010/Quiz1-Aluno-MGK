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

 let timeValue = 15;
 let que_number = 1;
 let que_count = 0;
 let userScore = 0;
 let widthValue = 0;
 let counter;
 let couterLine;
 const tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
 const crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

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

 const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

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
    time_text.textContent = "Your time: ";
    next_btn.classList.remove("show");
 }
 quit_quiz.onclick = () => {
    window.location.reload();
 }

 const next_btn = document.querySelector("footer .next_btn");
 const botton_ques_counter = document.querySelector("footer .total_q");

 next_btn.onclick = () => {
    if(que_count < questions.length - 1) {
        que_count++;
        que_number++;
        showQuestions(que_count);
        queCounter(que_number);
        clearInterval(counter);
        clearInterval(couterLine);
        startTimer(timeValue);
        startTimerLine(widthValue);
        time_text.textContent = "Your time: ";
        next_btn.classList.remove("show");
    }
    else{
        clearInterval(counter);
        clearInterval(couterLine);
        showResult();
    }
 }
 function showQuestions (index) {
    const q_text = document.querySelector(".que_text");
    let q_tag = '<span>' + questions[index].number + ", " + questions[index].question + '</span>';
    let opcoes_tag = '<div class = "option"><span>' + questions[index].options[0] + '</span></div>' + 
    '<div class = "option"><span>' + questions[index].options[1] + '</span></div>' + 
    '<div class = "option"><span>' + questions[index].options[2] + '</span></div>' +
    '<div class = "option"><span>' + questions[index].options[3] + '</span></div>';
    q_text.innerHTML = q_tag;
    option_list.innerHTML = opcoes_tag;

    const option = option_list.querySelectorAll(".option");

    for(i=0; i<option.length; i++){
        option[i].setAttribute("onclick","optionSelected(this)")
    }
 }

 function optionSelected (answer) {
   clearInterval(counter);
   clearInterval(couterLine);
   let userAns = answer.textContent;
   let correctAns = questions[que_count].answer;
   const allOptions = option_list.children.length;

   if(userAns == correctAns) {
      userScore += 1;
      answer.classList.add("correct");
      answer.insertAdjacentHTML("beforeend", tickIconTag);
      console.log("correct answer");
      console.log("your correct answers = " + userScore);
   }
   else{
      answer.classList.add("incorrect");
      answer.insertAdjacentHTML("beforeend", crossIconTag);
      console.log("incorrect answer");
      
      for(let i=0; i<allOptions; i++) {
         if(option_list.children[i].textContent==correctAns){
            option_list.children[i].setAttribute("class", "optionCorrect");
            option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
            console.log("correct answer selected");
         }
      }
   }
   for(i=0; i<allOptions; i++){
      option_list.children[i].classList.add("disabled");
   }
   next_btn.classList.add("show");
 }
 function showResult () {
   info_box.classList.remove("activeInfo");
   quiz_box.classList.remove("activeQuiz");
   result_box.classList.add("activeResult");
   const scoreText = result_box.querySelector(".score_text");
   if (userScore > 4) {
      let scoreTag = '<span>Congratulations! , Your score is: <p>' + userScore + '</p> de <p>' + questions.length + '</p></span>';
      scoreText.innerHTML = scoreTag;
   }
   else if (userScore > 2) {
      let scoreTag = '<span>Great , Your score is: <p>' + userScore + '</p> de <p>' + questions.length + '</p></span>';
      scoreText.innerHTML = scoreTag;
   }
   else {
      let scoreTag = '<span>You failed , Your score is: <p>' + userScore + '</p> de <p>' + questions.length + '</p></span>';
      scoreText.innerHTML = scoreTag;
   }
 }
 function startTimer (time) {
   counter = setInterval(timer, 1000);
   function timer () {
      time_count.textContent = time;
      time--;
      if (time < 9) {
         let addZero = time_count.textContent;
         time_count.textContent = "0" + addZero;
      }
      if (time < 0) {
         clearInterval(counter);
         time_text.textContent = "You dont have more time";
         const allOptions = option_list.children.length;
         let correctAns = questions[que_count].answer;
         for(i = 0; i < allOptions; i++) {
            if(option_list.children[i].textContent==correctAns){
            option_list.children[i].setAttribute("class", "optionCorrect");
            option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
            console.log("correct answer selected");
            }
         }
         for(i = 0; i < allOptions; i++) {
            option_list.children[i].classList.add("disabled");
         }
         next_btn.classList.add("show");
      }
   }
 }
 function startTimerLine () {
   couterLine = setInterval(timer,29);
   let time = 0;
   function timer () {
      time += 1;
      time_line.style.width = time + "px";
      if (time > 549) {
         clearInterval(couterLine);
      }
   }
 }
 function queCounter (index) {
   let totalQcounterTag = '<span><p>' + index + '</p> de <p>' + questions.length + '</p> quetions </span>';
   botton_ques_counter.innerHTML = totalQcounterTag; 
 }