import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {

  const [input, setInput] = useState('')

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  })

  const HandleChange = e => {
    setInput(e.target.value)
  }

  const HandleSubmit = e => {
    e.preventDefault()

    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input
    })

    setInput('')
  }

  return(
    <form className="todo-form" onSubmit={HandleSubmit}>
           <input
            className="todo-input"
            type="text"
            placeholder="Add a todo"
            name="text"
            value={input}
            onChange={HandleChange}
            autoComplete="off"
            ref={inputRef}
          />
          <button className="todo-button">Add todo</button>
        </form>
  )
}

export default TodoForm
