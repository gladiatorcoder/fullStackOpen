import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Country from './Components/Country';
import Countries from './Components/Countries';

const App = () => {
  //Globals
  const baseURL="https://studies.cs.helsinki.fi/restcountries";


  //State
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [notification, setNotification] = useState("");
  

  //Effects
  useEffect(() => {
    axios.get(`${baseURL}/api/all`)
    .then(res => {
      setCountries(res.data);
    })
    .catch(err => console.log("Error fetching countries", err));
  }, []);

  useEffect(() => {
    if(searchTerm===""){
      setSearchResults([]);
      setNotification("");
      return
    };
    if(countries.length < 1) return;
    const searchResultsLocal = countries.filter(country => country.name.common.toLowerCase().includes(searchTerm.toLowerCase()));
    if(searchResultsLocal.length > 10){
      setSearchResults([]);
      setNotification("Too many matches, specify another filter.");
      let timer = setTimeout(() => {
        setNotification("");
      }, 3000);
      return () => clearTimeout(timer);

    }else if(searchResultsLocal.length===1){
      setSearchResults(searchResultsLocal);
      setNotification("");

    }else{
      setSearchResults(searchResultsLocal);
      setNotification("");
    }

  }, [searchTerm, countries]);


  //Functions

  
  //Component render
  return (
    <section>
      <h2>Search country</h2>
      <form onSubmit={(e) => {e.preventDefault();} }>
        <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <button type="submit">Search countries</button>
      </form>
      {notification && <div>
        {notification}  
      </div>}
      {searchResults && searchResults.length > 1 && <Countries searchResults={searchResults}/>}
      {searchResults && searchResults.length === 1 && <Country country={searchResults[0]} />}
    </section>
  )
}

export default App