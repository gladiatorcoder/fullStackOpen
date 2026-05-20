import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({course}) => {
  console.log("Course rendered", course);
  return (
    <div id="Course" key={course.id}>
        <Header title={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
    </div>
  )
}

export default Course