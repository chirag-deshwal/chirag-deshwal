document.addEventListener('DOMContentLoaded', () => {

    /* --- Boot Sequence --- */
    const bootSequence = document.getElementById('boot-sequence');
    const bootTexts = document.querySelectorAll('.boot-text span');

    let delay = 0;
    bootTexts.forEach((text, index) => {
        text.style.opacity = '0';
        setTimeout(() => {
            text.style.opacity = '1';
            // Typewriter effect per line could be added here
        }, delay);
        delay += 800; // 800ms per line
    });

    setTimeout(() => {
        bootSequence.style.opacity = '0';
        setTimeout(() => {
            bootSequence.style.display = 'none';
        }, 500);
    }, delay + 1000); // Wait a bit after last line


    /* --- Custom Cursor --- */
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });


    /* --- Tab Navigation --- */
    const navItems = document.querySelectorAll('.nav-item');
    const viewSections = document.querySelectorAll('.view-section');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('data-tab');

            // Update active nav
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            // Show section (Simple implementation for now)
            viewSections.forEach(section => {
                if (section.id === `${targetId}-view` || (targetId === 'hub' && section.id === 'hub-view')) {
                    section.style.display = 'grid'; // Maintain grid layout for hub
                } else {
                    section.style.display = 'none';
                }
            });

            // Smooth Scroll if needed (or just instant swap for OS feel)
        });
    });


    /* --- Progress Bar Animation --- */
    // Only animate when visible in viewport
    const progressBars = document.querySelectorAll('.progress-bar-fill');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.style.width;
                entry.target.style.width = '0%';
                setTimeout(() => {
                    entry.target.style.transition = 'width 1.5s ease-out';
                    entry.target.style.width = width;
                }, 100);
                observer.unobserve(entry.target);
            }
        });
    });

    progressBars.forEach(bar => observer.observe(bar));

    /* --- Typing Effect for Role --- */
    const roles = ["Android Developer", "Flutter Expert", "AI Enthusiast", "Team Lead"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const roleElement = document.querySelector('.role-title');

    // Simple blinking cursor is already in CSS
    // Function to rotate roles could be added for "more interactive" feel

});
