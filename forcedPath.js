document.addEventListener("DOMContentLoaded", function () {
    let currentSceneNumber = 1; // Always start at scene 1

    // Define scene sets
    const sceneSets = {
        forcedPath: {
            1: {
                name: "Narrator", 
                text: "Andy is a senior in high school who is a 5’ 2” short king who is antisocial, not strong or brave, gets picked on easily, and is not very smart. Alright, we’ll just stop there. There is no need to keep bashing the main character. Just see for yourself.",
                background: "../../../assets/forced-begining/ss.webp",
            },
            "2": {
                "name": "Narrator", 
                "text": "Andy wakes up from his bed and sluggishly makes his way to his closet. ",
                background: "",
            },
            "3": {
                "name": "Narrator", 
                "text": "He changes into his school clothes, noting the mustard stain on his shirt.",
                background: "",
            },
            "4": {
                "name": "Narrator", 
                "text": "Despite the stain, he realized he was out of time and books it to school.",
                background: "",
            },
            "5": {
                "name": "Narrator", 
                "text": "When Andy finally makes it to school, he is greeted by a 6’ 4” handsome fella, who wears a jock jacket. He plays football for the Muddogs at Sierra Vista High.",
                background: "",
            },
            "6": {
                "name": "Derik", 
                "text": "Hey there little guy, how's that stain doin’ for ya? Did your mommy forget to wash it out for you? Boo hoo",
                background: "",
            },
            "7": {
                "name": "Andy", 
                "text": "Actually, m… my mom did forget to do the laundry last night.",
                background: "",
            },
            "8": {
                "name": "Derik", 
                "text": "Well at least my mom’s still alive. Ha! It feels good to be me.",
                background: "",
            },
            "9": {
                "name": "Narrator", 
                "text": "I guess he’s not very smart either… School funding must be on a tight budget these days.",
                background: "",
            },
            "10": {
                "name": "Narrator", 
                "text": "Andy walks to the cafeteria to get his breakfast.",
                background: "",
            },
            "11": {
                "name": "Narrator", 
                "text": "He goes to the lunch line and eagerly waits to get his 8 cartons of white milk. Andy gets the milk, and downs 4 of them while he stores the rest in his backpack.",
                background: "",
            },
            "12": {
                "name": "Narrator", 
                "text": "Andy now has 16 cartons of White milk in his backpack but that's not very far from his backpack's maximum capacity of 20.",
                background: "",
            },
            "13": {
                "name": "Narrator", 
                "text": "Andy goes outside to find a tree as lonely as him and sits criss-cross applesauce under it, waiting for the school day to start. When the bell rings, he starts heading to his first class, Statistics.",
                background: "",
            },
            "14": {
                "name": "Mr. Hankey", 
                "text": "Remember class, I’m only giving you time today to study in class. The test is tomorrow, so be prepared!",
                background: "",
            },
            "15": {
                "name": "Narrator", 
                "text": "Andy gets out his study guide but realizes he didn’t finish filling it out. He takes a longer look at it, slams his head on the desk, and sleeps for the entire period.",
                background: "",
            },
            "16": {
                "name": "Narrator", 
                "text": "When the bell rings, he wakes up groggily and heads to his next class.",
                background: "",
            },
            "17": {
                "name": "Narrator", 
                "text": "Instead of listening to the teacher's lecture, he dozes off again so that he can continue that good dream he had, which was rudely interrupted.",
                background: "",
            },
            "18": {
                "name": "Narrator", 
                "text": "For the rest of his classes, he continues this process until it reaches his favorite period, lunch.",
                background: "",
            },
            "19": {
                "name": "Narrator", 
                "text": "Andy heads over to the school cafeteria once more, he gets 8 cartons of white milk (as he usually would)",
                background: "",
            },
            "20": {
                "name": "Narrator", 
                "text": "You see this? That means Andy’s backpack has reached full capacity for his white milk! He needs to go dump it out at his locker.",
                background: "",
            },
            "21": {
                "name": "Narrator", 
                "text": "Andy goes to his locker and drops off all 20 of his milk cartons. Now that his backpack is empty … NEW MISSION UNLOCKED: Acquire as much milk as you can",
                background: "",
            },
            "22": {
                "name": "Narrator", 
                "text": "Andy goes back to the cafeteria and asks people for their milk.",
                background: "",
            },
            "23": {
                "name": "Andy", 
                "text": "Do you have any white milk to spare?",
                background: "",
            },
            "24": {
                "name": "Andy", 
                "text": "Milk? Does anybody have white milk for good ole Andy",
                background: "",
            },
            "25": {
                "name": "Andy", 
                "text": "PLEASE. I NEED IT",
                background: "",
            },
            "26": {
                "name": "Narrator", 
                "text": "In a last attempt to get any milk he can before lunch is over, he goes behind the people eating in the cafeteria and begins taking whatever milk he can before getting caught.",
                background: "",
            },
            "27": {
                "name": "Andy", 
                "text": "Cha-ching",
                background: "",
            },
            "28": {
                "name": "Andy", 
                "text": "Gimmie that",
                background: "",
            },
            "29": {
                "name": "Andy", 
                "text": "I don’t know why they didn't want to give me the milk, there's so much of it here",
                background: "",
            },
            "30": {
                "name": "Narrator", 
                "text": "Weird kid … 9 cartons of milk… sick",
                background: "",
            },
            "31": {
                "name": "Narrator", 
                "text": "Have you ever wanted cartons of white milk without asking people or waiting in line?",
                background: "",
            },
            "32": {
                "name": "Narrator", 
                "text": "Neither have I, but Andy has and he's currently camping in the bathroom, waiting for 6th period to start so he could dumpster dive and get all the white milk he could carry.",
                background: "",
            },
            "33": {
                "name": "Narrator", 
                "text": " Andy has a free period which is why he can do this without causing any trouble.",
                background: "",
            },
            "34": {
                "name": "Narrator", 
                "text": "Andy rummages through the trash cans close to the cafeteria. He manages to gather 7 more cartons of white milk before the janitor arrives.",
                background: "",
            },
            "35": {
                "name": "Narrator", 
                "text": "Ah, using his time wisely I see …",
                background: "",
            },
            "36": {
                "name": "Narrator", 
                "text": "The bell rings for 7th period and Andy scurries to his ceramics class.",
                background: "",
            },
    
            "37": {
                "name": "Narrator", 
                "text": "When Andy gets to class he continues to work on his violin project for his friend.",
                background: "",
            },
            "38": {
                "name": "Narrator", 
                "text": "Wait… he has a friend???",
                background: "",
            },
            "39": {
                "name": "Erica", 
                "text": "Hey Andy!",
                background: "",
            },
            "40": {
                "name": "Andy", 
                "text": "Erica, are you skipping again?",
                background: "",
            },
            "41": {
                "name": "Erica", 
                "text": "What me, skipping? …Of course",
                background: "",
            },
            "42": {
                "name": "Andy", 
                "text": "You shouldn’t be doin’ that",
                background: "",
            },
            "43": {
                "name": "Erica", 
                "text": "Well I wanted to check in on my BFF",
                background: "",
            },
            "44": {
                "name": "Andy", 
                "text": "Ummm thanks?",
                background: "",
            },
            "45": {
                "name": "Narrator", 
                "text": "Andy starts blushing and tries to hide it using his hands",
                background: "",
            },
    
            "46": {
                "name": "Erica", 
                "text": "Can I see what you’re working on?",
                background: "",
            },
            "47": {
                "name": "Andy", 
                "text": "Sure…sure… when its finished",
                background: "",
            },
            "48": {
                "name": "Erica", 
                "text": "Come on!!! Please? I called you my BFF, the least you could do is show me",
                background: "",
            },
            "49": {
                "name": "Andy", 
                "text": "You’ll be the first person I show when it's done. How about that",
                background: "",
            },
            "50": {
                "name": "Erica", 
                "text": "Okay, don’t forget to show me! Pinky promise.",
                background: "",
            },
            "51": {
                "name": "Narrator", 
                "text": "Erica holds out her pinky finger",
                background: "",
            },
            "52": {
                "name": "Andy", 
                "text": "Fine, pinky promise",
                background: "",
            },
            "53": {
                "name": "Narrator", 
                "text": "They lock pinky fingers",
                background: "",
            },
            "54": {
                "name": "Erica", 
                "text": "See you later Andy!",
                background: "",
            },
    
            "55": {
                "name": "Andy", 
                "text": "See ya.",
                background: "",
            },
            "56": {
                "name": "Narrator", 
                "text": "Andy continues to work on the project until the bell rings.",
                background: "",
            },
            "57": {
                "name": "Narrator", 
                "text": "Instead of going straight home, he decides to stop by the Table Top Club.",
                background: "",
            },
            "58": {
                "name": "Narrator", 
                "text": "Andy enters the classroom and greets everyone.",
                background: "",
            },
            "59": {
                "name": "Andy", 
                "text": "Hey guys! Did you miss me?",
                background: "",
            },
            "60": {
                "name": "Narrator", 
                "text": "Silence fills the room (crickets). The club president tries to save Andy from embarrassment.",
                background: "",
            },
            "61": {
                "name": "James", 
                "text": "Hey Andy! I was hoping you’d stop by. Do you need anything?",
                background: "",
            },
            "62": {
                "name": "Andy", 
                "text": "I was gonna ask you if Table Top is still on for tomorrow… Or should I stay today?",
                background: "",
            },
            "63": {
                "name": "James", 
                "text": "No no no, it’s ok we're hosting it tomorrow too.",
                background: "",
            },
    
            "64": {
                "name": "Andy", 
                "text": "Ok, I’ll see you tomorrow!",
                background: "",
            },
            "65": {
                "name": "James", 
                "text": "Alright see you then… ha.ha.ha.",
                background: "",
            },
            "66": {
                "name": "Narrator", 
                "text": "Now that Andy is done with school and has no mandatory club meetings, he is on his way back home.",
                background: "",
            },
            "67": {
                "name": "Narrator", 
                "text": "When Andy was just about to get off campus, he sees Derik at the school gate.",
                background: "",
            },
            "68": {
                "name": "Derik", 
                "text": "Hey loser, I saw you begging for milk in the cafeteria today. Everyone thought you were a total freak hahaha.",
                background: "",
            },
            "69": {
                "name": "Andy", 
                "text": "I always do that and people usually don’t say anything about it…",
                background: "",
            },
            "70": {
                "name": "Derik", 
                "text": "Yeah, because no one wants to talk to you in the first place!",
                background: "",
            },
            "71": {
                "name": "Andy", 
                "text": "Oh, sorry…",
                background: "",
            },
            "72": {
                "name": "Derik", 
                "text": "Come here-",
                background: "",
            },
    
            "73": {
                "name": "Narrator", 
                "text": "Derik takes Andy’s backpack and rips it open. Pencils and papers fly out as Derik takes out 4 cartons of Andy’s white milk.",
                background: "",
            },
            "74": {
                "name": "Andy", 
                "text": "Not my milk!"
            },
            "75": {
                "name": "Narrator", 
                "text": "Derik loves to see this kind of reaction from Andy. He smiles as he tears open the cartons and throws them on the ground.",
                background: "",
            },
            "76": {
                "name": "Andy", 
                "text": "NOOOOO!",
                background: "",
            },
            "77": {
                "name": "Derik", 
                "text": "Ok now get away from me freak!",
                background: "",
            },
            "78": {
                "name": "Narrator", 
                "text": "As tears build up in Andy’s eyes, he does not have enough courage to say anything and walks away. ",
                background: "",
            },
            "79": {
                "name": "Narrator", 
                "text": "Before beginning to walk back home again, Andy realizes he can’t give up so easily.",
                background: "",
            },
            "80": {
                "name": "Narrator", 
                "text": "He cannot give up so easily on his milk-collecting passion, so he finds a trash can and dumpster dives to find some more.",
                background: "",
            },
            "81": {
                "name": "Narrator", 
                "text": "Andy goes looking inside the dumpsters that are closest to the trash can because he knows that there's usually milk in them",
                background: "",
            },
    
            "82": {
                "name": "Andy", 
                "text": "Milk…? Where are you…?",
                background: "",
            },
            "83": {
                "name": "Narrator", 
                "text": "Andy failed to find the trash can milk but remembered there was still one spot that he had not checked",
                background: "",
            },
            "84": {
                "name": "Narrator", 
                "text": "As Andy walks over to his go-to spot (Near the Gym) he finds 4 cartons of milk that appear to not have been in the trash before. They were as good as new.",
                background: "",
            },
            "85": {
                "name": "Narrator", 
                "text": "Andy goes home with his 16 cartons of white milk in his backpack, preparing to start his adventure for rock collecting",
                background: "",
            },
            "86": {
                "name": "Narrator", 
                "text": "Andy goes to his room and opens the top drawer on his dresser to take out a pair of safety glasses, and a rock screening pan.",
                background: "",
            },
            "87": {
                "name": "Narrator", 
                "text": "He then takes out a small bag that he will use to store the rocks he finds on his journey. (Current time 4:20 PM)",
                background: "",
            },
            "88": {
                "name": "Narrator", 
                "text": "Andy puts on the glasses and stores the rock screening pan in the small bag.",
                background: "",
            },
            "89": {
                "name": "Narrator", 
                "text": "Andy walks for about 30 minutes until he stumbles upon a small creek. This is where he usually goes to get the rocks he brings home.",
                background: "",
            },
            "90": {
                "name": "Narrator", 
                "text": "Andy spends about 10 minutes looking for rocks before he comes across a nicely shaped rock. This rock doesn't look like anything special, it's just a regular rock",
                background: "",
            },
    
            "91": {
                "name": "Narrator", 
                "text": "Andy made sure to run it through some of the creek's water through the rock screening pan to get rid of any of the dirt that may have been attached to the rock.",
                background: "",
            },
            "92": {
                "name": "Narrator", 
                "text": "He spent the next 25 minutes gathering another 4 rocks, each nearly identical to one another.",
                background: "",
            },
            "93": {
                "name": "Narrator", 
                "text": "Andy walks back home after another great session of finding rocks and places them in a container that stores all of his findings. (Current time 5:55 PM)",
                background: "",
            },
            "94": {
                "name": "Narrator", 
                "text": "It is time for dinner for little Andy, tonight he is having a microwaved meal called Kid Cuisine",
                background: "",
            },
            "95": {
                "name": "Narrator", 
                "text": "Tonight's Cuisine contains chicken nuggets, corn, mac in cheese, and for dessert, gummies. Usually, Andy doesn't eat the corn because he doesn't like how it looks but tonight he felt darring.",
                background: "",
            },
            "96": {
                "name": "Narrator", 
                "text": "After a great meal, Andy decides to get dressed, take a shower, and head off to sleep. (Current time 8 PM)",
                background: "",
            },
            "97": {
                "name": "Narrator", 
                "text": "It’s a new day for Andy, today he plans on doing exactly what he did yesterday but he remembers the test in his first-period class, Statistics.",
                background: "",
            },
            "98": {
                "name": "Andy", 
                "text": "Aww man, I still haven’t got done with the study guide… darn",
                background: "",
            },
            "99": {
                "name": "Narrator", 
                "text": "Andy heads off to school until he notices that somethings off about today…",
                background: "",
            },
    
            "100": {
                "name": "Narrator", 
                "text": "There appears to be something shiny in the ground. Andy can't quite put his finger on it, as he examines it, he is left with a decision to make…",
                background: "",
            },
            redirectLink: "branch-to-three.html"  // Redirect here after all scenes in this path
        },
        pathOne: {
            1: {
                name: "Narrator",
                text: "Andy is lying on the ground when he decides to get up",
                background: "../../../assets/alternate-path/tech-background.webp",
            },
            2: {
                name: "Gean",
                text: "“On your feet maggot!”",
                background: "",
            },
            3: {
                name: "Andy",
                text: "“Wha… What is this place?”",
                background: "",
            },
            4: {
                name: "Gean",
                text: "“This is my base that you just so happened to bust into, Gene Base ”",
                background: "",
            },
            5: {
                name: "Andy",
                text: "“Gene Base?”",
                background: "",
            },

            6: {
                name: "Andy",
                text: "“...”",
                background: "",
            },
            7: {
                name: "Gean",
                text: "“How about this? You do something for me, and I'll do something for you.”",
                background: "",
            },

            8: {
                name: "Andy",
                text: "“Whatever it takes to get out of here”",
                background: "",
            },
            9: {
                name: "Gean",
                text: "“Great, here's what I need you to do for me…”",
                background: "",
            },

            10: {
                name: "Narrator",
                text: "Gean whispers in Andy’s ear something that doesn't quite sit well with Andy",
                background: "",
            },
            11: {
                name: "Andy",
                text: "“Okay… I’m on it…”",
                background: "",
            },

            12: {
                name: "Gean",
                text: "“Remember, if you don't make it, the only person to blame is your lack of skills”",
                background: "",
            },
            13: {
                name: "Narrator",
                text: "Andy gets scared of Gean and decides to not listen to him but instead to walk off.",
                background: "",
            },

            14: {
                name: "Narrator",
                text: "Andy walks off, worried that the person he just stumbled into might be following him. Paranoid, Andy starts running off until he comes across a house.",
                background: "",
            },
            15: {
                name: "Narrator",
                text: "Andy knocks on the front door of the house and gets greeted by someone who resembles a gumball machine",
                background: "",
            },

            16: {
                name: "Benson",
                text: "”Hey… um, are you the new guy?”",
                background: "",
            },
            17: {
                name: "Narrator",
                text: "Behind the gumball machine-looking person, Andy can see 4 more people standing behind him and they all look like they are about to get started on some work",
                background: "",
            },

            18: {
                name: "Mordecai",
                text: "” New guy? Awwww do we have to share a room with him?”",
                background: "",
            },
            19: {
                name: "Rigby",
                text: "” Yeah, I don't know about sharing a room with a New guy”",
                background: "",
            },

            20: {
                name: "Pops",
                text: "” Oh good show! I love meeting new people”",
                background: "",
            },
            21: {
                name: "Skips",
                text: "” Who are you and where did you come from?”",
                background: "",
            },

            22: {
                name: "Andy",
                text: "” Ummm I am Andy, and I'm from… not here…? Listen I just touched some mysterious object then I got transported here and quite frankly, I'm pretty scared”",
                background: "",
            },
            23: {
                name: "Narrator",
                text: "Andy starts shaking because he just now realized that he wasn't at school or home, or anywhere he knows",
                background: "",
            },

            24: {
                name: "Narrator",
                text: "A large guerilla starts walking closer to Andy",
                background: "",
            },
            25: {
                name: "Skips",
                text: "” Not from here huh… I’ve seen this before. By the sounds of it, you touched one of the Lich’s mythical artifacts”",
                background: "",
            },

            26: {
                name: "Andy",
                text: "” The lich? Whos that”",
                background: "",
            },
            27: {
                name: "Skips",
                text: "” The lich is pure evil, something that cannot be destroyed by any means. Rumors have been going around about this being for quite some time now ”",
                background: "",
            },

            28: {
                name: "Andy",
                text: "” Okay, so if I touched something of his…? Why am I here…?”",
                background: "",
            },
            29: {
                name: "Skips",
                text: "” I can't say for sure but I will tell you that your world is about to get destroyed”",
                background: "",
            },

            30: {
                name: "Andy",
                text: "” What?”",
                background: "",
            },
            31: {
                name: "Skips",
                text: "” Only those worlds that contain the artifact get destroyed. “",
                background: "",
            },

            32: {
                name: "Narrator",
                text: "The Lich wants everything and everyone to be no more so his only solution is to essentially plant a bomb in whatever world he finds threatening",
                background: "",
            },
            33: {
                name: "Andy",
                text: "” Darn. Is there a way out of here?”",
                background: "",
            },

            34: {
                name: "Skips",
                text: "” There is but it's a bit much…for starters, you got transported here. That means there is a boss somewhere that you have to defeat. It's the same for the next 3 worlds. ",
                background: "",
            },
            35: {
                name: "Skips",
                text: "”Once you defeat a boss from a universe, you get transported to the next. It is only after the fourth boss that you get transported back home”",
                background: "",
            },

            36: {
                name: "Andy",
                text: "” Why 4 though? Why not a good number like 5?”",
                background: "",
            },
            37: {
                name: "Skips",
                text: "” I have no idea why that is but it is. Wait… does anyone know where Muscle Man is?”",
                background: "",
            },

            38: {
                name: "Andy",
                text: "” Muscle Man…?”",
                background: "",
            },
            39: {
                name: "Mordecai",
                text: "” Yeah dude where is that guy? He was supposed to be here 10 minutes ago”",
                background: "",
            },

            40: {
                name: "Rigby",
                text: "” Aw man don't tell me he fell asleep eating nachos again”",
                background: "",
            },
            41: {
                name: "Benson",
                text: "” No, I just saw him he shouldn't be far from here”",
                background: "",
            },

            42: {
                name: "Skips",
                text: "” This doesn't look good”",
                background: "",
            },
            43: {
                name: "Narrator",
                text: "After everyone looks at one another, Skips gives Andy something",
                background: "",
            },

            44: {
                name: "Narrator",
                text: "Skips gives Andy a book called ‘101 My Mom Jokes’",
                background: "",
            },
            45: {
                name: "Andy",
                text: "“101 My Mom Jokes…?”",
                background: "",
            },

            46: {
                name: "Skips",
                text: "” Something tells me that Muscle Man’s going to be the boss of this world that you’ll have to defeat”",
                background: "",
            },
            47: {
                name: "Andy",
                text: " “Ummm okay?”",
                background: "",
            },

            48: {
                name: "Narrator",
                text: "You start to panic briefly due to the fact that you don't know where you are, you were given a book on embarrassing your mom instead of insulting the other person's mom",
                background: "",
            },
            49: {
                name: "Narrator",
                text: "To top it all off,  you have to defeat someone using the book",
                background: "",
            },
            50: {
                name: "Narrator",
                text: "Who do you bring along to help?",
                background: "",
            },

            redirectLink: "bring-who.html"  // Redirect here after all scenes in this path
        }
    };

    // Get the scene set from the query parameter (default to 'forcedPath' if not provided)
    const sceneSetName = document.body.dataset.path || 'forcedPath';

    // Choose the correct scene set
    let currentSceneSet = sceneSets[sceneSetName];

    const textElement = document.querySelector("#character-description");
    const nameElement = document.querySelector(".name p");

    if (!textElement || !nameElement) {
        console.error("Required elements not found!");
        return;
    }

    let scene = currentSceneSet[currentSceneNumber];
    let { name, text, background, nextScene } = scene;

    nameElement.textContent = name;
    textElement.textContent = "";

    document.body.style.backgroundImage = `url('${background}?v=${new Date().getTime()}')`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundAttachment = "fixed";

    let index = 0;
    let typingFinished = false;
    let typewriterTimeout;

    function typeWriter() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            typewriterTimeout = setTimeout(typeWriter, 50);
        } else {
            typingFinished = true;
            if (nextScene) {
                setTimeout(loadNextScene, 1000);
            }
        }
    }

    function displayFullText() {
        if (!typingFinished) {
            clearTimeout(typewriterTimeout);
            textElement.textContent = text;
            typingFinished = true;
            if (nextScene) {
                setTimeout(loadNextScene, 1000);
            }
        } else {
            goToNextScene();
        }
    }

    function loadNextScene() {
        if (!nextScene) return;

        nameElement.textContent = nextScene.name;
        textElement.textContent = "";
        document.body.style.backgroundImage = `url('${nextScene.background}?v=${new Date().getTime()}')`;

        name = nextScene.name;
        text = nextScene.text;
        typingFinished = false;
        index = 0;
        typeWriter();
    }

    function goToNextScene() {
        currentSceneNumber++;

        // Dynamically determine if we're at the end of the current scene set
        const totalScenes = Object.keys(currentSceneSet).filter(key => key !== 'redirectLink').length; // Exclude redirectLink from the count

        if (currentSceneNumber > totalScenes) {
            const redirectUrl = currentSceneSet.redirectLink || "default-endpage.html";  // Use the redirectLink at the path level
            window.location.href = redirectUrl; // Redirect to the appropriate page
        } else {
            // Otherwise, continue to the next scene
            scene = currentSceneSet[currentSceneNumber];
            name = scene.name;
            text = scene.text;
            background = scene.background;
            nextScene = scene.nextScene || null;

            nameElement.textContent = name;
            textElement.textContent = "";
            document.body.style.backgroundImage = `url('${background}?v=${new Date().getTime()}')`;

            index = 0;
            typingFinished = false;
            typeWriter();
        }
    }

    document.addEventListener("click", displayFullText);
    document.addEventListener("keydown", displayFullText);

    typeWriter();
});
