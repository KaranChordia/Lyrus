const predictBtn = document.getElementById('predict-btn');
const terminal = document.getElementById('terminal');
const terminalBody = document.getElementById('terminal-body');
const placeholderText = document.getElementById('placeholder-text');
const scanResults = document.getElementById('scan-results');
const statusDot = document.getElementById('status-dot');
const statusText = document.getElementById('status-text');

const logs = [
    "Loading 3D molecular structure: Curcuminoids...",
    "Applying excipient matrix...",
    "Simulating thermal dynamics at 40°C...",
    "Simulating humidity kinetics at 75% RH...",
    "Calculating Gibbs free energy of formulation...",
    "Checking for crystalline lattice collapse...",
    "Predicting Ostwald ripening rates over 6 months...",
    "Synthesis complete. Rendering UI."
];

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

predictBtn.addEventListener('click', async () => {
    predictBtn.disabled = true;
    placeholderText.style.display = 'none';
    scanResults.style.display = 'none';
    terminal.style.display = 'block';
    terminalBody.innerHTML = '';
    
    statusDot.classList.add('active');
    statusText.innerText = "Simulating Molecular Stability...";

    for (let log of logs) {
        const div = document.createElement('div');
        div.className = 'log-line';
        div.innerText = `> ${log}`;
        terminalBody.appendChild(div);
        terminalBody.scrollTop = terminalBody.scrollHeight;
        await sleep(Math.floor(Math.random() * 500) + 200);
    }

    statusText.innerText = "Prediction Complete";
    statusText.style.color = 'var(--success)';
    statusDot.style.backgroundColor = 'var(--success)';
    statusDot.classList.remove('active');
    
    scanResults.style.display = 'block';
    predictBtn.innerText = "Rerun Prediction";
    predictBtn.disabled = false;
});
