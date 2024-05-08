document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');

    // Create 800 squares and append them to the container
    for (let i = 0; i < 800; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }

    // Add event listeners for hover effect
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseover', function() {
            // Change background color to Coffee
            square.style.backgroundColor = '#6F4E37';

            // Revert color after 1 second
            setTimeout(() => {
                square.style.backgroundColor = '#E6E6FA'; // Lavender
            }, 1000);
        });
    });
});
