import React from 'react'

export default function InputForm(props) {
    return (
        <form id='todo-form' action="" onSubmit={props.addTodo}>
            <input className='input-todo' type="text" placeholder='What do you want to do?'
                value={props.currentItem.text}
                onChange={props.handelInput}
            />
            <button className='add-btn-todo' type='submit'>Add</button>
        </form>
    )
}
