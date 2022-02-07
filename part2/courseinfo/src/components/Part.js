import React from 'react'

const Part = ({ part }) => {
    let {name, exercises} = part
    
    return (
      <p>
        {name} {exercises}
      </p>    
    )
}

export default Part