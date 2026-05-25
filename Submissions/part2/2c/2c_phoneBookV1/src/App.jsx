import { useEffect, useState } from 'react'
import Search from './components/Search';
import AddPerson from './components/AddPerson';
import DisplayPersons from './components/DisplayPersons';
import axios from 'axios';

const App = () => {

  //State
  const [persons, setPersons] = useState([]);

  //Effects
  useEffect(() => {
    axios.get("http://localhost:3001/persons")
    .then(res => {
      if(res.data && res.data.length > 0){
        setPersons(res.data);
      }
    }).catch(err => {
      console.error("Error found: ", err);
    })
  }, [])

  //JSX render

  return (
    <div>
      <h2>Phonebook</h2>
      
      <Search persons={persons} />
      <br />
      <AddPerson persons={persons} handleSetPersons={setPersons} />
      <DisplayPersons persons={persons} />  
    </div>
  )
}

export default App