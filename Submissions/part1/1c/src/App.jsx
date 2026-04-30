// import React from 'react'

// const Hello = (props) => {
//   const bornYear = () => new Date().getFullYear() - props.age; 
  
//   return(
//     <div>Hello {props.name}, you are {props.age} years old. You were born in {bornYear()}.</div>
//   )
// }

// const App = () => {
//   const name="Peter";
//   const age=10;
//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name={name} age={age} />
//       <Hello name="Maya" age={24} />
//     </div>
//   )
// }

// export default App;

import React, { useState } from 'react';

const Display = ({count}) => {
  return(
    <div>Count: {count}</div>
  );
}

const Button = ({text, action}) => {
  return(
    <button onClick={action}>{text}</button>
  );
}

const App = (props) => {
  let [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const setToZero = () => setCounter(0);

  const handleClick = () => {
    setCounter(counter + 1);
  }

  return (
    <div>
      <Display count={counter} />
      <Button action={increaseByOne} text="+" />
      <Button action={decreaseByOne} text="-" />
      <Button action={setToZero} text="Reset" />
    </div>
  );
}

export default App