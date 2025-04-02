// fp.js - File that contains descriptions for each page
const andyDescriptions = {
    "fp1": "Andy stood at the school entrance, staring at the massive doors. He sighed. Another day of getting through classes unnoticed... hopefully.",
    "fp2": "Lunch was always the hardest part of the day. Andy found an empty table in the corner and pretended to be deeply invested in his sandwich.",
    "fp3": "Detention. Again. He wasn’t even sure what he did this time, but the teacher’s glare said it all.",
    "fp4": "It was late at night, and the school hallways felt eerily empty. Andy could swear he heard footsteps behind him, but when he turned around—nothing."
};

// Get the description for the current page based on the URL
function getDescription() {
    // Extract the page identifier from the URL (e.g., "fp1.html" -> "fp1")
    let currentFile = window.location.pathname.split("/").pop().split(".")[0];
    
    // Return the description or a default message if not found
    return andyDescriptions[currentFile] || "No description found for this page.";
}


//window.andyDescriptions = andyDescriptions;