import { useState } from 'react'
import Button from './Components/Button';
import DisplayAnecdote from './Components/DisplayAnecdote';

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
   
  const ranNum = Math.floor(Math.random()*anecdotes.length);
  const [selected, setSelected] = useState(ranNum);
  const [votes, setVotes] = useState(anecdotes.map((anecdote) => {
    return 0;
  }));
  const [mostVotes, setMostVotes] = useState(0);
  const [mostVotesIndex, setMostVotesIndex] = useState(0);
  const [votesRecvd, setVotesRecvd] = useState(false);

  function nextAnecdote(){
    if(selected<anecdotes.length-1){
      setSelected(selected+1);
    }else{
      setSelected(0);
    }
  }

  function upVote(index){
    setVotes(votes.map((vote, i) => 
      i===index ? vote+1 : vote
    ));
    setVotesRecvd(true);
  }

  (function findMostVotes(){
    votes.map((vote, index) => {
      if(vote>mostVotes){
        setMostVotes(vote);
        setMostVotesIndex(index);
      }
    })
  })();

  console.log("App.jsx just re-rendered", mostVotes, mostVotesIndex);

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <DisplayAnecdote text={anecdotes[selected]} />
      <p>{votes[selected] > 0 ? votes[selected]: "No votes yet"}</p>
      <Button handleClick={nextAnecdote} text="Next" />
      <Button handleClick={() => upVote(selected)} text="Upvote" />
      <h2>Most Voted</h2>
      {votesRecvd !== false ? 
        <div>
          <DisplayAnecdote text={anecdotes[mostVotesIndex]} />
          <p>Has {mostVotes} votes</p>
        </div> :
        <div>No votes received yet!</div>
      }
    </div>
  )
}

export default App;