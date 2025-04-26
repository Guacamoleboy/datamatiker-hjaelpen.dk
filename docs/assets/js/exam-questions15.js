document.addEventListener("DOMContentLoaded", () => {

    let lives = 3;

    const questions = [
        {
            progress: "1/6",
            title: "15 | Rekursion",
            question: "Hvad betyder rekursion?",
            options: [
                { text: "Oprettelse af metode", correct: false },
                { text: "Kald af metode", correct: false },
                { text: "Slettelse af metode", correct: false },
                { text: "Kald af sig selv repetitivt", correct: true }
            ]
        },
        {
            progress: "2/6",
            title: "15 | Rekursion",
            question: "Hvad sker der hvis vores metode som har rekursion i sig ikke har en exit?",
            options: [
                { text: "Infinite loop", correct: true },
                { text: "Den skipper metoden", correct: false },
                { text: "Den opretter selv en exit", correct: false },
                { text: "Den kører kun én gang", correct: false }
            ]
        },
        {
            progress: "3/6",
            title: "15 | Rekursion",
            question: "hvad er en base case i en rekursiv funktion?",
            options: [
                { text: "En funktion der stopper rekursionen", correct: true },
                { text: "En funktion der starter rekursionen", correct: false },
                { text: "En funktion der gemmer data", correct: false },
                { text: "En funktion der opretter nye variabler", correct: false }
            ]
        },
        {
            progress: "4/6",
            title: "15 | Rekursion",
            question: "Hvilken fejl får vi hvis vores rekursion ikke har en exit?",
            options: [
                { text: "IndexOutOfBounds", correct: false },
                { text: "Stack Overflow", correct: true },
                { text: "Ingen fejl", correct: false }
            ]
        },
        {
            progress: "5/6",
            title: "15 | Rekursion",
            question: "Hvad vil det sige hvis en rekursiv funktion er selvreferende?",
            options: [
                { text: "Den refererer til sig selv i sin definition", correct: true },
                { text: "Den starter altid fra 0", correct: false },
                { text: "Den gemmer værdier i en liste", correct: false },
                { text: "Den kalder sig selv uendeligt", correct: false }
            ]
        },
        {
            progress: "6/6",
            title: "15 | Rekursion",
            question: "Hvad er forskellen på en for-løkke og rekursion?",
            options: [
                { text: "En for-løkke bruger flere funktioner", correct: false },
                { text: "Rekursion kalder sig selv, mens en for-løkke gentager kode", correct: true },
                { text: "En for-løkke er altid langsommere", correct: false },
                { text: "Rekursion er altid hurtigere", correct: false }
            ]
        },  
        
    ];

    let currentQuestionIndex = 0;

    function renderQuestion(index) {
        const q = questions[index];
        const container = document.querySelector(".changelog-custom");
        const progress = `<h4 class="h4-background col-lg-4 mx-auto mb-5">${q.progress}</h4>`;

        const question = `
            <blockquote class="generic-blockquote">${q.question}</blockquote>
            ${q.options.map(option => `<button>${option.text}</button>`).join("")}
        `;

        container.innerHTML = progress + document.getElementById("visual-lives").outerHTML + question;

        const existingVisualLives = document.getElementById("visual-lives");
        const newVisualLives = container.querySelector("#visual-lives");
        existingVisualLives.replaceWith(newVisualLives);           
        
        const buttons = container.querySelectorAll("button");
        buttons.forEach((button, idx) => {
            button.addEventListener("click", () => {
                if (q.options[idx].correct) {
                    currentQuestionIndex++;
                    if (currentQuestionIndex < questions.length) {
                        renderQuestion(currentQuestionIndex);
                    } else {
                        container.innerHTML = `
                            <h4 class="h4-background col-lg-4 mx-auto mb-5">Yay</h4>
                            <blockquote class="generic-blockquote">Tillykke! Du har bestået testen!</blockquote>
                            <div class="text-center mt-4">
                                <button id="completed-btn" class="btn btn-primary w-auto">Tilbage til læringsmål</button>
                            </div>
                        `;
                    }

                    const completedBtn = document.getElementById("completed-btn");
                    
                    if (completedBtn) {
                        completedBtn.addEventListener("click", () => {
                            window.location.href = "overblik.html";
                        });
                    }

                } else {
                    lives--;
                    button.style.backgroundColor = "#c0392b";
                    button.style.color = "white";

                    if (lives === 0) {
                        const lastStar = document.querySelector("#star2 .star-img");
                        const astronaut = document.getElementById("astronaut");
                    
                        lastStar.classList.add("vanish");
                    
                        
                        setTimeout(() => {
                            astronaut.classList.remove("drop", "dropped");
                            void astronaut.offsetWidth;
                            astronaut.classList.add("drop");
                        }, 300);
                    
                        
                        setTimeout(() => {

                        const visualLives = document.getElementById("visual-lives").cloneNode(true);

                        const clonedAstronaut = visualLives.querySelector("#astronaut");

                        if (clonedAstronaut) {
                        clonedAstronaut.classList.remove("drop");
                        clonedAstronaut.classList.add("dropped");
                        }

                        
                            container.innerHTML = `
                                <h4 class="h4-background col-lg-4 mx-auto mb-5">Øv!</h4>
                                <blockquote class="generic-blockquote">Du har brugt alle dine liv.</blockquote>
                                <div class="text-center mt-4">
                                    <button id="retry-btn" class="btn btn-primary w-auto">Prøv igen</button>
                                </div>
                            `;
                        
                            container.insertBefore(visualLives, container.querySelector("blockquote"));
                        
                            document.getElementById("retry-btn").addEventListener("click", () => {
                                lives = 3;
                                currentQuestionIndex = 0;
                            
                                const astronaut = document.getElementById("astronaut");
                                astronaut.classList.remove("drop", "dropped");
                            
                                document.querySelectorAll(".star-img").forEach(img => img.classList.remove("vanish"));
                            
                                renderQuestion(currentQuestionIndex);
                            });

                        }, 1500);
                        

                    } else {
                        
                        const starMap = {
                            2: "#star1 .star-img", 
                            1: "#star3 .star-img", 
                            0: "#star2 .star-img" 
                        };
                        
                        const starToPop = document.querySelector(starMap[lives]);
                        if (starToPop) starToPop.classList.add("vanish");
                    }
                    

                }
            });
        });
    }

    
    renderQuestion(currentQuestionIndex);
});