//this will record the users choices for you... you need to refrence this for every choide
// this will record any a link you press and will display it all 

// make sure to use this 'data-choice="Picked up the artifact"' when you have a choice... this records off that

// Get previously saved choices or create a new list
let choices = JSON.parse(localStorage.getItem("playerChoices")) || [];

// Attach listeners to all anchor links on the page
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function () {
        // Check if the link has a 'data-choice' attribute
        const choice = link.getAttribute("data-choice");

        if (choice) {
            // Add the choice to the array if 'data-choice' is present
            choices.push(choice);
            // Save it in localStorage
            localStorage.setItem("playerChoices", JSON.stringify(choices));
        }
    });
});
