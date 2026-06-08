import React, { useState } from 'react'
import Country from './Country';

const Countries = ({searchResults}) => {

  //Component globals
  
  const [displayedCountry, setDisplayedCountry] = useState({});
  const [displayedCountryIndex, setDisplayedCountryIndex] = useState(0);

  function showCountry(country, index){
    setDisplayedCountry(country);
    setDisplayedCountryIndex(index);
  }

  return (
    <div className='searchResults'>
        {searchResults.map((result, index) => <div key={result.latlng[0]} className='searchResult'>
            {result.name.common}
            <button onClick={() => showCountry(result, index)}>Show</button>
            {Object.keys(displayedCountry).length > 0 && displayedCountryIndex===index && <Country country={displayedCountry} />}
        </div>)}
    </div>
  )
}

export default Countries