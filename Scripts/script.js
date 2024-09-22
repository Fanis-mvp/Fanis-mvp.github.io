// Welcome Section -- Name spinJump

document.addEventListener("DOMContentLoaded", function() {
    const nameElement = document.getElementById('name');
    
    nameElement.addEventListener('click', function() {
        nameElement.classList.add('rotate-crazy');
        
        setTimeout(function() {
            nameElement.classList.remove('rotate-crazy');
            if (nameElement.textContent === "I'm Fanis,") {
                nameElement.textContent = 'Fun is...';
            } else {
                nameElement.textContent = "I'm Fanis,";
            }
        }, 1200);
    });
});

// END Welcome Section -- Name spinJump

// Hint Section -- Flashy image reveal

document.addEventListener("DOMContentLoaded", function() {
    const flashyElement = document.getElementById('flashy');
    const hintContainer = document.getElementById('hint-container');

    flashyElement.addEventListener('click', function() {
        hintContainer.classList.toggle('show-image');
    });
});

// END Hint Section -- Flashy image reveal

// Colorful "multiple" Section -- "multiple" word animation

document.addEventListener("DOMContentLoaded", function() {
    const multipleElement = document.getElementById('multiple');
    
    multipleElement.addEventListener('click', function() {
        const letters = multipleElement.querySelectorAll('span');
        letters.forEach(letter => {
            letter.classList.toggle('clicked');
        });
    });
});

// END Colorful "multiple" Section -- "multiple" word animation

// Unfolding Roles List Section -- Toggle Dev, Mus and Ther li elements

document.addEventListener("DOMContentLoaded", function() {
    const nameElement = document.getElementById('name');
    const devSection = document.querySelector('.dev');
    const musSection = document.querySelector('.mus');
    const therSection = document.querySelector('.ther');

    const devLi = document.getElementById('development');
    const musLi = document.getElementById('music');
    const therLi = document.getElementById('therapy');

   devLi.addEventListener('click', function() {
    togglePopup(devSection);
});

musLi.addEventListener('click', function() {
    togglePopup(musSection);
});

therLi.addEventListener('click', function() {
    togglePopup(therSection);
});

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

// END Unfolding Roles List Section -- Toggle Dev, Mus and Ther li elements