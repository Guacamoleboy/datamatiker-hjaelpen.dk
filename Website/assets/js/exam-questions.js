document.addEventListener("DOMContentLoaded", () => {
        const questions = [
            {
                progress: "1/5",
                title: "01 | Objekter",
                question: "Vi har lavet en FileIO.java klasse som vi nu ønsker at instantiere. Hvordan gør vi det?",
                options: [
                    { text: "io FileIO = FileIO new();", correct: false },
                    { text: "new FileIO = io FileIO();", correct: false },
                    { text: "FileIO io = new FileIO();", correct: true },
                    { text: "io.FileIO();", correct: false }
                ]
            },
            {
                progress: "2/5",
                title: "02 | Text",
                question: "Text update her lol",
                options: [
                    { text: "Spørgsmål 1", correct: false },
                    { text: "Spørgsmål 2", correct: false },
                    { text: "Spørgsmål 3", correct: true },
                    { text: "Spørgsmål 4", correct: false }
                ]
            },
            {
                progress: "3/5",
                title: "03 | Text",
                question: "Text update her lol",
                options: [
                    { text: "Spørgsmål 1", correct: false },
                    { text: "Spørgsmål 2", correct: false },
                    { text: "Spørgsmål 3", correct: true },
                    { text: "Spørgsmål 4", correct: false }
                ]
            },
            {
                progress: "4/5",
                title: "04 | Text",
                question: "Text update her lol",
                options: [
                    { text: "Spørgsmål 1", correct: false },
                    { text: "Spørgsmål 2", correct: false },
                    { text: "Spørgsmål 3", correct: true },
                    { text: "Spørgsmål 4", correct: false }
                ]
            },
            {
                progress: "5/5",
                title: "05 | Text",
                question: "Text update her lol",
                options: [
                    { text: "Spørgsmål 1", correct: false },
                    { text: "Spørgsmål 2", correct: false },
                    { text: "Spørgsmål 3", correct: true },
                    { text: "Spørgsmål 4", correct: false }
                ]
            },
            
        ];

        let currentQuestionIndex = 0;

        function renderQuestion(index) {
            const q = questions[index];
            const container = document.querySelector(".changelog-custom");
            container.innerHTML = `
                <h4 class="h4-background col-lg-4 mx-auto mb-5">${q.progress}</h4>
                <blockquote class="generic-blockquote">${q.question}</blockquote>
                ${q.options.map(option => `<button>${option.text}</button>`).join("")}
            `;

            
            const buttons = container.querySelectorAll("button");
            buttons.forEach((button, idx) => {
                button.addEventListener("click", () => {
                    if (q.options[idx].correct) {
                        currentQuestionIndex++;
                        if (currentQuestionIndex < questions.length) {
                            renderQuestion(currentQuestionIndex);
                        } else {
                            container.innerHTML = `
                                <h4 class="h4-background col-lg-4 mx-auto mb-5">5/5</h4>
                                <blockquote class="generic-blockquote">Tillykke! Du har bestået testen!</blockquote>
                            `;
                        }
                    } else {
                        button.style.backgroundColor = "#c0392b";
                        button.style.color = "white";
                    }
                });
            });
        }

        
        renderQuestion(currentQuestionIndex);
});
