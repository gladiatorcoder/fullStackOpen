import React from 'react'

const History = ({allClicks}) => {
  if(allClicks.length < 1){
    return(
        <div>
            <p>Click on the buttons to start.</p>
        </div>
    )
  }
  return (
    <div>History: {allClicks.join(", ")}</div>
  )
}

export default History;