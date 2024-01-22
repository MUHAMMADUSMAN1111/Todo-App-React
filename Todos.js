// // src/Todo.js////
import React, { useState } from 'react';
import './Todos.css'

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className='container'>
      <h1 className='todo-header'>Todo App</h1>
      <div className='todo-form'>
        <input 
          className='todo-input'
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
        />
        <button className='todo-button' onClick={addTodo}>Add</button>
      </div>
      <ul className='todo-list'>
        {todos.map((todo) => (
          <li className='todo-item' key={todo.id}>
            <input
              className='todo-checkbox'
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span className='todo-text' style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button className='todo-remove-button' onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
 
// import React from 'react'

// const Todos = () => {
//   return (
//     <div>
//       todos
//     </div>
//   )
// }

// export default Todos
