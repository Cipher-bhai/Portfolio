// ============================================
//  CIPHER PORTFOLIO - SCRIPT.JS
// ============================================

// ===== MATRIX RAIN BACKGROUND =====
const canvas = document.querySelector('.matrix-bg');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const matrix = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+-=[]{}|;:,.<>?/~`';
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = [];

for (let i = 0; i < columns; i++) {
    drops[i] = Math.random() * -100;
}

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#00ff00';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrix, 35);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// ===== CURSOR GLOW EFFECT =====
const cursorGlow = document.querySelector('.cursor-glow');
let mouseX = 0;
let mouseY = 0;
let glowX = 0;
let glowY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateGlow() {
    glowX += (mouseX - glowX) * 0.1;
    glowY += (mouseY - glowY) * 0.1;
    
    cursorGlow.style.left = glowX + 'px';
    cursorGlow.style.top = glowY + 'px';
    
    requestAnimationFrame(animateGlow);
}

animateGlow();

// ===== TYPING EFFECT =====
const texts = [
    'Cybersecurity Expert',
    'Full Stack Developer',
    'AI/ML Enthusiast',
    'Network Security Specialist',
    'Ethical Hacker',
    'Python Developer',
    'Django Developer'
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.querySelector('.typing-text');

function typeEffect() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);
        return;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

// Start typing effect after boot screen
setTimeout(() => {
    typeEffect();
}, 3500);

// ===== NAVIGATION =====
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Animate hamburger
    const spans = hamburger.querySelectorAll('span');
    if (navLinks.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translateY(10px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// ===== SMOOTH SCROLLING =====
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

// ===== SCROLL TO TOP BUTTON =====
const scrollTopBtn = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }

    // Add active class to nav links based on scroll position
    const sections = document.querySelectorAll('section');
    const navLinksList = document.querySelectorAll('.nav-links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinksList.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Trigger skill bar animations
            if (entry.target.classList.contains('terminal-window')) {
                const skillBars = entry.target.querySelectorAll('.skill-progress');
                skillBars.forEach((bar, index) => {
                    setTimeout(() => {
                        bar.style.animation = 'skillSlide 1.5s ease-out forwards';
                    }, index * 100);
                });
            }
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.terminal-window, .project-card, .cert-card, .timeline-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===== RESUME DOWNLOAD =====
document.getElementById('downloadResume').addEventListener('click', (e) => {
    e.preventDefault();
    
    // Create resume content
    const resumeContent = `
=====================================================
           CYBERSECURITY & AI/ML PROFESSIONAL
=====================================================

CONTACT INFORMATION
-------------------
Name: Your Full Name
Email: your.email@example.com
Phone: +91 XXXXX XXXXX
Location: Lucknow, Uttar Pradesh, India
GitHub: github.com/yourusername
LinkedIn: linkedin.com/in/yourusername
Portfolio: yourwebsite.com

PROFESSIONAL SUMMARY
--------------------
Cybersecurity professional and Full Stack Developer with expertise in 
AI/ML, network security, and secure application development. Currently 
interning at NIELIT (MeitY) focusing on Artificial Intelligence and 
Machine Learning. Experienced in building firewall systems, web 
applications, and implementing security protocols.

INTERNSHIP EXPERIENCE
---------------------

[CURRENT] Work-Based Learning (WBL) Intern - AI/ML
NIELIT (MeitY), Lucknow
February 2026 - Present
• Developing AI/ML models for real-world applications
• Working with neural networks and deep learning frameworks
• Implementing machine learning algorithms for data analysis
• Collaborating on government AI initiatives
Skills: Python, TensorFlow, PyTorch, Machine Learning, Deep Learning

Cybersecurity Intern
C-DAC Noida (Remote)
June 2024 - July 2024
• Learned various types of cyber attacks and defense mechanisms
• Studied network security protocols and implementation
• Developed Firewall System detecting unauthorized IP addresses
• Implemented IP blocking mechanisms for security enhancement
• Analyzed network traffic patterns and security vulnerabilities
Skills: Network Security, Firewall, Threat Detection, IP Blocking

Python Django Developer
Softpro India Pvt. Ltd., Lucknow
2023
• Developed full-stack web applications using Django framework
• Designed and implemented database schemas with Django ORM
• Created RESTful APIs for frontend-backend communication
• Implemented user authentication and authorization systems
• Optimized application performance and database queries
Skills: Python, Django, PostgreSQL, REST API, HTML/CSS, JavaScript

TECHNICAL SKILLS
----------------
Cybersecurity: Penetration Testing, Network Security, Firewall Systems,
               Threat Detection, OWASP Top 10, Security Tools

AI/ML: Machine Learning, Deep Learning, TensorFlow, PyTorch, 
       Data Analysis, Python (Pandas/NumPy)

Backend: Python/Django, Node.js/Express, REST API Design, 
         PostgreSQL, MongoDB, FastAPI

Frontend: HTML5, CSS3, JavaScript, TypeScript, React.js, 
          Responsive Design, Tailwind CSS

