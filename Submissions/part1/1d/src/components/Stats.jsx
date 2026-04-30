import React from 'react'
import StatLine from './StatLine';

const Stats = ({good, neutral, bad}) => {
  if(good<1 && neutral<1 && bad<1){
    return(
      <div>
        <h2>Statistics</h2>
        <p>No feedback received.</p>
      </div>
    )
  }
  return (
    <div>
        <h2>Statistics</h2>
        <StatLine text="Good" score={good} />
        <StatLine text="Neutral" score={neutral} />
        <StatLine text="Bad" score={bad} />
    </div>
  )
}

export default Stats;