import axios from 'axios';
import React, { useEffect, useState } from 'react'

const App = () => {
  //Globals
  const baseURL="https://studies.cs.helsinki.fi/restcountries";


  //State
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");


  //Computated values
  

  //Effects
  useEffect(() => {
    axios.get(`${baseURL}/api/all`)
    .then(res => {
      setCountries(res.data);
    })
    .catch(err => console.log("Error fetching countries", err));
  }, []);

  useEffect(() => {
    if(!searchTerm==="") return;
    console.log("Searching the local copy of countries");
    console.log("Searching for: ", searchTerm);
    console.log("Local countries: ", countries);
  }, [searchTerm]);


  //Functions

  
  //Component render
  return (
    <section>
      <h2>Search country</h2>
      <form>
        <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <button type="submit">Search countries</button>
      </form>
    </section>
  )
}

export default App