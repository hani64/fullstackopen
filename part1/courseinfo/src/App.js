import React from 'react'



const Header = (props) => (
  <>
    <h1>{props.course}</h1>
  </>
)

const Content = (props) => (
  <>
    <p>{props.exercises[0]} {props.exercises[1]}</p>
    <p>{props.exercises[2]} {props.exercises[3]}</p>
    <p>{props.exercises[4]} {props.exercises[5]}</p>
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