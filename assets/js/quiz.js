function startGame() {}

function setNextQuestion() {}

function showQuestion() {}

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