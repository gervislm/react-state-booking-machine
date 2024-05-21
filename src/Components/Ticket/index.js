import React from "react";
import "./Ticket.css";

export const Tickets = ({ send }) => {
  const finish = () => {
    send({ type: "FINISH" });
  };

  return (
    <div className="Tickets">
      <p className="Tickets-description description">
        Thank you for flying with book a fly 💚
      </p>
      <div className="Tickets-ticket">
        <div className="Tickets-country">Colombia</div>
        <div className="Tickets-passengers">
          <span>✈</span>
        </div>
      </div>
      <button onClick={finish} className="Tickets-finish button">
        Finish
      </button>
    </div>
  );
};
