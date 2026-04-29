export function mockAgents() {
  return {
    label: "Hermes Agents",
    status: "active",
    agents: [
      { name: "CodeReview Agent", lastRun: "30m ago", status: "idle", runsToday: 5 },
      { name: "Deploy Agent", lastRun: "2h ago", status: "idle", runsToday: 2 },
      { name: "Backup Agent", lastRun: "6h ago", status: "idle", runsToday: 1 },
      { name: "Monitor Agent", lastRun: "5m ago", status: "running", runsToday: 288 },
    ],
  };
}
