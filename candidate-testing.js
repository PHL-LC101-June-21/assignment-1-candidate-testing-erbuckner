const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let question1 = "Who was the first American woman in space? ";
let question2 = "True or false: 5 kilometer == 5000 meters? ";
let question3 = "(5 + 3)/2 * 10 = ? ";
let question4 = "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ";
let question5 = "What is the minimum crew size for the ISS? ";
let correctAnswer = "";
let correctAnswer1 = "Sally Ride";
let correctAnswer2 = "true";
let correctAnswer3 = "40";
let correctAnswer4 = "Trajectory";
let correctAnswer5 = "3";
let candidateAnswer = "";
let questions = [question1, question2, question3, question4, question5];
let correctAnswers = [correctAnswer1, correctAnswer2, correctAnswer3, correctAnswer4,correctAnswer5];
let numberOfCorrectAnswers = 0;
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = (input.question("What is your name? "));
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
    for (i = 0; i <= questions.length - 1; i++){
      candidateAnswer = input.question(`${i + 1}) ` + questions[i]);
      candidateAnswers.push(candidateAnswer);
      console.log(`Your answer: ${candidateAnswer}\nCorrect answer: ${correctAnswers[i]}\n `);
    }
}

function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  for (i = 0; i <= questions.length - 1; i++) {
    if (correctAnswers[i].toLowerCase() === candidateAnswers[i].toLowerCase()) {
      numberOfCorrectAnswers++;
    }
  }
  let grade = (Number(numberOfCorrectAnswers)/ questions.length) * 100;
  console.log(`>>> Overall grade: ${grade}% (${numberOfCorrectAnswers} of 5 responses correct) <<< `);

  if (grade >= 80) {
    console.log(">>> Status: PASSED <<<");
  } else {
    console.log(">>> Status: FAILED <<<");
  }
  return grade;
}



function runProgram() {
  askForName();
  console.log("\nHello, " + candidateName + "!\n")
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};