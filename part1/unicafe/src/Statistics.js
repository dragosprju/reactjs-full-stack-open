import React, { useState } from 'react'

const Statistics = (props) => {
  // save clicks of each button to its own state
  const text = props.text
  const value = props.value
  

  return (
    <div>
      {text} {value}<br />
    </div>
  )
}

export default Statistics