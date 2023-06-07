import React, { useState } from "react"
import Todo from "./components/Todo"
import TodoForm from "./components/TodoFrom"

const todos = [{
        id: "01",
        text: "Baca buku React Uncover"
    },
    {
        id: "02",
        text: "Makan siang"
    },
    {
        id: "03",
        text: "Main game"
    }
];

const MyApp = () => {
    const [arrayTodo, setArrayTodo] = useState(todos);

    const handleDeleteClick = (e) => {
        const newTodos = arrayTodo.filter(
            item => item.id !== e.target.id
        );
        setArrayTodo(newTodos);
    }

    const handleAddTodo = (text) => {
        const newTodos = [
            ...arrayTodo,
            {
                id: new Date().getTime().toString(),
                text: text
            }
        ];
        setArrayTodo(newTodos);
    }

    return (
        <div className="container">
            {
                arrayTodo.map((todo) => (
                    <Todo 
                        key={todo.id}
                        id={todo.id}
                        text={todo.text}
                        onTodoClick={handleDeleteClick}
                    />
                ))
            }
            <TodoForm onAddTodo={handleAddTodo}/>
        </div>
    )
}

export default MyApp