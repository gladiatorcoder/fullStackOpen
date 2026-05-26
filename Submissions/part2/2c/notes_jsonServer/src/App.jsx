import { useEffect, useState } from 'react';
import Note from './components/Note'
import axios from 'axios';

const App = (props) => {

  const [notes, setNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("A new note...");
  const [showAll, setShowAll] = useState(true);

  // setTimeout(() => {
  //   console.log("loop..");
  //   let i=0;
  //   while(i < 99999999999){
  //     i++;
  //   }
  //   console.log("end");
  // }, 5000);

  useEffect(() => {
    console.log("Effect");
    axios.get("http://localhost:3001/notes")
    .then(response => {
      console.log("Promise fulfilled");
      setNotes(response.data);
    })
  }, []);
  console.log("render", notes.length, "notes");

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: String(notes.length + 1),
    };
    console.log("addNotes function called. New note is: ", noteObject);

    setNotes(notes.concat(noteObject));
    if(noteObject.important){
      setFilteredNotes(filteredNotes.concat(noteObject));
    }
    setNewNote("");
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  }

  const handleShowAll = (event) => {
    if(showAll === false){
      setShowAll(!showAll);
    }else{
      setShowAll(!showAll);
      setFilteredNotes(notes.filter(note => (
        note.important===true
      )));
    }
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {showAll ? notes.map((note) => (
          <Note key={note.id} note={note} />
        )) :
        filteredNotes.map(note => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <button onClick={() => handleShowAll(event)}>{showAll ? "Show important" : "Show all"}</button>
      <form onSubmit={addNote} action="">
        <input onChange={() => handleNoteChange(event)} value={newNote} />
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default App;