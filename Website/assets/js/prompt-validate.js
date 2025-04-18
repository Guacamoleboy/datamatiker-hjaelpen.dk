document.addEventListener('DOMContentLoaded', function () {

    const input = document.getElementById('user-input01');
    const input2 = document.getElementById('user-input02');
    const input3 = document.getElementById('user-input03');

    const correctAnswer01 = '<Integer>';
    const correctAnswer02 = 'ArrayList <User> user = new ArrayList<>()';
    const correctAnswer02_02 = 'ArrayList <User> user = new ArrayList<User>()';
    const correctAnswer03 = 'ArrayList <Double> balance = new ArrayList<>()';
    const correctAnswer03_02 = 'ArrayList <Double> balance = new ArrayList<Double>()';

    function validateInput(inputElement, correctAnswers, key) {
        const userAnswer = inputElement.value.trim();
        let bgColor = '';
    
        if (userAnswer === '') {
            bgColor = '#8383be'; 
        } else if (correctAnswers.includes(userAnswer)) {
            bgColor = '#0e8a21'; 
        } else {
            bgColor = '#8a0e0e'; 
        }
    
        inputElement.style.backgroundColor = bgColor;
        inputElement.style.color = 'white';
    
        localStorage.setItem(`02-${key}-value`, userAnswer);
        localStorage.setItem(`02-${key}-bg`, bgColor);
        localStorage.setItem(`02-${key}-correct`, correctAnswers.includes(userAnswer));
    }

    function restoreInput(inputElement, key) {
        const savedValue = localStorage.getItem(`${key}-value`);
        const savedBg = localStorage.getItem(`${key}-bg`);

        if (savedValue !== null) {
            inputElement.value = savedValue;
            inputElement.style.backgroundColor = savedBg;
            inputElement.style.color = 'white';
        }
    }

    input.addEventListener('input', () => validateInput(input, [correctAnswer01], 'input01'));
    input2.addEventListener('input', () => validateInput(input2, [correctAnswer02, correctAnswer02_02], 'input02'));
    input3.addEventListener('input', () => validateInput(input3, [correctAnswer03, correctAnswer03_02], 'input03'));

    restoreInput(input, '02-input01');
    restoreInput(input2, '02-input02');
    restoreInput(input3, '02-input03');

});