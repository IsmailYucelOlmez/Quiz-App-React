import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as api from '../api/Api'
import QuizSection from '../components/QuizSection';
import ResultPage from './ResultPage';

const QuizPage = () => {

  const {total}=useParams();

  const [questionsData,setQuestionsData]=useState("");
  const [count,setCount]=useState(0);
  const [trueCount,setTrueCount]=useState(0);
  const [isFinal,setIsFinal]=useState(false);

  //modal state
  

  useEffect(()=>{

    const getData=async()=>{
        const data=await api.fetchQuizApi(total);
        setQuestionsData(data);
    }
    getData();
  },[])
  
  
  return (
    <div className='quiz-page'>
      {
        isFinal ? <ResultPage trueCount={trueCount}/>:


        <QuizSection
          questionsData={questionsData}
          count={count}
          setCount={setCount}
          setTrueCount={setTrueCount}
          setIsFinal={setIsFinal}
        />
      }
    </div>
  )
}

export default QuizPage
