import { useState } from 'react';
import Note from './components/Note'
import { useEffect } from 'react';
import axios from 'axios';

const App = (props) => {

  //Globals
  const serverUrl = "http://localhost:3001/notes";

  //State
  const [notes, setNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("A new note...");
  const [showAll, setShowAll] = useState(true);

  //Effects
  useEffect(() => {
    axios.get(serverUrl)
    .then(res => {
      if(res.data && res.data.length > 0) setNotes(res.data);
    })
    .catch(err => {
      console.error("Error encountered while fetching notes: ", err);
    })
  }, []);

  // State variable based calculations
  let importantNotes = notes.filter(note => note.important);

  //Functions
  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      // id: String(notes.length + 1),
    };

    axios.post(serverUrl, noteObject)
    .then(res => {
      setNotes(notes.concat(res.data));
      setNewNote("");
    }).catch(err => {
      console.log("Error posting the new note: ", err);
    })
  }

  const handleNoteChange = (event) => {
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

  function toggleNoteImportance(e, id){
    const noteToBeChanged = notes.find(note => note.id === id);
    noteToBeChanged.important = !noteToBeChanged.important;
    const workedNotes = notes.map(note => {
      if(note.id===id){
        return{
          ...note,
          important: !note.important
        };
      }
      return note;
    });

    axios.put(`${serverUrl}/${id}`, noteToBeChanged)
    .then(res => {
      console.log(res.data);
      setNotes(notes.map(note => note.id===id ? res.data : note));
    })

  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {showAll ? notes.map((note) => (
          <Note key={note.id} note={note} importantNote={note.important} toggleNoteImportance={toggleNoteImportance} />
        )) :
        importantNotes.map(note => (
          <Note key={note.id} note={note} importantNote={note.important} toggleNoteImportance={toggleNoteImportance} />
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