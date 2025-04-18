document.addEventListener('DOMContentLoaded', function() {
    // Simulate real-time visitors
    const visitorCount = document.getElementById('visitor-count');
    let count = parseInt(visitorCount.textContent);
    
    // Randomly fluctuate visitor count
    setInterval(function() {
        const change = Math.random() > 0.5 ? 1 : -1;
        count = Math.max(5, count + change); // Never go below 5
        visitorCount.textContent = count;
    }, 5000);
    
    // Simulate "people also viewing" feature
    const projects = [
        "ACADEMIC_PPT_DESIGNS",
        "COLLEGE_EVENT_VIDEOS",
        "CAMPUS_PHOTOGRAPHY"
    ];
    
    const visitorsElement = document.createElement('div');
    visitorsElement.className = 'active-visitors';
    visitorsElement.style.position = 'fixed';
    visitorsElement.style.bottom = '120px';
    visitorsElement.style.right = '30px';
    visitorsElement.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    visitorsElement.style.padding = '15px';
    visitorsElement.style.borderRadius = '10px';
    visitorsElement.style.boxShadow = '0 0 10px rgba(5, 217, 232, 0.5)';
    visitorsElement.style.zIndex = '998';
    visitorsElement.style.display = 'none';
    visitorsElement.style.border = '1px solid var(--cyberpunk-blue)';
    visitorsElement.style.fontFamily = "'Share Tech Mono', monospace";
    
    document.body.appendChild(visitorsElement);
    
    // Show active visitors on project hover
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            const projectName = this.querySelector('h3').textContent;
            const randomVisitors = Math.floor(Math.random() * 3) + 1; // 1-3 visitors
            
            let visitorsText = `> ${randomVisitors}_USERS_VIEWING_${projectName}`;
            if (randomVisitors === 1) {
                visitorsText = `> 1_USER_VIEWING_${projectName}`;
            }
            
            visitorsElement.textContent = visitorsText;
            visitorsElement.style.display = 'block';
            
            // Position near the project card
            const rect = this.getBoundingClientRect();
            visitorsElement.style.top = `${rect.top + window.scrollY}px`;
            visitorsElement.style.left = `${rect.left + rect.width + 20}px`;
        });
        
        card.addEventListener('mouseleave', function() {
            visitorsElement.style.display = 'none';
        });
    });
    
    // Cyberpunk Testimonials
    const testimonials = [
        {
            name: "JOHN_DOE",
            role: "PROFESSOR_AT_IIITD",
            text: "DHEERAJ'S PPT DESIGNS WERE EXCEPTIONAL - CLEAR, VISUALLY APPEALING, AND PROFESSIONAL."
        },
        {
            name: "JANE_SMITH",
            role: "EVENT_COORDINATOR",
            text: "THE EVENT VIDEOS PERFECTLY CAPTURED THE ENERGY AND SPIRIT OF OUR COLLEGE FEST."
        },
        {
            name: "ALEX_JOHNSON",
            role: "PHOTOGRAPHY_CLIENT",
            text: "DHEERAJ HAS AN AMAZING EYE FOR COMPOSITION AND LIGHTING IN HIS PHOTOGRAPHY WORK."
        }
    ];
    
    // Add testimonials to the about section
    const aboutSection = document.querySelector('.about-text');
    const testimonialsContainer = document.createElement('div');
    testimonialsContainer.className = 'testimonials';
    testimonialsContainer.style.marginTop = '30px';
    
    testimonials.forEach(testimonial => {
        const testimonialElement = document.createElement('div');
        testimonialElement.className = 'testimonial';
        testimonialElement.style.backgroundColor = 'rgba(255, 42, 109, 0.1)';
        testimonialElement.style.padding = '15px';
        testimonialElement.style.borderRadius = '10px';
        testimonialElement.style.marginBottom = '15px';
        testimonialElement.style.border = '1px solid var(--cyberpunk-blue)';
        
        testimonialElement.innerHTML = `
            <p style="font-style: italic;">"${testimonial.text}"</p>
            <p style="font-weight: 500; margin-top: 10px;">— ${testimonial.name}, ${testimonial.role}</p>
        `;
        
        testimonialsContainer.appendChild(testimonialElement);
    });
    
    aboutSection.appendChild(testimonialsContainer);
});