
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
                <div class="d-none d-sm-flex align-items-center gap-3 ms-3 ps-3 border-start border-secondary" style="height: 4.5rem;">
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

                    <li class="nav-item">
                        <a class="nav-link text-white fw-medium px-3" href="publications.html">Publications</a>
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
                        <a class="btn btn-primary fw-bold text-navy px-4 py-2 w-100" href="registration.html">REGISTER</a>
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
    // Footer layout based on the latest design reference
    const footerHTML = `
    <footer class="footer text-white pt-5 pb-4" style="background-color: var(--navy);">
        <div class="container">
            <div class="row gy-5">
                <div class="col-xl-3 col-md-6">
                    <h5 class="text-warning fw-bold mb-3">Contact Us</h5>
                    <div class="mb-3">
                        <p class="mb-1 fw-semibold">Dr. Shreyas J</p>
                        <p class="text-white-50 mb-3">Program Chair</p>
                        <div class="d-flex align-items-center gap-2 mb-2 text-white-50">
                            <span class="footer-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M3.654 1.328a.678.678 0 0 1 .58-.326h2.19c.27 0 .503.176.571.433l.5 1.8a.678.678 0 0 1-.173.677l-1.014 1.015a11.01 11.01 0 0 0 4.516 4.516l1.015-1.014a.678.678 0 0 1 .677-.173l1.8.5a.678.678 0 0 1 .433.571v2.19a.678.678 0 0 1-.326.58l-1.272.8c-.269.17-.598.21-.896.114-2.31-.744-4.376-2.05-6.193-3.868C3.013 7.818 1.707 5.752.963 3.442a.678.678 0 0 1 .114-.896l.8-1.272z"/>
                                </svg>
                            </span>
                            <a href="tel:+918970768504" class="footer-link">+91 8970768504</a>
                        </div>
                        <div class="d-flex align-items-center gap-2 text-white-50">
                            <span class="footer-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114V5.383zM14.247 12 9.117 8.927 8 9.6l-1.117-.673L1.753 12H14.247zM1 11.114l4.758-2.876L1 5.383v5.731z"/>
                                </svg>
                            </span>
                            <a href="mailto:codeai.mitblr@manipal.edu" class="footer-link text-break">codeai.mitblr@manipal.edu</a>
                        </div>
                    </div>
                    <hr class="footer-divider">
                    <h6 class="text-warning fw-bold mb-3">Developers</h6>
                    <ul class="list-unstyled vstack gap-2">
                        <li class="d-flex align-items-center justify-content-between">
                            <span class="text-white">Anchit Goel</span>
                            <a href="https://www.linkedin.com/in/anchitgoel5/" class="footer-icon-circle" aria-label="Anchit Goel LinkedIn" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.21c.837 0 1.358-.554 1.358-1.248-.015-.708-.52-1.248-1.342-1.248-.822 0-1.358.54-1.358 1.248 0 .694.521 1.248 1.327 1.248h.015zm4.908 8.21V9.359c0-.216.016-.432.08-.586.173-.432.568-.88 1.232-.88.87 0 1.218.664 1.218 1.635v3.866h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169H7.451c.03.664 0 7.225 0 7.225h2.4z"/>
                                </svg>
                            </a>
                        </li>
                        <li class="d-flex align-items-center justify-content-between">
                            <span class="text-white">Shouraya Sharma</span>
                            <a href="https://www.linkedin.com/in/shouraya-sharma/" class="footer-icon-circle" aria-label="Shouraya Sharma LinkedIn" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.21c.837 0 1.358-.554 1.358-1.248-.015-.708-.52-1.248-1.342-1.248-.822 0-1.358.54-1.358 1.248 0 .694.521 1.248 1.327 1.248h.015zm4.908 8.21V9.359c0-.216.016-.432.08-.586.173-.432.568-.88 1.232-.88.87 0 1.218.664 1.218 1.635v3.866h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169H7.451c.03.664 0 7.225 0 7.225h2.4z"/>
                                </svg>
                            </a>
                        </li>
                        <li class="d-flex align-items-center justify-content-between">
                            <span class="text-white">Ryan Gupta</span>
                            <a href="https://www.linkedin.com/in/ryan-gupta/" class="footer-icon-circle" aria-label="Ryan Gupta LinkedIn" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.21c.837 0 1.358-.554 1.358-1.248-.015-.708-.52-1.248-1.342-1.248-.822 0-1.358.54-1.358 1.248 0 .694.521 1.248 1.327 1.248h.015zm4.908 8.21V9.359c0-.216.016-.432.08-.586.173-.432.568-.88 1.232-.88.87 0 1.218.664 1.218 1.635v3.866h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169H7.451c.03.664 0 7.225 0 7.225h2.4z"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-xl-3 col-md-6">
                    <h5 class="text-warning fw-bold mb-3">Quick Links</h5>
                    <div class="row">
                        <div class="col-6">
                            <ul class="list-unstyled footer-list">
                                <li><a href="index.html" class="footer-link">Home</a></li>
                                <li><a href="speakers.html" class="footer-link">Speakers</a></li>
                                <li><a href="publications.html" class="footer-link">Publications</a></li>
                                <li><a href="schedule.html" class="footer-link">Schedule</a></li>
                                <li><a href="#" class="footer-link">Call for Posters</a></li>
                            </ul>
                        </div>
                        <div class="col-6">
                            <ul class="list-unstyled footer-list">
                                <li><a href="committees.html" class="footer-link">Committees</a></li>
                                <li><a href="registration.html" class="footer-link">Registration</a></li>
                                <li><a href="awards.html" class="footer-link">Awards</a></li>
                                <li><a href="call-for-papers.html" class="footer-link">Call for Papers</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div class="col-xl-3 col-md-6">
                    <h5 class="text-warning fw-bold mb-3">Resources</h5>
                    <p class="text-white-50 mb-3">Get more information about the conference</p>
                    <ul class="list-unstyled footer-list">
                        <li>
                            <a href="assets/file/CODE AI - 3rd Conference (4).pdf" target="_blank" class="footer-link d-flex align-items-center gap-2">
                                <span class="footer-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5z"/>
                                        <path d="M9.5 3a.5.5 0 0 1-.5-.5V0l5 5h-2.5a.5.5 0 0 1-.5-.5V3z"/>
                                    </svg>
                                </span>
                                Download Brochure
                            </a>
                        </li>
                        <li>
                            <a href="#" class="footer-link d-flex align-items-center gap-2">
                                <span class="footer-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5z"/>
                                        <path d="M9.5 3a.5.5 0 0 1-.5-.5V0l5 5h-2.5a.5.5 0 0 1-.5-.5V3z"/>
                                    </svg>
                                </span>
                                Call for Poster Brochure
                            </a>
                        </li>
                    </ul>
                    <h6 class="text-warning fw-bold mt-4 mb-2">Previous Editions</h6>
                    <p class="text-white-50 mb-2">Explore past conferences.</p>
                    <ul class="list-unstyled footer-list">
                        <li><a href="https://conference.manipal.edu/CODE-AI2025/" class="footer-link" target="_blank">CODE AI 2025 Website</a></li>
                        <li><a href="https://conference.manipal.edu/CODE-AI2024/" class="footer-link" target="_blank">CODE AI 2024 Website</a></li>
                    </ul>
                </div>
                <div class="col-xl-3 col-md-6">
                    <h5 class="text-warning fw-bold mb-3">Follow Us</h5>
                    <p class="text-white-50 mb-3">Stay connected with us on social media for the latest updates</p>
                    <div class="d-flex gap-3">
                        <a href="https://www.instagram.com/code.ai.mahe/" target="_blank" class="footer-icon-circle" aria-label="Instagram">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.272.216 2.76.42a3.9 3.9 0 0 0-1.41.92A3.9 3.9 0 0 0 .42 2.76C.216 3.272.088 3.85.048 4.703.01 5.556 0 5.829 0 8c0 2.171.01 2.444.048 3.297.04.853.168 1.431.372 1.943a3.9 3.9 0 0 0 .92 1.41 3.9 3.9 0 0 0 1.41.92c.512.204 1.09.332 1.943.372.853.038 1.126.048 3.297.048 2.171 0 2.444-.01 3.297-.048.853-.04 1.431-.168 1.943-.372a3.9 3.9 0 0 0 1.41-.92 3.9 3.9 0 0 0 .92-1.41c.204-.512.332-1.09.372-1.943.038-.853.048-1.126.048-3.297 0-2.171-.01-2.444-.048-3.297-.04-.853-.168-1.431-.372-1.943a3.9 3.9 0 0 0-.92-1.41 3.9 3.9 0 0 0-1.41-.92c-.512-.204-1.09-.332-1.943-.372C10.444.01 10.171 0 8 0zm0 3.897a4.103 4.103 0 1 1 0 8.206 4.103 4.103 0 0 1 0-8.206zm0 1.5a2.603 2.603 0 1 0 0 5.206 2.603 2.603 0 0 0 0-5.206zm4.271-.463a.96.96 0 1 1-1.92 0 .96.96 0 0 1 1.92 0z"/>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/company/code-ai-mitb/about/" target="_blank" class="footer-icon-circle" aria-label="LinkedIn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.21c.837 0 1.358-.554 1.358-1.248-.015-.708-.52-1.248-1.342-1.248-.822 0-1.358.54-1.358 1.248 0 .694.521 1.248 1.327 1.248h.015zm4.908 8.21V9.359c0-.216.016-.432.08-.586.173-.432.568-.88 1.232-.88.87 0 1.218.664 1.218 1.635v3.866h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169H7.451c.03.664 0 7.225 0 7.225h2.4z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <hr class="border-secondary my-4">
            <div class="text-center small text-white-50">
                &copy; 2026 CODE-AI Conference. All rights reserved.
                <div class="mt-2">School of Computer Engineering, MIT Bengaluru</div>
            </div>
        </div>
    </footer>
    <style>
        .footer-link {
            color: rgba(255, 255, 255, 0.7);
            text-decoration: none;
        }
        .footer-link:hover {
            color: var(--primary);
        }
        .footer-list li {
            margin-bottom: 0.5rem;
        }
        .footer-divider {
            border-color: rgba(255, 255, 255, 0.15);
            margin: 1.5rem 0;
        }
        .footer-icon {
            color: var(--primary);
        }
        .footer-icon-circle {
            width: 44px;
            height: 44px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 999px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: rgba(255, 255, 255, 0.8);
            background: rgba(255, 255, 255, 0.06);
            transition: all 0.2s ease;
            text-decoration: none;
        }
        .footer-icon-circle:hover {
            border-color: var(--primary);
            background: rgba(255, 215, 0, 0.15);
            color: var(--primary);
        }
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
