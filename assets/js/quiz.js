// constants and variables needed

const startButton = document.getElementById('start-btn')
const progress = document.getElementById('progress')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const counter = document.getElementById('counter')
const ready = document.getElementById('landing-page')
const scoreDiv = document.getElementById('score-div')
let score = 0; 
let shuffledQuestions, currentQuestionIndex
let timer = {};

//button to start the quiz on click and load the first question
startButton.addEventListener('click', startGame)

//button to set next question
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
    currentQuestion++; 
    document.getElementById('current-question').innerHTML = currentQuestion;
  })

//starts the game
function startGame() {
    startTimer()
    ready.classList.add('hide')
    progress.classList.remove('hide')  
    startButton.classList.add('hide')
    scoreDiv.classList.add("hide")
    //randomises the questions
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0;
    currentQuestion = 1;//starts the progress from 1
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
    //sets the score to 0 at start of quiz
    score = 0;
    document.getElementById('current-question').innerHTML = currentQuestion;
    document.getElementById('all-questions2').innerHTML = questions.length;
    document.getElementById('all-questions').innerHTML = questions.length; 
  }

//function to load the next question when next button is clicked
function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
  }

//shows the question and answers
function showQuestion(question) {
    questionElement.innerText = question.question
    //populate the answers by creating a button for each of them
    question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    //check if the answer is correct by adding a data attribute to the button
    if (answer.correct) {
      button.dataset.correct = answer.correct;
      }
      else{
        answer.wrong;
      }
      button.addEventListener('click', selectAnswer)
      answerButtonsElement.appendChild(button)
    })
  }

function selectAnswer(e) {}

function startTimer() {}

function countTimer() {}

function stopTimer() {}


// questions array
const questions = [
    {
      question: 'Who scored the fastest Champions League goal of all-time?',
      answers: [
        { text: 'Alessandro Del Piero', correct: false },
        { text: 'Alexandre Pato', correct: false },
        { text: 'Roy Makaay', correct: true },
        { text: 'Jack Wilshere', correct: false }
      ]
    },
    {
      question: 'Who is the oldest player to score in a Champions League final?',
      answers: [
        { text: 'Paolo Maldini', correct: true },
        { text: 'David Beckham', correct: false },
        { text: 'Clarence Seedorf', correct: false },
        { text: 'Patrick Kulivert', correct: false }
      ]
    },
    {
      question: 'Who is the only player to have won the Champions League with three different clubs?',
      answers: [
        { text: 'Ronaldo', correct: false },
        { text: 'Zlatan Ibrahimovic', correct: false },
        { text: 'Clarence Seedorf', correct: true },
        { text: 'Mark van Bommel', correct: false }
      ]
    },
    {
      question: 'Against which team did Lionel Messi score his only five-goal haul in the Champions League?',
      answers: [
        { text: 'FC Midtjylland', correct: false },
        { text: 'Hajduk Split', correct: false },
        { text: 'FC Porto', correct: false },
        { text: 'Bayer Leverkusen', correct: true }
      ]
    },
    {
      question: 'Which city hosted the first ever UEFA Champions League final?',
      answers: [
        { text: 'Madrid', correct: false },
        { text: 'Paris', correct: true },
        { text: 'Lisbon', correct: false },
        { text: 'Istanbul', correct: false }
      ]
    },
    {
      question: 'Who won UEFA Champions League final in 2001?',
      answers: [
        { text: 'Manchester United', correct: false },
        { text: 'AC Milan', correct: false },
        { text: 'Real Madrid', correct: false },
        { text: 'Bayern Munchen', correct: true }
      ]
    },
    {
      question: 'Which player holds the record for most assists in a single Champions League season?',
      answers: [
        { text: ' Cristiano Ronaldo', correct: false },
        { text: 'A. Di Maria', correct: false },
        { text: 'James Milner', correct: true },
        { text: 'Lionel Messi', correct: false }
      ]
    },
    {
      question: 'Who is the youngest player to score in a Champions League final?',
      answers: [
        { text: 'Patrick Kulivert', correct: true },
        { text: 'Owen Hargreaves', correct: false },
        { text: 'Alphonso Davies', correct: false },
        { text: 'Carlos Alberto', correct: false }
      ]
    },
    {
      question: 'Who assisted Cristiano Ronaldo to score in 2007/08 final vs Chelsea?',
      answers: [
        { text: 'Nani', correct: false },
        { text: 'Wes Brown', correct: true },
        { text: 'Ryan Giggs', correct: false },
        { text: 'Patrice Evra', correct: false }
      ]
    },
    {
      question: 'Who scored the only goal in the 1998 Champions League final between Real Madrid and Juventus?',
      answers: [
        { text: 'Raúl', correct: false },
        { text: 'Antonio Conte', correct: false },
        { text: 'Filippo Inzaghi', correct: false },
        { text: 'Predrag Mijatovic', correct: true }
      ]
    }
  ]