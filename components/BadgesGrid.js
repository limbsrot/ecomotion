import React from "react";

export default function BadgesGrid({ badges }) {
  // static badge grid to show achievements (early supporter badge soon? :3)
  return (
    <section
      className="card card-small"
      aria-labelledby="badges-title"
      aria-describedby="badges-desc"
    >
      <div className="card-header">
        <h2 id="badges-title" className="card-title">
          badges & milestones
        </h2>
        <p id="badges-desc" className="card-subtitle">
          unlock rewards by hitting sustainable travel goals.
        </p>
      </div>

      <div className="badge-grid">
        {badges.map((badge) => (
          <article
            key={badge.id}
            className={
              badge.unlocked ? "badge-card badge-active" : "badge-card"
            }
            aria-label={badge.name}
          >
            <div className="badge-icon" aria-hidden="true">
              {badge.icon}
            </div>
            <div className="badge-text">
              <p className="badge-name">{badge.name}</p>
              <p className="badge-description">{badge.description}</p>
              <p className="badge-status">
                {badge.unlocked ? "unlocked" : `${badge.progress}% progress`}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
