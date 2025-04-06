// this will record the users choices for you... you need to reference this for every choice
// this will record any click you do on the paragraphs with 'data-choice' attributes

// Get previously saved choices or create a new list
let choices = JSON.parse(localStorage.getItem("playerChoices")) || [];

// Attach listeners to all paragraphs with 'data-choice' attributes
document.querySelectorAll("[data-choice]").forEach(paragraph => {
    paragraph.addEventListener("click", function () {
        // Get the choice from the 'data-choice' attribute
        const choice = paragraph.getAttribute("data-choice");

        if (choice) {
            // Add the choice to the array
            choices.push(choice);
            // Save it in localStorage
            localStorage.setItem("playerChoices", JSON.stringify(choices));
        }
    });
});
