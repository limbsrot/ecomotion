import React from "react";

export default function Header() {
  // short intro and system status under the brand bar
  return (
    <header className="header" aria-label="ecomotion overview">
      <div className="header-text">
        <p className="header-subtitle">
          plan cleaner journeys, track your impact, and compete with your
          community to reduce carbon emissions.
        </p>
        <div className="header-meta">
          <span className="status-dot" aria-hidden="true" />
          <span className="status-text">live · city data synced</span>
        </div>
      </div>
    </header>
  );
}
