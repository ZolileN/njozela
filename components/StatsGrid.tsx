import { site } from './site';

export function StatsGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {site.stats.map((stat) => (
        <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm">
          <div className="text-3xl font-semibold text-white">{stat.value}</div>
          <div className="mt-2 text-sm text-slate-300">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
