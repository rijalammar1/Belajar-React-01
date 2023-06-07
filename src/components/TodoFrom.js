import { useState } from "react"

const TodoForm = (props) => {
    const [inputTodo, setInputTodo] = useState("");
    const [pesanError, setPesanError] = useState(null);

    const handleInputChange = (e) => {
        setInputTodo(e.target.value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (inputTodo.trim() === "") {
            setPesanError("Todo tidak boleh kosong");
        } else {
            props.onAddTodo(inputTodo);
            setInputTodo("");
        }
    }
    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <input type="text" placeholder="Add Todo..." 
                    value={inputTodo}
                    onChange={handleInputChange}
                />
                {pesanError && <small>{pesanError}</small>}
            </div>

        </form>
    )
}

export default TodoForm;