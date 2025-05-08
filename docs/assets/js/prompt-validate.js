document.addEventListener('DOMContentLoaded', function () {

    const input = document.getElementById('02-user-input01');
    const input2 = document.getElementById('02-user-input02');
    const input3 = document.getElementById('02-user-input03');
    const input4 = document.getElementById('02-user-input04');
    const input5 = document.getElementById('02-user-input05');
    const input6 = document.getElementById('02-user-input06');

    const correctAnswer01 = '<Integer>';
    const correctAnswer02 = 'ArrayList <User> user = new ArrayList<>()';
    const correctAnswer02_02 = 'ArrayList <User> user = new ArrayList<User>()';
    const correctAnswer03 = 'ArrayList <Double> balance = new ArrayList<>()';
    const correctAnswer03_02 = 'ArrayList <Double> balance = new ArrayList<Double>()';
    const correctAnswer04 = 'number.add(42)';
    const correctAnswer05 = 'String myName = people.get(3)';
    const correctAnswer06 = 'colors.set(4, "rød")';

    const correctSound = new Audio('../assets/sound/coin.mp3');
    correctSound.volume = 0.1;

    function playCorrectAnswerSound() {
        correctSound.play();
    }
    
    function validateInput(inputElement, correctAnswers, key) {
        const userAnswer = inputElement.value.trim();
        let bgColor = '';
    
        if (userAnswer === '') {
            bgColor = '#8383be'; 
        } else if (correctAnswers.includes(userAnswer)) {
            bgColor = '#0e8a21'; 
            playCorrectAnswerSound();
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
    input4.addEventListener('input', () => validateInput(input4, [correctAnswer04], 'input04'));
    input5.addEventListener('input', () => validateInput(input5, [correctAnswer05], 'input05'));
    input6.addEventListener('input', () => validateInput(input6, [correctAnswer06], 'input06'));

    restoreInput(input, '02-input01');
    restoreInput(input2, '02-input02');
    restoreInput(input3, '02-input03');
    restoreInput(input4, '02-input04');
    restoreInput(input5, '02-input05');
    restoreInput(input6, '02-input06');

});