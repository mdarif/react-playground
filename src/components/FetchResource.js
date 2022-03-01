import React, { useState, useEffect } from 'react'

function FetchResource () {
  const [resourceType, setResourceType] = useState('posts')
  const [items, setItems] = useState([])

  useEffect(() => {
    // effect
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))

    //clean up
    /*  return () => {
        cleanup
    } */
  }, [resourceType])

  return (
    <>
      <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map(item => {
        return <pre key={item.id}>{JSON.stringify(item)}</pre>
      })}
    </>
  )
}

export default FetchResource
