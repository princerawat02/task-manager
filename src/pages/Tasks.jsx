
import { useMemo, useState } from "react";
import TaskList from "../components/TaskList";
import TaskModal from "../components/TaskModal";
import TaskFilters from "../components/TaskFilters";

function Tasks({ tasks, search, onAdd, onEdit, onDelete, onToggle }) {
  const [activeTab, setActiveTab] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("asc");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const filteredTasks = useMemo(() => {
    return tasks
      .filter(task => {
        const matchesSearch = task.title
          .toLowerCase()
          .includes(search.toLowerCase());

        const matchesStatus =
          activeTab === "All" || task.status === activeTab;

        const matchesPriority =
          priorityFilter === "All" ||
          task.priority === priorityFilter;

        return matchesSearch && matchesStatus && matchesPriority;
      })
      .slice()
      .sort((a, b) => {
        const result = a.dueDate.localeCompare(b.dueDate);
        return sortOrder === "asc" ? result : -result;
      });
  }, [tasks, search, activeTab, priorityFilter, sortOrder]);

  const handleSave = (data) => {
    if (editingTask) {
      onEdit(editingTask.id, data);
    } else {
      onAdd(data);
    }

    setIsModalOpen(false);
    setEditingTask(null);
  };

  return (
    <div className="mt-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
            My Tasks
          </h1>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Manage and organize all your tasks in one place.
          </p>
        </div>

        <button
          onClick={() => {
            setEditingTask(null);
            setIsModalOpen(true);
          }}
          className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          + Add Task
        </button>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-colors duration-200 dark:border-slate-800 dark:bg-slate-900 sm:p-6">
        <TaskFilters
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          priorityFilter={priorityFilter}
          setPriorityFilter={setPriorityFilter}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />

        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Showing {filteredTasks.length} of {tasks.length} tasks
          </p>
        </div>

        <TaskList
          tasks={filteredTasks}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={(task) => {
            setEditingTask(task);
            setIsModalOpen(true);
          }}
        />
      </div>

      {isModalOpen && (
        <TaskModal
          task={editingTask}
          onSave={handleSave}
          onClose={() => {
            setIsModalOpen(false);
            setEditingTask(null);
          }}
        />
      )}
    </div>
  );
}

export default Tasks;
