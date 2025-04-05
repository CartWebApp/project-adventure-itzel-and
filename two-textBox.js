document.addEventListener("DOMContentLoaded", function () {
    let currentSceneNumber = 1;

    // Define scene sets
    const sceneSets = {
        forcedPath: {
            1: {
                name: "Narrator",
                text1: "Andy is a senior in high school who is a 5’ 2” short king...",
                text2: "He's antisocial, not strong or brave, gets picked on easily, and is not very smart.",
                background: "../../../assets/forced-begining/ss.webp",
                nextScene: {
                    name: "Narrator",
                    text1: "Andy gets up and starts walking...",
                    text2: "The world feels big, and he feels small.",
                    background: "../../../assets/next-scene-image.webp",
                }
            },
            redirectLink: "branch-to-three.html"  // Redirect after all scenes
        },
        pathOne: {
            1: {
                name: "Narrator",
                text1: "Andy is lying on the ground...",
                text2: "He decides to get up and make a move.",
                background: "../../../assets/alternate-path/tech-background.webp",
                nextScene: {
                    name: "Narrator",
                    text1: "He stands up and looks around...",
                    text2: "There’s a glimmer of hope in his eyes.",
                    background: "../../../assets/next-scene-tech.webp",
                }
            },
            redirectLink: "path1/bring-who.html"  // Redirect after all scenes
        }
    };

    // Get the scene set from the query parameter (default to 'forcedPath' if not provided)
    const sceneSetName = document.body.dataset.path || 'forcedPath';
    let currentSceneSet = sceneSets[sceneSetName];

    const textElement = document.querySelector("#character-description");
    const textElement2 = document.querySelector("#character-description2");
    const nameElement = document.querySelector(".name p");

    if (!textElement || !textElement2 || !nameElement) {
        console.error("Required elements not found!");
        return;
    }

    let scene = currentSceneSet[currentSceneNumber];
    let { name, text1, text2, background, nextScene } = scene;

    nameElement.textContent = name;
    textElement.textContent = "";  // Reset the text
    textElement2.textContent = ""; // Reset the second text element

    // Set the background for the scene
    document.body.style.backgroundImage = `url('${background}?v=${new Date().getTime()}')`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundAttachment = "fixed";

    let index1 = 0, index2 = 0;
    let typingFinished1 = false, typingFinished2 = false;
    let typewriterTimeout1, typewriterTimeout2;

    // Typewriter effect function for the first text element
    function typeWriter1() {
        if (index1 < text1.length) {
            textElement.textContent += text1.charAt(index1);
            index1++;
            typewriterTimeout1 = setTimeout(typeWriter1, 50);
        } else {
            typingFinished1 = true;
            if (typingFinished2) {
                setTimeout(loadNextScene, 1000);
            }
        }
    }

    // Typewriter effect function for the second text element
    function typeWriter2() {
        if (index2 < text2.length) {
            textElement2.textContent += text2.charAt(index2);
            index2++;
            typewriterTimeout2 = setTimeout(typeWriter2, 50);
        } else {
            typingFinished2 = true;
            if (typingFinished1) {
                setTimeout(loadNextScene, 1000);
            }
        }
    }

    // Function to display full text in both elements at once
    function displayFullText() {
        if (!typingFinished1 || !typingFinished2) {
            // If typing is still going, stop the effect and show the full text
            clearTimeout(typewriterTimeout1);
            clearTimeout(typewriterTimeout2);
            textElement.textContent = text1;
            textElement2.textContent = text2;
            typingFinished1 = true;
            typingFinished2 = true;

            // If there's a next scene, load it
            if (nextScene) {
                setTimeout(loadNextScene, 1000);
            }
        } else {
            goToNextScene();
        }
    }

    // Function to load the next scene
    function loadNextScene() {
        if (!nextScene) return;

        nameElement.textContent = nextScene.name;
        textElement.textContent = "";
        textElement2.textContent = "";
        document.body.style.backgroundImage = `url('${nextScene.background}?v=${new Date().getTime()}')`;

        scene = nextScene;
        name = scene.name;
        text1 = scene.text1;
        text2 = scene.text2;

        // Reset for the next scene
        typingFinished1 = false;
        typingFinished2 = false;
        index1 = 0;
        index2 = 0;

        // Start the typewriter effect again
        typeWriter1();
        typeWriter2();
    }

    // Event listeners for user interaction (click or keydown)
    document.addEventListener("click", displayFullText);
    document.addEventListener("keydown", displayFullText);

    // Start typing the first scene
    typeWriter1();
    typeWriter2();
});
