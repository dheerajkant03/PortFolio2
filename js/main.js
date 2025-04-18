document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('nav ul');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            
            // Update active link
            document.querySelectorAll('nav ul li a').forEach(item => {
                item.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    // Scroll to sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Audio toggle
    const audioToggle = document.getElementById('audio-toggle');
    const ambientAudio = document.getElementById('ambient-audio');
    
    audioToggle.addEventListener('click', function() {
        if (ambientAudio.paused) {
            ambientAudio.play();
            this.innerHTML = '<i class="fas fa-music"></i> <span>SOUND_ON</span>';
        } else {
            ambientAudio.pause();
            this.innerHTML = '<i class="fas fa-music"></i> <span>SOUND_OFF</span>';
        }
    });

    // Intersection Observer for animations
    const sections = document.querySelectorAll('.section');
    const projectCards = document.querySelectorAll('.project-card');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
    
    projectCards.forEach(card => {
        observer.observe(card);
    });
    
    galleryItems.forEach(item => {
        observer.observe(item);
    });

    // Cyberpunk Theme Toggle
    const themeContainer = document.getElementById('theme-container');
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    themeToggle.classList.add('theme-toggle');
    document.body.appendChild(themeToggle);
    
    // Set initial theme based on time
    const hour = new Date().getHours();
    if (hour >= 18 || hour < 6) { // Night time
        themeContainer.setAttribute('data-theme', 'cyberpunk');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        themeContainer.setAttribute('data-theme', 'classic');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = themeContainer.getAttribute('data-theme');
        const newTheme = currentTheme === 'cyberpunk' ? 'classic' : 'cyberpunk';
        themeContainer.setAttribute('data-theme', newTheme);
        
        if (newTheme === 'cyberpunk') {
            this.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            this.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('TRANSMISSION_RECEIVED. THANK YOU FOR YOUR MESSAGE.');
            this.reset();
        });
    }

    // Initialize GSAP animations
    gsap.from(".home-content h1", {duration: 1, y: -50, opacity: 0, ease: "power2.out"});
    gsap.from(".home-content p", {duration: 1, y: -30, opacity: 0, delay: 0.3, ease: "power2.out"});
    gsap.from(".cta-buttons", {duration: 1, y: 30, opacity: 0, delay: 0.6, ease: "power2.out"});
    gsap.from(".profile-image", {duration: 1, x: 50, opacity: 0, delay: 0.9, ease: "power2.out"});

    // Gallery navigation
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const galleryItemsArray = Array.from(document.querySelectorAll('.gallery-item'));
    
    let currentIndex = 0;
    
    function showImage(index) {
        galleryItemsArray.forEach((item, i) => {
            item.style.display = i === index ? 'block' : 'none';
        });
    }
    
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + galleryItemsArray.length) % galleryItemsArray.length;
        showImage(currentIndex);
    });
    
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % galleryItemsArray.length;
        showImage(currentIndex);
    });
    
    // Initialize gallery
    showImage(currentIndex);
});