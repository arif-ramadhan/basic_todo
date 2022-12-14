import { useState } from 'react'
import TodoCreate from '../todo-create/TodoCreate'
import TodoList from '../todo-list/TodoList'
import './Todo.css'

const Todo = () => {
    const [ getTodos, setTodos ] = useState([
        {id: 1, title: 'Eat'},
        {id: 2, title: 'Sleep'},
        {id: 3, title: 'Code'},
    ])

    const createTodo = (todo) => {
        setTodos(getTodos.concat(todo))
    }

    return (
        <div>
            <h3>Todo List</h3>
            <TodoCreate onCreate={createTodo} countTodo={getTodos.length}/>
            <TodoList dataTodos={getTodos} />
        </div>
    )
}

export default Todo