// Sikrer at alle footers er de samme på alle sites

const footerHTML = `
<!-- Footer Area Starts -->
    <footer class="footer-area">
        <div class="footer-widget section-padding">
            <div class="container">
                <div class="row justify-content-center text-center">
                    <div class="col-md-4">
                        <div class="single-widget single-widget1">
                            <a href="index.html"><img src="../assets/images/logo/logo2-orange.png" alt=""></a>
                            <p class="mt-3"><b>Datamatiker-hjaelpen - Din vej til et godt studie!</b></p>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="single-widget single-widget2 my-5 my-md-0">
                            <h5 class="mb-4">Kontakt os</h5>
                            <div class="d-flex justify-content-center text-center">
                                <div class="into-icon">
                                    <i class="fa fa-map-marker"></i>
                                </div>
                                <div class="info-text">
                                    <p><b>Firskovvej 18, 2800 Kongens Lyngby</b></p>
                                </div>
                            </div>
                            <div class="d-flex justify-content-center text-center">
                                <div class="into-icon">
                                    <i class="fa fa-phone"></i>
                                </div>
                                <div class="info-text">
                                    <p><b>+45 00 00 00 00</b></p>
                                </div>
                            </div>
                            <div class="d-flex justify-content-center text-center">
                                <div class="into-icon">
                                    <i class="fa fa-envelope-o"></i>
                                </div>
                                <div class="info-text">
                                    <p><b>hej@datamatiker-hjaelpen.dk</b></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="single-widget single-widget3">
                            <h5 class="mb-4">Information</h5>
                            <div class="b-white">
                                <p><a href="#"><b>Om os</b></a></p>
                                <p><a href="#"><b>PR</b></a></p>
                                <p><a href="#"><b>Github</b></a></p>
                                <p><a href="#"><b>Tak til</b></a></p>
                                <p><a href="https://buymeacoffee.com/datamatikerhjaelpen"><b>Buy us a coffee!</b></a></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="footer-copyright">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7 col-md-6">
                        
                        <span>
                        Copyright &copy;<script>document.write(new Date().getFullYear());</script> Alle rettigheder forbeholdes | Hjemmesiden er lavet af <a href="https://datamatiker-hjaelpen.dk" target="_blank"><b>Andreas, Ebou & Jonas</b></a>
                        </span>

                    </div>
                    <div class="col-lg-5 col-md-6">
                        <div class="social-icons">
                            <ul>
                                <li><a href="https://buymeacoffee.com/datamatikerhjaelpen"><i class="fa fa-coffee"></i></a></li>
                                <li><a href="#"><i class="fa fa-github"></i></a></li>
                                <li>
                                <img id="cat-icon" src="../assets/images/sad/sidney02.png"
                                    style="height: 20px; width: 20px; filter: brightness(0) invert(1); cursor: pointer;">
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <!-- Footer Area End -->
`;

// beforeend kører den som det sidste (footer)

function loadFooter() {
    const headerContainer = document.querySelector('body'); 
    headerContainer.insertAdjacentHTML('beforeend', footerHTML); 
}

document.addEventListener('DOMContentLoaded', loadFooter);
