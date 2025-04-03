document.addEventListener("DOMContentLoaded", function () {
    // Extract the page identifier from the current filename (e.g., "fp1.html" -> "fp1")
    const currentFile = window.location.pathname.split("/").pop(); // Get current file path
    const pageKey = currentFile.split(".")[0]; // Extract the page name (e.g., "fp1" from "fp1.html")

    // Descriptions with names for each page
    const andyDescriptions = {
        "fp1": {
            "name": "", 
            "text": "Andy is a senior in high school who is a 5’ 2” short king who is antisocial, not strong or brave, gets picked on easily, and is not very smart. Alright, we’ll just stop there. There is no need to keep bashing the main character. Just see for yourself."
        },
        "fp2": {
            "name": "Narrator", 
            "text": "Andy wakes up from his bed and sluggishly makes his way to his closet. "
        }
    };

    // Get the description and name for the current page
    const { name, text } = andyDescriptions[pageKey] || { name: "Unknown", text: "No description found for this page." };
    
    // Get the text element where the description will be displayed
    const textElement = document.querySelector("#character-description");

    if (!textElement) {
        console.error("Element with ID 'character-description' not found!");
        return;
    }

    // Create and append the "name" element dynamically inside <div class="name">
    const nameElement = document.querySelector(".name p"); // Get the <p> inside <div class="name">
    if (nameElement) {
        nameElement.textContent = name;  // Set the text for the name (e.g., "Narrator")
    } else {
        console.error('Name element not found in the page structure.');
    }

    // Set up the text element with the text and clear it initially
    textElement.textContent = ""; // Ensure this element is cleared before starting to type

    let index = 0;
    let typingFinished = false;
    let typewriterTimeout;

    // Typewriter effect function
    function typeWriter() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index); // Add one character at a time
            index++;
            typewriterTimeout = setTimeout(typeWriter, 50); // Speed of typing
        } else {
            typingFinished = true; // Typing finished
        }
    }

    // Function to either display the full text immediately or go to the next page
    function displayFullText() {
        if (!typingFinished) {
            clearTimeout(typewriterTimeout); // Stop typing effect if clicked or key pressed
            textElement.textContent = text; // Display full text
            typingFinished = true;
        } else {
            goToNextPage(); // Navigate to the next page when typing is done
        }
    }

    // Event listeners to allow user interaction to display full text or go to the next page
    document.addEventListener("click", displayFullText);
    document.addEventListener("keydown", displayFullText);

    // Start the typing effect
    typeWriter();
});

// Function to navigate to the next page based on the `data-next-page` attribute
function goToNextPage() {
    const nextPage = document.body.getAttribute("data-next-page");

    if (nextPage) {
        if (nextPage.includes(".html")) {
            // Navigate to a new HTML file
            window.location.href = nextPage;
        } else if (scenes[nextPage]) {
            // Load a new scene dynamically
            loadScene(nextPage);

            // Update the `data-next-page` to the next scene's key
            document.body.setAttribute("data-next-page", getNextSceneKey(nextPage));
        }
    }
}

// Helper function to determine the next scene key
function getNextSceneKey(currentScene) {
    const sceneKeys = Object.keys(scenes);
    const currentIndex = sceneKeys.indexOf(currentScene);

    return currentIndex >= 0 && currentIndex < sceneKeys.length - 1
        ? sceneKeys[currentIndex + 1]
        : null;
}


// Scene data for handling scene transitions
const scenes = {
    "fp1": {
        "name": "Narrator",
        "text": "Andy wakes up in his bed, groggy and disoriented.",
        "background": '/assets/forced-begining/andy-in-bed.png'
    },
    "fp2": {
        "name": "Narrator",
        "text": "He stretches and stumbles to his closet, rubbing his eyes.",
        "background": '/assets/forced-begining/ss.webp'
    },
    "fp3": {
        "name": "Narrator",
        "text": "He stretches and stumbles to his closet, rubbing his eyes.",
        "background": '/assets/forced-begining/ss.webp'
    }
};

// Function to load scenes dynamically when moving between pages
function loadScene(sceneKey) {
    if (!scenes[sceneKey]) return;

    const { name, text, background } = scenes[sceneKey];

    // Update text and name
    document.querySelector("#character-description").textContent = text;
    document.querySelector(".name p").textContent = name;

    // Remove background first to force reloading
    document.body.style.backgroundImage = "none";

    // Use a short delay before applying the new background
    setTimeout(() => {
        document.body.style.backgroundImage = `url('${background}?v=${new Date().getTime()}')`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundAttachment = "fixed";
    }, 50); // Small delay ensures it fully resets
}

