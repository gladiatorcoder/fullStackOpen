import { useState } from 'react'

const App = () => {
  
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' },
    { name: 'Josh Kelly' }
  ]);
  
  const [newName, setNewName] = useState('')
  let duplicateName=false;

  function clearInputField(){
    setNewName("");
    document.getElementById("nameInput").value="";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(newName==="") return;

    persons.map(person => {
      if(person.name.toLowerCase()===newName.toLowerCase()){
        alert("This name already exists in the phonebook.");
        duplicateName=true;
        clearInputField();
        return;
      }
    });

    if(duplicateName) return;
    
    const newPerson = {
      name: newName
    };

    const updatedPersons = [...persons, newPerson];
    console.log(`New persons array: `);
    updatedPersons.map(person => {
      console.log(person);
    });

    setPersons(updatedPersons);
    clearInputField();
  }

  const handleChange = (e) => {
    setNewName(e.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          Name: <input id="nameInput" onChange={(e) => handleChange(e)} />
        </div>

        <div>
          <button onClick={(e) => handleSubmit(e)} type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons && persons.length > 0 && persons.map(person => {
            return <li key={person.name}>{person.name}</li>
          })
        }
      </ul>
    </div>
  )
}

export default App