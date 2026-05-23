const generateBtn = document.getElementById('generate-btn');
const stepper = document.getElementById('stepper');
const progressLine = document.getElementById('progress-line');
const steps = [
    document.getElementById('step-1'),
    document.getElementById('step-2'),
    document.getElementById('step-3'),
    document.getElementById('step-4')
];
const documentViewer = document.getElementById('document-viewer');
const placeholderText = document.getElementById('placeholder-text');
const outputContent = document.getElementById('output-content');
const statusDot = document.getElementById('status-dot');
const statusText = document.getElementById('status-text');
const exportBtn = document.getElementById('export-btn');

// The Mock AI Output (Pharmaceutical Jargon)
const mockDossier = `MODULE 3: QUALITY (CMC)
3.2.S DRUG SUBSTANCE
3.2.S.1 General Information

3.2.S.1.1 Nomenclature
International Non-proprietary Name (INN): Methenamine Hippurate
Chemical Name: Hexamethylenetetramine mono(hippurate)

3.2.S.1.2 Structure
The active pharmaceutical ingredient (API) is a salt formulated from methenamine and hippuric acid in a 1:1 molar ratio. 

3.2.S.1.3 General Properties
Physicochemical characteristics: Methenamine hippurate presents as a white, crystalline powder.
Solubility: Freely soluble in water (conforming to BCS Class I criteria), and soluble in ethanol. 
pH: The pH of a 1% w/v aqueous solution ranges between 4.0 and 5.5, ensuring optimal structural integrity and avoiding premature hydrolysis to formaldehyde prior to renal excretion.

3.2.P DRUG PRODUCT
3.2.P.2 Pharmaceutical Development
The formulation rationale was predicated on maintaining the stability of the methenamine hippurate complex during high-shear granulation. 

Excipient Compatibility:
Accelerated stability studies (40°C / 75% RH for 6 months) confirm zero cross-reactivity between the API and the chosen glidants (Colloidal Silicon Dioxide) and lubricants (Magnesium Stearate).

Analytical Validation (LIMS ID: LYR-2026-88A):
HPLC assay results indicate an API recovery rate of 99.8% ± 0.4%, well within the ICH Q1A(R2) specification limits of 95.0% - 105.0%. Total impurities remained below 0.1%.

[GENERATION COMPLETE. ALL PARAMETERS COMPLIANT WITH FDA eCTD SPECIFICATIONS.]`;

// Mock Processing Logs
const processingLogs = [
    "Initializing Dossier Synthesis Agent v2.4...",
    "Connecting to secure LIMS database...",
    "Extracting raw analytical data (Batch #MH-8821)...",
    "NLP Engine: Analyzing excipient compatibility matrix...",
    "Cross-referencing FDA ICH Q1A(R2) guidelines...",
    "Validating HPLC assay parameters...",
    "Structuring output to eCTD Module 3 (CMC) format...",
    "Initiating semantic generation..."
];

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function runSimulation() {
    // Reset state
    generateBtn.disabled = true;
    placeholderText.style.display = 'none';
    outputContent.innerHTML = '';
    stepper.style.display = 'flex';
    exportBtn.disabled = true;
    progressLine.style.width = '0%';
    steps.forEach(s => { s.classList.remove('active'); s.classList.remove('completed'); });
    
    // Set Status
    statusDot.classList.add('active');
    statusText.innerText = "Agent Processing Data...";

    // 1. Simulate Stepper Progress
    const phaseDelays = [1500, 2000, 1500, 1000]; // Duration for each step
    
    for (let i = 0; i < steps.length; i++) {
        steps[i].classList.add('active');
        
        // Update progress line width
        const progressTarget = ((i) / (steps.length - 1)) * 100;
        progressLine.style.width = `${progressTarget}%`;
        
        await sleep(phaseDelays[i]);
        
        steps[i].classList.remove('active');
        steps[i].classList.add('completed');
    }

    // Progress line full
    progressLine.style.width = '100%';

    // 2. Simulate Typewriter Output
    statusText.innerText = "Synthesizing Document...";
    
    // Create cursor element
    const cursor = document.createElement('span');
    cursor.className = 'cursor';
    outputContent.appendChild(cursor);

    let currentText = "";
    
    for (let i = 0; i < mockDossier.length; i++) {
        currentText += mockDossier[i];
        
        // Render text (handling newlines)
        outputContent.innerHTML = currentText.replace(/\n/g, '<br>') + '<span class="cursor"></span>';
        
        // Variable typing speed (faster for standard chars, slower for punctuation)
        let typeDelay = 15;
        if (['.', '\n'].includes(mockDossier[i])) typeDelay = 150;
        if (mockDossier[i] === ' ') typeDelay = 25;
        
        await sleep(typeDelay);
        
        // Auto scroll document viewer
        const docBody = document.querySelector('.document-body');
        docBody.scrollTop = docBody.scrollHeight;
    }

    // Remove cursor when done
    outputContent.innerHTML = currentText.replace(/\n/g, '<br>');

    // Finalize state
    statusDot.classList.remove('active');
    statusDot.style.backgroundColor = 'var(--success)';
    statusText.innerText = "Task Completed Successfully";
    statusText.style.color = 'var(--success)';
    exportBtn.disabled = false;
    generateBtn.disabled = false;
    generateBtn.innerHTML = "Regenerate Module 3";
}

generateBtn.addEventListener('click', runSimulation);
