const scanBtn = document.getElementById('scan-btn');
const scannerContainer = document.getElementById('scanner');
const laser = document.getElementById('laser');
const placeholderText = document.getElementById('placeholder-text');
const scanResults = document.getElementById('scan-results');
const statusDot = document.getElementById('status-dot');
const statusText = document.getElementById('status-text');
const resultsViewer = document.getElementById('results-viewer');

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

scanBtn.addEventListener('click', async () => {
    scanBtn.disabled = true;
    placeholderText.style.display = 'none';
    scanResults.style.display = 'none';
    resultsViewer.style.display = 'none';
    
    // Show scanner
    scannerContainer.style.display = 'block';
    laser.style.display = 'block';
    laser.style.animation = 'scanDown 2.5s linear infinite';
    
    statusDot.classList.add('active');
    statusText.innerText = "Scanning Document (OCR)...";

    // Simulate scanning time
    await sleep(2500);
    statusText.innerText = "Validating against cGMP limits...";
    await sleep(2500);

    // End scan
    scannerContainer.style.display = 'none';
    laser.style.display = 'none';
    laser.style.animation = 'none';

    statusText.innerText = "Deviations Detected";
    statusText.style.color = 'var(--error)';
    statusDot.style.backgroundColor = 'var(--error)';
    statusDot.classList.remove('active');
    
    resultsViewer.style.display = 'block';
    scanResults.style.display = 'block';
    scanBtn.innerText = "Scan Complete";
});
