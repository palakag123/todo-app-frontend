import React from "react";
import PropTypes from "prop-types";
import "./AllTodoCards.css";
import TodoCard from "../TodoCard";

function AllTodoCards({ todos }) {
  return (
    <div className="all-cards-outer-container" data-testid="allCards">
      <div className="all-cards-container" data-testid="allCardsInner">
        {todos?.map((todo) => (
          <TodoCard todo={todo} key={todo?.id} data-testid="todoCard" />
        ))}
      </div>
    </div>
  );
}
AllTodoCards.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      todo: PropTypes.string.isRequired,
      // eslint-disable-next-line comma-dangle
    })
  ).isRequired,
};
export default AllTodoCards;
