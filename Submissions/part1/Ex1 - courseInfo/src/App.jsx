import Content from "./components/Content";
import Header from "./components/Header";
import Total from "./components/Total";

const App = () => {
  const course="Half stack application development.";
  const part1="Fundamentals of React";
  const exercises1=10;
  const part2="Using props to pass data";
  const exercises2=7;
  const part3="State of a component";
  const exercises3=14; 

  const parts = [
    {
      name: part1, 
      exercises: exercises1
    },
    {
      name: part2,
      exercises: exercises2 
    },
    {
      name: part3,
      exercises: exercises3
    }
  ];
  
  const total = exercises1 + exercises2 + exercises3;
  return(
    <div>
      <Header title={course} />
      <Content parts={parts} />
      <Total total={total} />
    </div>
  )
}

export default App;