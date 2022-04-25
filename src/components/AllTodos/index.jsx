import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import AllTodoCards from "../AllTodoCards";
import "./AllTodos.css";
import { CREATE_TODO_ROUTE } from "../../constants/routes";

function AllTodos({ todos }) {
  const navigate = useNavigate();

  const onCreateNewTodo = () => {
    navigate(CREATE_TODO_ROUTE);
  };

  return (
    <div className="allTodos-container">
      <h1 id="todos-heading" data-testid="allTodoHeading">
        ALL TO-DOS
      </h1>
      <AllTodoCards todos={todos} data-testid="allTodoCards" />
      <button
        className="new-todo-button"
        type="button"
        onClick={onCreateNewTodo}
        data-testid="newTodoButton"
      >
        CREATE NEW
      </button>
    </div>
  );
}
AllTodos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      todo: PropTypes.string.isRequired,
      // eslint-disable-next-line comma-dangle
    })
  ).isRequired,
};
export default AllTodos;
