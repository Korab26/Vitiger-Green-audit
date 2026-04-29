export function mockEkoinstal() {
  return {
    label: "Ekoinstal Production",
    status: "healthy",
    activeProjects: 12,
    pendingInvoices: 3,
    recentActivity: [
      { project: "Mazury Villa PV", phase: "Installation", crew: "Team A" },
      { project: "Olsztyn Office HP", phase: "Commissioning", crew: "Team B" },
      { project: "Mrągowo School", phase: "Design", crew: "—" },
    ],
  };
}
