import React, {useState} from "react";

function App() {
  const data = [
    {
      questionText : "Which is the part of the computer system that one can physically touch?",
      answerOptions: [
        {text:"Data", isCorrect:false},
        {text:"Operating Systems", isCorrect:false},
        {text:"Hardware", isCorrect:true},
        {text:"Software", isCorrect:false}]
    },
    {
      questionText : " IC chips used in computers are usually made of:",
      answerOptions: [
        {text:"Lead", isCorrect:false},
        {text:"Silicon", isCorrect:true},
        {text:"Chromium", isCorrect:false},
        {text:"Gold", isCorrect:false}]
    },
    {
      questionText : "One Gigabyte is approximately equal is:",
      answerOptions: [
        {text:"1000,000 bytes", isCorrect:false},
        {text:"1000,000,000 bytes", isCorrect:true},
        {text:"1000,000,000,000 bytes", isCorrect:false},
        {text:"None of these", isCorrect:false}]
    },
    {
      questionText : "Which supercomputer is developed by the Indian Scientists?",
      answerOptions: [
        {text:"Param", isCorrect:true},
        {text:"Super 301", isCorrect:false},
        {text:"Compaq Presario", isCorrect:false},
        {text:"CRAY YMP", isCorrect:false}]
    },
    {
      questionText : "Which one of the following is not a linear data structure?",
      answerOptions: [
        {text:"Array", isCorrect:false},
        {text:"Binary Tree", isCorrect:true},
        {text:"Queue", isCorrect:false},
        {text:"Stack", isCorrect:false}]
    },
  ]
  const [currentQuestion, setQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)

  const answersHandler = isCorrect => {
    if (isCorrect){
      setScore(score+1)
    }

    const newQuestion = currentQuestion + 1;
    if (newQuestion < data.length) {
      setQuestion(newQuestion)
    }
    else{
      setShowScore(true)
    }};
  return (
      <div className="App">
        {showScore ? (
          <div className="scoreCard">
            <span>You scored {score} out of {data.length}.</span>
          </div>
        )
        :(
          <>
            <div className="question-section">
                <div className="question-count">
                  <span>Question {currentQuestion+1}/{data.length}</span>
                </div>
                <div className="question-text">{data[currentQuestion].questionText}</div>
            </div>
            <div className='answer-section'>
    		      {data[currentQuestion].answerOptions.map((answerOption) => (
    	      	<button className="answer-button" onClick={() => answersHandler(answerOption.isCorrect)}>{answerOption.text}</button>
    	      	))}
            </div>
          </>
        )}
      </div>
  );}

export default App;
