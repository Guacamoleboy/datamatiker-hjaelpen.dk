document.addEventListener('DOMContentLoaded', function () { 

    // __________________ Objekter Status ______________________
    const total01 = 5; 
    let correct01 = 0;

    for (let i = 1; i <= total01; i++) {
        const key = `01-input0${i}-correct`;
        if (localStorage.getItem(key) === 'true') {
            correct01++;
        }
    }

    const percent01 = Math.round((correct01 / total01) * 100);

    const status01 = document.querySelector('[data-status-id="status-01"]');
    const progressBar01 = document.querySelector('[data-progress-id="progress-01"]');
    const progressText01 = document.querySelector('[data-status-id="status-text-01"]');

    if (status01 && progressBar01) {
        status01.textContent = `${correct01}/${total01}`;
        progressBar01.style.width = `${percent01}%`;
        progressBar01.setAttribute('aria-valuenow', percent01);

        if (progressText01) {
            progressText01.textContent = `${percent01}%`;
        }

        if (percent01 === 100) {
            progressBar01.classList.remove('bg-warning');
            progressBar01.classList.add('bg-success');
        } else {
            progressBar01.classList.remove('bg-success');
            progressBar01.classList.add('bg-warning');
        }
    }

    function updateStatusTitleIfComplete01() {
        const keys = ['01-input01-correct', '01-input02-correct', '01-input03-correct'];
        const allCorrect = keys.every(key => localStorage.getItem(key) === 'true');

        if (allCorrect) {
            const statusCard = document.querySelector('#quiz-01-status .card-title');
            if (statusCard) {
                statusCard.textContent = 'Completed';
            }
        }
    }

    updateStatusTitleIfComplete01(); 

    // __________________ ArrayList Status ______________________

    const total02 = 4;
    let correct02 = 0;

    for (let i = 1; i <= total02; i++) {
        const key = `02-input0${i}-correct`;
        if (localStorage.getItem(key) === 'true') {
            correct02++;
        }
    }

    const percent02 = Math.round((correct02 / total02) * 100);

    const status02 = document.querySelector('[data-status-id="status-02"]');
    const progressBar02 = document.querySelector('[data-progress-id="progress-02"]');
    const progressText02 = document.querySelector('[data-status-id="status-text-02"]');

    if (status02 && progressBar02) {
        status02.textContent = `${correct02}/${total02}`;
        progressBar02.style.width = `${percent02}%`;
        progressBar02.setAttribute('aria-valuenow', percent02);

        if (progressText02) {
            progressText02.textContent = `${percent02}%`;
        }

        if (percent02 === 100) {
            progressBar02.classList.remove('bg-warning');
            progressBar02.classList.add('bg-success');
        } else {
            progressBar02.classList.remove('bg-success');
            progressBar02.classList.add('bg-warning');
        }
    }

    function updateStatusTitleIfComplete02() {
        const keys = ['02-input01-correct', '02-input02-correct', '02-input03-correct'];
        const allCorrect = keys.every(key => localStorage.getItem(key) === 'true');

        if (allCorrect) {
            const statusCard = document.querySelector('#quiz-02-status .card-title');
            if (statusCard) {
                statusCard.textContent = 'Completed';
            }
        }
    }

    updateStatusTitleIfComplete02();

});