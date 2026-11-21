
import { NavLink } from "react-router-dom";

function Sidebar() {
  const linkStyle = ({ isActive }) =>
    `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
      isActive
        ? "bg-blue-50 text-blue-600"
        : "text-slate-500 hover:bg-slate-50"
    }`;

  return (
    <aside className="flex w-full flex-col border-b border-slate-200 bg-white p-5 md:min-h-screen md:w-64 md:border-b-0 md:border-r">

      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 font-bold text-white">
          R
        </div>

        <div>
          <h2 className="font-bold text-slate-800">REGUL</h2>
          <p className="text-xs text-slate-400">Task Workspace</p>
        </div>
      </div>

      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
        Menu
      </p>

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

      <div className="mt-8 border-t border-slate-100 pt-5 md:mt-auto">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-600">
            U
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-700">User</p>
            <p className="text-xs text-slate-400">Workspace Member</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
