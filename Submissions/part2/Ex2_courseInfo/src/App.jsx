import Content from "./components/Content";
import Course from "./components/Course";
import Header from "./components/Header";
import Total from "./components/Total";

const App = () => {
  const courses = [
    {
      name: "Half stack application development.",
      parts: [
        {
          name: "Fundamentals of React", 
          exercises: 11,
          id: 1
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2 
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3
        }
      ]
    },
    
    {
      name: "Redux",
      exercises: 11,
      id: 4
    },

    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2
        }
      ]
    }
  ];

  console.log("From App: Courses: ", courses);
  
  return(
    <div>
      { courses && courses.map(course =>
        <Course course={course} key={course.id}/> 
      )}
    </div>
  )
}

export default App;