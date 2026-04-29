import express from "express";
import cors from "cors";
import { mockAuditModules } from "./connectors/audit.js";
import { mockEkoinstal } from "./connectors/ekoinstal.js";
import { mockFoundation } from "./connectors/foundation.js";
import { mockObsidian } from "./connectors/obsidian.js";
import { mockGitea } from "./connectors/gitea.js";
import { mockN8n } from "./connectors/n8n.js";
import { mockNasDocker } from "./connectors/nas-docker.js";
import { mockOvhPortainer } from "./connectors/ovh-portainer.js";
import { mockAgents } from "./connectors/agents.js";
import { mockHems } from "./connectors/hems.js";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get("/api/dashboard", (_req, res) => {
  res.json({
    timestamp: new Date().toISOString(),
    systems: {
      audit: mockAuditModules(),
      ekoinstal: mockEkoinstal(),
      foundation: mockFoundation(),
      obsidian: mockObsidian(),
      gitea: mockGitea(),
      n8n: mockN8n(),
      nasDocker: mockNasDocker(),
      ovhPortainer: mockOvhPortainer(),
      agents: mockAgents(),
      hems: mockHems(),
    },
  });
});

app.listen(PORT, () => {
  console.log(`Hermes API running on http://localhost:${PORT}`);
});
