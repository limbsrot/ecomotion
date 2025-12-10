import React from "react";

export default function CommunityImpact() {
  // simple card that shows the community co2 savings :fire:
  return (
    <section
      className="card card-small community-impact-card"
      aria-label="community co₂ savings this month"
    >
      <div className="community-impact-content">
        <div className="community-impact-text">
          <p className="community-impact-label">
            saved this month by your community
          </p>
          <p className="community-impact-note">
            this is a sample metric*
          </p>
        </div>
        <p className="community-impact-value">
          1,284<span className="community-impact-unit">kg co₂</span>
        </p>
      </div>
    </section>
  );
}
