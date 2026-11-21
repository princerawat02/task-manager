
const colors = {
  blue: "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
  green: "bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400",
  orange: "bg-orange-50 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400",
  red: "bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-400",
};

function StatsCard({ title, value, color, icon }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 text-slate-800 shadow-sm transition-colors duration-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
          {title}
        </p>

        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl text-lg font-bold ${colors[color]}`}
        >
          {icon}
        </div>
      </div>

      <h3 className="mt-4 text-3xl font-bold text-slate-800 dark:text-white">
        {value}
      </h3>
    </div>
  );
}

export default StatsCard;