DevOps & Tools: Git/GitHub, Docker, Linux/Bash, CI/CD, AWS,
                Nmap, Wireshark, Burp Suite, Metasploit

FEATURED PROJECTS
-----------------
1. Intelligent Firewall System (C-DAC Internship)
   - Advanced firewall with real-time threat detection
   - Machine learning-based IP blocking system
   Tech: Python, Network Security, iptables, Threat Detection

2. Django Web Application (Softpro India)
   - Full-stack application with authentication and RBAC
   - RESTful API and responsive UI
   Tech: Django, Python, PostgreSQL, REST API, Bootstrap

3. AI/ML Security Analytics (NIELIT Internship - Ongoing)
   - ML-based security threat analysis system
   - Neural networks for vulnerability classification
   Tech: TensorFlow, Python, Scikit-learn, Pandas

4. Vulnerability Scanner
   - Automated web application security scanner
   - OWASP-based vulnerability detection
   Tech: Python, Nmap, BeautifulSoup, SQLite

5. Network Traffic Analyzer
   - Real-time traffic analysis with visualization
   - Anomaly detection and reporting
   Tech: Python, Scapy, Flask, Chart.js

CERTIFICATIONS
--------------
• Certified Ethical Hacker (CEH) - EC-Council
• CompTIA Security+ - CompTIA
• AWS Certified Solutions Architect - Amazon Web Services
• Python for Data Science - IBM / Coursera
• Machine Learning Specialization - Stanford / Coursera
• Network Security Fundamentals - Cisco

EDUCATION
---------
[Add your education details here]
Bachelor of Technology/Computer Science
University Name, Year

LANGUAGES
---------
English (Fluent)
Hindi (Native)

INTERESTS
---------
• Ethical Hacking & Penetration Testing
• Artificial Intelligence & Machine Learning
• Network Security Research
• Open Source Contribution
• CTF Challenges & Competitions

=====================================================
        Generated from blackhat.portfolio.sh
=====================================================
`;

    // Create and download the file
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Resume_YourName_Cybersecurity.txt';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
    
    // Show notification
    console.log('[SUCCESS] Resume downloaded successfully!');
});

// ===== EMAILJS CONFIGURATION =====
// Initialize EmailJS with your public key
// Get your public key from: https://dashboard.emailjs.com/admin/account
emailjs.init('pTY2IMUSUC7tGUoxr'); // REPLACE THIS

// ===== CONTACT FORM HANDLING =====
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = contactForm.querySelector('.btn-submit');
    const originalText = submitBtn.innerHTML;
    
    // Disable button and show loading
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> [SENDING...]';
    
    // Hide previous status
    formStatus.className = 'form-status';
    formStatus.style.display = 'none';

    // Get form data
    const templateParams = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
        to_email: 'bhartisatyendra44@gmail.com' // REPLACE with your email
    };

    try {
        // Send email using EmailJS
        const response = await emailjs.send(
            'service_xj966rr',    // REPLACE with your Service ID
            'template_xlbjxhf',   // REPLACE with your Template ID
            templateParams
        );
        
        console.log('[SUCCESS] Email sent:', response.status, response.text);
        
        // Show success message
        formStatus.className = 'form-status success';
        formStatus.innerHTML = '<i class="fas fa-check-circle"></i> [SUCCESS] Message transmitted successfully! Response incoming within 24 hours.';
        formStatus.style.display = 'flex';
        
        // Reset form
        contactForm.reset();
        
        // Log to console (hacker style)
        console.log(`
[root@blackhat ~]# ./send_message.sh --status
[INFO] Message successfully transmitted
[INFO] From: ${templateParams.from_name} <${templateParams.from_email}>
[INFO] Subject: ${templateParams.subject}
[INFO] Status: DELIVERED
[INFO] Response time: < 24 hours
        `);
        
    } catch (error) {
        console.error('[ERROR] Email send failed:', error);
        
        // Show error message
        formStatus.className = 'form-status error';
        formStatus.innerHTML = '<i class="fas fa-exclamation-circle"></i> [ERROR] Transmission failed. Please try again or contact via email directly.';
        formStatus.style.display = 'flex';
        
        // Log error (hacker style)
        console.log(`
