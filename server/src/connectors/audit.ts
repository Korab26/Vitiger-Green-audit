export function mockAuditModules() {
  return {
    label: "Audit OS Modules",
    status: "active",
    modules: [
      { name: "WorkTime", progress: 85, status: "in-progress", lastCommit: "2h ago" },
      { name: "EnergyCalc", progress: 60, status: "in-progress", lastCommit: "1d ago" },
      { name: "CertManager", progress: 100, status: "done", lastCommit: "3d ago" },
      { name: "ReportGen", progress: 30, status: "planned", lastCommit: "—" },
      { name: "ClientPortal", progress: 10, status: "planned", lastCommit: "—" },
    ],
  };
}
