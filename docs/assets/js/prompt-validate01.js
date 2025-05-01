document.addEventListener('DOMContentLoaded', function () {

    const input1_01 = document.getElementById('01-user-input01');
    const input2_01 = document.getElementById('01-user-input02');
    const input3_01 = document.getElementById('01-user-input03');
    const input4_01 = document.getElementById('01-user-input04');
    const input4_02 = document.getElementById('01-user-input04_02');
    const input5_01 = document.getElementById('01-user-input05');
    const input6_01 = document.getElementById('01-user-input06_01');
    const input6_02 = document.getElementById('01-user-input06_02');
    const input6_03 = document.getElementById('01-user-input06_03');
    const input6_04 = document.getElementById('01-user-input06_04');
    
    const correctAnswer1_01 = 'Bank'; 
    const correctAnswer2_01 = 'Food food = new Food()';
    const correctAnswer3_01 = 'Food food = new Food(5, "Bananer", "Congo")';
    const correctAnswer4_01 = 'public';
    const correctAnswer4_02 = 'public';
    const correctAnswer5_01 = 'Nej';
    const correctAnswer6_01 = 'Ja';
      

    input1_01.addEventListener('input', () => validateInput(input1_01, [correctAnswer1_01], 'input01_01', false));
    input2_01.addEventListener('input', () => validateInput(input2_01, [correctAnswer2_01], 'input02_01', false));
    input3_01.addEventListener('input', () => validateInput(input3_01, [correctAnswer3_01], 'input03_01', false)); 
    input4_01.addEventListener('input', () => validateInput(input4_01, [correctAnswer4_01], 'input04_01', false));
    input4_02.addEventListener('input', () => validateInput(input4_02, [correctAnswer4_02], 'input04_02', false));
    input5_01.addEventListener('input', () => validateInput(input5_01, [correctAnswer5_01], 'input05_01', false)); 
    input6_01.addEventListener('input', () => validateInput(input6_01, [correctAnswer6_01], 'input06_01', false));

    restoreInput(input1_01, 'input01_01');
    restoreInput(input2_01, 'input02_01');
    restoreInput(input3_01, 'input03_01');
    restoreInput(input4_01, 'input04_01');
    restoreInput(input4_02, 'input04_02');
    restoreInput(input5_01, 'input05_01');
    restoreInput(input6_01, 'input06_01');
    restoreInput(input6_02, 'input06_02');
    restoreInput(input6_03, 'input06_03');
    restoreInput(input6_04, 'input06_04')
    ;

    function validateInput(inputElement, correctAnswers, key, isCaseInsensitive) {
        const userAnswer = inputElement.value.trim();
        let bgColor = '';

        const comparisonAnswers = isCaseInsensitive 
            ? correctAnswers.map(answer => answer.toLowerCase()) 
            : correctAnswers;

        const userAnswerToCompare = isCaseInsensitive 
            ? userAnswer.toLowerCase() 
            : userAnswer;

        if (userAnswer === '') {
            bgColor = '#8383be';
        } else if (comparisonAnswers.includes(userAnswerToCompare)) {
            bgColor = '#0e8a21'; 
            playCorrectAnswerSound();
        } else {
            bgColor = '#8a0e0e'; 
        }

        inputElement.style.backgroundColor = bgColor;
        inputElement.style.color = 'white';

        localStorage.setItem(`${key}-value`, userAnswer);
        localStorage.setItem(`${key}-bg`, bgColor);
        localStorage.setItem(`${key}-correct`, comparisonAnswers.includes(userAnswerToCompare));
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

    const correctSound = new Audio('../assets/sound/coin.mp3');
    correctSound.volume = 0.1;

    function playCorrectAnswerSound() {
        correctSound.play();
    }
});