[root@blackhat ~]# ./send_message.sh --status
[ERROR] Message transmission failed
[ERROR] ${error.text || error.message}
[INFO] Fallback: Contact directly at your.email@example.com
        `);
    } finally {
        // Re-enable button
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
    }
});

// ===== FORM INPUT EFFECTS =====
const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');

formInputs.forEach(input => {
    input.addEventListener('focus', (e) => {
        e.target.style.boxShadow = '0 0 15px rgba(0, 255, 0, 0.5)';
    });
    
    input.addEventListener('blur', (e) => {
        if (!e.target.value) {
            e.target.style.boxShadow = 'none';
        }
    });
});

// ===== PROJECT CARD EFFECTS =====
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.borderColor = '#39ff14';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.borderColor = '#00ff00';
    });
});

// ===== CONSOLE WELCOME MESSAGE =====
console.log(`
%c
╔════════════════════════════════════════════════════════════╗
║                                                            ║
║          █████╗  ██████╗ ██████╗ ████████╗                ║
║         ██╔══██╗██╔═══██╗██╔═══██╗╚══██╔══╝               ║
║         ██████╔╝██║   ██║██║   ██║   ██║                  ║
║         ██╔══██╗██║   ██║██║   ██║   ██║                  ║
║         ██║  ██║╚██████╔╝╚██████╔╝   ██║                  ║
║         ╚═╝  ╚═╝ ╚═════╝  ╚═════╝    ╚═╝                  ║
║                                                            ║
║              @ BLACKHAT PORTFOLIO SYSTEM                   ║
║              Version: 1.0.0                                ║
║              Status: OPERATIONAL                           ║
║                                                            ║
║  [✓] Matrix background initialized                        ║
║  [✓] Security protocols active                            ║
║  [✓] Neural networks online                               ║
║  [✓] Contact system armed                                 ║
║                                                            ║
║  Type help() for available commands                       ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝
`, 'color: #00ff00; font-family: monospace; font-size: 12px;');

// ===== CONSOLE COMMANDS =====
window.help = function() {
    console.log(`
%cAVAILABLE COMMANDS:
-------------------
help()           - Display this help message
about()          - Show information about this portfolio
skills()         - List all technical skills
projects()       - Display featured projects
contact()        - Show contact information
download()       - Download resume
clear()          - Clear console
    `, 'color: #00ff00; font-family: monospace;');
};

window.about = function() {
    console.log(`
%cABOUT:
-------
Cybersecurity professional and Full Stack Developer
Currently: WBL Intern at NIELIT (MeitY) - AI/ML
Location: Lucknow, Uttar Pradesh, India
Specialization: Network Security, AI/ML, Full Stack Development
    `, 'color: #00ff00; font-family: monospace;');
};

window.skills = function() {
    console.log(`
%cTECHNICAL SKILLS:
-----------------
[*] Cybersecurity: Penetration Testing, Network Security, Firewall
[*] AI/ML: TensorFlow, PyTorch, Machine Learning, Deep Learning
[*] Backend: Python/Django, Node.js, REST API
[*] Frontend: HTML/CSS, JavaScript, React
[*] Tools: Git, Docker, Linux, Nmap, Wireshark, Burp Suite
    `, 'color: #00ff00; font-family: monospace;');
};

window.projects = function() {
    console.log(`
%cFEATURED PROJECTS:
------------------
1. Intelligent Firewall System (C-DAC)
2. Django Web Application (Softpro India)
3. AI/ML Security Analytics (NIELIT)
4. Vulnerability Scanner
5. Network Traffic Analyzer
6. Password Strength Analyzer
    `, 'color: #00ff00; font-family: monospace;');
};

window.contact = function() {
    console.log(`
%cCONTACT INFORMATION:
--------------------
Email: your.email@example.com
Location: Lucknow, Uttar Pradesh, India
GitHub: github.com/yourusername
LinkedIn: linkedin.com/in/yourusername

Use the contact form on the website to send a message!
    `, 'color: #00ff00; font-family: monospace;');
};

window.download = function() {
    document.getElementById('downloadResume').click();
    console.log('%c[SUCCESS] Resume download initiated!', 'color: #00ff00; font-family: monospace;');
};

// ===== EASTER EGG - MATRIX MODE =====
let matrixModeActive = false;
const matrixSequence = ['m', 'a', 't', 'r', 'i', 'x'];
let sequenceIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === matrixSequence[sequenceIndex]) {
        sequenceIndex++;
        if (sequenceIndex === matrixSequence.length) {
            toggleMatrixMode();
            sequenceIndex = 0;
        }
    } else {
        sequenceIndex = 0;
    }
});

function toggleMatrixMode() {
    matrixModeActive = !matrixModeActive;
    if (matrixModeActive) {
        document.body.style.filter = 'hue-rotate(180deg)';
        console.log('%c[MATRIX MODE ACTIVATED]', 'color: #ff0000; font-family: monospace; font-size: 20px;');
    } else {
        document.body.style.filter = 'none';
        console.log('%c[MATRIX MODE DEACTIVATED]', 'color: #00ff00; font-family: monospace; font-size: 20px;');
    }
}

// ===== PERFORMANCE MONITORING =====
window.addEventListener('load', () => {
    const loadTime = performance.now();
    console.log(`%c[SYSTEM] Portfolio loaded in ${loadTime.toFixed(2)}ms`, 'color: #00ff00; font-family: monospace;');
});

// ===== PREVENT CONSOLE CLEAR (Optional) =====
// Uncomment if you want to prevent console clearing
// const noop = () => {};
// ['clear', 'log', 'warn', 'error'].forEach(method => {
//     const original = console[method];
//     console[method] = function(...args) {
//         if (method === 'clear') return;
//         original.apply(console, args);
//     };
// });

// ===== INITIALIZE =====
console.log('%c[SYSTEM] All systems initialized successfully!', 'color: #00ff00; font-family: monospace; font-weight: bold;');
console.log('%cType help() for available commands', 'color: #00ff41; font-family: monospace;');