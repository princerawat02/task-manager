
const priorityStyles = {
  High: "bg-red-50 text-red-600",
  Medium: "bg-orange-50 text-orange-600",
  Low: "bg-green-50 text-green-600",
};

function TaskList({ tasks, onEdit, onDelete, onToggle }) {
  if (tasks.length === 0) {
    return (
      <div className="py-16 text-center">
        <div className="mb-3 text-4xl">📋</div>
        <h3 className="font-semibold text-slate-700">
          No tasks found
        </h3>
        <p className="mt-1 text-sm text-slate-400">
          Add a task or change your filters.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-5 overflow-x-auto">
      <table className="w-full min-w-[650px] text-left">
        <thead>
          <tr className="border-b border-slate-100 text-xs uppercase tracking-wider text-slate-400">
            <th className="px-3 py-4">Task</th>
            <th className="px-3 py-4">Priority</th>
            <th className="px-3 py-4">Due Date</th>
            <th className="px-3 py-4">Status</th>
            <th className="px-3 py-4">Actions</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map(task => (
            <tr key={task.id} className="border-b border-slate-50 transition hover:bg-slate-50">
              <td className="px-3 py-4">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={task.status === "Completed"}
                    onChange={() => onToggle(task.id)}
                    className="h-4 w-4 accent-blue-600"
                  />

                  <div>
                    <p className={`text-sm font-medium ${
                      task.status === "Completed"
                        ? "text-slate-400 line-through"
                        : "text-slate-700"
                    }`}>
                      {task.title}
                    </p>
                    <p className="mt-1 max-w-xs truncate text-xs text-slate-400">
                      {task.description}
                    </p>
                  </div>
                </div>
              </td>

              <td className="px-3 py-4">
                <span className={`rounded-full px-3 py-1 text-xs font-medium ${priorityStyles[task.priority]}`}>
                  {task.priority}
                </span>
              </td>

              <td className="px-3 py-4 text-sm text-slate-500">
                {new Date(task.dueDate + "T00:00:00").toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </td>

              <td className="px-3 py-4">
                <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                  task.status === "Completed"
                    ? "bg-green-50 text-green-600"
                    : "bg-blue-50 text-blue-600"
                }`}>
                  {task.status}
                </span>
              </td>

              <td className="px-3 py-4">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onEdit(task)}
                    title="Edit task"
                    className="text-slate-400 transition hover:text-blue-600"
                  >
                    ✎
                  </button>

                  <button
                    onClick={() => onDelete(task.id)}
                    title="Delete task"
                    className="text-slate-400 transition hover:text-red-600"
                  >
                    🗑
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskList;
