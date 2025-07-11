<!DOCTYPE html>

<!-- 

    Website By Jonas.
    Datamatiker elev Vinter 2025
    
    Sidst opdateret:
    25-04-2025
    
    Af: Jonas

-->

<html lang="en">

<head>
   
    <!-- Required Meta Tags -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <!-- Page Title -->
    <title>Datamatiker-hjaelpen.dk</title> 

    <!-- Favicon -->
    <link rel="shortcut icon" href="assets/images/image1.png" type="image/x-icon">

    <!-- CSS Files -->
    <link rel="stylesheet" href="assets/css/animate-3.7.0.css">
    <link rel="stylesheet" href="assets/css/font-awesome-4.7.0.min.css">
    <link rel="stylesheet" href="assets/css/bootstrap-4.1.3.min.css">
    <link rel="stylesheet" href="assets/css/owl-carousel.min.css">
    <link rel="stylesheet" href="assets/css/jquery.datetimepicker.min.css">
    <link rel="stylesheet" href="assets/css/style.css">
</head>

<body class="dark-mode">
    <!-- Preloader Starts -->
    <div class="preloader">
        <div class="spinner"></div>
    </div>
    <!-- Preloader End -->

    <!-- Custom Cursor START --> 
    <div class="cursor" id="customCursor"></div>

    <script>
        const cursor = document.getElementById('customCursor');
    
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
        if (!isTouchDevice) {
            cursor.style.display = 'block';
    
            document.addEventListener('mousemove', (e) => {
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';
    
                const target = e.target;
                if (['A', 'BUTTON', 'UL', 'LI'].includes(target.tagName)) {
                    cursor.classList.add('hover');
                } else {
                    cursor.classList.remove('hover');
                }
            });
    
            window.addEventListener('mouseout', (e) => {
                if (!e.relatedTarget && !e.toElement) {
                    cursor.style.opacity = '0';
                }
            });
    
            window.addEventListener('mouseover', (e) => {
                cursor.style.opacity = '1';
            });
    
            window.addEventListener('blur', () => {
                cursor.style.opacity = '0';
            });
    
            window.addEventListener('focus', () => {
                cursor.style.opacity = '1';
            });
    
        } else {
            cursor.style.display = 'none';
        }
    </script>
    <!-- Custom Cursor END -->

    <!-- Darkmode button -->
    <button id="darkModeToggle" class="darkmode-btn-floating" title="Skift tema">☀️</button>

        <!-- Login Area Starts -->
        <div class="deshes-area section-padding">

            <div class="container">

                <div class="row justify-content-center">
                    <div class="col-md-6 col-lg-5">
                        <div class="section-top2 text-center">

                            <h3>Venligst <span>log ind</span> herunder</h3>
                            <p class="mt-4"><i>Har du ingen bruger, så opretter du bare en!</i></p>

                            <div class="single-element-widget mt-5 p-4 shadow rounded bg-white">

                                <!-- Login START -->

                                <div class="login-form">
                                    <input type="text" class="form-control my-3" placeholder="Brugernavn" required>
                                    <input type="password" class="form-control my-3" placeholder="Adgangskode" required>

                                    <button id="completed-btn" class="btn btn-primary w-auto">Log ind</button>
                                    <button id="completed-btn" class="btn btn-primary-2 ml-3 w-auto">Glemt noget?</button>

                                    <div class="mt-3 text-center a-color-change">
                                        <a href="index.html" class="btn btn-link">Tilbage til forsiden</a>
                                    </div>
                                </div>

                                <!-- Login END -->

                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </div>
        <!-- Login Area End -->


    <!-- Javascript -->
    <script src="assets/js/vendor/jquery-2.2.4.min.js"></script>
    <script src="assets/js/bubble-spawn.js"></script>
    <script src="assets/js/learning-example.js"></script>
    <script src="assets/js/exam-questions.js"></script>
    <script src="assets/js/learning-example-visuals.js"></script>
    <script src="assets/js/darkmode.js"></script>
    <script src="assets/js/vendor/bootstrap-4.1.3.min.js"></script>
    <script src="assets/js/vendor/wow.min.js"></script>
    <script src="assets/js/vendor/owl-carousel.min.js"></script>
    <script src="assets/js/vendor/jquery.datetimepicker.full.min.js"></script>
    <script src="assets/js/vendor/jquery.nice-select.min.js"></script>
    <script src="assets/js/main.js"></script>
</body>

</html>