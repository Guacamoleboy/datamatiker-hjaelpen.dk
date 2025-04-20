// Sikrer at alle navbars er de samme på alle sites

// Denne er til sider som er på src men bruger semester overblik templaten

const navbarHTML = `
<!-- Header Area Starts -->
<header class="header-area header-area2">
    <div class="container">
        <div class="row">
            <div class="col-lg-2">
                <div class="logo-area">
                    <a href="index.html"><img id="logo" src="assets/images/logo/logo2-white.png" alt="logo"></a>
                </div>
            </div>
            <div class="col-lg-10">
                <div class="custom-navbar">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="main-menu">
                    <ul>
                        <li class="active"><a href="index.html">Forside</a></li>
                        <li class="dropdown"><a href="overblik.html">Semestre</a>
                            <ul class="sub-menu">
                                <li><a href="1sem/overblik.html">1. Semester</a></li>
                                <li><a href="2sem/overblik.html">2. Semester</a></li>
                                <li><a href="3sem/overblik.html">3. Semester</a></li>
                                <li><a href="4sem/overblik.html">4. Semester</a></li>
                                <li><a href="5sem/overblik.html">5. Semester</a></li>
                            </ul>
                        </li>
                        <li><a href="https://buymeacoffee.com/datamatikerhjaelpen">Støt os</a></li>
                        <li><a href="#">Sprog</a>
                            <ul class="sub-menu">
                                <li><a href="Sprog/java.html">Java</a></li>
                                <li><a href="Sprog/processing.html">Processing</a></li>
                                <li><a href="Sprog/html.html">HTML</a></li>
                                <li><a href="Sprog/css.html">CSS</a></li>
                                <li><a href="Sprog/reactjs.html">ReactJS</a></li>
                                <li><a href="Sprog/javascript.html">Javascript</a></li>
                                <li><a href="Sprog/plantuml.html">PlantUML</a></li>
                            </ul>
                        </li>
                        <li><a href="kontakt.php">Kontakt</a></li>
                        <li><a href="#">dev</a>
                            <ul class="sub-menu">
                                <li><a href="dev/changelog.html">Change Log</a></li>
                                <li><a href="#">Something</a></li>
                            </ul>
                        </li>
                        <li><a href="login.php" id="loginToggle" class="darkmode-btn">Log Ind</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</header>
<!-- Header Area End -->
`;

function loadNavbar() {
    const headerContainer = document.querySelector('body'); 
    headerContainer.insertAdjacentHTML('afterbegin', navbarHTML); 
}

document.addEventListener('DOMContentLoaded', loadNavbar);
