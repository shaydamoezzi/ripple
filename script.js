document.addEventListener("DOMContentLoaded", function() {
    const rippleContainer = document.querySelector('.ripple-container');

    rippleContainer.addEventListener('mousemove', function(e) {
        createRipple(e.pageX, e.pageY);
    });

    function createRipple(x, y) {
        const ripple = document.createElement('div');
        ripple.classList.add('ripple');
        ripple.style.width = '100px'; // Set the initial size of the ripple
        ripple.style.height = '100px'; // Set the initial size of the ripple
        ripple.style.left = `${x - 50}px`; // Center the ripple at mouse x position
        ripple.style.top = `${y - 50}px`; // Center the ripple at mouse y position
        
        rippleContainer.appendChild(ripple);

        // Remove the ripple element after the animation ends
        ripple.addEventListener('animationend', () => {
            ripple.remove();
        });
    }
});
