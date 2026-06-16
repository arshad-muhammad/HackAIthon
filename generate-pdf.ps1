# Create target directory
$brochureDir = "c:\Users\muhda\Documents\gsoc\HackAIthon\brochure"
if (!(Test-Path $brochureDir)) {
    New-Item -ItemType Directory -Force -Path $brochureDir
}

# Clean up test.pdf from root if it exists
if (Test-Path "c:\Users\muhda\Documents\gsoc\HackAIthon\test.pdf") {
    Remove-Item "c:\Users\muhda\Documents\gsoc\HackAIthon\test.pdf" -Force
}

# Kill any existing processes on port 3000 and 3001 to avoid conflicts
Write-Host "Cleaning up port 3000 and 3001..."
$ports = @(3000, 3001)
foreach ($port in $ports) {
    $portConn = Get-NetTCPConnection -LocalPort $port -ErrorAction SilentlyContinue
    if ($portConn) {
        foreach ($conn in $portConn) {
            Write-Host "Killing process $($conn.OwningProcess) on port $port"
            Stop-Process -Id $conn.OwningProcess -Force -ErrorAction SilentlyContinue
        }
        Start-Sleep -Seconds 1
    }
}

# Start Next.js dev server in the background
Write-Host "Starting Next.js dev server..."
$process = Start-Process npm -ArgumentList "run dev" -PassThru -NoNewWindow

# Wait for server to start and detect which port it bound to
$portsToCheck = @(3000, 3001)
$detectedPort = 0
$started = $false
$retries = 40

Write-Host "Waiting for server to become responsive..."
for ($i = 0; $i -lt $retries; $i++) {
    foreach ($port in $portsToCheck) {
        $url = "http://localhost:$port/brochure"
        try {
            $response = Invoke-WebRequest -Uri $url -Method Head -TimeoutSec 1 -UseBasicParsing
            if ($response.StatusCode -eq 200) {
                $detectedPort = $port
                $started = $true
                break
            }
        } catch {
            # Not ready on this port
        }
    }
    if ($started) { break }
    Start-Sleep -Seconds 1
}

if ($started) {
    $targetUrl = "http://localhost:$detectedPort/brochure"
    Write-Host "Server is up on port $detectedPort! Exporting brochure PDF using headless Chrome..."
    
    $pdfPath = Join-Path $brochureDir "hackaithon_brochure.pdf"
    
    # Run Chrome via cmd.exe /c to avoid PowerShell parser problems with arguments
    $cmd = "`"C:\Program Files\Google\Chrome\Application\chrome.exe`" --headless --disable-gpu --no-sandbox --no-margins --print-to-pdf=`"$pdfPath`" $targetUrl"
    Write-Host "Executing command: cmd.exe /c '$cmd'"
    
    cmd.exe /c $cmd
    
    if (Test-Path $pdfPath) {
        Write-Host "PDF successfully saved to $pdfPath"
    } else {
        Write-Error "Chrome completed, but PDF file was not found."
    }
} else {
    Write-Error "Failed to start Next.js dev server or reach the brochure page."
}

# Stop the dev server
Write-Host "Stopping Next.js dev server..."
Stop-Process -Id $process.Id -Force
# Ensure all spawned node/next processes are cleaned up
foreach ($port in $portsToCheck) {
    $portConn = Get-NetTCPConnection -LocalPort $port -ErrorAction SilentlyContinue
    if ($portConn) {
        foreach ($conn in $portConn) {
            Stop-Process -Id $conn.OwningProcess -Force -ErrorAction SilentlyContinue
        }
    }
}
