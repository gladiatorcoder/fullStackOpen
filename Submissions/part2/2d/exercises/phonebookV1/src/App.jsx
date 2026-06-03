import { useEffect, useState } from 'react'
import Search from './components/Search';
import AddPerson from './components/AddPerson';
import DisplayPersons from './components/DisplayPersons';
import contactServices from './services/contactServices';
import Notification from './components/Notification';

const App = () => {

  //Globals
  const {getAllContacts} = contactServices;
  let showNotification = false;
  
  //State
  const [persons, setPersons] = useState([]);
  const [notification, setNotification] = useState("");
  const [isErr, setIsErr] = useState(false);

  //Computations
  if(notification !== ""){
    showNotification = true;
    setTimeout(() => {
      setNotification("");
      setIsErr(false);
      showNotification = false;
    }, 5000);
  }

  //Functions
  function refreshPersons(){
    getAllContacts()
    .then(res => {
        setPersons(res);
    });
  }

  function closeNotification(){
    setNotification("");
    setIsErr(false);
    showNotification = false;
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
      {showNotification &&
        <Notification isErr={isErr} message={notification} closeNotification={closeNotification} />
      }
      <Search persons={persons} />
      <br />
      <AddPerson persons={persons} handleSetPersons={setPersons} updatePerson={updatePerson} setNotification={setNotification} setIsErr={setIsErr} />
      <DisplayPersons persons={persons} setPersons={setPersons} refreshPersons={refreshPersons} setNotification={setNotification} setIsErr={setIsErr} />
    </div>
  )
}

export default App;