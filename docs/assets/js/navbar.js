// Sikrer at alle navbars er de samme på alle sites

const navbarHTML = `
<!-- Header Area Starts -->
<header class="header-area">
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
                        <li class="dropdown"><a href="#">Semestre</a>
                            <ul class="sub-menu">
                                <li><a href="1sem/overblik.html">1. Semester</a>
                                    <ul class="sub-menu-further">
                                        <li><a href="#">Læringsmål</a></li>
                                        <li><a href="#">Bøger</a></li>
                                    </ul>
                                </li>
                                <li><a href="2sem/overblik.html">2. Semester</a></li>
                                <li><a href="3sem/overblik.html">3. Semester</a></li>
                                <li><a href="4sem/overblik.html">4. Semester</a></li>
                                <li><a href="5sem/overblik.html">5. Semester</a></li>
                            </ul>
                        </li>
                        <li class="dropdown"><a href="#">Guide</a>
                            <ul class="sub-menu">
                                <li class="dropdown"><a href="#">Studiestart</a>
                                    <ul class="sub-menu-further">
                                        <li><a href="#">Introdagene</a></li>
                                        <li><a href="#">Parkering</a></li>
                                        <li><a href="#">Skema</a></li>
                                        <li><a href="#">SU</a></li>
                                        <li><a href="#">Om skolen</a></li>
                                        <li><a href="#">Find vej</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Installering af programmer</a>
                                    <ul class="sub-menu-further">
                                        <li><a href="#">Processing</a></li>
                                        <li><a href="#">Sublime Text</a></li>
                                        <li><a href="#">IntelliJ</a></li>
                                        <li><a href="#">Github</a></li>
                                        <li><a href="#">Visual Studio Code</a></li>
                                        <li><a href="#">OpenSCAD</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Fra os</a>
                                    <ul class="sub-menu-further">
                                        <li><a href="#">Darkmode Processing</a></li>
                                        <li><a href="#">Darkmode DocJava</a></li>
                                        <li><a href="#">Darkmode Moodle</a></li>
                                        <li><a href="#">Path Finder</a></li>
                                        <li><a href="#">Java Compiler</a></li>
                                    </ul>
                                </li>
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
