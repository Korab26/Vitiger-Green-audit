export function mockN8n() {
  return {
    label: "n8n Workflows",
    status: "running",
    totalWorkflows: 18,
    activeWorkflows: 14,
    workflows: [
      { name: "Invoice → Gitea Issue", active: true, lastRun: "10m ago", status: "success" },
      { name: "Daily Backup NAS→OVH", active: true, lastRun: "6h ago", status: "success" },
      { name: "Hermes Agent Scheduler", active: true, lastRun: "1h ago", status: "success" },
      { name: "Email → Obsidian Note", active: false, lastRun: "3d ago", status: "disabled" },
      { name: "HEMS Data Collector", active: true, lastRun: "5m ago", status: "warning" },
    ],
  };
}
