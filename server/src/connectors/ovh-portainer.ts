export function mockOvhPortainer() {
  return {
    label: "OVH / Portainer Production",
    status: "healthy",
    host: "51.83.186.40",
    stacks: [
      { name: "ekoinstal-prod", services: 4, state: "running", updated: "3d ago" },
      { name: "audit-staging", services: 3, state: "running", updated: "1d ago" },
      { name: "hermes-api", services: 2, state: "running", updated: "6h ago" },
    ],
    resources: { cpuUsage: "34%", memUsage: "61%", diskUsage: "42%" },
  };
}
