import axios from 'axios';
import React from 'react';
import contactServices from '../services/contactServices';

const Person = ({person, setPersons, refreshPersons}) => {

  //Component globals
  const {deleteContact} = contactServices;

  function deleteContact1(id){
    deleteContact(id)
    .then(res => {
      refreshPersons();
    })
    .catch(err => console.error("Error deleting contact", id));
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