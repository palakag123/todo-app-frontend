import React from "react";
import PropTypes from "prop-types";
import CreateTodo from "../../components/CreateTodo";
import UserDetails from "../../components/UserDetails";
import "./CreateTodoPage.css";

function CreateTodopage({ todos, setTodos }) {
  return (
    <div className="create-todo-page-container">
      <UserDetails />
      <CreateTodo todos={todos} setTodos={setTodos} />
    </div>
  );
}
CreateTodopage.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      todo: PropTypes.string.isRequired,
      // eslint-disable-next-line comma-dangle
    })
  ).isRequired,
  setTodos: PropTypes.func.isRequired,
};
export default CreateTodopage;
