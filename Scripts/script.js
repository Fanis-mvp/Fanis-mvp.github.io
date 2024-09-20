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
        }, 1200); // Adjust the timeout to match your rotation animation duration
    });
});

// dev mus ther
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
//multiple word
document.addEventListener("DOMContentLoaded", function() {
    const multipleElement = document.getElementById('multiple');
    
    // Add click event listener to the entire #multiple element
    multipleElement.addEventListener('click', function() {
        // Toggle the 'clicked' class on all span elements within #multiple
        const letters = multipleElement.querySelectorAll('span');
        letters.forEach(letter => {
            letter.classList.toggle('clicked');
        });
    });
});

//image
document.addEventListener("DOMContentLoaded", function() {
    const flashyElement = document.getElementById('flashy');
    const hintContainer = document.getElementById('hint-container');

    flashyElement.addEventListener('click', function() {
        // Toggle the visibility of the image by adding/removing the .show-image class
        hintContainer.classList.toggle('show-image');
    });
});