// src/assets/Components/TaskStatus/TaskStatus.jsx
import React from "react";

const TaskStatus = ({ inProgress, resolved, onComplete }) => {
  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold">Task Status</h3>
          <div className="text-sm">In Progress: {inProgress.length}</div>
        </div>
        <div className="space-y-3">
          {inProgress.map((t) => (
            <div key={t.id} className="bg-white rounded-md p-3 shadow-sm border border-gray-200 flex items-center justify-between">
              <div className="text-sm">{t.title}</div>
              <button className="btn btn-sm btn-success" onClick={() => onComplete(t)}>Complete</button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold">Resolved</h3>
          <div className="text-sm">Resolved: {resolved.length}</div>
        </div>
        <div className="space-y-3">
          {resolved.map((t) => (
            <div key={t.id} className="bg-white rounded-md p-3 shadow-sm border border-gray-200 text-sm">
              {t.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskStatus;
