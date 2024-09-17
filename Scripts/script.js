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

