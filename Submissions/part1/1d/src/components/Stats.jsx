import React from 'react'
import StatLine from './StatLine';

const Stats = ({good, neutral, bad}) => {
    const total = good+neutral+bad;
    const positive = (good/(good+bad+neutral) * 100);
    const avg = (good + (bad * -1))/3;

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
        {(avg) && <p>Average: {avg.toFixed(1)}</p>}
        {(total) && <p>Total: {total}</p>}
        {(positive) && <p>Positive: {positive.toFixed(1)}%</p>}
    </div>
  )
}

export default Stats;