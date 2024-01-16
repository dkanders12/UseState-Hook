import React, { useState } from "react";
import "./Todo.scss";
export const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const handleDeleteAllTodos = () => {
    setTodos([]);
  };

  return (
    <div className="todo">
      <h1>TO DO</h1>
      <div className="list">
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <div className="line">
                <button onClick={handleDeleteTodo}>delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="botton">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
        <button onClick={handleDeleteAllTodos}>Delete All Todos</button>
      </div>
    </div>
  );
};
