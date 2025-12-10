import React from "react";

export default function StatsOverview({ stats }) {
  // stats is an array of simple summary metrics
  return (
    <section
      className="card card-medium"
      aria-labelledby="stats-title"
      aria-live="polite"
    >
      <div className="card-header">
        <h2 id="stats-title" className="card-title">
          your eco dashboard
        </h2>
        <p className="card-subtitle">
          quick overview of your personal travel impact this week.
        </p>


      </div>

      <div className="stats-grid">
        {stats.map((stat) => (
          <article key={stat.id} className="stat-card">
            <p className="stat-label">{stat.label}</p>
            <p className="stat-value">
              {stat.value}
              {stat.unit && <span className="stat-unit">{stat.unit}</span>}
            </p>
            <p
              className={
                stat.trend > 0 ? "stat-trend stat-trend-up" : "stat-trend"
              }
            >
              {stat.trend > 0 ? "▲" : stat.trend < 0 ? "▼" : "•"}{" "}
              {Math.abs(stat.trend)}% vs last week
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
