import { useMemo } from "react";

import { getJson } from "../api";
import { useApi } from "../hooks/useApi";
import type { Signal } from "../types";

export function HomePage() {
  const { data, error, isLoading } = useApi(() => getJson<Signal[]>("/signals"));

  const signals = useMemo(() => data ?? [], [data]);
  const featured = signals[0];

  if (isLoading) {
    return <main className="panel">Loading savings plan intelligence...</main>;
  }

  if (error) {
    return <main className="panel">Failed to load signals: {error}</main>;
  }

  return (
    <main>
      <section className="hero">
        <div className="panel">
          <div className="eyebrow">Consumer onboarding</div>
          <h1 className="headline">Turn one savings goal into a Mantle plan a web2 user can actually follow.</h1>
          <p className="copy">
            Nest turns plain-English money goals into simple funding, saving, and progress workflows powered by Mantle-native routes.
          </p>
        </div>
        <div className="panel signal-card">
          <span className="chip">Latest user plan</span>
          <h2 style={{ margin: 0 }}>{featured?.headline}</h2>
          <p className="muted" style={{ margin: 0 }}>
            AI explanation: {featured?.summary}
          </p>
        </div>
      </section>

      <section className="grid" style={{ marginBottom: 28 }}>
        <div className="panel">
          <div className="metric">{signals.length}</div>
          <div className="metric-label">Active user plans</div>
        </div>
        <div className="panel">
          <div className="metric">6</div>
          <div className="metric-label">Goal vault templates</div>
        </div>
        <div className="panel">
          <div className="metric">38</div>
          <div className="metric-label">Progress milestones</div>
        </div>
      </section>

      <section className="panel">
        <div className="eyebrow">Savings board</div>
        <h2>Plan summaries judges can understand in 10 seconds</h2>
        <div className="table">
          {signals.map((signal) => (
            <div key={signal.id} className="row">
              <div>{signal.headline}</div>
              <div className="muted">
                {signal.sourceAsset} -&gt; {signal.destinationAsset}
              </div>
              <div className="muted">
                {signal.sourceProtocol} / {signal.destinationProtocol}
              </div>
              <div>{signal.confidence}%</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
