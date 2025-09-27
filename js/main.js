// Main page JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    // Early Access Form Handler
    const form = document.getElementById('earlyAccessForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple form validation
            const inputs = form.querySelectorAll('input[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('border-red-500');
                } else {
                    input.classList.remove('border-red-500');
                }
            });
            
            if (isValid) {
                // Simulate form submission
                const button = form.querySelector('button[type="submit"]');
                const originalText = button.textContent;
                button.textContent = 'Submitting...';
                button.disabled = true;
                
                setTimeout(() => {
                    alert('Thank you! We\'ll be in touch soon with your early access invitation.');
                    form.reset();
                    button.textContent = originalText;
                    button.disabled = false;
                }, 2000);
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add subtle animations on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});