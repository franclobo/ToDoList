import React from 'react';
import PropTypes from 'prop-types';

function Todos(props) {
  const { title, description } = props;

  return (
    <div className="todos">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

Todos.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Todos;
