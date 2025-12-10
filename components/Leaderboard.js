import React from "react";

export default function Leaderboard({ leaderboard }) {
  // shows a simple ranked list 
  return (
    <section
      className="card card-medium"
      aria-labelledby="leaderboard-title"
      aria-describedby="leaderboard-desc"
    >
      <div className="card-header">
        <h2 id="leaderboard-title" className="card-title">
          community leaderboard
        </h2>
        <p id="leaderboard-desc" className="card-subtitle">
          see who is saving the most co₂ in your area.
        </p>
      </div>

      <ol className="leaderboard-list">
        {leaderboard.map((user, index) => (
          <li key={user.id} className="leaderboard-item">
            <span className="leaderboard-rank" aria-label={`rank ${index + 1}`}>
              #{index + 1}
            </span>
            <div className="leaderboard-user">
              <p className="leaderboard-name">{user.name}</p>
              <p className="leaderboard-meta">
                {user.city} · {user.level}
              </p>
            </div>
            <div className="leaderboard-score">
              <span className="score-value">{user.co2Saved}</span>
              <span className="score-unit">kg co₂</span>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
