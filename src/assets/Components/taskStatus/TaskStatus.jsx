import React from "react";
const TaskStatus = ({ inProgress, resolved, onComplete }) => {
  return (
    <div className="space-y-10">

      {/* ✅ In Progress Section */}
      <div>
        <h3 className="text-lg font-bold mb-3">Task Status</h3>

        {inProgress.length === 0 ? (
          <p className="text-gray-500 text-sm">Select a ticket to add to Task Status</p>
        ) : (
          <div className="space-y-3">
            {inProgress.map((task) => (
              <div key={task.id} className="bg-white rounded-md p-4 shadow border flex justify-between items-center">
                <span className="text-sm font-medium">{task.title}</span>
                <button
                  className="btn btn-sm btn-success"
                  onClick={() => onComplete(task)}
                >
                  Complete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <div>
        <h3 className="text-lg font-bold mb-3">Resolved</h3>

        {resolved.length === 0 ? (
          <p className="text-gray-500 text-sm">No resolved task yet</p>
        ) : (
          <div className="space-y-3">
            {resolved.map((task) => (
              <div key={task.id} className="bg-green-50 rounded-md p-4 shadow border text-sm font-medium">
                {task.title}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};


export default TaskStatus;