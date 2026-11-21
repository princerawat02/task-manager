
import { useState } from "react";
import { Link } from "react-router-dom";
import StatsCard from "../components/StatsCard";
import TaskList from "../components/TaskList";
import TaskModal from "../components/TaskModal";

function Dashboard({
  tasks,
  stats,
  search,
  onToggle,
  onDelete,
  onAdd,
  onEdit,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const recentTasks = tasks
    .filter(task =>
      task.title.toLowerCase().includes(search.toLowerCase())
    )
    .slice()
    .sort((a, b) => b.id - a.id)
    .slice(0, 4);

  return (
    <div className="mt-8">

      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800">
          Dashboard
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Plan, track and complete your tasks efficiently.
        </p>
      </div>

      {/* Statistics */}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatsCard title="Total Tasks" value={stats.total} color="blue" icon="📋" />
        <StatsCard title="Completed" value={stats.completed} color="green" icon="✓" />
        <StatsCard title="Pending" value={stats.pending} color="orange" icon="◷" />
        <StatsCard title="High Priority" value={stats.high} color="red" icon="!" />
      </div>

      {/* Recent Tasks */}

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">

        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold text-slate-800">
              Recent Tasks
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Your latest task activities
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
            >
              + Add Task
            </button>

            <Link
              to="/tasks"
              className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50"
            >
              View All
            </Link>
          </div>
        </div>

        <TaskList
          tasks={recentTasks}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={(task) => onEdit(task.id, task)}
        />

      </div>

      {/* Illustration */}

      <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-6">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-3xl">
            📋
          </div>

          <div>
            <h3 className="font-semibold text-slate-800">
              Stay Organized
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Keep your priorities clear and stay productive.
            </p>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <TaskModal
          onSave={(data) => {
            onAdd(data);
            setIsModalOpen(false);
          }}
          onClose={() => setIsModalOpen(false)}
        />
      )}

    </div>
  );
}

export default Dashboard;
