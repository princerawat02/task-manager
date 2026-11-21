
import { NavLink } from "react-router-dom";

function Sidebar() {
  const linkStyle = ({ isActive }) =>
    `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
      isActive
        ? "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
        : "text-slate-500 hover:bg-slate-50 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
    }`;

  return (
    <aside className="flex w-full flex-col border-b border-slate-200 bg-white p-5 text-slate-800 transition-colors duration-200 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 md:min-h-screen md:w-64 md:border-b-0 md:border-r">

      {/* Logo */}
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 font-bold text-white dark:bg-blue-500">
          R
        </div>

        <div>
          <h2 className="font-bold text-slate-800 dark:text-white">REGUL</h2>
          <p className="text-xs text-slate-400 dark:text-slate-500">
            Task Workspace
          </p>
        </div>
      </div>

      {/* Menu Label */}
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
        Menu
      </p>

      {/* Navigation */}
      <nav className="flex gap-2 md:flex-col">
        <NavLink to="/" end className={linkStyle}>
          <span>▦</span>
          Dashboard
        </NavLink>

        <NavLink to="/tasks" className={linkStyle}>
          <span>✓</span>
          Tasks
        </NavLink>
      </nav>

      {/* User Profile */}
      <div className="mt-8 border-t border-slate-100 pt-5 dark:border-slate-800 md:mt-auto">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-600 dark:bg-blue-900/40 dark:text-blue-400">
            U
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              User
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-500">
              Workspace Member
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
