const Note = ({ toggleNoteImportance, importantNote, note }) => {
  return <li>
    <span>{note.content}</span>&nbsp;&nbsp;
    <button style={{cursor: "pointer"}} data-note-id={note.id} onClick={(e) => toggleNoteImportance(e, note.id)}>{importantNote ? "Not important" : "Important"}</button>
  </li>

}

export default Note;