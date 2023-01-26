const url = 'http://localhost:8081/to-do-list';
const GET_TODOS = 'GET_TODOS';
const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const UPDATE_TODO = 'UPDATE_TODO';

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case GET_TODOS:
      return action.todos;
    case ADD_TODO:
      return [...state, action.todo];
    case DELETE_TODO:
      return state.filter((todo) => todo.title !== action.todo.title);
    case UPDATE_TODO:
      return state.map((todo) => {
        if (todo.title === action.todo.title) {
          return {
            ...todo,
            description: action.todo.description,
          };
        }
        return todo;
      });
    default:
      return state;
  }
};

const getTodos = (todos) => ({
  type: GET_TODOS,
  todos,
});

const addTodo = (todo) => ({
  type: ADD_TODO,
  todo,
});

const deleteTodo = (todo) => ({
  type: DELETE_TODO,
  todo,
});

const updateTodo = (todo) => ({
  type: UPDATE_TODO,
  todo,
});

export const fetchTodos = () => (dispatch) => {
  const List = [];
  fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const todos = Object.entries(data);
      todos.forEach((todo) => {
        List.push({
          title: todo[0].title,
          description: todo[0].description,
        });
      });
      dispatch(getTodos(List));
    });
};

export const addTodoThunk = (todo) => (dispatch) => {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(todo),
  })
    .then((response) => response.json())
    .then((data) => {
      dispatch(addTodo(data));
    });
};

export const deleteTodoThunk = (todo) => (dispatch) => {
  fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(todo),
  })
    .then((response) => response.json())
    .then((data) => {
      dispatch(deleteTodo(data));
    });
};

export const updateTodoThunk = (todo) => (dispatch) => {
  fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(todo),
  })
    .then((response) => response.json())
    .then((data) => {
      dispatch(updateTodo(data));
    });
};

export default todosReducer;
