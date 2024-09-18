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
    const nameElement = document.getElementById('name');
    const devSection = document.querySelector('.dev');
    const musSection = document.querySelector('.mus');
    const therSection = document.querySelector('.ther');

    const devLi = document.getElementById('development');
    const musLi = document.getElementById('music');
    const therLi = document.getElementById('therapy');

   // Toggle the dev section
   devLi.addEventListener('click', function() {
    togglePopup(devSection);
});

// Toggle the mus section
musLi.addEventListener('click', function() {
    togglePopup(musSection);
});

// Toggle the ther section
therLi.addEventListener('click', function() {
    togglePopup(therSection);
});

// Function to toggle popup effect
function togglePopup(section) {
    if (section.classList.contains('hidden')) {
        section.classList.remove('hidden');
        section.classList.add('visible');
    } else {
        section.classList.remove('visible');
        section.classList.add('hidden');
    }
}
});