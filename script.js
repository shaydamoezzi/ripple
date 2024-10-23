document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.dot-container');
    
    for (let i = 0; i < 50; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        container.appendChild(dot);
    }
});
