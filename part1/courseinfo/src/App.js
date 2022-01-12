import React from 'react'



const Header = (props) => (
  <>
    <h1>{props.course}</h1>
  </>
)

const Part = (props) => (
  <>
    <p>{props.part} {props.exercise} </p>
  </>
)


const Content = (props) => (
  <>
    <Part part={props.exercises[0]} exercise={props.exercises[1]} />
    <Part part={props.exercises[2]} exercise={props.exercises[3]} />
    <Part part={props.exercises[4]} exercise={props.exercises[5]} />
  </>
)

const Total = (props) => (
  <>
    <p>Number of exercises {props.exercises[0] + props.exercises[1] + props.exercises[2]}</p>
  </>
)



const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content exercises={[exercises1, part1, exercises2, part2, exercises3, part3]} />
      <Total exercises={[exercises1, exercises2, exercises3]} /> 
    </div>
  )
}

export default App