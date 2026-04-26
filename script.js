// Hamburger menu
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navbar = document.getElementById('navbar');
    const navItems = document.querySelectorAll('.nav-item');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navbar.classList.toggle('active');
    });

    // Close menu when a nav item is click
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navbar.classList.remove('active');
        });
    });
});

// Smooth scroll
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Activate Email
(function() {
    emailjs.init("YOUR_PUBLIC_KEY");
})();

// Handle form
function handleSubmit(event) {
    event.preventDefault();
    
    // Take form parameters
    const form = event.target;
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;
    
    // email senddd
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        to_email: "deanlouise556@gmail.com",
        from_email: email,
        from_name: name,
        message: message
    }).then(function(response) {
        alert(`Thank you ${name}! Your message has been sent to my email. I'll get back to you at ${email} soon.`);
        form.reset();
    }, function(error) {
        alert('Failed to send message. Please try again.');
        console.log('FAILED...', error);
    });
}

// Add active state to nav-items
document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('section');
    
    // Highlight active nav-item on scroll
    window.addEventListener('scroll', function() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').substring(1) === currentSection) {
                item.classList.add('active');
            }
        });
    });
});

// Add animation to project-cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease-in forwards';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        observer.observe(card);
    });
});
