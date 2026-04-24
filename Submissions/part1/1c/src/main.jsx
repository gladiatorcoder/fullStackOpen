import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

let counter=0;

const refresh = () => {
  root.render(
    <StrictMode>
      <App counter={counter} />
    </StrictMode>
  )
}

setInterval(() => {
  counter++;
  refresh();
}, 1000)

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <App counter={counter}/>
  </StrictMode>,
)

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
