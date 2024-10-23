document.addEventListener("DOMContentLoaded", function() {
    const dotGrid = document.querySelector('.dot-grid');
    const numRows = Math.floor(window.innerHeight / 20);  
    const numCols = Math.floor(window.innerWidth / 20);   

    for (let i = 0; i < numRows * numCols; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dotGrid.appendChild(dot);
    }
});
