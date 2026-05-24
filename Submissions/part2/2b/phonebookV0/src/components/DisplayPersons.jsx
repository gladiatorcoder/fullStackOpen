import React from 'react'
import Person from './Person'

const DisplayPersons = ({persons}) => {
  return (
    <div>
        <h2>Contacts:</h2>
        <div id="persons">
            {persons && persons.length > 0 && persons.map(person => {
                return(<Person key={person.name} person={person} />)
            })
            }
        </div>
    </div>
  )
}

export default DisplayPersons