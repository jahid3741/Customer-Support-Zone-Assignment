// import React from "react";
// import CustomerTickets from "../CustomerTickets";

// const AllTickets = ({ cardDetails }) => {
//   return (
//     <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 p-4">
//       {cardDetails.map((data) => (
//         <CustomerTickets key={data.id} cardDetails={data} />
//       ))}
//     </div>
//   );
// };

// export default AllTickets;
// src/assets/Components/CustomerTickets/AllTickets.jsx
import React from "react";
import CustomerTickets from "./CustomerTickets";

const AllTickets = ({ tickets, onCardClick }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-2">Customer Tickets</h3>
      <div className="grid grid-cols-1 gap-4">
        {tickets.map((t) => (
          <CustomerTickets key={t.id} cardDetails={t} onClick={onCardClick} />
        ))}
      </div>
    </div>
  );
};

export default AllTickets;
