document.addEventListener('DOMContentLoaded', function () {

    // Tilføjer vores "correct" og vores ID fra vores .html
    const input = document.getElementById('user-input01');
    const input2 = document.getElementById('user-input02');
    const input3 = document.getElementById('user-input03');
    const correctAnswer01 = '<Integer>';
    const correctAnswer02= 'ArrayList <User> user = new ArrayList<>()';
    const correctAnswer02_02 = 'ArrayList <User> user = new ArrayList<User>()';
    const correctAnswer03 = 'ArrayList <Double> balance = new ArrayList<>()';
    const correctAnswer03_02 = 'ArrayList <Double> balance = new ArrayList<Double>()';

    // __________________________________________________________________
   
    // Prompt 1 - START
    input.addEventListener('input', function () {

        const userAnswer = input.value.trim();

        if (userAnswer === correctAnswer01) {
            input.style.backgroundColor = '#0e8a21'; 
            input.style.color = 'white';
        } else {
            input.style.backgroundColor = '#8a0e0e'; 
            input.style.color = 'white';
        }

        if (userAnswer === '') {
            input.style.backgroundColor = '#8383be'; 
            input.style.color = 'white';
        }

    });
    // Prompt 1 - END

    // __________________________________________________________________

    // Prompt 2 - START
    input2.addEventListener('input', function () {

        const userAnswer = input2.value.trim();

        if (userAnswer === correctAnswer02 || userAnswer === correctAnswer02_02) {
            input2.style.backgroundColor = '#0e8a21'; 
            input2.style.color = 'white';
        } else {
            input2.style.backgroundColor = '#8a0e0e'; 
            input2.style.color = 'white';
        }

        if (userAnswer === '') {
            input2.style.backgroundColor = '#8383be'; 
            input2.style.color = 'white';
        }

    });
    // Prompt 2 - END

    // __________________________________________________________________

    // Prompt 3 - START
    input3.addEventListener('input', function () {

        const userAnswer = input3.value.trim();

        if (userAnswer === correctAnswer03 || userAnswer === correctAnswer03_02) {
            input3.style.backgroundColor = '#0e8a21'; 
            input3.style.color = 'white';
        } else {
            input3.style.backgroundColor = '#8a0e0e'; 
            input3.style.color = 'white';
        }

        if (userAnswer === '') {
            input3.style.backgroundColor = '#8383be'; 
            input3.style.color = 'white';
        }

    });
    // Prompt 3 - END

    // __________________________________________________________________

    // Clears input if page reloaded
    window.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('input').forEach(input => input.value = '');
    });

});