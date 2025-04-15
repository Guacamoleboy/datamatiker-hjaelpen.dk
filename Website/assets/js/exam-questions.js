document.addEventListener("DOMContentLoaded", () => {


        let lives = 3;
    
        const questions = [
            {
                progress: "1/10",
                title: "01 | Objekter",
                question: "Vi har lavet en <b>FileIO.java</b> klasse som vi nu ønsker at <b>instantiere</b>. Hvordan gør vi det?",
                options: [
                    { text: "io FileIO = FileIO new();", correct: false },
                    { text: "new FileIO = io FileIO();", correct: false },
                    { text: "FileIO io = new FileIO();", correct: true },
                    { text: "io.FileIO();", correct: false }
                ]
            },
            {
                progress: "2/10",
                title: "01 | Objekter",
                question: "Jeg har lavet en attribut som er <b>String navn =  'Jonas';</b>. <br>Hvad vil <b>outputtet</b> være hvis jeg kalder den i en <b>System.out.println(navn);</b> ?  ",
                options: [
                    { text: "Jonas", correct: true },
                    { text: "Intet output", correct: false },
                    { text: "Du mangler en toString() metode", correct: false },
                    { text: "98101", correct: false }
                ]
            },
            {
                progress: "3/10",
                title: "01 | Objekter",
                question: "Hvad er en <b>attribut</b>?",
                options: [
                    { text: "En metode", correct: false },
                    { text: "En variabel", correct: true },
                    { text: "En funktion", correct: false },
                    { text: "En klasse", correct: false }
                ]
            },
            {
                progress: "4/10",
                title: "01 | Objekter",
                question: "<b>Hvorfor</b> laver vi <b>gettere</b>?",
                options: [
                    { text: "Fordi vores public attributter skal returneres", correct: false },
                    { text: "Fordi vores private klasser skal returneres", correct: false },
                    { text: "Fordi ellers fungerer programmet ikke", correct: false },
                    { text: "Fordi vores attributter er private", correct: true }
                ]
            },
            {
                progress: "5/10",
                title: "01 | Objekter",
                question: "<b>Hvilken</b> af disse er en <b>setter</b>",
                options: [
                    { text: "public String setName() {}", correct: false },
                    { text: "private void setName(int name) {}", correct: false },
                    { text: "setName() {}", correct: false },
                    { text: "public void setName() {}", correct: true }
                ]
            },
            {
                progress: "6/10",
                title: "01 | Objekter",
                question: "Hvilke af disse er korrekte <b>access modifiers</b>?",
                options: [
                    { text: "public, promote, private", correct: false },
                    { text: "protected, remote, public", correct: false },
                    { text: "public, protected, private", correct: true },
                    { text: "private, protected, set", correct: false }
                ]
            },
            {
                progress: "7/10",
                title: "01 | Objekter",
                question: "I denne kode.. Hvilken er så objektet?<br><b>private static final User user;</b>",
                options: [
                    { text: "private", correct: false },
                    { text: "static", correct: false },
                    { text: "user", correct: false },
                    { text: "User", correct: true }
                ]
            },
            {
                progress: "8/10",
                title: "01 | Objekter",
                question: "Hvis vi instantierer et objekt <b>Dice dice = new Dice()</b> og printer dice resultatet i en TextUI instantieret som <b>ui</b> med metoden displayMsg(String msg).. Hvad sker der så?<br><br>Vi har ingen toString metoder!<br><br><b>ui.displayMsg(dice.getSum());</b>",
                options: [
                    { text: "Den printer værdien af summen", correct: false },
                    { text: "Den printer resultatet af 2 terninger", correct: false },
                    { text: "Dice mangler en toString metode, så vi printer HashCode", correct: true },
                    { text: "Vi har instantieret den forkert, så der sker ikke noget", correct: false }
                ]
            },
            {
                progress: "9/10",
                title: "01 | Objekter",
                question: "Hvilken af disse er en <b>korrekt klasse</b>?",
                options: [
                    { text: "User.java", correct: true },
                    { text: "userData.java", correct: false },
                    { text: "DataFor_user_9.java", correct: false },
                    { text: "Ingen af dem", correct: false }
                ]
            },
            {
                progress: "10/10",
                title: "01 | Objekter",
                question: "Hvad sker der hvis jeg prøver at kalde denne i en <b>System.out.println();</b> ?<br><br><b>string username = 'Janus_666'</b>",
                options: [
                    { text: "Den skriver 'Janus_666'", correct: false },
                    { text: "Der mangler en toString() metode", correct: false },
                    { text: "Det ville ikke fungere", correct: true },
                    { text: "Den er ikke public", correct: false }
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
                        
                            // Trigger drop after short delay
                            setTimeout(() => {
                                astronaut.classList.remove("drop", "dropped"); // remove any existing drop state
                                void astronaut.offsetWidth; // 💡 forces reflow to re-trigger animation
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
