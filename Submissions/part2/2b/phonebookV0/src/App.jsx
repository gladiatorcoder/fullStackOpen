import { useState } from 'react'

const App = () => {
  
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '9892811067' },
    { name: 'Josh Kelly', number: '9004483879' }
  ]);
  
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  let duplicateName=false;

  function clearInputField(){
    setNewName("");
    document.getElementById("nameInput").value="";
    document.getElementById("numberInput").value="";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(newName==="") return;

    persons.map(person => {
      if(person.name.toLowerCase()===newName.toLowerCase()){
        alert(`${newName} already exists in the phonebook.`);
        duplicateName=true;
        clearInputField();
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

    setPersons(updatedPersons);
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
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          Name: <input id="nameInput" onChange={(e) => handleChange(e)} />
          Number: <input id="numberInput" onChange={(e) => handleChange(e)} />
        </div>

        <div>
          <button onClick={(e) => handleSubmit(e)} type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div id="persons">
        <script>
          {console.log("Persons: ", persons)}
        </script>
        {persons && persons.length > 0 && persons.map(person => {
            return
              <div>
                {person.name && <div key={person.name}>{person.name}</div>}
                {person.number && <div key={person.number}>{person.number}</div>}
              </div>
          })
        }
      </div>  
    </div>
  )
}

export default App