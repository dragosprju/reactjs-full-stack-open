import React, { useState } from 'react'
import { areTheseObjectsEqual } from './areTheseObjectsEqual'

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      id: persons.length + 1,
      name: newName,
    }
    let personAlreadyInList = false

    persons.forEach((personObjectInList, index, array) =>
      {
        if (personObject.name === personObjectInList.name) {
          personAlreadyInList = true 
        }
      }
    )

    if (!personAlreadyInList) {
      setPersons(persons.concat(personObject))
      setNewName('')
    }
    else {
      alert(`${personObject.name} is already added to the phonebook`)
    }
    
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form><br />
      <div><b>debug.</b>newName: {newName}</div>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => 
          <li key={person.id}>{person.name}</li>
        )}
      </ul>
      
    </div>
  )
}

export default App