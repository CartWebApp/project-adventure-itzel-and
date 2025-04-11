document.addEventListener("DOMContentLoaded", function () {
    let currentSceneNumber = 1;

    ignoreRock: {
        1: {
            name: "Andy",
            text: "“What a weird rock… I won’t have enough space in my backpack later. I need to stock up on my milk.”",
            background: "",
        },
        2: {
            name: "Narrator",
            text: "“Andy continues to walk to school ignoring the rock that he found. When Andy makes it to school, he sees Derik waiting for him at the front. Andy stops walking for a second thinking how he could avoid talking to him. Since the school is gated Andy has no choice but to walk through the entrance. He takes a big sigh before entering the school.”",
            background: "",
        },
        3: {
            name: "Derik",
            text: "\"Took you long enough.\"",
            background: "",
        },

    },
},

respondDerik: {
    1: {
        name: "Narrator",
        background: "../../../assets/alternate-path/tech-background.webp", //change this link
        text: {
            dialog: "Andy defends himself",
            dialog2: "Says Nothing",
        }
    },

    defendHimself: {
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
        redirectLink: ""  //replace redirect link with main storyline (school cafeteria)               
    },
    
    sayNothing: {
        1: {
            name: "Andy",
            text: "\"...\"",
            background: "",
        },
        2: {
            name: "Derik",
            text: "\"You’re ignoring me now?\"",
            background: "",
        },
        3: {
            name: "Andy",
            text: "\"Sorry, I just need to get to class. I have a test today-\"",
            background: "",
        },
        4: {
            name: "Derik",
            text: "\"Ugh, do you ever shut up?\"",
            background: "",
        },
        5: {
            name: "Narrator",
            text: "*Andy tries to walk away until Derik sticks out his leg in front of him. Andy trips over Derik’s foot and falls flat on the floor. Derik and his friends start laughing hysterically.*",
            background: "",
        },
        6: {
            name: "Derik",
            text: "\"Ah, that was good…\"",
            background: "",
        },
        7: {
            name: "Narrator",
            text: "*Derik and his friend walk away, leaving Andy on the floor.*",
            background: "",
        },
        8: {
            name: "Narrator",
            text: "*Andy gets up from the floor and goes to the cafeteria*",
            background: "",
        },
        redirectLink: ""  //replace redirect link with main storyline (school cafeteria)       
    }

    schoolCafeteria: {
        1: {
            name: "Narrator",
            text: "*Andy gets in line for breakfast and reaches for the white milk first. The lunch lady greets*",
            background: "",
        },
        2: {
            name: "Doris",
            text: "\"Ayyyyy mijo, why so much milk? You drink so much but still small... why is that?\"",
            background: "",
        },
        3: {
            name: "Andy",
            text: "\"My mom said it would make me stronger.\"",
            background: "",
        },
        4: {
            name: "Doris",
            text: "\"And how is that going for you?\"",
            background: "",
        },
        5: {
            name: "Andy",
            text: "\"Pretty good if I say so myself.\"",
            background: "",
        },
        6: {
            name: "Doris",
            text: "\"That’s nice mijo…\"",
            background: "",
        },        
    }

    breakfastOptions: {
        1: {
            name: "Narrator",
            background: "../../../assets/alternate-path/tech-background.webp", //replace link
            text: {
                dialog: "Boiled egg, celery, and vanilla muffin",
                dialog2: "3 containers of chocolate milk",
                dialog3: "Pick up something off the floor"
                dialog4: "44 packets of salt"
            }
        },
    }







    const sceneSetName = document.body.dataset.path || 'forcedPath';
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
    document.body.style.backgroundImage = `url('${background}?v=${new Date().getTime()}')`;
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
        document.body.style.backgroundImage = `url('${nextScene.background}?v=${new Date().getTime()}')`;
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
            document.body.style.backgroundImage = `url('${background}?v=${new Date().getTime()}')`;

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