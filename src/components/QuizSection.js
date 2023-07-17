import React,{ useEffect, useState } from 'react'


const QuizSection = ({questionsData,count,setCount,setTrueCount,setFalseCount,setIsFinal}) => {

    

    const [timer,setTimer]=useState(20);

    const selectChoice=(e)=>{


       if(questionsData[count]?.correct_answer==e.currentTarget.value){

            setTrueCount((prevState)=>prevState+1);
       }
       setCount(count+1);
       if(count==9){

        setIsFinal(true)
       }
       setTimer(20);
    }

    const passQuestion=()=>{
      setCount(count+1);
       if(count==9){

        setIsFinal(true)
       }
       setTimer(20);
    }

    useEffect(()=>{

      const timeInterval=setInterval(()=>{
        if(timer>0){
          setTimer(timer-1);
        }
        if(timer==0 && count<10){

          setCount(count+1);
          setTimer(20);

        }else if(count>=10){

          setIsFinal(true);
        }

        

      },1000)

      return()=>{

        clearInterval(timeInterval); //sayaç geri sayarken sekme vb. çirkin görüntüleri ortadan kaldırır.
      }

    },[timer])

  return (
    <div className='question-field'>

      <div style={{width:timer*5+"%"}}  className='time-bar'>
        
      </div>

      <div className='text-time-field'>
        <div className='question-text-field'>
          <p>{count+1}.  {questionsData[count]?.question}</p>

        </div>
        <div className='timer-field'>
           <p>{timer}</p>
          
        </div>
          
          
      </div>

      <div className='question-options-field'>
          {
            questionsData[count]?.answers?.map((answer,id)=>(

                <button onClick={(e)=>selectChoice(e)} key={id} value={answer}>{answer}</button>
            ))
          }

      </div>
      <div className='question-field-footer'>
        <div className='question-count-field'>
        <p>{count+1}/10</p>
        </div>
        
        <button onClick={passQuestion} className='next-btn'>Next Question</button>
      </div>
    </div>
  )
}

export default QuizSection
