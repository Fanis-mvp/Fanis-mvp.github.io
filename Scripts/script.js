//Name Bounce

document.addEventListener("DOMContentLoaded", function() {
    const nameElement = document.getElementById('name');
    
    nameElement.addEventListener('click', function() {
        // Add rotation class
        nameElement.classList.add('rotate-crazy');
        
        // After 2 seconds (duration of the animation), toggle the text
        setTimeout(function() {
            nameElement.classList.remove('rotate-crazy');
            if (nameElement.textContent === "I'm Fanis,") {
                nameElement.textContent = 'Fun is...';
            } else {
                nameElement.textContent = "I'm Fanis,";
            }
        }, 2000); // Adjust the timeout to match your rotation animation duration
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const developmentElement = document.getElementById('development');
    const textBox = document.getElementById('text-box');

    developmentElement.addEventListener('click', function() {
        // Add rotation class
        developmentElement.classList.add('clicked');
        
        // Show the text box with unfolding effect
        textBox.classList.add('visible');
        
        // Remove the class after animation duration
        setTimeout(function() {
            developmentElement.classList.remove('clicked');
        }, 2000); // Match this duration with the flash animation duration
    });
});