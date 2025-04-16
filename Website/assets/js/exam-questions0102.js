document.addEventListener("DOMContentLoaded", () => {


        let lives = 3;
    
        const questions = [
            {
                progress: "1/10",
                title: "02 | ArrayList",
                question: "En ArrayList er det samme som en Array..",
                options: [
                    { text: "Ja", correct: false },
                    { text: "Nej", correct: true }
                ]
            },
            {
                progress: "2/10",
                title: "02 | ArrayList",
                question: "Er følgende ArrayList <b>instantieret</b> korrekt?<br><br><b>ArrayList &lt;string&gt; users = new ArrayList&lt;String&gt;()</b>",
                options: [
                    { text: "Ja", correct: false },
                    { text: "Nej", correct: true }
                ]
            },
            {
                progress: "3/10",
                title: "02 | ArrayList",
                question: "Vi har en ArrayList som er defineret på følgende måde<br><br><b>ArrayList &lt;String&gt; users = new ArrayList&lt;&gt;()</b><br><br>Hvis vi ønsker at <b>tilføje en String til denne, hvad er så den korrekte måde?",
                options: [
                    { text: "users.add(name)", correct: false },
                    { text: "add.users(name)", correct: false },
                    { text: "add.users(&quot;name&quot;)", correct: false },
                    { text: "users.add(&quot;name&quot;)", correct: true }
                ]
            },
            {
                progress: "4/10",
                title: "02 | ArrayList",
                question: "Vi har en ArrayList som skal holde nogle værdier af datatypen int. <br><br>Hvordan <b>instantieres</b> den?",
                options: [
                    { text: "ArrayList &lt;int&gt; age = new ArrayList&lt;&gt;()", correct: false },
                    { text: "ArrayList &lt;&quot;int&quot;&gt; age = new ArrayList&lt;&gt;()", correct: false },
                    { text: "ArrayList &lt;Integer&gt; age = new ArrayList&lt;&gt;()", correct: true },
                    { text: "Den kan kun holde String og Objekter", correct: false }
                ]
            },
            {
                progress: "5/10",
                title: "02 | ArrayList",
                question: "Vi har en ArrayList som holder Strings. Vi vil gerne have værdien for plads nr <b>4</b>. Er følgende korrekt?<br><br><b>ArrayList &lt;String&gt; name = new ArrayList&lt;&gt;()<br><br>System.out.println(name.get(4))",
                options: [
                    { text: "Ja", correct: false },
                    { text: "Nej", correct: true }
                ]
            },
            {
                progress: "6/10",
                title: "02 | ArrayList",
                question: "Kan man lave en int om så den kan lagres i en ArrayList af typen String?<br><br><b>int age = 26<br><br>ArrayList &lt;String&gt; ages = new ArrayList&lt;&gt;()",
                options: [
                    { text: "Nej - Man kan ikke lave int om til String", correct: false },
                    { text: "Ja, med en toString metode", correct: true },
                    { text: "Den er instantieret forkert", correct: false },
                    { text: "Du skal bruge en Array fremfor en ArrayList", correct: false }
                ]
            },
            {
                progress: "7/10",
                title: "02 | ArrayList",
                question: "Kan en ArrayList være private?..",
                options: [
                    { text: "Ja, selvfølgelig", correct: true },
                    { text: "Nej", correct: false }
                ]
            },
            {
                progress: "8/10",
                title: "02 | ArrayList",
                question: "Vi har et spil som accepterer op til 6 spillere. Hvad ville være <b>bedst</b> at gemme deres data i?",
                options: [
                    { text: "En ArrayList", correct: true },
                    { text: "En Array", correct: false }
                ]
            },
            {
                progress: "9/10",
                title: "02 | ArrayList",
                question: "En ArrayLists størrelse defineres på hvilken måde?<br><br><b>ArrayList &lt;User&gt; user = new ArrayList&lt;&gt;()</b>",
                options: [
                    { text: "user.length", correct: false },
                    { text: "size.user()", correct: false },
                    { text: "user.size()", correct: true },
                    { text: "length.user()", correct: false }
                ]
            },
            {
                progress: "10/10",
                title: "02 | ArrayList",
                question: "Hvad sker der med vores ArrayList hvis vi fjerner vores navn på plads nummer 6?<br><br>Vores ArrayList har <b>10</b> navne.",
                options: [
                    { text: "De andre navne beholder samme plads, og den fjernede plads er bare tom", correct: false },
                    { text: "Vores navne fra 7-10 rykker sig én plads ned", correct: true },
                    { text: "Vores ArrayList har stadig 10 pladser, men den fjernede er bare &quot;null&quot;", correct: false },
                    { text: "Man kan ikke fjerne indhold i en ArrayList", correct: false }
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
