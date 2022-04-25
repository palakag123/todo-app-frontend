/* eslint-disable react/forbid-prop-types */
import React from "react";
import PropTypes from "prop-types";
import "./TodoCard.css";

function TodoCard({ todo }) {
  return (
    <div className="todo-card" data-testid="todoCard">
      <p id="todo-title">{todo?.todo}</p>
    </div>
  );
}

TodoCard.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoCard;
