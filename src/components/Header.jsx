
import { useLocation } from "react-router-dom";


function Header({ search, setSearch }) {
  const location = useLocation();

  return (
    <header className="flex flex-col justify-between gap-4 border-b border-slate-200 pb-5 sm:flex-row sm:items-center">
      <div>
        <p className="text-sm text-slate-400">
          Workspace / {location.pathname === "/tasks" ? "Tasks" : "Dashboard"}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-blue-400 sm:w-64"
        />

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-600">
          U
        </div>
      </div>
    </header>
  );
}

export default Header;
