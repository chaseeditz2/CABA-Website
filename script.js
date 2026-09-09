/* =========================================================
   CABA — COMBINED ARMS BLUE ANGELS
   WEBSITE JAVASCRIPT
   ========================================================= */


document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       LOADING SCREEN
       ===================================================== */

    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.classList.add("hidden");

        }, 1200);

    });


    /* =====================================================
       NAVBAR
       ===================================================== */

    const navbar = document.querySelector(".navbar");


    function updateNavbar() {

        if (window.scrollY > 50) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    }


    updateNavbar();

    window.addEventListener(
        "scroll",
        updateNavbar
    );


    /* =====================================================
       MOBILE MENU
       ===================================================== */

    const mobileMenuBtn =
        document.getElementById("mobileMenuBtn");

    const mobileMenu =
        document.getElementById("mobileMenu");


    if (mobileMenuBtn && mobileMenu) {


        mobileMenuBtn.addEventListener(
            "click",
            () => {

                mobileMenu.classList.toggle("open");

                mobileMenuBtn.classList.toggle("active");


                // Prevent scrolling while menu is open

                document.body.classList.toggle(
                    "menu-open"
                );

            }
        );


        // Close mobile menu when a link is clicked

        const mobileLinks =
            mobileMenu.querySelectorAll("a");


        mobileLinks.forEach((link) => {

            link.addEventListener(
                "click",
                () => {

                    mobileMenu.classList.remove(
                        "open"
                    );

                    mobileMenuBtn.classList.remove(
                        "active"
                    );

                    document.body.classList.remove(
                        "menu-open"
                    );

                }
            );

        });

    }


    /* =====================================================
       SMOOTH NAVIGATION
       ===================================================== */

    const allLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    allLinks.forEach((link) => {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute("href");


                // Ignore empty # links

                if (
                    !targetId ||
                    targetId === "#"
                ) {

                    return;

                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (target) {

                    event.preventDefault();


                    const navbarHeight =
                        navbar.offsetHeight;


                    const targetPosition =
                        target.getBoundingClientRect()
                            .top
                        + window.scrollY
                        - navbarHeight;


                    window.scrollTo({

                        top: targetPosition,

                        behavior: "smooth"

                    });

                }

            }
        );

    });


    /* =====================================================
       ACTIVE NAVIGATION LINK
       ===================================================== */

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );


    const navLinks =
        document.querySelectorAll(
            ".nav-links a"
        );


    function updateActiveNav() {

        let currentSection =
            "home";


        sections.forEach((section) => {

            const sectionTop =
                section.offsetTop
                - 160;


            const sectionHeight =
                section.offsetHeight;


            if (

                window.scrollY >= sectionTop
                &&
                window.scrollY
                <
                sectionTop
                + sectionHeight

            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach((link) => {

            link.classList.remove("active");


            if (

                link.getAttribute("href")
                ===
                `#${currentSection}`

            ) {

                link.classList.add("active");

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNav
    );


    updateActiveNav();


    /* =====================================================
       SCROLL REVEAL ANIMATIONS
       ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".reveal"
        );


    const revealObserver =
        new IntersectionObserver(

            (entries) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );


                            // Stop observing once revealed

                            revealObserver.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },

            {

                threshold: 0.15,

                rootMargin:
                    "0px 0px -50px 0px"

            }

        );


    revealElements.forEach(
        (element) => {

            revealObserver.observe(
                element
            );

        }
    );


    /* =====================================================
       BACK TO TOP BUTTON
       ===================================================== */

    const backToTop =
        document.getElementById(
            "backToTop"
        );


    function updateBackToTop() {

        if (window.scrollY > 600) {

            backToTop.classList.add(
                "show"
            );

        } else {

            backToTop.classList.remove(
                "show"
            );

        }

    }


    window.addEventListener(
        "scroll",
        updateBackToTop
    );


    backToTop.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );


    /* =====================================================
       HERO PARALLAX
       ===================================================== */

    const heroBackground =
        document.querySelector(
            ".hero-background"
        );


    window.addEventListener(
        "scroll",
        () => {

            if (!heroBackground) return;


            const scrollPosition =
                window.scrollY;


            // Only animate while near hero

            if (
                scrollPosition
                <
                window.innerHeight
            ) {

                heroBackground.style.transform =
                    `scale(1.08)
                    translateY(
                        ${scrollPosition * 0.12}px
                    )`;

            }

        }
    );


    /* =====================================================
       HERO TEXT INTRO ANIMATION
       ===================================================== */

    const heroContent =
        document.querySelector(
            ".hero-content"
        );


    if (heroContent) {


        heroContent.style.opacity = "0";

        heroContent.style.transform =
            "translateY(30px)";


        window.addEventListener(
            "load",
            () => {

                setTimeout(() => {

                    heroContent.style.transition =
                        `
                        opacity 1s ease,
                        transform 1s ease
                        `;


                    heroContent.style.opacity =
                        "1";


                    heroContent.style.transform =
                        "translateY(0)";

                }, 400);

            }
        );

    }


    /* =====================================================
       IMAGE LOADING EFFECT
       ===================================================== */

    const images =
        document.querySelectorAll(
            "img"
        );


    images.forEach((image) => {


        image.addEventListener(
            "load",
            () => {

                image.classList.add(
                    "image-loaded"
                );

            }
        );


        // For cached images

        if (image.complete) {

            image.classList.add(
                "image-loaded"
            );

        }

    });


    /* =====================================================
       EVENT CARD HOVER EFFECT
       ===================================================== */

    const eventItems =
        document.querySelectorAll(
            ".event-item"
        );


    eventItems.forEach((item) => {


        item.addEventListener(
            "mouseenter",
            () => {

                item.style.cursor =
                    "default";

            }
        );


    });


    /* =====================================================
       DYNAMIC YEAR
       ===================================================== */

    const yearElement =
        document.getElementById("year");


    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }


    /* =====================================================
       KEYBOARD ACCESSIBILITY
       ===================================================== */

    document.addEventListener(
        "keydown",
        (event) => {


            // ESC closes mobile menu

            if (
                event.key === "Escape"
                &&
                mobileMenu
                &&
                mobileMenu.classList.contains(
                    "open"
                )
            ) {

                mobileMenu.classList.remove(
                    "open"
                );

                mobileMenuBtn.classList.remove(
                    "active"
                );

                document.body.classList.remove(
                    "menu-open"
                );

            }


        }
    );


    /* =====================================================
       PERFORMANCE-FRIENDLY SCROLL HANDLER
       ===================================================== */

    let scrollTicking = false;


    window.addEventListener(
        "scroll",
        () => {


            if (!scrollTicking) {


                window.requestAnimationFrame(
                    () => {

                        updateNavbar();

                        updateActiveNav();

                        updateBackToTop();


                        scrollTicking = false;

                    }
                );


                scrollTicking = true;

            }


        }
    );


});