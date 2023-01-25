import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchTodos } from '../redux/todos';
import Todos from './Todos';

function Home() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  if (todos.length === 0) {
    dispatch(fetchTodos());
  }
  dispatch(fetchTodos());

  return (
    <div className="home">
      <h1>To do list</h1>
      <div className="todos">
        {todos.map((todo) => (
          <Todos
            key={todo.title}
            title={todo.title}
            description={todo.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
