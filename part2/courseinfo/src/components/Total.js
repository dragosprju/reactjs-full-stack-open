import React from 'react'

const Total = (parts) => {
    //console.log(parts)

    const sum = parts.reduce((a, b) => (a.exercises + b.exercises))

    return (
      <p>Number of exercises {sum}</p>
    ) 
}

export default Total