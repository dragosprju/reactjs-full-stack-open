import React from 'react'

const Persons = ({ persons, newSearchFilter }) => {
    return (
        <div>
            <ul>
                {persons.filter(person => person.name.toLowerCase().includes(newSearchFilter.toLowerCase())).map(person =>
                    <li key={person.id}>{person.name} {person.number}</li>
                )}
            </ul>
        </div>
    )
}

export default Persons