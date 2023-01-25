const url = 'http://localhost:8081/to-do-list';
const GET_TODOS = 'GET_TODOS';

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case GET_TODOS:
      return action.todos;
    default:
      return state;
  }
};

const getTodos = (todos) => ({
  type: GET_TODOS,
  todos,
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

export default todosReducer;
