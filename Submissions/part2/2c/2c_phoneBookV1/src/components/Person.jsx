import React from 'react'

const Person = ({person}) => {
  return (
    <div>
        {person.name && <span>{person.name}</span>}&nbsp; - &nbsp;
        {person.number && <span>{person.number}</span>}
    </div>
  )
}

export default Person