import React from 'react'

const Total = ({parts}) => {

  let total = 0;
  const initTotal=0;
  let calcTotal=0;

  const courseTotal = parts.reduce(
    (accumulator, current) => {
      calcTotal = accumulator+current.exercises;
      return calcTotal;
    }, initTotal
  );

  return (
    <div id="Total">
        <p className="total">
          <strong>Number of exercises: {courseTotal}</strong>
        </p>
    </div>
  )
}

export default Total