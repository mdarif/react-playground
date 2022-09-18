import React, { useState, useTransition } from 'react'
import NAMES from './data.json'

const UseTransition = () => {
  const [query, setQuery] = useState('')
  const [inputVal, setInputVal] = useState('')
  const [isPending, startTransition] = useTransition()

  function changeHandler (e) {
    setInputVal(e.target.value)
    startTransition(() => setQuery(e.target.value))
  }

  const filteredNames = NAMES.filter(({ first_name, last_name }) => {
    return (
      first_name.toLowerCase().includes(query) ||
      last_name.toLowerCase().includes(query)
    )
  })

  return (
    <div className='app'>
      <input
        type='text'
        value={inputVal}
        placeholder='Search'
        onChange={changeHandler}
      />
      {isPending && <p>Updating list...</p>}
      {filteredNames.map(item => (
        <p key={item.id}>
          {item.first_name} {item.last_name}
        </p>
      ))}
    </div>
  )
}

export default UseTransition
