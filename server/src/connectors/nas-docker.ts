export function mockNasDocker() {
  return {
    label: "NAS Docker (DXP2800)",
    status: "healthy",
    host: "100.106.96.51",
    containers: [
      { name: "n8n", state: "running", cpu: "2.1%", mem: "312 MB", uptime: "14d" },
      { name: "gitea", state: "running", cpu: "0.8%", mem: "198 MB", uptime: "14d" },
      { name: "portainer-agent", state: "running", cpu: "0.1%", mem: "24 MB", uptime: "14d" },
      { name: "obsidian-livesync", state: "running", cpu: "0.3%", mem: "87 MB", uptime: "7d" },
      { name: "hermes-worker", state: "stopped", cpu: "—", mem: "—", uptime: "—" },
    ],
  };
}
