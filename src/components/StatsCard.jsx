
const colors = {
  blue: "bg-blue-50 text-blue-600",
  green: "bg-green-50 text-green-600",
  orange: "bg-orange-50 text-orange-600",
  red: "bg-red-50 text-red-600",
};

function StatsCard({ title, value, color, icon }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-slate-500">{title}</p>
        <div className={`flex h-10 w-10 items-center justify-center rounded-xl text-lg font-bold ${colors[color]}`}>
          {icon}
        </div>
      </div>

      <h3 className="mt-4 text-3xl font-bold text-slate-800">
        {value}
      </h3>
    </div>
  );
}

export default StatsCard;
