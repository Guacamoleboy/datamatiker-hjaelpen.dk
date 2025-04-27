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

    <!-- Navbar load  -->
    <script src="assets/js/navbar3.js" defer></script>

    <!-- Footer load  -->
    <script src="assets/js/footer.js" defer></script>

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

        // Detect if it's a touch device
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

        if (!isTouchDevice) {
            cursor.style.display = 'block';

            document.addEventListener('mousemove', (e) => {
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';

                const target = e.target;
                if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.tagName === 'UL' || target.tagName === 'LI') {
                    cursor.classList.add('hover');
                } else {
                    cursor.classList.remove('hover');
                }
            });
        } else {
            cursor.style.display = 'none';
        }
    </script>
    <!-- Custom Cursor END -->

    <!-- Darkmode button -->
    <button id="darkModeToggle" class="darkmode-btn-floating" title="Skift tema">☀️</button>

    <!-- Banner Area Starts -->
    <section class="banner-area banner-area2 text-center">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h1><i><b>Skriv</b> til os</i></h1>
                    <p class="pt-2"><i>Kontakt</i></p>
                </div>
            </div>
        </div>

        <!-- Wavy transfer Start -->

        <div class="wave-bottom">
            <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M0,50 Q90,0 180,50 T360,50 T540,50 T720,50 T900,50 T1080,50 T1260,50 T1440,50 L1440,100 L0,100 Z"/>
            </svg>
        </div>

        <!-- Wavy transfer end -->
         
    </section>
    <!-- Banner Area End -->

    <!-- Contact Form Starts -->
    <section class="contact-form section-padding3" style="margin-top: 200px;">

        <div class="container">
            <div class="row">
                <div class="col-lg-3 mb-5 mb-lg-0">
                    
                <div class="people-overlay">
                    <img src="assets/images/people/person1.png" class="person person-1" alt="Person 1">
                    <img src="assets/images/people/person2.png" class="person person-2" alt="Person 2">
                </div>
                    
                    <div class="d-flex">
                        <div class="into-icon">
                            <i class="fa fa-home"></i>
                        </div>
                        <div class="info-text">
                            <h5><b class="b-white">Kongens Lyngby</b></h5>
                            <p>Firskovvej 18, 2800</p>
                        </div>
                    </div>
                    <div class="d-flex">
                        <div class="into-icon">
                            <i class="fa fa-phone"></i>
                        </div>
                        <div class="info-text">
                            <h5><b class="b-white">+45 00 00 00 00</b></h5>
                            <p>Mandag til Fredag 10-15</p>
                        </div>
                    </div>
                    <div class="d-flex">
                        <div class="into-icon">
                            <i class="fa fa-envelope-o"></i>
                        </div>
                        <div class="info-text">
                            <h5><b class="b-white">hej@datamatiker-hjaelpen.dk</b></h5>
                            <p>Spørgsmål? Fyr løs</p>
                        </div>
                    </div>

                </div>

                <div class="col-lg-9 contact-visuals">
                    <form action="#">
                        <div class="left">
                            <input type="text" placeholder="Navn" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'" required>
                            <input type="email" placeholder="email@domain.com" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" required>
                            <input type="text" placeholder="Emne" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter subject'" required>
                        </div>
                        <div class="right">
                            <textarea name="message" cols="20" rows="7" placeholder="Skriv en besked" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Message'" required></textarea>
                        </div>
                        <button type="submit" class="template-btn">Send Besked</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <!-- Contact Form End -->

    <!-- Javascript -->
    <script src="assets/js/vendor/jquery-2.2.4.min.js"></script>
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