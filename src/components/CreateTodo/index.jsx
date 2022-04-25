/* eslint-disable react/forbid-prop-types */
import React, { useState } from "react";
import PropTypes from "prop-types";
import "./CreateTodo.css";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { HOME_ROUTE } from "../../constants/routes";

function CreateTodo({ todos, setTodos }) {
  const [newTodo, setNewTodo] = useState("");

  const navigate = useNavigate();

  const onAddNewTodo = (event) => {
    setNewTodo(event.target.value);
  };

  const onNewTodoSubmit = (event) => {
    event.preventDefault();
    if (newTodo.length > 0) {
      setTodos([{ id: todos.length + 1, todo: newTodo }, ...todos]);
      navigate(HOME_ROUTE);
    }
  };

  const onHomeClick = (event) => {
    event.preventDefault();
    navigate(HOME_ROUTE);
  };

  return (
    <div className="create-todo-container">
      <form
        className="new-todo-form"
        onSubmit={onNewTodoSubmit}
        data-testid="newTodoForm"
      >
        <textarea
          id="new-todo-input"
          data-testid="newTodoInput"
          rows={5}
          cols={5}
          onChange={onAddNewTodo}
          value={newTodo}
          // style={newTodo.length > 100 ? { color: "red" } : {}}
          maxLength="100"
        />
        {/* <div
          contentEditable
          id="new-todo-input"
          rows={5}
          cols={5}
          onChange={onAddNewTodo}
        /> */}
        <div className="count-char-container">
          <p id="character-count" data-testid="charCount">
            {`${100 - newTodo.length} characters left`}
          </p>
        </div>
        <button type="submit" id="submit-button" data-testid="submitButton">
          SUBMIT
        </button>
      </form>
      <div className="back-container" data-testid="backArrow">
        <ArrowBackIcon
          id="back-arrow"
          data-testid="backArrowButton"
          onClick={onHomeClick}
        />
      </div>
    </div>
  );
}

CreateTodo.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      todo: PropTypes.string.isRequired,
      // eslint-disable-next-line comma-dangle
    })
  ).isRequired,
  setTodos: PropTypes.func.isRequired,
};

export default CreateTodo;
