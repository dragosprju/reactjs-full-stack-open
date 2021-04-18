import React from 'react'

const Part = (props) => {
  const part = props.part
  const exercises = props.exercises

  return (
    <div>
      <p>
        {part} {exercises}
      </p>
    </div>
  )
}

export default Part