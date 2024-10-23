document.addEventListener("DOMContentLoaded", function() {
    const rippleContainer = document.querySelector('.ripple-container');

    rippleContainer.addEventListener('mousemove', function(e) {
        createRipple(e.pageX, e.pageY);
    });

    function createRipple(x, y) {
        const ripple = document.createElement('div');
        ripple.classList.add('ripple');
        ripple.style.width = '30px'; 
        ripple.style.height = '30px'; 
        ripple.style.left = `${x - 30}px`; 
        ripple.style.top = `${y - 30}px`; 
        
        rippleContainer.appendChild(ripple);

        ripple.addEventListener('animationend', () => {
            ripple.remove();
        });
    }
});
