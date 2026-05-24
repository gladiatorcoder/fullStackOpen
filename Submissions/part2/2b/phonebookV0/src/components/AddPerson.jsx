import React, { useState } from 'react'

const AddPerson = ({persons, handleSetPersons}) => {

  //State variables
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  let duplicateName=false;


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
        alert(`${newName} already exists in the phonebook.`);
        duplicateName=true;
        return;
      }
    });

    if(duplicateName) return;
    
    const newPerson = {
      name: newName,
      number: newNumber
    };

    const updatedPersons = [...persons, newPerson];
    // console.log(`New persons array: `);
    // updatedPersons.map(person => {
    //   console.log(person);
    // });

    handleSetPersons(updatedPersons);
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