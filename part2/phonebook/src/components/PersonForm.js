import React from 'react'

const PersonForm = ({ persons, setPersons, newName, setNewName, newNumber, setNewNumber }) => {
    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }
    
    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

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

    return (
        <div>
            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newName} onChange={handleNameChange} /><br />
                    number: <input value={newNumber} onChange={handleNumberChange} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form><br />
        </div>
    )
}

export default PersonForm