export function mockGitea() {
  return {
    label: "Gitea Repos",
    status: "online",
    repos: [
      { name: "audit-os", openIssues: 7, milestone: "v0.3.0 — 60%", lastPush: "2h ago" },
      { name: "hermes-cockpit", openIssues: 2, milestone: "v0.1.0 — 20%", lastPush: "just now" },
      { name: "ekoinstal-crm", openIssues: 12, milestone: "v2.1.0 — 80%", lastPush: "5h ago" },
      { name: "hems-firmware", openIssues: 3, milestone: "v1.0.0 — 45%", lastPush: "1d ago" },
    ],
  };
}
