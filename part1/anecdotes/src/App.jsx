import { useState } from 'react'


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  

  const nextAnecdote = () => {
    const max = anecdotes.length
    setSelected(Math.floor(Math.random() * max))
  }

  const [votes, setVote] = useState(Array(anecdotes.length).fill(0))
  console.log("Component rendered, votes reset to:", votes)

  const voteAnecdote = () => {
     console.log("Before update:", votes)
    //  votes[selected] += 1 // Don't mute the original 
    const newVotes = [...votes]
    newVotes[selected] += 1
     console.log("After update:", votes)
     console.log("Are they the same object?", votes === votes) // Always true, but why is this important?
    //  setVote(votes) // Don't put the original one, using the copy
    console.log("Setting vote to:", votes)
    setVote(newVotes) // [...votes is about object spread]
   }

  return (
    <div>
      {anecdotes[selected]}
      <p>Have {votes[selected]} times</p>
      <br></br>
      <button onClick={voteAnecdote}>vote</button>
      <button onClick={nextAnecdote}>next anecdote</button>
      
    </div>
  )
}

export default App