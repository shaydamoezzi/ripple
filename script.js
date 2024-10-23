document.addEventListener("DOMContentLoaded", function() {
    const rippleContainer = document.querySelector('.ripple-container');

    rippleContainer.addEventListener('mousemove', function(e) {
        createRipple(e.pageX, e.pageY);
    });

    function createRipple(x, y) {
        const ripple = document.createElement('div');
        ripple.classList.add('ripple');
        ripple.style.width = '15px'; 
        ripple.style.height = '15px'; 
        ripple.style.left = `${x - 20}px`; 
        ripple.style.top = `${y - 20}px`; 
        
        rippleContainer.appendChild(ripple);

        ripple.addEventListener('animationend', () => {
            ripple.remove();
        });
    }
});


document.getElementById('ripple-button').addEventListener('click', function(event) {
    // Create ripple element
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    
    // Get the button position and size
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    
    // Set ripple dimensions and position
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${event.clientY - rect.top - size / 2}px`;

    // Append ripple to button
    this.appendChild(ripple);

    // Fade the button and transform it slightly
    this.style.opacity = '0';
    this.style.transform = 'scale(0.95)'; // Optional: slight shrink effect

    // Remove the button after fading out
    setTimeout(() => {
        this.style.display = 'none'; // Hide the button completely
    }, 500); // Time matches the fade-out duration

    // Redirect to blog page after the ripple animation
    setTimeout(() => {
        location.href = 'blog.html'; // Change to your blog page
    }, 600); // Time matches the ripple animation duration
});

