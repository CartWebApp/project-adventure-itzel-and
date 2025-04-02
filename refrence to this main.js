/* this will be used to mark what is used in just about all the scenes */
// Typewriter text

document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector(".text");
    const text = textElement.getAttribute("data-fulltext"); // Get the full text
    textElement.textContent = ""; // Clear the content
    let index = 0;
    let typingFinished = false;
    let typewriterTimeout;

    function typeWriter() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            typewriterTimeout = setTimeout(typeWriter, 50); // Adjust speed
        } else {
            typingFinished = true;
        }
    }

    function displayFullText() {
        if (!typingFinished) {
            clearTimeout(typewriterTimeout); // Stop typewriter effect
            textElement.textContent = text; // Instantly show full text
            typingFinished = true;
        } else {
            nextPage(); // If typing is finished, go to the next page
        }
    }

    document.addEventListener("click", displayFullText);
    document.addEventListener("keydown", displayFullText);

    typeWriter(); // Start typing effect
});
  


//this is to get the 'on second click, switch page'. 
//The only thins is that you have to remember to replace the "next-page.html"

let clickCount = 0;

// Ensure fade-in when the page loads
window.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("loaded");
});

function nextPage() {
    clickCount++;
    if (clickCount >= 2) {
        document.body.classList.remove("loaded"); // Start fade-out

        setTimeout(() => {
            window.location.href = "next-page.html"; // Redirect after fade-out
        }, 500); // Match CSS transition duration
    }
}

document.addEventListener("click", nextPage);
document.addEventListener("keydown", nextPage);


  
  
  
  
  