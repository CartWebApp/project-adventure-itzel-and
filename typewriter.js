// typewriter.js - File that handles the typewriter effect

function typeWriterEffect(element, text, speed) {
    let index = 0;
    let typingFinished = false;
    let typewriterTimeout;

    // Clear text before starting
    element.textContent = "";

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index); // Add one character at a time
            index++;

            // Adjust typing speed (standard speed or faster after punctuation)
            let typingSpeed = speed;
            if (/[.,!?]/.test(text.charAt(index - 1))) {
                typingSpeed = 150; // Delay after punctuation
            }

            // Continue typing with adjusted speed
            typewriterTimeout = setTimeout(type, typingSpeed);
        } else {
            typingFinished = true; // Text is finished typing
        }
    }

    // Start typing effect
    type();
    
    return typingFinished;
}
