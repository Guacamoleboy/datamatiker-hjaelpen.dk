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

    const buttonInputs = [input6_01, input6_02, input6_03, input6_04];
    const correctButtonId = '01-user-input06_02';

    buttonInputs.forEach(button => {
        button.addEventListener('click', () => {
            const isCorrect = button.id === correctButtonId;

            if (isCorrect) {
                button.style.backgroundColor = '#0e8a21';
                button.style.color = 'white';
                playCorrectAnswerSound();
                buttonInputs.forEach(btn => btn.disabled = true);
            } else {
                button.style.backgroundColor = '#8a0e0e';
                button.style.color = 'white';
                setTimeout(() => {
                    button.style.backgroundColor = '';
                    button.style.color = '';
                }, 1000);
            }

            localStorage.setItem('01-input07', button.id);
            localStorage.setItem('01-input07-correct', isCorrect);
        });

        const savedId = localStorage.getItem('01-input07');
        const wasCorrect = localStorage.getItem('01-input07-correct') === 'true';

        if (savedId && button.id === savedId) {
            button.style.backgroundColor = wasCorrect ? '#0e8a21' : '#8a0e0e';
            button.style.color = 'white';
            if (wasCorrect) {
                buttonInputs.forEach(btn => btn.disabled = true);
            }
        }
    });

    const correctAnswer1_01 = 'Bank';
    const correctAnswer2_01 = 'Food food = new Food()';
    const correctAnswer3_01 = 'Food food = new Food(5, "Bananer", "Congo")';
    const correctAnswer4_01 = 'public';
    const correctAnswer4_02 = 'public';
    const correctAnswer5_01 = 'Nej';
    const correctAnswer6_01 = 'Ja';

    input1_01.addEventListener('input', () => validateInput(input1_01, [correctAnswer1_01], 'input01', false));
    input2_01.addEventListener('input', () => validateInput(input2_01, [correctAnswer2_01], 'input02', false));
    input3_01.addEventListener('input', () => validateInput(input3_01, [correctAnswer3_01], 'input03', false));
    input4_01.addEventListener('input', () => validateInput(input4_01, [correctAnswer4_01], 'input04', false));
    input4_02.addEventListener('input', () => validateInput(input4_02, [correctAnswer4_02], 'input05', false));
    input5_01.addEventListener('input', () => validateInput(input5_01, [correctAnswer5_01], 'input06', false));
    input6_01.addEventListener('input', () => validateInput(input6_01, [correctAnswer6_01], 'input08', false));

    restoreInput(input1_01, 'input01');
    restoreInput(input2_01, 'input02');
    restoreInput(input3_01, 'input03');
    restoreInput(input4_01, 'input04');
    restoreInput(input4_02, 'input05');
    restoreInput(input5_01, 'input06');
    restoreInput(input6_01, 'input08');
    restoreInput(input6_02, 'input07');
    restoreInput(input6_03, 'input07');
    restoreInput(input6_04, 'input07');

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

        localStorage.setItem(`01-${key}-value`, userAnswer);
        localStorage.setItem(`01-${key}-bg`, bgColor);
        localStorage.setItem(`01-${key}-correct`, comparisonAnswers.includes(userAnswerToCompare));
    }

    function restoreInput(inputElement, key) {
        const savedValue = localStorage.getItem(`01-${key}-value`);
        const savedBg = localStorage.getItem(`01-${key}-bg`);

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