document.addEventListener('DOMContentLoaded', function() {
    const avatar = document.getElementById('avatar');
    const speechBubble = document.getElementById('avatar-speech');
    const hour = new Date().getHours();
    
    // Cyberpunk Avatar messages
    let greeting = '';
    if (hour < 12) {
        greeting = '> GOOD_MORNING_USER';
    } else if (hour < 18) {
        greeting = '> GOOD_AFTERNOON_USER';
    } else {
        greeting = '> GOOD_EVENING_USER';
    }
    
    const messages = [
        `${greeting}`,
        "> SYSTEM_SCAN_COMPLETE",
        "> PORTFOLIO_ACCESS_GRANTED",
        "> DESIGN_MODULES_ACTIVE",
        "> PHOTOGRAPHY_DATABASE_LOADED",
        "> CONTACT_PROTOCOL_INITIALIZED"
    ];
    
    // Change message every 10 seconds
    let messageIndex = 0;
    speechBubble.textContent = messages[messageIndex];
    
    setInterval(function() {
        messageIndex = (messageIndex + 1) % messages.length;
        speechBubble.textContent = messages[messageIndex];
        
        // Add animation
        speechBubble.style.animation = 'none';
        void speechBubble.offsetWidth; // Trigger reflow
        speechBubble.style.animation = 'fadeIn 0.5s ease';
    }, 10000);
    
    // Click interaction
    avatar.addEventListener('click', function() {
        // Random message on click
        const randomIndex = Math.floor(Math.random() * messages.length);
        speechBubble.textContent = messages[randomIndex];
        
        // Pulse animation
        this.style.animation = 'none';
        void this.offsetWidth; // Trigger reflow
        this.style.animation = 'pulse 0.5s ease';
    });
    
    // Avatar follows scroll position
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.body.scrollHeight;
        
        // Calculate percentage scrolled
        const scrollPercent = (scrollPosition / (documentHeight - windowHeight)) * 100;
        
        // Change avatar expression based on scroll
        if (scrollPercent < 25) {
            speechBubble.textContent = "> SYSTEM_BOOT_COMPLETE";
        } else if (scrollPercent > 75) {
            speechBubble.textContent = "> END_OF_LINE_DETECTED";
        }
    });
});