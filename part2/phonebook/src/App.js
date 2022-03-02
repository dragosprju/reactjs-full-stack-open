import React, { useState } from 'react'
import { areTheseObjectsEqual } from './areTheseObjectsEqual'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearchFilter, setNewSearchFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      id: persons.length + 1,
      name: newName,
      number: newNumber
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

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchFilterChange = (event) => {
    setNewSearchFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with a <input value={newSearchFilter} onChange={handleSearchFilterChange} /><br />
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} /><br />
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form><br />
      <div><b>debug.</b>newName: {newName}</div>
      <h2>Numbers</h2>
      <ul>
        {persons.filter(person => person.name.toLowerCase().includes(newSearchFilter.toLowerCase())).map(person =>
          <li key={person.id}>{person.name} {person.number}</li>
        )}
      </ul>
      
    </div>
  )
}

export default App