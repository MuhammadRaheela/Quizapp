import React, { useState } from 'react';
import '../App.css';

const questions = [
  {
    questionText: "What is the capital of Pakistan?",
    answerOptions: [
      { answerText: "Karachi", isCorrect: false },
      { answerText: "Islamabad", isCorrect: true },
      { answerText: "Lahore", isCorrect: false },
      { answerText: "Hyderabad", isCorrect: false },
    ],
  },
  {
    questionText: "Which city is known as the 'City of Saints' in Pakistan?",
    answerOptions: [
      { answerText: "Multan", isCorrect: true },
      { answerText: "Karachi", isCorrect: false },
      { answerText: "Peshawar", isCorrect: false },
      { answerText: "Quetta", isCorrect: false },
    ],
  },
  {
    questionText: "What is the national language of Pakistan?",
    answerOptions: [
      { answerText: "Urdu", isCorrect: true },
      { answerText: "Punjabi", isCorrect: false },
      { answerText: "Sindhi", isCorrect: false },
      { answerText: "English", isCorrect: false },
    ],
  },
  {
    questionText: "Which mountain range is located in Pakistan?",
    answerOptions: [
      { answerText: "Himalayas", isCorrect: false },
      { answerText: "Karakoram", isCorrect: true },
      { answerText: "Andes", isCorrect: false },
      { answerText: "Alps", isCorrect: false },
    ],
  },
  {
    questionText: "What is the national flower of Pakistan?",
    answerOptions: [
      { answerText: "Rose", isCorrect: false },
      { answerText: "Jasmine", isCorrect: true },
      { answerText: "Tulip", isCorrect: false },
      { answerText: "Sunflower", isCorrect: false },
    ],
  },
  {
    questionText: "Which river is the longest in Pakistan?",
    answerOptions: [
      { answerText: "Indus", isCorrect: true },
      { answerText: "Jhelum", isCorrect: false },
      { answerText: "Chenab", isCorrect: false },
      { answerText: "Ravi", isCorrect: false },
    ],
  },
  {
    questionText: "What is the national animal of Pakistan?",
    answerOptions: [
      { answerText: "Lion", isCorrect: false },
      { answerText: "Markhor", isCorrect: true },
      { answerText: "Snow Leopard", isCorrect: false },
      { answerText: "Deer", isCorrect: false },
    ],
  },
  {
    questionText: "Which is the largest province of Pakistan by area?",
    answerOptions: [
      { answerText: "Punjab", isCorrect: false },
      { answerText: "Sindh", isCorrect: false },
      { answerText: "Balochistan", isCorrect: true },
      { answerText: "Khyber Pakhtunkhwa", isCorrect: false },
    ],
  },
  {
    questionText: "What is the national sport of Pakistan?",
    answerOptions: [
      { answerText: "Cricket", isCorrect: false },
      { answerText: "Hockey", isCorrect: true },
      { answerText: "Football", isCorrect: false },
      { answerText: "Squash", isCorrect: false },
    ],
  },
  {
    questionText: "Which Pakistani scientist won the Nobel Prize?",
    answerOptions: [
      { answerText: "Abdus Salam", isCorrect: true },
      { answerText: "Atta-ur-Rahman", isCorrect: false },
      { answerText: "Pervez Hoodbhoy", isCorrect: false },
      { answerText: "Abdul Qadeer Khan", isCorrect: false },
    ],
  },
];





const Quizapp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);



  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  
  const handleStartButtonClick = () => {
    setQuizStarted(true); 
  };

  return (
    
    <div className="quiz-app">
      <h1>Quiz App</h1>

      {!quizStarted ? (
        <div className="start-section">
          <button className="start-button" onClick={handleStartButtonClick}>
            Start Quiz
          </button>
        </div>
      ) : showScore ? (
        <div className="score-section">
          🎉 You scored {score} out of {questions.length} 🎉
        </div>
      ) : (
        
        
        <div className="question-section">
          
          <div className="question-count">Question {currentQuestion + 1}/{questions.length} </div>
          <div className="question-text">{questions[currentQuestion].questionText} </div>
          
          
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((option, index) => (
            <button key={index} className="answer-button"onClick={() => handleAnswerButtonClick(option.isCorrect)}>{option.answerText}</button>
            ))}
          </div>
        
        
        </div>
      )}
    </div>
  );
};

export default Quizapp
