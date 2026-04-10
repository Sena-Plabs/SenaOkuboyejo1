// Mobile menu toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('active');
}

// Counter animation
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current) + '+';
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + '+';
            }
        };
        
        updateCounter();
    });
}

// Trigger counter animation when page loads
window.addEventListener('load', () => {
    setTimeout(animateCounters, 500);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            const mobileMenu = document.getElementById('mobileMenu');
            if (mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
            }
        }
    });
});

// Header background on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Add hover effects to cards using event delegation
document.addEventListener('DOMContentLoaded', function() {
    // Social links hover
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.background = 'rgba(255, 255, 255, 0.2)';
            this.style.transform = 'translateY(-3px)';
        });
        link.addEventListener('mouseleave', function() {
            this.style.background = 'rgba(255, 255, 255, 0.1)';
            this.style.transform = 'translateY(0)';
        });
    });

    // Stat cards hover
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.background = 'rgba(255, 255, 255, 0.15)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.background = 'rgba(255, 255, 255, 0.1)';
        });
    });

    // Achievement cards hover
    const achievementCards = document.querySelectorAll('.achievement-card');
    achievementCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 8px 30px rgba(0,0,0,0.15)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
        });
    });

    // Publication cards hover
    const publicationCards = document.querySelectorAll('.publication-card');
    publicationCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 8px 30px rgba(0,0,0,0.15)';
            if (!card.classList.contains('best-paper')) {
                this.style.borderColor = '#2563eb';
            }
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
            if (!card.classList.contains('best-paper')) {
                this.style.borderColor = '#e2e8f0';
            }
        });
    });

    // Success story cards hover
    const successCards = document.querySelectorAll('.success-card');
    successCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 8px 30px rgba(0,0,0,0.15)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
        });
    });

    // Trust indicator cards hover
    const trustCards = document.querySelectorAll('.trust-card');
    trustCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
        });
    });

    // CTA buttons hover
    const ctaButtons = document.querySelectorAll('.cta-link');
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.background = '#1d4ed8';
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 4px 15px rgba(37, 99, 235, 0.3)';
        });
        button.addEventListener('mouseleave', function() {
            this.style.background = '#2563eb';
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // Connect button hover
    const connectButtons = document.querySelectorAll('.connect-btn');
    connectButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.background = '#1d4ed8';
            this.style.transform = 'translateY(-2px)';
        });
        button.addEventListener('mouseleave', function() {
            this.style.background = '#2563eb';
            this.style.transform = 'translateY(0)';
        });
    });
});
