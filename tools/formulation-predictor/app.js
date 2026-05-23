const predictBtn = document.getElementById('predict-btn');
const moleculeContainer = document.getElementById('molecule');
const placeholderText = document.getElementById('placeholder-text');
const scanResults = document.getElementById('scan-results');
const statusDot = document.getElementById('status-dot');
const statusText = document.getElementById('status-text');
const resultsViewer = document.getElementById('results-viewer');

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

predictBtn.addEventListener('click', async () => {
    predictBtn.disabled = true;
    placeholderText.style.display = 'none';
    scanResults.style.display = 'none';
    resultsViewer.style.display = 'none';
    
    // Show molecule
    moleculeContainer.style.display = 'flex';
    moleculeContainer.classList.remove('simulating');
    
    statusDot.classList.add('active');
    statusText.innerText = "Simulating Molecular Stability...";

    // Toggle CSS states to animate the atoms moving
    await sleep(500);
    moleculeContainer.classList.add('simulating');
    await sleep(2000);
    moleculeContainer.classList.remove('simulating');
    await sleep(1500);

    // End prediction
    moleculeContainer.style.display = 'none';

    statusText.innerText = "Prediction Complete";
    statusText.style.color = 'var(--success)';
    statusDot.style.backgroundColor = 'var(--success)';
    statusDot.classList.remove('active');
    
    resultsViewer.style.display = 'block';
    scanResults.style.display = 'block';
    predictBtn.innerText = "Rerun Prediction";
    predictBtn.disabled = false;
});
