import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../App.css';

import {
  fetchTodos,
  deleteTodoThunk,
  updateTodoThunk,
  addTodoThunk,
} from '../redux/todos';
import Todos from './Todos';

function Home() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const taskTitle = (e) => {
    e.preventDefault();
    const { value } = e.target;
    dispatch(fetchTodos(value));
  };

  const taskDescription = (e) => {
    e.preventDefault();
    const { value } = e.target;
    dispatch(fetchTodos(value));
  };

  const taskTitleSearch = (e) => {
    e.preventDefault();
    const { value } = e.target;
    dispatch(fetchTodos(value));
  };

  const taskCompleted = (e) => {
    e.preventDefault();
    const { value } = e.target;
    dispatch(fetchTodos(value));
  };

  const deleteAllCompleted = (e) => {
    e.preventDefault();
    dispatch(fetchTodos());
  };

  const deleteTodo = (e, todo) => {
    e.preventDefault();
    dispatch(deleteTodoThunk(todo));
  };

  const updateTodo = (e, todo) => {
    e.preventDefault();
    dispatch(updateTodoThunk(todo));
  };

  const addTodo = (e, todo) => {
    e.preventDefault();
    dispatch(addTodoThunk(todo));
  };

  if (todos.length === 0) {
    dispatch(fetchTodos());
  }
  dispatch(fetchTodos());

  return (
    <div className="home">
      <h1 className="Title">To-Do List</h1>
      <form>
        <div className="search">
          <input className="input" type="text" onChange={(e) => taskTitleSearch(e)} placeholder="Search" />
        </div>
        <input className="input" type="text" onChange={(e) => taskTitle(e)} placeholder="Title" />
        <input className="input" type="text" onChange={(e) => taskDescription(e)} placeholder="Description" />
        <button type="submit" onClick={(e) => addTodo(e, todos)}>
          Add
        </button>
      </form>
      <div className="todos">
        {todos.map((todo) => (
          <>
            <input type="checkbox" onChange={(e) => taskCompleted(e)} />
            <Todos
              key={todo.title}
              title={todo.title}
              description={todo.description}
            />
            <Link to="/delete" onClick={(e) => deleteTodo(e, todos)}>
              Delete
            </Link>
            <Link to="/update" onClick={(e) => updateTodo(e, todos)}>
              Update
            </Link>
          </>
        ))}
      </div>
      <button type="button" onClick={(e) => deleteAllCompleted(e)}>Delete All Completed</button>
    </div>
  );
}

export default Home;
