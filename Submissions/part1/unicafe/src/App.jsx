import React, { useState } from 'react'
import Button from './components/Button'

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const vote = (text) => {
    if(text==="good"){
      setGood(good+1);
    }else if(text==="neutral"){
      setNeutral(neutral+1);
    }else{
      setBad(bad+1);
    }
  }  

  return (
    <div>
      <h1>Feedback</h1>
      <Button onClick={vote} text="Good" />
      <Button onClick={vote} text="Neutral" />
      <Button onClick={vote} text="Bad" />

      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
    </div>
  )
}

export default App