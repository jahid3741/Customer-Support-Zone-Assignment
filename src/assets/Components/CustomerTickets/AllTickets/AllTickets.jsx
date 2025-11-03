import React from "react";
import CustomerTickets from "../CustomerTickets";

const AllTickets = ({ tickets, onCardClick }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-2">Customer Tickets</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tickets.map((data) => (
          <CustomerTickets
            key={data.id}
            cardDetails={data}
            onCardClick={() => onCardClick(data)}
          />
        ))}
      </div>
    </div>
  );
};

export default AllTickets;
