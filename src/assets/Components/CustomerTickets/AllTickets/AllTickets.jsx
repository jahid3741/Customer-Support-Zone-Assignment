import React from "react";
import CustomerTickets from "../CustomerTickets";

const AllTickets = ({ cardDetails }) => {
  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 p-4">
      {cardDetails.map((data) => (
        <CustomerTickets key={data.id} cardDetails={data} />
      ))}
    </div>
  );
};

export default AllTickets;
