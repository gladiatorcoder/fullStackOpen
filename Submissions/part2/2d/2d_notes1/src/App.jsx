import { useState } from 'react';
import Note from './components/Note'
import { useEffect } from 'react';
import axios from 'axios';

const App = (props) => {

  //State
  const [notes, setNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("A new note...");
  const [showAll, setShowAll] = useState(true);

  //Effects
  useEffect(() => {
    axios.get('http://localhost:3001/notes')
    .then(res => {
      if(res.data && res.data.length > 0) setNotes(res.data);
    })
    .catch(err => {
      console.error("Error encountered while fetching notes: ", err);
    })
  }, []);

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      // id: String(notes.length + 1),
    };

    axios.post('http://localhost:3001/notes', noteObject)
    .then(res => {
      setNotes(notes.concat(res.data));
      if(res.data.important){
        setFilteredNotes(notes.concat(res.data));
      }
      setNewNote("");
    }).catch(err => {
      console.log("Error posting the new note: ", err);
    })
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