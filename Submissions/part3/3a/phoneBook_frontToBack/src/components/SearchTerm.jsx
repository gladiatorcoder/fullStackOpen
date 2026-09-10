import React from 'react'

const SearchTerm = ({searchTerm, searchTermChange, searchResults}) => {

  return (
    <div>
        Search: <input id="searchTerm" type="text" onChange={(e) => searchTermChange(e)} />
    </div>
  )
}

export default SearchTerm