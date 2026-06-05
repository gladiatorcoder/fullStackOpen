import React, { useState } from 'react'
import Country from './Country';

const Countries = ({searchResults}) => {

  //Component globals
  
  const [displayedCountry, setDisplayedCountry] = useState({});

  function showCountry(country){
    setDisplayedCountry(country);
    console.log("displayedCountry:::", country);
  }

  return (
    <div className='searchResults'>
        {searchResults.map(result => <div key={result.latlng[0]} className='searchResult'>
            {result.name.common}
            <button onClick={() => showCountry(result)}>Show</button>
            {Object.keys(displayedCountry).length > 0 && <Country country={displayedCountry} />}
        </div>)}
    </div>
  )
}

export default Countries