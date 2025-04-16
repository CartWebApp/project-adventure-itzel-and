document.addEventListener("DOMContentLoaded", function () {
    let currentSceneNumber = 1;

    const sceneSetName = document.body.dataset.path || 'forcedPath';

    function toKebabCase(str) {
        return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    }
    
    function updateBackground(sceneSetName, sceneNumber) {
        const folderPath = `background-imgs/${sceneSetName}/`;  // dynamically use the data-path value
        const imgPath = `${folderPath}${sceneNumber}.png?v=${new Date().getTime()}`;
    
        console.log("Attempting to load image from path:", imgPath);
    
        document.body.style.backgroundImage = `url('${imgPath}')`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundAttachment = "fixed";
    
        const img = new Image();
        img.onload = function() {
            console.log("Image loaded successfully!");
        };
        img.onerror = function() {
            console.error("Error loading image:", imgPath);
        };
        img.src = imgPath;
    }
    
    
    
    

    
    const sceneSets = {
        // when replacing the dialog with up to 3 pieces of dialog,
        //  make sure you replace the css in the new html, and you follow this format for dialog
        /*text: {
            dialog: "Andy wakes up from his bed and sluggishly makes his way to his closet.",
            dialog2: "He stretches and yawns, still groggy from sleep.",
            dialog3: "The morning light creeps in through the blinds."
        }*/
        forcedPath: /*dialog checked*/{
            1: {
                name: "Andy",
                text: "\"Why do you care at what time I get to school? You’re not the teacher.\"",
                background: "",
            },
            2: {
                name: "Derik",
                text: "\"Oh you wanna talk back now?\"",
                background: "",
            },
            3: {
                name: "Andy",
                text: "\"Just leave me alone!\"",
                background: "",
            },
            4: {
                name: "Derik",
                text: "\"You’re not the one who decides that.\"",
                background: "",
            },
            5: {
                name: "Narrator",
                text: "*Derik reaches for Andy and grabs him by the shirt.*",
                background: "",
            },
            6: {
                name: "Derik",
                text: "\"You’re gonna regret talking to me like that.\"",
                background: "",
            },
            7: {
                name: "Narrator",
                text: "*Derik punches Andy in the face as he falls to the ground. Derik kicks Andy, he and his entire friend group start laughing at him. Derik feels a hand on his left shoulder and turns around.*",
                background: "",
            },
            8: {
                name: "Teacher",
                text: "\"What do you think you’re doing?\"",
                background: "",
            },
            9: {
                name: "Derik",
                text: "\"Oh, him and I are friends *points to Andy on the ground*\"",
                background: "",
            },
            10: {
                name: "Teacher",
                text: "\"Right, let’s see if that’s true when we look over the camera footage *points to the surveillance cameras*\"",
                background: "",
            },
            11: {
                name: "Derik",
                text: "\"Come on, he’s not even hurt!\"",
                background: "",
            },
            12: {
                name: "Teacher",
                text: "\"You’re coming with me.\"",
                background: "",
            },
            13: {
                name: "Narrator",
                text: "*Derik leaves with the teacher and his friends run away.*",
                background: "",
            },
            14: {
                name: "Narrator",
                text: "*Andy gets up and starts limping to the cafeteria.*",
                background: "",
            },

            

            redirectLink: "branch-to-three.html"  // Redirect here after all scenes in this path
        },


        fakePath: /*dialog checked*/{
            1: {
                name: "Narrator", 
                text: "Andy is a senior in high school who is a 5’ 2” short king who is antisocial, not strong or brave, gets picked on easily, and is not very smart. Alright, we’ll just stop there. There is no need to keep bashing the main character. Just see for yourself.",
            },
            "2": {
                name: "Narrator", 
                text: "Andy wakes up from his bed and sluggishly makes his way to his closet.",
                 
            },
            "3": {
                name: "Narrator", 
                text: "He changes into his school clothes, noting the mustard stain on his shirt.",
                 
            },
            

            redirectLink: "branch-to-three.html"  // Redirect here after all scenes in this path
        },

       
    }

    let currentSceneSet = sceneSets[sceneSetName];

    const nameElement = document.querySelector(".name p");

    // Handle all #character-description elements
    const textElements = {
        dialog: document.querySelector("#character-description"),
        dialog2: document.querySelector("#character-description2"),
        dialog3: document.querySelector("#character-description3")
    };

    if (!nameElement || !textElements.dialog) {
        console.error("Required elements not found!");
        return;
    }

    let scene = currentSceneSet[currentSceneNumber];
    let { name, text, background, nextScene } = scene;

    nameElement.textContent = name;
    updateBackground(sceneSetName, currentSceneNumber);

    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundAttachment = "fixed";

    let index = 0;
    let typingFinished = false;
    let typewriterTimeouts = [];

    // Clear all text areas
    function clearAllText() {
        Object.values(textElements).forEach(el => {
            if (el) el.textContent = "";
        });
    }

    // Fill in text with typing effect
    function typeWriterText(contentMap) {
        clearAllText();
        typingFinished = false;
        index = 0;

        Object.entries(contentMap).forEach(([key, fullText]) => {
            if (textElements[key]) {
                let i = 0;
                function typeChar() {
                    if (i < fullText.length) {
                        textElements[key].textContent += fullText.charAt(i);
                        i++;
                        typewriterTimeouts.push(setTimeout(typeChar, 50));
                    } else {
                        typingFinished = true;
                        if (nextScene) setTimeout(loadNextScene, 1000);
                    }
                }
                typeChar();
            }
        });
    }

    function displayFullText() {
        if (!typingFinished) {
            typewriterTimeouts.forEach(clearTimeout);
            typingFinished = true;
            if (typeof text === 'object') {
                Object.entries(text).forEach(([key, value]) => {
                    if (textElements[key]) {
                        textElements[key].textContent = value;
                    }
                });
            } else {
                textElements.dialog.textContent = text;
            }
            if (nextScene) setTimeout(loadNextScene, 1000);
        } else {
            goToNextScene();
        }
    }

    function loadNextScene() {
        if (!nextScene) return;

        nameElement.textContent = nextScene.name;
        updateBackground(sceneSetName, currentSceneNumber); // or sceneNumber if you're incrementing there

        name = nextScene.name;
        text = nextScene.text;
        typingFinished = false;
        index = 0;

        if (typeof text === 'object') {
            typeWriterText(text);
        } else {
            typeWriterText({ dialog: text });
        }
    }

    function goToNextScene() {
        currentSceneNumber++;
        const totalScenes = Object.keys(currentSceneSet).filter(key => key !== 'redirectLink').length;

        if (currentSceneNumber > totalScenes) {
            const redirectUrl = currentSceneSet.redirectLink || "default-endpage.html";
            window.location.href = redirectUrl;
        } else {
            scene = currentSceneSet[currentSceneNumber];
            name = scene.name;
            text = scene.text;
            background = scene.background;
            nextScene = scene.nextScene || null;

            nameElement.textContent = name;
            updateBackground(sceneSetName, currentSceneNumber);


            if (typeof text === 'object') {
                typeWriterText(text);
            } else {
                typeWriterText({ dialog: text });
            }
        }
    }

    document.addEventListener("click", displayFullText);
    document.addEventListener("keydown", displayFullText);

    if (typeof text === 'object') {
        typeWriterText(text);
    } else {
        typeWriterText({ dialog: text });
    }
});
