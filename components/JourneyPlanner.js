import React, { useState } from "react";

export default function JourneyPlanner() {
  // local ui state only, no real api calls (implement distance.to api for actual measurements)
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [mode, setMode] = useState("walking");
  const [feedback, setFeedback] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // very simple validation to show error handling and feedback
    if (!from.trim() || !to.trim()) {
      setFeedback("please enter both a starting point and destination.");
      return;
    }

    setFeedback(
      `this is a mock plan: your ${mode} trip from "${from}" to "${to}" would be calculated here.`
    );
  }

  return (
    <section className="card card-large" aria-labelledby="planner-title">
      <div className="card-header">
        <h2 id="planner-title" className="card-title">
          plan a new eco journey
        </h2>
        <p className="card-subtitle">
          compare greener options like walking, cycling, or public transport.
        </p>
      </div>

      <form className="planner-form" onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <label htmlFor="from-input" className="form-label">
            from
          </label>
          <input
            id="from-input"
            type="text"
            className="form-input"
            placeholder="eg. home, 21 green street"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
        </div>

        <div className="form-row">
          <label htmlFor="to-input" className="form-label">
            to
          </label>
          <input
            id="to-input"
            type="text"
            className="form-input"
            placeholder="eg. campus, central station"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </div>

        <fieldset className="form-row" aria-label="transport mode">
          <legend className="form-label">mode</legend>
          <div className="mode-chips" role="radiogroup">
            {["walking", "cycling", "public transport"].map((m) => (
              <button
                key={m}
                type="button"
                role="radio"
                aria-checked={mode === m}
                className={
                  mode === m ? "chip chip-active" : "chip chip-inactive"
                }
                onClick={() => setMode(m)}
              >
                {m}
              </button>
            ))}
          </div>
        </fieldset>

        <button type="submit" className="primary-button">
          preview eco impact
        </button>

        {feedback && (
          <p
            className="planner-feedback"
            role="status"
            aria-live="polite"
            aria-atomic="true"
          >
            {feedback}
          </p>
        )}
      </form>
    </section>
  );
}
