// ===== EmailJS Initialization =====
(function () {
    emailjs.init("ANoebqE3SaMKDA3W0");
})();

// ===== DOM Content Loaded Event =====
document.addEventListener('DOMContentLoaded', function () {

    // ===== Typewriter Effect for Name Only =====
    function initTypewriter() {
        const nameElement = document.getElementById('typed-name');
        const nameText = "Ahmed Saeed";
        let nameIndex = 1;
        let isDeleting = false;
        let typingSpeed = 100;

        // خلي أول حرف يظهر مباشرة
        nameElement.textContent = nameText.substring(0, nameIndex);

        function typeName() {
            if (!isDeleting && nameIndex <= nameText.length) {
                // كتابة
                nameElement.textContent = nameText.substring(0, nameIndex);
                nameIndex++;
                setTimeout(typeName, typingSpeed);
            } else if (isDeleting && nameIndex >= 1) {
                // مسح
                nameElement.textContent = nameText.substring(0, nameIndex);
                nameIndex--;
                setTimeout(typeName, typingSpeed / 2);
            } else {
                // تبديل بين الكتابة والمسح
                isDeleting = !isDeleting;

                // لو بدأ يكتب تاني، يبدأ من أول حرف
                if (!isDeleting) {
                    nameIndex = 1;
                }

                setTimeout(typeName, isDeleting ? 2000 : 500);
            }
        }

        // يبدأ التأثير بعد ثواني بسيطة
        setTimeout(typeName, 1000);
    }


    // Initialize typewriter
    initTypewriter();

    // ===== LightGallery Initialization =====
    lightGallery(document.querySelector('.portfolio-grid'), {
        selector: '.gallery-item',
        download: false,
        counter: false
    });

    // ===== Mobile Menu Toggle =====
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        hamburger.innerHTML = navLinks.classList.contains('active') ?
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });

    // ===== Header Scroll Effect =====
    const header = document.getElementById('header');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // ===== Back to Top Button =====
    const backToTopButton = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
    });

    // ===== Portfolio Filtering =====
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 100);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // ===== Contact Form Submission =====
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Send email using EmailJS
        emailjs.send("service_485xbul", "template_vzl3dkp", {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message
        })
            .then(function (response) {
                alert('Message sent successfully!');
                contactForm.reset();
            }, function (error) {
                alert('Failed to send message. Please try again.');
            });
    });

    // ===== Animation on Scroll =====
    const animateOnScroll = function () {
        const elements = document.querySelectorAll('.skill-category, .service-card, .portfolio-item, .timeline-item, .testimonial-item');

        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;

            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Set initial state for animated elements
    document.querySelectorAll('.skill-category, .service-card, .portfolio-item, .timeline-item, .testimonial-item').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    window.addEventListener('scroll', animateOnScroll);
    // Trigger once on load
    animateOnScroll();

    // ===== Language Button Functionality =====
    const btnAR = document.getElementById("langBtn");
    const btnEN = document.getElementById("langBtnn");

    if (btnAR) {
        btnAR.addEventListener("click", () => {
            window.location.href = "index2.html";
        });
    }

    if (btnEN) {
        btnEN.addEventListener("click", () => {
            window.location.href = "index.html";
        });
    }

    // ===== Interactive Background Elements =====
    const webElements = document.querySelectorAll('.web-element');
    const mobileElements = document.querySelectorAll('.mobile-element');

    // Add hover effects to web elements
    webElements.forEach(element => {
        element.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.1) translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(37, 99, 235, 0.2)';
            this.style.background = 'rgba(255, 255, 255, 0.2)';
        });

        element.addEventListener('mouseleave', function () {
            this.style.transform = '';
            this.style.boxShadow = '';
            this.style.background = '';
        });
    });

    // Add hover effects to mobile elements
    mobileElements.forEach(element => {
        element.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.1) translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(126, 34, 206, 0.2)';
            this.style.background = 'rgba(255, 255, 255, 0.2)';
        });

        element.addEventListener('mouseleave', function () {
            this.style.transform = '';
            this.style.boxShadow = '';
            this.style.background = '';
        });
    });

    // Add slight movement on mousemove for parallax effect
    document.getElementById('home').addEventListener('mousemove', function (e) {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;

        webElements.forEach(el => {
            el.style.transform = `translateY(-20px) translateX(${xAxis / 2}px) translateY(${yAxis / 2}px)`;
        });

        mobileElements.forEach(el => {
            el.style.transform = `translateY(-20px) translateX(${-xAxis / 2}px) translateY(${yAxis / 2}px)`;
        });
    });
});

// Testimonials slider (simple version)
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-item');

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.style.display = i === index ? 'block' : 'none';
    });
}

// Initialize
showTestimonial(currentTestimonial);

// Auto-rotate testimonials
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}, 5000);