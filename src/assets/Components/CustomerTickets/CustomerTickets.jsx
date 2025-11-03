import React from "react";

const statusStyles = {
  "In-Progress": "bg-yellow-100 text-yellow-700",
  "Resolved": "bg-green-100 text-green-700",
  "Pending": "bg-blue-100 text-blue-700",
};

const priorityStyles = {
  Critical: "text-red-600",
  High: "text-red-500",
  Medium: "text-orange-500",
  Low: "text-gray-500",
};

const CustomerTickets = ({ cardDetails, onCardClick }) => {
  const { id, title, description, customer, priority, status, createdAt } =
    cardDetails;

  return (
    <div
      className="w-full bg-white shadow-md cursor-pointer hover:shadow-lg transition p-6 rounded-xl border border-gray-200"
      onClick={() => onCardClick(cardDetails)}
    >
      <div className="flex justify-between items-start mb-3">
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>

        <div
          className={`flex items-center gap-2 px-4 py-1 rounded-full text-sm font-medium ${statusStyles[status]}`}
        >
          <span className="w-3 h-3 bg-current rounded-full"></span>
          {status}
        </div>
      </div>

      <p className="text-gray-500 mb-6">{description}</p>

      <div className="flex justify-between items-center text-sm font-medium text-gray-600">
        <div className="flex items-center gap-4">
          <span className="text-gray-700">#{id}</span>
          <span className={`${priorityStyles[priority]} font-semibold`}>
            {priority.toUpperCase()}
          </span>
        </div>

        <div className="flex items-center gap-6">
          <span>{customer}</span>
          <div className="flex items-center gap-2">
            <img
              src="https://i.ibb.co.com/ks44KP3d/Vector.png"
              alt="calendar"
              className="w-4"
            />
            <span>{createdAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTickets;
