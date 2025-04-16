document.addEventListener('DOMContentLoaded', function () {

    // Tilføjer vores "correct" og vores ID fra vores .html
    const input = document.getElementById('user-input01');
    const input2 = document.getElementById('user-input02');
    const correctAnswer01 = '<Integer>';
    const correctAnswer02= 'ArrayList <User> user = new ArrayList<>()';
    const correctAnswer02_02= 'ArrayList <User> user = new ArrayList<User>()';

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

    // Clears input if page reloaded
    window.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('input').forEach(input => input.value = '');
    });

});