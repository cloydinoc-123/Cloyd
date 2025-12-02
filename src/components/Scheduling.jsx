// src/pages/Scheduling.jsx
import { useState } from "react";
import "./Scheduling.css";

export default function Scheduling() {
  const [processes, setProcesses] = useState([
    { name: "P1", arrival: 0, burst: 0 },
  ]);

  const [results, setResults] = useState(null);
  const [gantt, setGantt] = useState([]);

  const addProcess = () => {
    const id = processes.length + 1;
    setProcesses([...processes, { name: `P${id}`, arrival: 0, burst: 0 }]);
  };

  const updateProcess = (index, field, value) => {
    const updated = [...processes];
    updated[index][field] = Number(value);
    setProcesses(updated);
  };

  const calculateFCFS = () => {
    let time = 0;
    let ganttData = [];
    let computed = processes
      .sort((a, b) => a.arrival - b.arrival)
      .map((p) => {
        if (time < p.arrival) time = p.arrival;

        const start = time;
        const finish = time + p.burst;

        ganttData.push({
          name: p.name,
          start,
          end: finish,
        });

        const CT = finish;
        const TAT = CT - p.arrival;
        const WT = TAT - p.burst;

        time = finish;

        return { ...p, CT, TAT, WT };
      });

    const avgTAT =
      computed.reduce((sum, p) => sum + p.TAT, 0) / computed.length || 0;
    const avgWT =
      computed.reduce((sum, p) => sum + p.WT, 0) / computed.length || 0;

    setResults({
      processes: computed,
      avgTAT: avgTAT.toFixed(2),
      avgWT: avgWT.toFixed(2),
    });

    setGantt(ganttData);
  };

  const reset = () => {
    setResults(null);
    setGantt([]);
    setProcesses([{ name: "P1", arrival: 0, burst: 0 }]);
  };

  return (
    <div className="scheduling-container">

      <h2 className="page-title">FCFS Scheduling</h2>

      {/* INPUT CARD */}
      <div className="input-card">
        <h3>Input Processes</h3>

        <table className="input-table">
          <thead>
            <tr>
              <th>Process</th>
              <th>Arrival Time</th>
              <th>Burst Time</th>
            </tr>
          </thead>
          <tbody>
            {processes.map((p, index) => (
              <tr key={index}>
                <td>{p.name}</td>
                <td>
                  <input
                    type="number"
                    value={p.arrival}
                    onChange={(e) =>
                      updateProcess(index, "arrival", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={p.burst}
                    onChange={(e) =>
                      updateProcess(index, "burst", e.target.value)
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className="add-btn" onClick={addProcess}>
          + Add Process
        </button>

        <div className="action-buttons">
          <button className="visualize-btn" onClick={calculateFCFS}>
            ▶ Visualize
          </button>
          <button className="reset-btn" onClick={reset}>
            ⟳ Reset
          </button>
        </div>
      </div>

      {/* GANTT SECTION */}
      {gantt.length > 0 && (
        <div className="gantt-card">
          <h3>Gantt Chart</h3>

          <div className="gantt-bar">
            {gantt.map((g, index) => (
              <div
                key={index}
                className={`gantt-block color-${g.name}`}
                style={{ width: `${(g.end - g.start) * 40}px` }}
              >
                <span>{g.name}</span>
                <small>
                  {g.start} → {g.end}
                </small>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* RESULTS */}
      {results && (
        <div className="results-grid">

          <div className="processes-card">
            <h3>Processes</h3>

            <table className="results-table">
              <thead>
                <tr>
                  <th>P</th>
                  <th>AT</th>
                  <th>BT</th>
                  <th>CT</th>
                  <th>TAT</th>
                  <th>WT</th>
                </tr>
              </thead>
              <tbody>
                {results.processes.map((p, index) => (
                  <tr key={index}>
                    <td>{p.name}</td>
                    <td>{p.arrival}</td>
                    <td>{p.burst}</td>
                    <td>{p.CT}</td>
                    <td>{p.TAT}</td>
                    <td>{p.WT}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="average-card">
            <h3>Average Times</h3>

            <p className="avg-title">Turnaround Time</p>
            <p className="avg-number">{results.avgTAT}</p>

            <p className="avg-title">Waiting Time</p>
            <p className="avg-number">{results.avgWT}</p>
          </div>

        </div>
      )}
    </div>
  );
}
