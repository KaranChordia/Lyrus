document.addEventListener('DOMContentLoaded', () => {
    const triggerBtn = document.getElementById('trigger-btn');
    const milestoneTarget = document.getElementById('milestone-target');
    const modal = document.getElementById('invoice-modal');
    const closeBtn = document.getElementById('close-modal-btn');
    const financeAlert = document.getElementById('finance-alert');

    if (triggerBtn) {
        triggerBtn.addEventListener('click', () => {
            // 1. Show Modal
            modal.classList.add('active');
            
            // 2. Change milestone visual to completed
            milestoneTarget.innerHTML = `
                <div class="node" style="background-color: var(--success); border-color: var(--success);">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span style="color: var(--text-main);">6-Month Stability</span>
            `;
            milestoneTarget.classList.remove('pending');
            milestoneTarget.classList.add('completed');
            
            // Color the track line after it if we wanted to...
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            // 1. Hide Modal
            modal.classList.remove('active');
            
            // 2. Show top-right finance alert to simulate the automated routing
            financeAlert.style.display = 'flex';
        });
    }
});
