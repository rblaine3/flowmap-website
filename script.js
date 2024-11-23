// Particle.js Configuration
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#6366f1'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#6366f1',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1
                }
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for Fade-in Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add fade-in class to elements
document.querySelectorAll('.feature-card, .step, .testimonial-card').forEach(el => {
    observer.observe(el);
});

// Navbar Scroll Effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = 'none';
    } else {
        navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Form Submission Handler (for demo scheduling)
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', () => {
        // Replace this with your actual form handling logic
        console.log('Demo requested');
        alert('Thank you for your interest! We will contact you shortly to schedule a demo.');
    });
});

// Why FlowMap Section Interactions
document.querySelectorAll('.feature-header').forEach(header => {
    header.addEventListener('click', () => {
        const target = header.dataset.target;
        const content = document.getElementById(target);
        const image = document.getElementById(`${target}-img`);
        
        // Toggle active state for clicked header
        document.querySelectorAll('.feature-header').forEach(h => {
            h.classList.remove('active');
        });
        header.classList.add('active');
        
        // Toggle content visibility
        document.querySelectorAll('.feature-content').forEach(c => {
            c.classList.remove('active');
        });
        content.classList.add('active');
        
        // Switch images
        document.querySelectorAll('.image-container').forEach(img => {
            img.classList.remove('active');
        });
        image.classList.add('active');
    });
});

// Initialize first dropdown as active
document.querySelector('.feature-header').classList.add('active');
document.querySelector('.feature-content').classList.add('active');
document.querySelector('.image-container').classList.add('active');

// FAQ Section Interactions
document.querySelectorAll('.faq-header').forEach(header => {
    header.addEventListener('click', () => {
        const faqItem = header.parentElement;
        const wasActive = faqItem.classList.contains('active');
        
        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!wasActive) {
            faqItem.classList.add('active');
        }
    });
});
