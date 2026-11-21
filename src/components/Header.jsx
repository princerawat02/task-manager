
import { useLocation } from "react-router-dom";
import { Sun, Moon } from "lucide-react";

function Header({ search, setSearch, darkMode, setDarkMode }) {
  const location = useLocation();

  return (
    <header className="flex flex-col justify-between gap-4 border-b border-slate-200 pb-5 transition-colors duration-200 dark:border-slate-800 sm:flex-row sm:items-center">
      <div>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Workspace / {location.pathname === "/tasks" ? "Tasks" : "Dashboard"}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-800 outline-none placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-blue-500 dark:focus:ring-blue-900/30 sm:w-64"
        />

        {/* Theme Toggle */}
        <button
          type="button"
          onClick={() => setDarkMode(prev => !prev)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
          aria-label="Toggle theme"
          title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-600 dark:bg-blue-900/40 dark:text-blue-400">
          U
        </div>
      </div>
    </header>
  );
}

export default Header;
