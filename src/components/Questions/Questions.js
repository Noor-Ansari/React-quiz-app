import React, {useState} from "react";
import "./Questions.css";

function QuestionsCard({data}){
	const [currentQuestion, setQuestion] = useState(0)
	const [score, setScore] = useState(0)
	const [showScore, setShowScore] = useState(false)
	const answersHandler = isCorrect => {
		if (isCorrect){
			setScore(score+1)}

	const newQuestion = currentQuestion + 1;
		
	if (newQuestion < data.length) {
		setQuestion(newQuestion)
	}else{
	setShowScore(true)
	}};
	return (
	<div className="question-container">
		{showScore ? (
		  <div className="scoreCard">
		    <span>You scored {score} out of {data.length}.</span>
		  </div>
		)
		:(
		<div className="question-card">
			<div className="question-section">
				<div className="question-count">
				  <span>Question {currentQuestion+1}/{data.length}</span>
				</div>
			<div className="question-text">{data[currentQuestion].questionText}</div>
			</div>
			<div className='answer-section'>
				    {data[currentQuestion].answerOptions.map((answerOption, idx) => (
			    <button key={idx} className="answer-button" onClick={() => answersHandler(answerOption.isCorrect)}>
				{answerOption.text}
			    </button>)
			   )}
			</div>
	    	</div>
		)}
	</div>
)}


export default QuestionsCard;
