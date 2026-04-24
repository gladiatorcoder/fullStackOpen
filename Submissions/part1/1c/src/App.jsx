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

import React from 'react'

const App = (props) => {
  const {counter} = props
  return (
    <div>Count: {counter}</div>
  );
}

export default App