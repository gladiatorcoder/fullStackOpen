import axios from 'axios';
import React from 'react';
import contactServices from '../services/contactServices';

const Person = ({person, setPersons, refreshPersons, setNotification}) => {

  //Component globals
  const {deleteContact} = contactServices;

  function deleteContact1(id){
    if(window.confirm(`Are you sure to delete ${person.name}?`)){
      deleteContact(id)
      .then(res => {
        setNotification(`${person.name} deleted from phonebook.`)
        refreshPersons();
      })
      .catch(err => console.error("Error deleting contact", id, err));
    }
  }

  return (
    <div>
        {person.name && <span>{person.name}</span>}&nbsp; - &nbsp;
        {person.number && <span>{person.number}</span>}
        &nbsp; &nbsp;
        <button style={{cursor:"pointer"}} onClick={(e) => deleteContact1(person.id)}>Delete</button>
    </div>
  )
}

export default Person