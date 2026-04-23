import React from 'react'

const Total = ({parts}) => {
  console.log(parts);

  let total = 0;
  parts.forEach(part => {
    total = Number(part.exercises) + total
  });

  return (
    <div>
        <p>Number of exercises: {total}</p>
    </div>
  )
}

export default Total