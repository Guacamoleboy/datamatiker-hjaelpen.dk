<!DOCTYPE html>

<!-- 

    Website By Andreas, Ebou & Jonas.
    Datamatiker elever Vinter 2025
    
    Sidst opdateret:
    19-04-2025
    
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

<body class="dark-mode" style="overflow: hidden;">
    <!-- Preloader Starts -->
    <div class="preloader">
        <div class="spinner"></div>
    </div>
    <!-- Preloader End -->

    <!-- Darkmode button -->
    <button id="darkModeToggle" class="darkmode-btn-floating" title="Skift tema">☀️</button>

        <!-- Register Area Starts -->
        <div class="deshes-area section-padding h-100" id="register01">

            <div class="container">

                <div class="row justify-content-center">
                    <div class="col-md-6 col-lg-5">
                        <div class="section-top2 text-center">

                            <h3>Opret en <span>bruger </span> herunder</h3>
                            <p class="mt-4"><i>Det er gratis og giver dig mulighed for at tracke din data!</i></p>

                            <div class="single-element-widget mt-5 p-4 shadow rounded bg-white">

                                <!-- Register START -->

                                <div class="login-form">
                                    <form action="register-backend.php" method="POST" class="login-form">
                                        <input type="text" class="form-control my-3" name="username" placeholder="Brugernavn" required>
                                        <input type="password" class="form-control my-3" name="password" placeholder="Adgangskode" required>
                                        <input type="password" class="form-control my-3" name="confirm_password" placeholder="Skriv adgangskode igen" required>
                                        <input type="email" class="form-control my-3" name="email" placeholder="Email" required>
                                        <a href="#register02">
                                            <button type="submit" class="btn btn-primary w-auto">Næste</button>
                                        </a>
                                        <div class="mt-3 text-center a-color-change">
                                            <a href="index.html" class="btn btn-link">Tilbage til forsiden</a>
                                        </div>
                                    </form>
                                </div>

                                <!-- Register END -->

                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </div>
        <!-- Register Area End -->
         
        <!-- Register 02 Area Starts -->
        <div class="deshes-area section-padding h-100" id="register02">

        <div class="container">

            <div class="row justify-content-center">
                <div class="col-md-6 col-lg-5">
                    <div class="section-top2 text-center">

                        <h3>Tilføj lidt... <b>guf</b> !</h3>
                        <p class="mt-4"><i>Yessirsi</i></p>

                        <div class="single-element-widget mt-5 p-4 shadow rounded bg-white">

                            <!-- Register 02 START -->

                            <div class="login-form">
                                
                                    <div class="form-group mb-4">

                                        <label for="photoUpload" class="btn button-cool w-auto" style="background-color: #8484d1; border-radius: 15px">
                                            Vælg billede
                                        </label>

                                        <input type="file" id="photoUpload" accept="image/*" class="d-none">

                                        <div class="mt-3">
                                            <img id="previewImage" src="assets/images/placeholder1.png" alt="Preview" style="max-width: 100%;" class="img-fluid rounded shadow">
                                        </div>

                                    </div>

                                    <a href="#register01">
                                        <button type="submit" class="btn btn-primary w-auto">Tilbage</button>
                                    </a>

                                    <a href="#register03">
                                        <button type="submit" class="btn btn-primary w-auto">Næste</button>
                                    </a>
                               
                            </div>

                            <!-- Register 02 END -->

                        </div>

                    </div>
                </div>
            </div>

        </div>

        </div>
        <!-- Register 02 Area End -->

        <!-- Register 03 Area Starts -->
        <div class="deshes-area section-padding h-100" id="register03">

        <div class="container">

            <div class="row justify-content-center">
                <div class="col-md-6 col-lg-5">
                    <div class="section-top2 text-center">

                        <h3>Check lige den <b>profil</b> !</h3>
                        <p class="mt-4"><i>Waoooow siger vi bare...</i></p>

                        <div class="single-element-widget mt-5 p-4 shadow rounded bg-white">

                            <!-- Register 03 START -->

                            <div class="login-form">
                                
                                    <div class="form-group mb-4">

                                        <div class="mt-3">
                                            <img id="previewImage" src="assets/images/astronaut_original.jpg" alt="Preview"
                                            style="max-width: 100%; width: 200px; height: 200px; object-fit: cover;"
                                            class="img-fluid rounded-circle shadow">
                                        </div>

                                        <label class="btn button-cool w-auto mt-4" style="background-color:rgb(202, 172, 40); border-radius: 15px; color: #fff; cursor: default;">
                                            Brugernavn her
                                        </label>

                                    </div>

                                    <a href="#register02">
                                        <button type="submit" class="btn btn-primary w-auto mr-3">Tilbage</button>
                                    </a>

                                    <a href="#register03">
                                        <button type="submit" class="btn btn-primary w-auto">Opret konto</button>
                                    </a>
                               
                            </div>

                            <!-- Register 03 END -->

                        </div>

                    </div>
                </div>
            </div>

        </div>

        </div>
        <!-- Register 03 Area End -->


    <!-- Javascript -->
    
    <script src="assets/js/vendor/jquery-2.2.4.min.js"></script>
    <script src="assets/js/learning-example.js"></script>
    <script src="assets/js/bubble-spawn.js"></script>
    <script src="assets/js/exam-questions.js"></script>
    <script src="assets/js/learning-example-visuals.js"></script>
    <script src="assets/js/darkmode.js"></script>
    <script src="assets/js/vendor/bootstrap-4.1.3.min.js"></script>
    <script src="assets/js/vendor/wow.min.js"></script>
    <script src="assets/js/vendor/owl-carousel.min.js"></script>
    <script src="assets/js/vendor/jquery.datetimepicker.full.min.js"></script>
    <script src="assets/js/vendor/jquery.nice-select.min.js"></script>
    <script src="assets/js/main.js"></script>
    <script src="assets/js/register-photo.js"></script>

</body>

</html>