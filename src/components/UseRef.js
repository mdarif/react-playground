import React, { useRef, useState, useEffect } from 'react'

function UseRef () {
  const [name, setName] = useState('')
  // const inputRef = useRef()
  const prevName = useRef('')

  // function focus () {
  //   inputRef.current.focus()
  // }

  useEffect(() => {
    prevName.current = name
  }, [name]) //run everytime when name changes

  return (
    <>
      <input
        // ref={inputRef}
        type='text'
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <h1>
        My name is {name} and it used to be {prevName.current}
      </h1>
      {/* <button onClick={focus}>Focus</button> */}
    </>
    // <ThemeProvider>
    //   <FunctionContextComponent />
    // </ThemeProvider>
  )
}

export default UseRef
