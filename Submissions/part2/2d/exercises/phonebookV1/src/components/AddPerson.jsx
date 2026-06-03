import React, { useState } from 'react'
import contactServices from '../services/contactServices';

const AddPerson = ({persons, handleSetPersons, updatePerson, setNotification, setIsErr}) => {

  //Component globals
  const {addContact, updateContact} = contactServices;

  //State variables
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  let duplicateName=false;
  let duplicateId="";


  //Functions
  function clearInputField(){
    setNewName("");
    setNewNumber("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(newName==="") return;

    persons.map(person => {
      if(person.name.toLowerCase()===newName.toLowerCase()){
        duplicateName=true;
        duplicateId=person.id;
        return;
      }
    });

    const newPerson = {
      name: newName,
      number: newNumber
    };

    if(duplicateName){
      if(window.confirm(`${newName} is already added to the phonebook. Change number?`)){
        updateContact(duplicateId, newPerson)
        .then(res => {
          updatePerson(res.data.id, res.data);
        })
        .catch(err => {
          setNotification(`${newName}'s information was not found because it was deleted`);
          setIsErr(true);
        });
        clearInputField();
        return;
      }
    };
    

    // console.log(`New persons array: `);
    // updatedPersons.map(person => {
    //   console.log(person);
    // });

    addContact(newPerson)
    .then(newPerson => {
      const updatedPersons = [...persons, newPerson.data];
      handleSetPersons(updatedPersons);
      setNotification(`${newPerson.data.name} was added successfully.`);
    })
    .catch(err => {
      console.error("Error creating new person: ", err);
    });
    clearInputField();
  }

  const handleChange = (e) => {
    if(e.target.id==="nameInput"){
      setNewName(e.target.value);
    }else if(e.target.id==="numberInput"){
      setNewNumber(e.target.value);
    }
  }

  return (
    <form id="addPersonForm">
        <div>
            Name: <input id="nameInput" value={newName} onChange={(e) => handleChange(e)} />
            Number: <input id="numberInput" value={newNumber} onChange={(e) => handleChange(e)} />
        </div>
        <div>
            <button onClick={(e) => handleSubmit(e)} type="submit">Add</button>
        </div>
    </form>
  )
}

export default AddPerson