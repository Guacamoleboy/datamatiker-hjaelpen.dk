document.addEventListener("DOMContentLoaded", () => {

    let lives = 3;

    const questions = [
        {
            progress: "1/10",
            title: "03 | Array",
            question: "Hvis vi vil hente værdien på plads <b>nummer 1</b>..<br><br>Hvad skal vi så vælge?",
            options: [
                { text: "Plads 1", correct: false },
                { text: "Plads 0", correct: true }
            ]
        },
        {
            progress: "2/10",
            title: "03 | Array",
            question: "Kan vores Array holde både String og ints på samme tid?",
            options: [
                { text: "Ja", correct: false },
                { text: "Nej", correct: true }
            ]
        },
        {
            progress: "3/10",
            title: "03 | Array",
            question: "Hvis vi ønsker at finde længden af vores Array - hvad skal vi så skrive?<br><br>String[] cats = {&qt;Sidney&qt;, &qt;Freja&qt;, &qt;Gambler&qt;}",
            options: [
                { text: "cats.length", correct: true },
                { text: "getLength(cats)", correct: false },
                { text: "total(cats)", correct: false },
                { text: "cats.size()", correct: false }
            ]
        },
        {
            progress: "4/10",
            title: "03 | Array",
            question: "Hvordan tilføjer vi til vores Array?",
            options: [
                { text: "Bruger add()", correct: true },
                { text: "Bruger set()", correct: false },
                { text: "Bruger index(int, E)", correct: false },
                { text: "Tilføjer under instantieringen", correct: false }
            ]
        },
        {
            progress: "5/10",
            title: "03 | Array",
            question: "Kan vores Array holde objekter som fx en instantering af en klasse?",
            options: [
                { text: "Ja", correct: true },
                { text: "Nej", correct: false }
            ]
        },
        {
            progress: "6/10",
            title: "03 | Array",
            question: "Hvis vi instantierer en int[4] men ikke giver den noget indhold..<br><br>Hvad får vi så hvis vi prøver at hente værdien på plads 1?",
            options: [
                { text: "4", correct: false },
                { text: "Kan man ikke", correct: false },
                { text: "0", correct: true },
                { text: "1", correct: false }
            ]
        },
        {
            progress: "7/10",
            title: "03 | Array",
            question: "Hvis vores Array har længden 9.. altså String[9]<br>Hvad sker der hvis vi printer følgende<br><br>System.out.println(array[9])",
            options: [
                { text: "Intet. Programmet lukker bare..", correct: false },
                { text: "Den printer plads 9", correct: false },
                { text: "Den kaster en exception", correct: true },
                { text: "Den printer sidste plads  i vores list", correct: false }
            ]
        },
        {
            progress: "8/10",
            title: "03 | Array",
            question: "Er følgende instantiering korrekt?<br><br>int[][] board = new int[2][8]",
            options: [
                { text: "Ja", correct: true },
                { text: "Nej", correct: false }
            ]
        },
        {
            progress: "9/10",
            title: "03 | Array",
            question: "Hvilken utility klasse bruger vi til Arrays i Java?",
            options: [
                { text: "java.util.ArrayList", correct: false },
                { text: "java.util.Array", correct: false },
                { text: "java.util.Arrays", correct: true },
                { text: "java.util.Lists", correct: false }
            ]
        },
        {
            progress: "10/10",
            title: "03 | Array",
            question: "Vi har lavet et for-loop som kører indtil array.length er equal til i..<br><br>Hvordan printer vi alle værdierne i vores liste?",
            options: [
                { text: "System.out.println(get[array.length])", correct: false },
                { text: "System.out.println([i])", correct: false },
                { text: "System.out.println(array[i])", correct: true },
                { text: "System.out.println(array.size())", correct: false }
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