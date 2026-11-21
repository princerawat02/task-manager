import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";

const initialTasks = [
  {
    id: 1,
    title: "Complete website homepage",
    description: "Finish homepage UI and responsive layout.",
    priority: "High",
    dueDate: "2026-11-24",
    status: "Pending",
  },
  {
    id: 2,
    title: "Review project documentation",
    description: "Review project requirements.",
    priority: "Medium",
    dueDate: "2026-11-26",
    status: "Pending",
  },
  {
    id: 3,
    title: "Fix responsive navigation",
    description: "Improve mobile navigation.",
    priority: "High",
    dueDate: "2026-11-22",
    status: "Completed",
  },
  {
    id: 4,
    title: "Update dashboard styling",
    description: "Improve spacing and typography.",
    priority: "Low",
    dueDate: "2026-11-29",
    status: "Pending",
  },
  {
    id: 5,
    title: "Test application functionality",
    description: "Test CRUD operations.",
    priority: "Medium",
    dueDate: "2026-11-30",
    status: "Pending",
  },
  {
    id: 6,
    title: "Prepare project submission",
    description: "Prepare final assessment submission.",
    priority: "High",
    dueDate: "2026-12-02",
    status: "Pending",
  },
];

function App() {
  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem("tasks");
      return saved !== null ? JSON.parse(saved) : initialTasks;
    } catch {
      return initialTasks;
    }
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (data) => {
    setTasks((prev) => [{ ...data, id: Date.now() }, ...prev]);
  };

  const updateTask = (id, data) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, ...data } : task)),
    );
  };

  const deleteTask = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTasks((prev) => prev.filter((task) => task.id !== id));
    }
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              status: task.status === "Completed" ? "Pending" : "Completed",
            }
          : task,
      ),
    );
  };

  const stats = {
    total: tasks.length,
    completed: tasks.filter((t) => t.status === "Completed").length,
    pending: tasks.filter((t) => t.status === "Pending").length,
    high: tasks.filter((t) => t.priority === "High").length,
  };

  return (
    <div className="min-h-screen bg-slate-50 md:flex">
      <Sidebar />

      <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">
        <Header search={search} setSearch={setSearch} />

        <Routes>
          <Route
            path="/"
            element={
              <Dashboard
                tasks={tasks}
                stats={stats}
                search={search}
                onToggle={toggleTask}
                onDelete={deleteTask}
                onAdd={addTask}
                onEdit={updateTask}
              />
            }
          />

          <Route
            path="/tasks"
            element={
              <Tasks
                tasks={tasks}
                search={search}
                onAdd={addTask}
                onEdit={updateTask}
                onDelete={deleteTask}
                onToggle={toggleTask}
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
