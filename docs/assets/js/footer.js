// Sikrer at alle footers er de samme på alle sites

const footerHTML = `
<!-- Footer Area Starts -->
<svg class="footer-frame" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1920 79"><defs><style>.cls-2{fill:#131230;}</style></defs><title>footer-frame</title><path class="cls-2" d="M0,72.427C143,12.138,255.5,4.577,328.644,7.943c147.721,6.8,183.881,60.242,320.83,53.737,143-6.793,167.826-68.128,293-60.9,109.095,6.3,115.68,54.364,225.251,57.319,113.58,3.064,138.8-47.711,251.189-41.8,104.012,5.474,109.713,50.4,197.369,46.572,89.549-3.91,124.375-52.563,227.622-50.155A338.646,338.646,0,0,1,1920,23.467V79.75H0V72.427Z" transform="translate(0 -0.188)"/></svg>
    <footer class="footer-area">
        <div class="footer-widget section-padding">
            <div class="container">
                <div class="row justify-content-center text-center">
                    <div class="col-md-4">
                        <div class="single-widget single-widget1">
                            <a href="index.html"><img src="assets/images/logo/logo2-orange.png" alt=""></a>
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
                        Copyright &copy;<script>document.write(new Date().getFullYear());</script> Alle rettigheder forbeholdes | Hjemmesiden er lavet af <a href="https://datamatiker-hjaelpen.dk" target="_blank"><b>Jonas</b></a>
                        </span>

                    </div>
                    <div class="col-lg-5 col-md-6">
                        <div class="social-icons">
                            <ul>
                                <li><a href="https://buymeacoffee.com/datamatikerhjaelpen"><i class="fa fa-coffee"></i></a></li>
                                <li><a href="#"><i class="fa fa-github"></i></a></li>
                                <li>
                                <img id="cat-icon" src="assets/images/sad/sidney02.png"
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
