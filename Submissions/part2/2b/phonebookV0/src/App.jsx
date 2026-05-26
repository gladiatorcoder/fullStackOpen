import { useState } from 'react'
import Search from './components/Search';
import AddPerson from './components/AddPerson';
import DisplayPersons from './components/DisplayPersons';

const App = () => {

  //Variables
  
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '9892811067' },
    { name: 'Josh Kelly', number: '9004483879' },
    { name: "Josh Hunter", number: '9807654378'},
    { name: "Aniket Joshi", number: "9896543096" },
    { name: "Ankit Singh", number: "6785437865" },
    { name: "Shakir Ahmed", number: "7710895224" },
    { name: "Shakir Moulvi", number: "7986239087" }
  ]);

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