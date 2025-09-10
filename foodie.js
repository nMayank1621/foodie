// Mobile menu toggle functionality
        document.addEventListener('DOMContentLoaded', function() {
            const mobileMenu = document.getElementById('mobile-menu');
            const navLinks = document.querySelector('.nav-links');
            const navLinksItems = document.querySelectorAll('.nav-link');
            const header = document.getElementById('header');
            const menuOverlay = document.querySelector('.menu-overlay');
            
            // Toggle mobile menu
            mobileMenu.addEventListener('click', function() {
                navLinks.classList.toggle('active');
                mobileMenu.classList.toggle('active');
                document.body.classList.toggle('menu-open');
            });
            
            // Close menu when clicking on a nav link
            navLinksItems.forEach(item => {
                item.addEventListener('click', function() {
                    navLinks.classList.remove('active');
                    mobileMenu.classList.remove('active');
                    document.body.classList.remove('menu-open');
                    
                    // Set active class for current nav link
                    navLinksItems.forEach(link => link.classList.remove('active'));
                    this.classList.add('active');
                });
            });
            
            // Close menu when clicking on overlay
            menuOverlay.addEventListener('click', function() {
                navLinks.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
            
            // Header scroll effect
            window.addEventListener('scroll', function() {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
            
            // Set active nav link based on scroll position
            window.addEventListener('scroll', function() {
                const scrollPosition = window.scrollY;
                
                document.querySelectorAll('section').forEach(section => {
                    const sectionTop = section.offsetTop - 100;
                    const sectionHeight = section.offsetHeight;
                    const sectionId = section.getAttribute('id');
                    
                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        navLinksItems.forEach(item => {
                            item.classList.remove('active');
                            if (item.getAttribute('href') === '#' + sectionId) {
                                item.classList.add('active');
                            }
                        });
                    }
                });
            });
        });