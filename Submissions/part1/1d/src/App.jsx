// import React, { useState } from 'react'

// const App = () => {
//   const [left, setLeft] = useState(0);
//   const [right, setRight] = useState(0);

//   return (
//     <div>
//       {left}
//       <button onClick={() => {setLeft(left+1)}}>Left</button>
//       <button onClick={() => {setRight(right+1)}}>Right</button>
//       {right}
//     </div>
//   )
// }

// export default App;

// import React, { useState } from 'react'

// const App = () => {
//   const [clicks, setClicks] = useState({
//     left: 0,
//     right: 0
//   });

//   const handleClick = (side) => {
//     console.log(side, clicks);
//     side==="left" ? setClicks({...clicks, left: clicks.left+1}) : setClicks({...clicks, right: clicks.right+1});
//   }

//   return (
//     <div>
//       {clicks.left}
//       <button onClick={() => {handleClick("left")}}>Left</button>
//       <button onClick={() => {handleClick("right")}}>Right</button>
//       {clicks.right}
//     </div>
//   )
// }

// export default App;

import React, { useState } from 'react';
import History from './components/History';
import Button from './components/Button';

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'));
    const updatedLeft = left+1;
    setTotal(updatedLeft+right);
    setLeft(left+1);
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'));
    const updatedRight = right+1;
    setTotal(left+updatedRight);
    setRight(right+1);
  }

  return (
    <div>
      {left}
      <Button onClick={handleLeftClick} text="Left" />
      <Button onClick={handleRightClick} text="Right" />
      {right}
      <p>Number of clicks: {allClicks.length}</p>
      <History allClicks={allClicks} />
    </div>
  )
}

export default App;