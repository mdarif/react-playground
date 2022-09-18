import { useState, useTransition } from 'react'

const WDS = () => {
  const [isPending, startTransition] = useTransition()
  const [input, setInput] = useState('')
  const [list, setList] = useState([])

  const LIST_SIZE = 20000

  function handleChange (e) {
    setInput(e.target.value)

    startTransition(() => {
      const arr = []
      for (let i = 0; i < LIST_SIZE; i++) {
        arr.push(e.target.value)
      }
      setList(arr)
    })
  }

  return (
    <>
      <input
        type='text'
        placeholder='Search....'
        value={input}
        onChange={handleChange}
      />
      {isPending
        ? 'Loading....'
        : list.map((item, index) => {
            return <div key={index}>{item}</div>
          })}
    </>
  )
}

export default WDS
