import React from "react";
import "./Nav.css";

export const Nav = ({ state, send }) => {
  const returnToWelcome = () => {
    send({ type: "CANCEL" });
  };
  return (
    <nav className="Nav">
      <h1 className="Nav-logo">Book a fly ✈</h1>
      {!state.matches("initial") && !state.matches("tickets") && (
        <button
          onClick={returnToWelcome}
          className="Nav-cancel button-secondary"
        >
          Cancel
        </button>
      )}
    </nav>
  );
};
