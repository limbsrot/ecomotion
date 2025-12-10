import React from "react";

export default function TripTimeline({ trips }) {
  // simple vertical timeline for recent journeys
  return (
    <section
      id="main-content"
      className="card card-large"
      aria-labelledby="timeline-title"
    >
      <div className="card-header">
        <h2 id="timeline-title" className="card-title">
          recent journeys
        </h2>
        <p className="card-subtitle">
          a sample log of eco-friendly trips, showing distance and savings.
        </p>
      </div>

      <ol className="timeline">
        {trips.map((trip) => (
          <li key={trip.id} className="timeline-item">
            <div className="timeline-marker" aria-hidden="true" />
            <div className="timeline-content">
              <div className="timeline-header">
                <p className="timeline-title">
                  {trip.from} → {trip.to}
                </p>
                <p className="timeline-mode">{trip.mode}</p>
              </div>
              <p className="timeline-meta">
                {trip.date} · {trip.distance} km · saved {trip.co2Saved} kg co₂
              </p>
              <p className="timeline-note">{trip.note}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
