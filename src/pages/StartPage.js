import React from 'react'
import "../styles/pages.css"
import { useNavigate } from 'react-router-dom'

const StartPage = () => {

  const TOTAL_QUESTION=10;
  const navigate=useNavigate();

  const startQuiz=()=>{

    navigate(`/quiz/${TOTAL_QUESTION}`);
  }

  return (
    <div className='start-page-field'>
      <button onClick={startQuiz} className='start-btn btn'>Start Quiz</button>
    </div>
  )
}

export default StartPage
