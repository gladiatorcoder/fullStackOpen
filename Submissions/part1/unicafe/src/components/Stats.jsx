import React from 'react'
import StatLine from './StatLine';

const Stats = ({good, neutral, bad}) => {
    
    console.log("Good:"+good +", Neutral:"+neutral+", Bad:"+bad)

    const total = good+neutral+bad;
    const positive = (good/(good+bad+neutral) * 100);
    const avg = (good + (bad * -1))/total;

    console.log("Total: ", total);
    console.log("Positive: ", positive);
    console.log("Average: ", avg);

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
        <table>
            <tbody>
                <StatLine text="Good" score={good} />
                <StatLine text="Neutral" score={neutral} />
                <StatLine text="Bad" score={bad} />
                {(avg !== undefined) && <StatLine text="Average" score={avg.toFixed(1)} />}
                {(total !== undefined) && <StatLine text="Total" score={total} />}
                {(positive!== undefined) && <StatLine text="Positive" score={`${positive.toFixed(1)}%`} />}
            </tbody>
        </table>
    </div>
  )
}

export default Stats;