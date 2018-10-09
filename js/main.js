/*
--- Let's build a fun quiz game in the console! ---
1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)
2. Create a couple of questions using the constructor
3. Store them all inside an array
4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).
5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.
6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).
7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/


// var winDisp = document.getElementById('qanda');

// document.winDisp.write('Hello World');

function nextQuestion() {

var Question = function(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

Question.prototype.displayQuestionInWindow = function() {

  document.write('<h1>' + this.question + '</h1>');

  for(var i = 0; i < this.answers.length; i++) {
    document.write('<h1>' + i + ' : ' + this.answers[i] + '</h1><br>');
    }
  }

var q = document.getElementById('qanda');

Question.prototype.checkAnswer = function(e) {
  if(e == this.correct) {
    q.innerHTML = "Correct";
    q.style.color = 'green';

  } else {
    q.innerHTML = 'Wrong';
    q.style.color = 'red';

  }
}


var q1 = new Question('What is the capital of Mexico',
            [
              'Guadalajara',
              'Mexico City',
              'Chalupa'
            ],
          1);

var q2 = new Question('What is the most common language in Mexico?',
          [
            'Spanish',
            'Quechua',
            'Maya'
          ],
        0);

var q3 = new Question('Who is the Mexican president?',
          [
            'Pena Nieto',
            'Felix Calderon',
            'Lopez Obrador'
          ],
        2);

var questArray = [q1, q2, q3];

// function nextQuestion() {

var nums = Math.floor(Math.random() * questArray.length);

var randNum = questArray[nums];


randNum.displayQuestionInWindow();




function parseIt() {

var resp = document.getElementById('inputResp').value;

randNum.checkAnswer(resp);
console.log(resp);

};

};

nextQuestion();
