import axios from 'axios';
import React, { useEffect, useState } from 'react'

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
      console.log("Fetched countries successfully: ", res.data);
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
    console.log(searchResultsLocal);
    if(searchResultsLocal.length > 10){
      setSearchResults([]);
      setNotification("Too many matches, specify another filter.");
      let timer = setTimeout(() => {
        setNotification("");
      }, 3000);
      return () => clearTimeout(timer);

    }else if(searchResultsLocal.length===1){
      setSearchResults(searchResultsLocal);
      console.log(searchResults);
      setNotification("");

    }else{
      setSearchResults(searchResultsLocal);
      setNotification("");
    }

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
      {notification && <div>
        {notification}  
      </div>}
      {searchResults && searchResults.length > 1 && <div className='searchResults'>
        {searchResults.map(result => <div key={result.latlng[0]} className='searchResult'>
          {result.name.common}
        </div>)}
      </div>}
      {searchResults && searchResults.length === 1 && <div className="countryInfo">
        <h4>{searchResults[0].name.common}</h4>
        <div>Capital: {searchResults[0].capital[0]}</div>
        <div>Area: {searchResults[0].area}</div>
        <div>Languages
          <ul>
            {Object.values(searchResults[0].languages).map(language => <li key={language}>{language}</li>)}
          </ul>
        </div>
        <img src={searchResults[0].flags.png} />
      </div>}
    </section>
  )
}

export default App