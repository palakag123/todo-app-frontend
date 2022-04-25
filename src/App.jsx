import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CREATE_TODO_ROUTE, HOME_ROUTE } from "./constants/routes";
import CreateTodopage from "./pages/CreateTodoPage";
import TodoListPage from "./pages/TodoListPage";

const dummyTodos = [{ id: 1, todo: "first todo list item" }];
function App() {
  const [todos, setTodos] = useState(dummyTodos);

  return (
    <Router>
      <Routes>
        <Route path={HOME_ROUTE} element={<TodoListPage todos={todos} />} />
        <Route
          path={CREATE_TODO_ROUTE}
          element={<CreateTodopage todos={todos} setTodos={setTodos} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
