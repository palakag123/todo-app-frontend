import React from "react";
import PropTypes from "prop-types";
import AllTodos from "../../components/AllTodos";
import UserDetails from "../../components/UserDetails";
import "./TodoListPage.css";

function TodoListPage({ todos }) {
  return (
    <div className="todo-list-page-container">
      <UserDetails />
      <AllTodos todos={todos} />
    </div>
  );
}

TodoListPage.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      todo: PropTypes.string.isRequired,
      // eslint-disable-next-line comma-dangle
    })
  ).isRequired,
};
export default TodoListPage;
