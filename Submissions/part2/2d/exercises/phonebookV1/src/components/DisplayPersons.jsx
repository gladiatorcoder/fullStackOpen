import React from 'react'
import Person from './Person'

const DisplayPersons = ({persons, setPersons, refreshPersons}) => {
  return (
    <div>
        <h2>Contacts:</h2>
        <div id="persons">
            {persons && persons.length > 0 && persons.map(person => {
                return(<Person key={person.id} person={person} setPersons={setPersons} refreshPersons={refreshPersons} />)
            })
            }
        </div>
    </div>
  )
}

export default DisplayPersons