import React, { useState } from 'react'
import Button from './components/Button'
import Stats from './components/Stats';

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

      <Stats good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App