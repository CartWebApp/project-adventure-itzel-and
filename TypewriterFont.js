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
      clearTimeout(typewriterTimeout); // Stop typewriter effect
      textElement.textContent = text; // Instantly show full text
      typingFinished = true;
  }

  /*comment out the bottom 2 when you dont 
  want the user to skip the dialog*/
  document.addEventListener("click", displayFullText); 
  document.addEventListener("keydown", displayFullText);

  typeWriter(); // Start typing effect
});





