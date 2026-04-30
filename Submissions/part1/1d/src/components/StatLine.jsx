import React from 'react'

const StatLine = ({text, score}) => {
  return (
    <div>
        {(text && score > 0) && <p>{text}: {score}</p>}
    </div>
  )
}

export default StatLine;