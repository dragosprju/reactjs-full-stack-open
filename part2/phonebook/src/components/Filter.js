import React from 'react'

const Filter = ({ newSearchFilter, setNewSearchFilter }) => {
    const handleSearchFilterChange = (event) => {
        setNewSearchFilter(event.target.value)
      }

    return (
        <div>
            filter shown with a <input value={newSearchFilter} onChange={handleSearchFilterChange} /><br />
        </div>
    )
}

export default Filter