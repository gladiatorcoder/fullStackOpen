import React, { useState } from 'react'
import SearchTerm from './SearchTerm'

const Search = ({persons}) => {
  let searchResults = [];

  //State variables
  const [searchTerm, setSearchTerm] = useState("");

  function searchPersons(e){
    setSearchTerm(e.target.value);
  }

  // State variable updates
    if(searchTerm !==""){
        searchResults = persons.filter(person => {
            return person.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
    };

  
  return (
    <div>   
        <SearchTerm searchTerm={searchTerm} searchTermChange={(e) => searchPersons(e)} />
        {searchResults.length > 0 &&
            <p><strong>Search Results:</strong></p>
        }
        <div id="searchResults">
            {searchResults.length > 0 &&
                searchResults.map(result => 
                    <div key={result.name}>{result.name} - {result.number}</div>
                )
            }
        </div>
    </div>
  )
}

export default Search