
document.addEventListener('DOMContentLoaded', () => {
    loadNavbar();
    loadFooter();
    initScrollReveal();
});

function loadNavbar() {
    const navbarHTML = `
    <nav class="navbar navbar-expand-lg fixed-top transition-all" style="background-color: var(--navy); border-bottom: 3px solid var(--primary); font-family: 'Inter', sans-serif;">
        <div class="container-xl">
            <!-- Brand & Logos -->
            <div class="d-flex align-items-center gap-3">
                <a class="navbar-brand d-flex align-items-center gap-2 me-0" href="index.html">
                    <span class="text-white fw-bold fs-4 font-heading tracking-wide">CODE-AI</span>
                    <span class="text-warning fw-bold fs-4 font-heading">2026</span>
                </a>
                
                <!-- Logos (Hidden on mobile) -->
                <div class="d-none d-sm-flex align-items-center gap-3 ms-3 ps-3 border-start border-secondary" style="height: 3.5rem;">
                     <img src="assets/img/springerccis.png" alt="Springer CCIS" class="h-100 object-fit-contain">
                     <img src="assets/img/sponsors/scopus.png" alt="Scopus" class="h-100 object-fit-contain">
                </div>
            </div>

            <!-- Mobile Toggle -->
            <button class="navbar-toggler border-0 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-label="Toggle navigation">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </button>

            <!-- Links -->
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav align-items-lg-center gap-1 gap-lg-3 mt-3 mt-lg-0">
                    <li class="nav-item">
                        <a class="nav-link text-white fw-medium px-3" href="index.html">Home</a>
                    </li>
                    
                    <!-- Authors Dropdown -->
                    <li class="nav-item dropdown" id="authors-dropdown">
                        <a class="nav-link dropdown-toggle text-white fw-medium px-3 d-flex align-items-center gap-1" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Authors
                        </a>
                        <ul class="dropdown-menu shadow-lg border-top border-3 border-warning rounded-0 rounded-bottom mt-0 p-0 overflow-hidden">
                            <li><a class="dropdown-item py-2 px-4 border-start border-4 border-transparent hover-border-warning" href="call-for-papers.html">Call for Papers</a></li>
                            <li><a class="dropdown-item py-2 px-4 border-start border-4 border-transparent hover-border-warning" href="assets/file/CODE AI - 3rd Conference (4).pdf" target="_blank">Download Brochure</a></li>
                        </ul>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link text-white fw-medium px-3" href="committees.html">Committees</a>
                    </li>

                    <!-- Program Dropdown -->
                    <li class="nav-item dropdown" id="program-dropdown">
                        <a class="nav-link dropdown-toggle text-white fw-medium px-3 d-flex align-items-center gap-1" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Program
                        </a>
                        <ul class="dropdown-menu shadow-lg border-top border-3 border-warning rounded-0 rounded-bottom mt-0 p-0 overflow-hidden">
                            <li><a class="dropdown-item py-2 px-4 border-start border-4 border-transparent hover-border-warning" href="schedule.html">Schedule</a></li>
                            <li><a class="dropdown-item py-2 px-4 border-start border-4 border-transparent hover-border-warning" href="speakers.html">Speakers</a></li>
                             <li><a class="dropdown-item py-2 px-4 border-start border-4 border-transparent hover-border-warning" href="awards.html">Awards</a></li>
                        </ul>
                    </li>

                    <!-- Register Button -->
                    <li class="nav-item ms-lg-2 mt-2 mt-lg-0">
                        <a class="btn btn-primary fw-bold text-navy px-4 py-2 w-100" href="registration.html">REGISTER NOW</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <style>
        /* CSS to make dropdowns hover on desktop and handle custom hover effects */
        @media (min-width: 992px) {
            .dropdown:hover .dropdown-menu {
                display: block;
                margin-top: 0;
            }
        }
        .hover-border-warning:hover {
            border-left-color: var(--primary) !important;
            background-color: rgba(255, 215, 0, 0.1);
        }
    </style>
    `;

    const container = document.getElementById('navbar-container');
    if (container) container.innerHTML = navbarHTML;
}

function loadFooter() {
    // Basic footer placeholder for now
    const footerHTML = `
    <footer class="footer text-white py-5" style="background-color: var(--navy);">
        <div class="container">
            <div class="row gy-4">
                <div class="col-lg-4">
                    <h5 class="text-warning mb-3">CODE AI 2026</h5>
                    <p class="small text-white-50">
                        3rd International Conference on Data Engineering and AI.
                        Bringing together experts from academia and industry.
                    </p>
                </div>
                <div class="col-lg-2 col-6">
                    <h6 class="fw-bold mb-3">Links</h6>
                    <ul class="list-unstyled">
                        <li><a href="index.html" class="text-white-50 text-decoration-none hover-text-warning">Home</a></li>
                        <li><a href="committees.html" class="text-white-50 text-decoration-none hover-text-warning">Committees</a></li>
                        <li><a href="registration.html" class="text-white-50 text-decoration-none hover-text-warning">Registration</a></li>
                    </ul>
                </div>
                <div class="col-lg-2 col-6">
                    <h6 class="fw-bold mb-3">Legal</h6>
                     <ul class="list-unstyled">
                        <li><a href="#" class="text-white-50 text-decoration-none hover-text-warning">Privacy Policy</a></li>
                        <li><a href="#" class="text-white-50 text-decoration-none hover-text-warning">Terms of Service</a></li>
                    </ul>
                </div>
                <div class="col-lg-4">
                    <h6 class="fw-bold mb-3">Contact</h6>
                    <p class="small text-white-50 mb-1">Manipal Institute of Technology, Bengaluru</p>
                    <p class="small text-white-50">codeai@manipal.edu</p>
                </div>
            </div>
            <hr class="border-secondary my-4">
            <div class="text-center small text-white-50">
                &copy; 2026 CODE AI. All rights reserved.
                <div class="mt-2">
                    <span class="me-2">Developed by:</span>
                    <span class="text-white">Anchit Goel</span>, 
                    <span class="text-white">Ryan Gupta</span>, 
                    <span class="text-white">Shouraya Sharma</span>
                </div>
            </div>
        </div>
    </footer>
    <style>
        .hover-text-warning:hover { color: var(--primary) !important; }
    </style>
    `;

    const container = document.getElementById('footer-container');
    if (container) container.innerHTML = footerHTML;
}

function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
