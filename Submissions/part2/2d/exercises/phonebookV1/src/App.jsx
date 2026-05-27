import { useEffect, useState } from 'react'
import Search from './components/Search';
import AddPerson from './components/AddPerson';
import DisplayPersons from './components/DisplayPersons';
import contactServices from './services/contactServices';

const App = () => {

  //Globals
  const {getAllContacts} = contactServices;

  //State
  const [persons, setPersons] = useState([]);

  //Functions
  function refreshPersons(){
    getAllContacts()
    .then(res => {
        setPersons(res);
    });
  }

  function updatePerson(id, updatedPerson){
    const updatedPersons = persons.map(person => {
      if(id===person.id){
        person=updatedPerson;
        return person;
      }
      return person;
    });
    console.log("Updated persons list: ", updatedPersons);
    setPersons(updatedPersons);
  }

  //Effects
  useEffect(() => {
    getAllContacts()
    .then(res => {
        setPersons(res);
    });
  }, []);

  //JSX render

  return (
    <div>
      <h2>Phonebook</h2>
      
      <Search persons={persons} />
      <br />
      <AddPerson persons={persons} handleSetPersons={setPersons} updatePerson={updatePerson} />
      <DisplayPersons persons={persons} setPersons={setPersons} refreshPersons={refreshPersons} />  
    </div>
  )
}

export default App