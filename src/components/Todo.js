import React, { useState } from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'
import TodoFrom from './TodoForm'
import TodoList from './TodoList'

function Todo({ todos, completeTodo, removeTodo, }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' :
            'todo-row'} key={index} >

            <div key={todo.id} onClick={() => completeTodo(todo)}>
                {todo.text}
            </div>

            <div className='icons'>
                <RiCloseCircleLine
                    onClick={() => setEdit({ id: todo.id, value: todo.text })}
                    className='delete-icon' />
                <TiEdit />
            </div>
        </div>
    ))
}

export default Todo
