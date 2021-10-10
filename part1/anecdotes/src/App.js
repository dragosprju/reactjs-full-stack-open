import React, { useState } from 'react'

const App = () => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  function setRandomAnecdote() {
    const max = anecdotes.length
    setAnecdote(getRandomInt(max))
  }

  function increaseVote() {
    const noOfVotesNew = { ...noOfVotes }

    noOfVotesNew[selected] += 1

    setNoOfVotes(noOfVotesNew)
  }

  function getAnecdoteWithMostVotes() {
    let anecdoteWithMostVotes = 0
    let mostVotes = 0

    for (let i = 0; i < anecdotes.length; i++) {
      if (noOfVotes[i] > mostVotes) {
        anecdoteWithMostVotes = i
        mostVotes = noOfVotes[i]
      }
    }
    
    return anecdoteWithMostVotes
  }

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setAnecdote] = useState(0)
  const [noOfVotes, setNoOfVotes] = useState(new Array(anecdotes.length).fill(0))

  return (
    <div>
      <h1>Anecdote of the day</h1>

      {anecdotes[selected]} <br />
      has {noOfVotes[selected]} votes <br />

      <button onClick={increaseVote}>vote</button>
      <button onClick={setRandomAnecdote}>next anecdote</button>
      
      <h1>Anecdote with most votes</h1>

      {anecdotes[getAnecdoteWithMostVotes()]} <br />
      has {noOfVotes[getAnecdoteWithMostVotes()]} votes <br />

    </div>
  )
}

export default App