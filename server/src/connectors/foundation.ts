export function mockFoundation() {
  return {
    label: "Wiatr i Słońce Foundation",
    status: "active",
    tasks: [
      { title: "Grant application — EU Green Fund", due: "2026-05-15", status: "in-progress" },
      { title: "Workshop: Solar for Schools", due: "2026-06-01", status: "planned" },
      { title: "Annual report 2025", due: "2026-03-31", status: "done" },
      { title: "Community newsletter Q2", due: "2026-04-30", status: "in-progress" },
    ],
  };
}
