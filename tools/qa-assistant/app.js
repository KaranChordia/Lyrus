const scanBtn = document.getElementById('scan-btn');
const terminal = document.getElementById('terminal');
const terminalBody = document.getElementById('terminal-body');
const placeholderText = document.getElementById('placeholder-text');
const scanResults = document.getElementById('scan-results');
const statusDot = document.getElementById('status-dot');
const statusText = document.getElementById('status-text');

const logs = [
    "Initializing QA Vision Scanner...",
    "Extracting OCR text from Batch_MH_8821_Final.pdf...",
    "Loading Master Batch Record spec constraints...",
    "Scanning Step 1-3: Parameters nominal.",
    "Scanning Step 4: Granulation temperature threshold exceeded.",
    "Flagging deviation: +0.2°C.",
    "Scanning Step 5-10: Parameters nominal.",
    "Generating QA Discrepancy Report..."
];

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

scanBtn.addEventListener('click', async () => {
    scanBtn.disabled = true;
    placeholderText.style.display = 'none';
    scanResults.style.display = 'none';
    terminal.style.display = 'block';
    terminalBody.innerHTML = '';
    
    statusDot.classList.add('active');
    statusText.innerText = "Scanning Document...";

    for (let log of logs) {
        const div = document.createElement('div');
        div.className = 'log-line';
        div.innerText = `> ${log}`;
        terminalBody.appendChild(div);
        terminalBody.scrollTop = terminalBody.scrollHeight;
        await sleep(Math.floor(Math.random() * 600) + 300);
    }

    statusText.innerText = "Deviations Detected";
    statusText.style.color = 'var(--error)';
    statusDot.style.backgroundColor = 'var(--error)';
    statusDot.classList.remove('active');
    
    scanResults.style.display = 'block';
    scanBtn.innerText = "Scan Complete";
});
