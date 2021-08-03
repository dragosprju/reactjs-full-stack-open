import React, { useState } from 'react'
import Statistics from './Statistics'
import Button from './Button'

const App = () => {
    // save clicks of each button to its own state
    const goodState = useState(0)
    const neutralState = useState(0)
    const badState = useState(0)

    const good = goodState[0]
    const neutral = neutralState[0]
    const bad = badState[0]

    return (
        <div>
            <h1>give feedback</h1>
            <Button name="good" state={goodState} />
            <Button name="neutral" state={neutralState} /> 
            <Button name="bad" state={badState} />
            <h1>statistics</h1>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

export default App