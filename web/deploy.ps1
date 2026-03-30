# Deployment Script for Genecare Web App
# This script builds and prepares the dist folder for deployment

# Build the project
Write-Host "Building the project..." -ForegroundColor Cyan
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed!" -ForegroundColor Red
    exit 1
}

Write-Host "Build successful!" -ForegroundColor Green

# Display dist folder info
Write-Host "`nDist folder ready for deployment:" -ForegroundColor Cyan
Write-Host "Location: $(Get-Location)\dist`n" -ForegroundColor Yellow

# List all files in dist
Get-ChildItem -Path ".\dist" -Recurse | ForEach-Object {
    Write-Host "  $($_.FullName.Replace($(Get-Location).Path, ''))"
}

Write-Host "`nTo deploy, copy the entire 'dist' folder to your server's web root." -ForegroundColor Cyan
Write-Host "Your server: http://14.139.187.229:8028/" -ForegroundColor Yellow

# Provide SCP deployment example
Write-Host "`nExample deployment command (if you have SSH access):" -ForegroundColor Cyan
Write-Host "scp -r .\dist user@14.139.187.229:/var/www/html/" -ForegroundColor Gray
