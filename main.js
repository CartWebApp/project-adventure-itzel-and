document.addEventListener("DOMContentLoaded", function () {
    // Extract the page identifier from the current filename (e.g., "fp1.html" -> "fp1")
    const currentFile = window.location.pathname.split("/").pop(); // Get current file path
    const pageKey = currentFile.split(".")[0]; // Extract the page name (e.g., "fp1" from "fp1.html")

    // Descriptions with names for each page
    const andyDescriptions = {
        "fp1": {
            "name": "", 
            "text": "Andy is a senior in high school who is a 5’ 2” short king that is anti-social, not strong, nor brave, gets picked on easily, and not very smart. Alright, we’ll just stop there, no need to keep bashing the main character. Just see for yourself."
        },
        "fp2": {
            "name": "Narrator", 
            "text": "Andy wakes up from his bed and sluggishly makes his way to his closet"
        },
        "fp3": {
            "name": "Narrator", 
            "text": "He changes into his school clothes, noting the mustard stain on his shirt. "
        },
        "fp4": {
            "name": "Narrator", 
            "text": "Despite the stain, he realized he was out of time and books it to school."
        },
        "fp5": {
            "name": "Narrator", 
            "text": "When Andy finally makes it to school, he is greeted by a 6’ 4” handsome fella, who wears a jock jacket. He plays football for the Muddogs at Sierra Vista High."
        },
        "fp6": {
            "name": "Derik", 
            "text": "Hey there little guy, how's that stain doin’ for ya? Did your mommy forget to wash it out for you? Boo hoo"
        },
        "fp7": {
            "name": "Andy", 
            "text": "Actually, m… my mom did forget to do the laundry last night."
        },
        "fp8": {
            "name": "Derik", 
            "text": "Well at least my mom’s still alive. Ha! It feels good to be me."
        },
        "fp9": {
            "name": "Narrator", 
            "text": "I guess he’s not very smart either… School funding must be on a tight budget these days."
        },
        "fp10": {
            "name": "Narrator", 
            "text": "Andy walks to the cafeteria to get his breakfast."
        },
        "fp11": {
            "name": "Narrator", 
            "text": "He goes to the lunch line and eagerly waits to get his 8 cartons of white milk. Andy gets the milk, downs 4 of them while he stores the rest in his backpack. "
        },
        "fp12": {
            "name": "Narrator", 
            "text": "Andy now has 16 cartons of White milk in his backpack but that's not very far from his backpack's maximum capacity of 20."
        },
        "fp13": {
            "name": "Narrator", 
            "text": "Andy goes outside to find a tree as lonely as him and sits criss-cross applesauce under it, waiting for the school day to start. When the bell rings, he starts heading to his first class, Statistics."
        },
        "fp14": {
            "name": "Mr. Hankey", 
            "text": "Remember class, I’m only giving you time today to study in class. The test is tomorrow, so be prepared!"
        },
        "fp15": {
            "name": "Narrator", 
            "text": "Andy gets out his study guide but realizes he didn’t finish filling it out. He takes a longer look at it, slams his head on the desk and sleeps for the entire period."
        },
        "fp16": {
            "name": "Narrator", 
            "text": "When the bell rings, he wakes up groggily and heads to his next class."
        },
        "fp17": {
            "name": "Narrator", 
            "text": "Instead of listening to the teacher's lecture, he dozes off again so that he can continue that good dream he had, which was rudely interrupted."
        },
        "fp18": {
            "name": "Narrator", 
            "text": "For the rest of his classes, he continues this process until it reaches his favorite period, lunch."
        },
        "fp19": {
            "name": "Narrator", 
            "text": "Andy heads over to the school cafeteria once more, he gets 8 cartons of white milk (as he usually would)"
        },
        "fp20": {
            "name": "Narrator", 
            "text": "You see this? That means Andy’s backpack has reached full capacity for his white milk! He needs to go dump it out at his locker.”"
        },
        "fp21": {
            "name": "Narrator", 
            "text": "Andy goes to his locker and drops off all 20 of his milk cartons. Now that his backpack is empty … NEW MISSION UNLOCKED: Acquire as much milk as you can"
        },
        "fp22": {
            "name": "Narrator", 
            "text": "Andy goes back to the cafetera and asks people for their milk."
        },
        "fp23": {
            "name": "Andy", 
            "text": "Do you have any white milk to spare?"
        },
        "fp24": {
            "name": "Andy", 
            "text": "Milk? Does anybody have white milk for good ole Andy"
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
    // Get the next page from the `data-next-page` attribute in the body tag
    const nextPage = document.body.getAttribute("data-next-page");
    
    if (nextPage) {
        window.location.href = nextPage; // Redirect to the next page
    }
}
