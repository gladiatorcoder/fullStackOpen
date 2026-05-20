import React from 'react'

const Total = ({parts}) => {

  console.log("From Total, parts: ", parts);

  let total = 0;
  const initTotal=0;
  let calcTotal=0;
  let courseTotal="undefined";

  if(parts && parts.length > 1){
    courseTotal = parts.reduce(
      (accumulator, current) => {
        calcTotal = accumulator+current.exercises;
        return calcTotal;
      }, initTotal
    );
  }

  return (
    <div id="Total">
        <p className="total">
          {courseTotal !== 'undefined' ? <strong>Number of exercises: {courseTotal}</strong> : ""}
        </p>
    </div>
  )
}

export default Total