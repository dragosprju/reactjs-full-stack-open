import React from 'react'

const Total = (props) => {
  const exercises1 = props.exercises1
  const exercises2 = props.exercises2
  const exercises3 = props.exercises3

  return (
    <div>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default Total