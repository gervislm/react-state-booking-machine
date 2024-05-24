import React from "react";
import "./Ticket.css";

export const Tickets = ({ send, state }) => {
  const finish = () => {
    send({ type: "FINISH" });
  };

  const { passengers, selectedCountry } = state.context;

  return (
    <div className="Tickets">
      <p className="Tickets-description description">
        Thank you for flying with book a fly 💚
      </p>
      <div className="Tickets-ticket">
        <div className="Tickets-country">{selectedCountry}</div>
        <div className="Tickets-passengers">
          <span>✈</span>
          {passengers.map((passengerName, idx) => {
            return (
              <p key={idx} className="Passenger-name">
                {passengerName}
              </p>
            );
          })}
        </div>
      </div>
      <button onClick={finish} className="Tickets-finish button">
        Finish
      </button>
    </div>
  );
};
