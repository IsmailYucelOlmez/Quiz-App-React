import React, { useState } from 'react'
import "../styles/pages.css"

const ResultPage = ({trueCount}) => {

  return (
    <div className='result'>
        <div className="result-text-section">
            <p>Puan: {trueCount*10 }</p>

        </div>
        <button onClick={()=>window.location="/"} className='restart-btn'>Restart</button>
      
    </div>
  )
}

export default ResultPage
