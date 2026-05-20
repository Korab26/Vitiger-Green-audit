<#
  Deploy Serena MCP Server to NAS (DXP2800-D4BC)
  Run from PowerShell on your Windows machine:
    .\deploy-serena.ps1
#>

$NAS_HOST = "100.106.96.51"
$NAS_PORT = "22022"
$NAS_USER = "79havirka-gal-ie"
$NAS_SSH  = "ssh -p $NAS_PORT $NAS_USER@$NAS_HOST"
$REMOTE_DIR = "/volume1/docker/serena"

Write-Host "=== Serena MCP Server Deployment ===" -ForegroundColor Cyan
Write-Host ""

# Step 1: Check NAS connectivity
Write-Host "[1/6] Checking NAS connectivity..." -ForegroundColor Yellow
$check = Invoke-Expression "$NAS_SSH 'echo ok'" 2>&1
if ($check -notmatch "ok") {
    Write-Host "ERROR: Cannot reach NAS at $NAS_HOST`:$NAS_PORT" -ForegroundColor Red
    Write-Host "Output: $check"
    exit 1
}
Write-Host "  NAS reachable" -ForegroundColor Green

# Step 2: Check Docker on NAS
Write-Host "[2/6] Checking Docker on NAS..." -ForegroundColor Yellow
$dockerVer = Invoke-Expression "$NAS_SSH 'docker --version 2>&1'" 2>&1
Write-Host "  $dockerVer" -ForegroundColor Green

# Step 3: Check if repos are where we expect
Write-Host "[3/6] Checking repo paths..." -ForegroundColor Yellow
$repoCheck = Invoke-Expression "$NAS_SSH 'ls /volume1/personal_folder/""Web Development""/new_start/package.json 2>&1'" 2>&1
if ($repoCheck -match "No such file") {
    Write-Host "  WARNING: new_start not found at expected path" -ForegroundColor Red
    Write-Host "  Checking alternative paths..." -ForegroundColor Yellow
    Invoke-Expression "$NAS_SSH 'find /volume1 -maxdepth 4 -name ""new_start"" -type d 2>/dev/null | head -5'"
    Write-Host "  Update REMOTE_DIR in docker-compose.yml volumes if path differs" -ForegroundColor Yellow
} else {
    Write-Host "  new_start workspace found" -ForegroundColor Green
}

# Step 4: Create remote directory and upload configs
Write-Host "[4/6] Uploading Serena config to NAS..." -ForegroundColor Yellow
Invoke-Expression "$NAS_SSH 'mkdir -p $REMOTE_DIR'"

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
scp -P $NAS_PORT "$scriptDir\docker-compose.yml" "${NAS_USER}@${NAS_HOST}:${REMOTE_DIR}/docker-compose.yml"
scp -P $NAS_PORT "$scriptDir\serena_config.yml" "${NAS_USER}@${NAS_HOST}:${REMOTE_DIR}/serena_config.yml"
Write-Host "  Config files uploaded" -ForegroundColor Green

# Step 5: Pull image and start container
Write-Host "[5/6] Starting Serena container..." -ForegroundColor Yellow
Invoke-Expression "$NAS_SSH 'cd $REMOTE_DIR && docker compose pull 2>&1 | tail -3'"
Invoke-Expression "$NAS_SSH 'cd $REMOTE_DIR && docker compose up -d 2>&1'"

Start-Sleep -Seconds 5

# Step 6: Verify
Write-Host "[6/6] Verifying..." -ForegroundColor Yellow
$status = Invoke-Expression "$NAS_SSH 'docker ps --filter name=serena --format ""{{.Names}} {{.Status}}""'" 2>&1
if ($status -match "serena") {
    Write-Host "  Serena is running: $status" -ForegroundColor Green
} else {
    Write-Host "  Container may still be starting. Check with:" -ForegroundColor Yellow
    Write-Host "  $NAS_SSH 'docker logs serena --tail 20'"
}

Write-Host ""
Write-Host "=== Done ===" -ForegroundColor Cyan
Write-Host ""
Write-Host "Dashboard: http://${NAS_HOST}:24282/dashboard" -ForegroundColor Cyan
Write-Host "MCP SSE:   http://${NAS_HOST}:9121" -ForegroundColor Cyan
Write-Host ""
Write-Host "Now add Serena to your Claude Code config:" -ForegroundColor Yellow
Write-Host '  Run: claude mcp add serena --transport sse --url http://100.106.96.51:9121'
Write-Host ""
Write-Host "Or manually add to .claude/mcp.json:" -ForegroundColor Yellow
Write-Host @"
{
  "serena": {
    "type": "sse",
    "url": "http://100.106.96.51:9121"
  }
}
"@
