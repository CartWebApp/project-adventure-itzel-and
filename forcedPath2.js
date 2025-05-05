document.addEventListener("DOMContentLoaded", function () {
    let currentSceneNumber = 1;

    const sceneSetName = document.body.dataset.path || 'forcedPath';

    function toKebabCase(str) {
        return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    }
    function preloadImages(sceneSetName, startSceneNumber, count = 2) {
        const folderPath = `../../../path2/${sceneSetName}/`;
        for (let i = 1; i <= count; i++) {
            const sceneNum = startSceneNumber + i;
            const preloadImg = new Image();
            preloadImg.src = `${folderPath}${sceneNum}.webp`;
        }
    }
    
    function updateBackground(sceneSetName, sceneNumber) {
        const scene = currentSceneSet[sceneNumber];
        const { background, backgroundType } = scene;
        const folderPath = `../../../path2/${sceneSetName}/`;
    
        if (!background) {
            // Auto-load image if no background manually specified
            const imgPath = `${folderPath}${sceneNumber}.webp?v=${new Date().getTime()}`;
            setBodyBackgroundImage(imgPath);
        } else if (backgroundType === "video") {
            setBodyBackgroundVideo(background);
        } else {
            setBodyBackgroundImage(background);
        }
    }
    
    function setBodyBackgroundImage(imgPath) {
        removeVideoIfExists();
    
        document.body.style.backgroundImage = `url('${imgPath}')`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundAttachment = "fixed";
    }
    
    function setBodyBackgroundVideo(videoPath) {
        removeVideoIfExists();
    
        const video = document.createElement("video");
        video.src = videoPath;
        video.autoplay = true;
        video.loop = true;
        video.muted = true;
        video.playsInline = true;
        video.style.position = "fixed";
        video.style.top = 0;
        video.style.left = 0;
        video.style.width = "100%";
        video.style.height = "100%";
        video.style.objectFit = "cover";
        video.style.zIndex = "-1";
    
        video.setAttribute("id", "background-video");
    
        document.body.appendChild(video);
    
        document.body.style.backgroundImage = "none"; // remove background image
    }
    
    function removeVideoIfExists() {
        const existingVideo = document.getElementById("background-video");
        if (existingVideo) {
            existingVideo.remove();
        }
    }
    
    
    
    
    

    
    const sceneSets = {


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
            redirectLink: "respond-to-derik.html"
        },
    
    
        respondDerik: {
            1: {
                name: "Narrator",
                background: "../../../path2_image_backup/ignoreRock/3.webp", //change this link
                text: {
                    dialog: "Andy defends himself",
                    dialog2: "Says nothing",
                }
            },
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
            //replace redirect link with main storyline (school cafeteria)
            redirectLink: "cafeteria.html"               
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
            //replace redirect link with main storyline (school cafeteria)
            redirectLink: "cafeteria.html"                      
        },
    
        schoolCafeteria: {
            1: {
                name: "Narrator",
                text: "*Andy gets in line for breakfast and reaches for the white milk first. The lunch lady greets him.*",
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
            redirectLink: "breakfast-options.html"                      
        },
    
        breakfastOptions: {
            1: {
                name: "Narrator",
                background: "../../../path2_image_backup/schoolCafeteria/7.webp", //replace link????
                text: {
                    dialog: "Boiled egg, celery, and vanilla muffin",
                    dialog2: "3 containers of chocolate milk",
                    dialog3: "Pick up something off the floor",
                    dialog4: "44 packets of salt"
                }
            },
        },
    

        
        boiledEgg: {
            1: {  
                name: "Narrator",  
                text: "*Andy checks out for breakfast*",  
                background: "",  
            },  
            2: {  
                name: "Andy",  
                text: "“I’ll have this.”",  
                background: "",  
            },  
            3: {  
                name: "Doris",  
                text: "“Have a good day!”",  
                background: "",  
            },  
            //dialogue two options (Thank or wisdom)
            redirectLink: "respond-to-doris.html"                      
        },
    
        chocolateMilk: {
            1: {  
                name: "Narrator",  
                text: "*Andy checks out for breakfast*",  
                background: "",  
            },  
            2: {  
                name: "Andy",  
                text: "“I’ll have this.”",  
                background: "",  
            },  
            3: {  
                name: "Doris",  
                text: "“Have a good day!”",  
                background: "",  
            },  
                //dialogue two options (Thank or wisdom)
                redirectLink: "respond-to-doris.html"                      
        },
    
        respondDoris: {
            1: {
                name: "Narrator",
                background: "../../../path2_image_backup/eatBreakfast/1.webp", //change this link. no you
                text: {
                    dialog: "Thank Doris",
                    dialog2: "Share wisdom",
                }
            },
        },
    
        thankDoris: {
            1: {
                name: "Andy",
                text: "“Thanks, you too.”",
                background: "../../../path2_image_backup/eatBreakfast/1.webp",
            },
            //redirect to main plot
            redirectLink: "eat-breakfast.html"                      
        },
    
        shareWisdom: {
            1: {
                name: "Andy",
                text: "“With great milk comes great power.”",
                background: "../../../path2_image_backup/eatBreakfast/1.webp",
            },
            //redirect to main plot
            redirectLink: "eat-breakfast.html"                      
        },
    
        pickFloor: {
            1: { 
                name: "Narrator",
                text: "*Andy looks down at the floor and sees a broken spiderman action figure with some ketchup packers laying around it.*",
                background: "",
            },
            2: { 
                name: "Andy",
                text: "\"My favorite...\"",
                background: "",
            },
            3: { 
                name: "Narrator",
                text: "*Andy picks up the action figure along with the ketchup packets since it was hard to get so many packets at once without Doris knowing. Andy tries to checkout for breakfast without Doris noticing.*",
                background: "",
            },
            4: { 
                name: "Doris",
                text: "\"Andy, what are you holding?\"",
                background: "",
            },
            5: { 
                name: "Andy",
                text: "\"Nothing…\"",
                background: "",
            },
            6: { 
                name: "Doris",
                text: "\"You’ll get hungry if you don’t get real food! Pick something else.\"",
                background: "",
            },
            7: { 
                name: "Andy",
                text: "\"Okay…\"",
                background: "",
            },
            //redirect back to picking a food option at breakfastOptions
            redirectLink: "breakfast-options.html"                      
        },
    
        packetsOfSalt: {
            1: {
                name: "Andy",
                text: "\"I’ve been picky lately, let me try something spicy.\"",
                background: "",
            },
            2: {
                name: "Narrator",
                text: "*Andy checks out for breakfast*",
                background: "",
            },
            3: {
                name: "Andy",
                text: "\"I’ll have this.\"",
                background: "",
            },
            4: {
                name: "Doris",
                text: "\"Have a good day!\"",
                background: "",
            },
            5: {
                name: "Narrator",
                text: "*Andy comes up with the great idea to mix the salt in his milk. Andy thinks this will give a nice kick to the milk. When Andy is finished making his concoction, he takes a sip from the carton.*",
                background: "",
            },
            6: {
                name: "Andy",
                text: "\"I think I put too much salt in there.\"",
                background: "",
            },
            7: {
                name: "Narrator",
                text: "*Andy’s face scrunches up and coughs like a maniac. Andy realizes he can’t breathe and collapses on the floor.*",
                background: "",
            },
            8: {
                name: "Narrator",
                text: "*This kid took it too far…*",
                background: "",
            },
            
            //redirect to game over screen
            redirectLink: "breakfast-options.html"
        },
    
        eatBreakfast: {
            1: {
                name: "Doris",
                text: "\"I’ve been working here for 20 years, and this kid is the only student who grabs 8 cartons of WHITE milk for breakfast and lunch everyday.\"",
                background: "",
            },
            2: {
                name: "Narrator",
                text: "*Andy walks outside to find a spot to eat his breakfast. When he finds his spot, he drops down, folding his legs criss crossed, and starts to unwrap his breakfast in silence. In the middle of eating, Andy notices some cracks forming in the cement near him. He watched, chewing slowly, as the cracks deepened ever so slightly.*",
                background: "",
            },
            3: {
                name: "Andy",
                text: "\"Huh.\"",
                background: "",
            },
            4: {
                name: "Narrator",
                text: "*When the last bite was gone, he reached into his backpack and pulled out four cartons of white milk. One after another, he drained them all, the cool liquid washing down his meal. (WM total: 20). He wiped his mouth with the back of his hand, then unzipped his bag again, checking his stock. Twenty cartons remained—full capacity. No room for waste. With a grunt, he stood up, slinging his backpack over his shoulder.*",
                background: "",
            },
            5: {
                name: "Andy",
                text: "\"Time to make space.\"",
                background: "",
            },
            redirectLink: "backpack-full.html"
        },
    
        backpackFull: {
            1: {
                name: "Narrator",
                background: "../../../path2_image_backup/eatBreakfast/6.webp", //change this link
                text: {
                    dialog: "Walk to first period",
                    dialog2: "Dump cartons in locker",
                }
            },
        },
        
        walkToFirstPeriod: {
            1: {
                name: "Narrator",
                text: "*Andy’s backpack is too full and he starts to feel the weight with all of the milk that he’s hauling to first period.*",
                background: "",
            },
            //redirect to choices at backpackFull
            redirectLink: "backpack-full.html"
        },
    
        dumpCartonsLocker: {
            1: {
                name: "Narrator",
                text: "*The hallways were still mostly empty as he made his way to his locker. Metal clanged as he yanked it open, dumping all of the cartons inside. (WM total: 0)*",
                background: "",
            },
            2: {
                name: "Andy",
                text: "\"Extra storage. Just in case.\"",
                background: "",
            },
            3: {
                name: "Narrator",
                text: "*You’re probably wondering how all of this milk doesn’t get spoiled. Well this weirdo… I mean genius… created an advanced cooling system in his locker. It kinda works like a mini freezer, except it’s not properly manufactured. Andy actually made this before the school year started by stealing electrical parts from the school.*",
                background: "",
            },
            4: {
                name: "Narrator",
                text: "*Andy goes to his Statistics class.*",
                background: "",
            },
            5: {
                name: "Mr. Hanky",
                text: "\"Good morning everyone. As I told you yesterday, we have a test today, a pretty important one. This test is worth 80% of your grade and the person with the highest score wins $100! Since you’ll be completing this test on a scantron, you’ll know your score by the end of the period. Any questions before we start?\"",
                background: "",
            },
            6: {
                name: "Class",
                text: "*Silence*",
                background: "",
            },
            7: {
                name: "Mr. Hanky",
                text: "\"Good, now let's begin!\"",
                background: "",
            },
            redirectLink: "stats-test.html"       
        },
    
        statsTest: {
            1: {
                name: "Narrator",
                background: "../../../path2_image_backup/dumpCartonsLocker/7.webp", //change this link
                text: {
                    dialog: "Cheat with your pre-programmed calculator",
                    dialog2: "Accept your fate and fail the test",
                }
            },
        },
    
        programmedCalc: {
            1: {
                name: "Narrator",
                text: "*Andy opens his backpack and reaches for his calculator. When he takes it out and turns it on, he notices some words on it. Andy realizes that he made a cheat sheet prior to the test. When he reads the test form and goes back to the calculator, the notes he has written in the calculator practically have all the right answers for the test.*",
                background: "",
            },
            2: {
                name: "Andy",
                text: "\"Yes, I can finally get enough milk to build my plasma cannon! I think I have a chance at this.\"",
                background: "",
            },
            redirectLink: "cheat-or-not.html"       
        },
    
        cheatOrNot: {
            1: {
                name: "Narrator",
                background: "../../../path2_image_backup/programmedCalc/2.webp", //change this link
                text: {
                    dialog: "Don’t cheat on the test because your grade is already too low",
                    dialog2: "Continue cheating on the test",
                }
            },
        },
    
        dontCheat: {
            1: {
                name: "Andy",
                text: "\"Wait… I’m already failing this class. If I get 100% on this test it would look really suspicious. I don’t think I should cheat on this test.\"",
                background: "",
            },
            2: {
                name: "Narrator",
                text: "*Andy takes out a regular calculator from his backpack instead. When he finally has all of his materials to take the test, he stares at the paper.*",
                background: "",
            },
            3: {
                name: "Andy",
                text: "\"I’m not reading all that.\"",
                background: "",
            },
            4: {
                name: "Narrator",
                text: "*Andy gives up and bubbles in A for all of the answers on his scantron. Andy stands up and turns in his test at the front of the class and sits back down. He puts his head on the desk and sleeps for the rest of the period. The bell rings and Andy takes his backpack to go to his next class. As Andy was about to leave, Mr. Hankey stops him.*",
                background: "",
            },
            5: {
                name: "Mr. Hankey",
                text: "\"Did you even study for the test?\"",
                background: "",
            },
            6: {
                name: "Andy",
                text: "\"Yeah, I just got distracted by the noises outside. The birds and stuff ya know?\"",
                background: "",
            },
            7: {
                name: "Mr. Hankey",
                text: "\"... just leave my class.\"",
                background: "",
            },        
            redirectLink: "history-class.html"  
        },
    
        continueCheating: {
            1: {
                name: "Narrator",
                text: "*Once Andy finishes the test and turns it in, he goes back to his seat. Andy can not contain his excitement and sits with a smile on his face. Once the period ends the teacher stands up.*",
                background: "",
            },
            2: {
                name: "Mr. Hanky",
                text: "\"Alright class, I have all of the scores submitted. The person who has the highest score with a 100% is!.... Andy?\"",
                background: "",
            },
            3: {
                name: "Class",
                text: "\"No way… that’s not possible.\"",
                background: "",
            },
            4: {
                name: "Andy",
                text: "\"Shoot! I should’ve got some answers wrong to make it look realistic!\"",
                background: "",
            },
            5: {
                name: "Mr. Hanky",
                text: "\"Andy… can I ask how you did it? How were YOU able to achieve this score?\"",
                background: "",
            },
            6: {
                name: "Andy",
                text: "\"I studied a lot...\"",
                background: "",
            },
            7: {
                name: "Mr. Hanky",
                text: "\"Right… but-\"",
                background: "",
            },
            8: {
                name: "Narrator",
                text: "*Bell rings*",
                background: "",
            },
            9: {
                name: "Narrator",
                text: "*The classroom rustles as everyone stands up and grabs their bags to head to their next class*",
                background: "",
            },
            10: {
                name: "Mr. Hanky",
                text: "\"Ok see you all tomorrow.\"",
                background: "",
            },
            11: {
                name: "Narrator",
                text: "*As Andy was about to walk out the door, the teacher stops him*",
                background: "",
            },
            12: {
                name: "Mr. Hanky",
                text: "\"Hey Andy you forgot this!\"",
                background: "",
            },
            13: {
                name: "Narrator",
                text: "*Takes out the $100 bill*",
                background: "",
            },
            14: {
                name: "Mr. Hanky",
                text: "\"I know you’ve been having a hard time seeing how everyone treats you. I even doubted you myself which is completely wrong. I’m glad that things are starting to look up for you, keep up the good work!\"",
                background: "",
            },
            15: {
                name: "Andy",
                text: "\"Th-thank you\"",
                background: "",
            },
            16: {
                name: "Narrator",
                text: "*Andy reaches for the bill.*",
                background: "",
            },
            17: {
                name: "Mr. Hanky",
                text: "\"But first! Can I see your calculator? I’ve never seen a model like that one before.\"",
                background: "",
            },
            18: {
                name: "Andy",
                text: "\"Oh, it’s just a regular Ti-84 Texas Instrument-color calculator.\"",
                background: "",
            },
            19: {
                name: "Mr. Hanky",
                text: "\"Ok now let me see it!\"",
                background: "",
            },
            20: {
                name: "Andy",
                text: "\"I really need to get to class.\"",
                background: "",
            },
            21: {
                name: "Mr. Hanky",
                text: "\"And I need to get ready to teach my next class! Now let me see it real quick.\"",
                background: "",
            },
            22: {
                name: "Andy",
                text: "\"...\"",
                background: "",
            },
            23: {
                name: "Narrator",
                text: "*Mr. Hankey reaches for his backpack and takes out the calculator*",
                background: "",
            },
            24: {
                name: "Mr. Hanky",
                text: "\"Wow, very nice. Now let me play around with some of these buttons…\"",
                background: "",
            },
            25: {
                name: "Narrator",
                text: "*Mr. Hankey turns on the calculator and sees Andy’s notes*",
                background: "",
            },
            26: {
                name: "Mr. Hanky",
                text: "\"Andy… did you cheat on the test?\"",
                background: "",
            },
            27: {
                name: "Andy",
                text: "\"...\"",
                background: "",
            },
            28: {
                name: "Mr. Hanky",
                text: "\"You’ll get in more trouble if you lie.\"",
                background: "",
            },
            29: {
                name: "Andy",
                text: "\"I didn’t want to fail…\"",
                background: "",
            },
            30: {
                name: "Mr. Hanky",
                text: "\"I need to report this.\"",
                background: "",
            },
            31: {
                name: "Narrator",
                text: "*Andy gets sent to the principal office*",
                background: "",
            },
            32: {
                name: "Principal",
                text: "\"This is one of the most important tests of the year. You are going to have major consequences for cheating.\"",
                background: "",
            },
            33: {
                name: "Andy",
                text: "\"I’m sorry, I won’t do it again.\"",
                background: "",
            },
            34: {
                name: "Principal",
                text: "\"YOU ARE EXPELLED!\"",
                background: "",
            },
            35: {
                name: "Narrator",
                text: "*Andy gets kicked out of the school. He can no longer have unlimited white milk… no milk, no life.*",
                background: "",
            },
            36: {
                name: "Narrator",
                text: "*Plasma cannon? out of milk...? how would you even do that?*",
                background: "",
            },
            
            //redirect to game over screen
            redirectLink: "cheat-or-not.html"
        },
    
        acceptFate: {
            1: {
                name: "Narrator",
                text: "*Andy opens his backpack and reaches for his calculator. When he finally has all of his materials at hand, he stares at the test.*",
                background: "",
            },
            2: {
                name: "Andy",
                text: "\"I’m not reading all that.\"",
                background: "",
            },
            3: {
                name: "Narrator",
                text: "*Andy gives up and bubbles in A for all of the answers on his scantron. Andy stands up and turns in his test at the front of the class and sits back down. He puts his head on the desk and sleeps for the rest of the period. The bell rings and Andy takes his backpack to go to his next class. As Andy was about to leave, Mr. Hankey stops him.*",
                background: "",
            },
            4: {
                name: "Mr. Hankey",
                text: "\"Did you even study for the test?\"",
                background: "",
            },
            5: {
                name: "Andy",
                text: "\"Yeah, I just got distracted by the noises outside. The birds and stuff ya know?\"",
                background: "",
            },
            6: {
                name: "Mr. Hankey",
                text: "\"... just leave my class.\"",
                background: "",
            },
            redirectLink: "history-class.html"        
        },
    
        historyClass: {
            1: {
                name: "Narrator",
                text: "*Andy goes to his history class and waits for his teacher to start the lecture.*",
                background: "",
            },
            2: {
                name: "Mr. Hill",
                text: "\"Hello class! Take out your books and flip to page 127.\"",
                background: "",
            },
            3: {
                name: "Narrator",
                text: "*Andy and the class take out their books.*",
                background: "",
            },
            4: {
                name: "Mr. Hill",
                text: "\"Ok now I’ll give you about 30 minutes to read this short chapter and at the end I’ll ask you questions. The timer starts… now!\"",
                background: "",
            },
            5: {
                name: "Narrator",
                text: "*Andy looks at his book and stares at the page.*",
                background: "",
            },
            6: {
                name: "Andy",
                text: "\"So… many… words. I’m not reading ALLLLLL that.\"",
                background: "",
            },
            7: {
                name: "Narrator",
                text: "*Andy dozes off in class instead of sleeping because the teacher might catch him.*",
                background: "",
            },
            8: {
                name: "Narrator",
                text: "*30 minutes later*",
                background: "",
            },
            9: {
                name: "Mr. Hill",
                text: "\"Ok the time is up! Attention up here everyone. I have written the question on the board. Would anyone like to volunteer?\"",
                background: "",
            },
            10: {
                name: "Class",
                text: "*Silent*",
                background: "",
            },
            11: {
                name: "Narrator",
                text: "*Andy avoids eye contact hoping that Mr. Hill doesn’t notice him.*",
                background: "",
            },
            12: {
                name: "Mr. Hill",
                text: "\"Hmmmm. How about… Andy!\"",
                background: "",
            },
            13: {
                name: "Andy",
                text: "\"...\"",
                background: "",
            },
            14: {
                name: "Mr. Hill",
                text: "\"Go ahead and answer the question on the board.\"",
                background: "",
            },
            15: {
                name: "Narrator",
                text: "*Question: Name the Warlord defeated by Mori Motonari at the Battle of Itsukushima.*",
                background: "",
            },
            redirectLink: "history-question.html"        
        },
    
        historyQuestion: {
            1: {
                name: "Narrator",
                background: "../../../path2_image_backup/historyClass/15.webp", //change this link
                text: {
                    dialog: "Sue Harukata",
                    dialog2: "Refuse to answer",
                    dialog3: "Stay silent"
                }
            },
        },
    
        sueHarukata: {
            1: {
                name: "Andy",
                text: "\"Sue Harukata.\"",
                background: "",
            },
            2: {
                name: "Mr. Hill",
                text: "\"You’re correct, it is Sue Harukata!\"",
                background: "",
            },
            3: {
                name: "Class",
                text: "\"He actually got it right?\"",
                background: "",
            },
            //Achievement unlocked: Wait did you actually know that or is that from an Anime?
            redirectLink: "english-class.html"                
        },
    
        refuseToAnswer: {
            1: {
                name: "Narrator",
                text: "*Andy shakes his head and doesn’t answer.*",
                background: "",
            },
            2: {
                name: "Mr. Hill",
                text: "\"Andy… did you read the chapter?\"",
                background: "",
            },
            3: {
                name: "Andy",
                text: "\"No…\"",
                background: "",
            },
            4: {
                name: "Mr. Hill",
                text: "\"Ah, nevermind then. How about another volunteer?\"",
                background: "",
            },
            5: {
                name: "Classmate",
                text: "\"Bro, how is he failing in every class?\"",
                background: "",
            },
            6: {
                name: "Classmate",
                text: "\"Yeah, that's so embarrassing.\"",
                background: "",
            },
            redirectLink: "english-class.html"                        
        },
    
        staySilent: {
            1: {
                name: "Narrator",
                text: "*Andy stays silent and is frozen with fear*",
                background: "",
            },
            2: {
                name: "Mr. Hill",
                text: "\"Andy… you can answer the question now.\"",
                background: "",
            },
            3: {
                name: "Narrator",
                text: "*A flush crawled up Andy’s neck, hot and prickling, as if his skin had been dipped in scalding water. He knew this feeling—the shameful tide of embarrassment he could never outrun—but this was different. A slow, creeping warmth bloomed across his lap. His stomach dropped. He didn’t need to look down to know, but his body moved anyway, betraying him further. His gaze dragged downward. Darkened fabric. The wetness spread, seeping into the fabric of his pants, unmistakable. The scent—sharp and sour—hit him a second later. His bladder had given up before his pride did.*",
                background: "",
            },
            4: {
                name: "Class",
                text: "\"EWWWW IS ANDY PEEING HIMSELF?\"",
                background: "",
            },
            5: {
                name: "Mr. Hill",
                text: "\"You can go to the nurse’s office and get a new pair of pants there.\"",
                background: "",
            },
            6: {
                name: "Narrator",
                text: "*Without question Andy runs out of the class and does exactly what Mr. Hill said.*",
                background: "",
            },
            redirectLink: "english-class.html"                        
        },
    
        englishClass: {
            1: {
                name: "Narrator",
                text: "*Andy makes it to his English class*",
                background: "",
            },
            2: {
                name: "Ms. Teagues",
                text: "\"Good Morning! Today we will continue reading Romeo and Juliet. Take out your books and we will begin.\"",
                background: "",
            },
            3: {
                name: "Narrator",
                text: "*The class takes out their books and flips to the page where they left off.*",
                background: "",
            },
            4: {
                name: "Ms. Teagues",
                text: "\"Today we will try popcorn reading! Would anyone like to go first?\"",
                background: "",
            },
            5: {
                name: "Class",
                text: "*Silent*",
                background: "",
            },
            6: {
                name: "Ms. Teagues",
                text: "\"If no one volunteers, I will have to pick somebody.\"",
                background: "",
            },
            7: {
                name: "Classmate",
                text: "\"I think Andy would like to go first *giggles*\"",
                background: "",
            },
            8: {
                name: "Andy",
                text: "\"I’m good.\"",
                background: "",
            },
            9: {
                name: "Ms. Teagues",
                text: "\"Andy! I think that’s a good idea, I haven’t heard from you in a while. Go ahead and start us off.\"",
                background: "",
            },
            10: {
                name: "Narrator",
                text: "*Brace yourself…*",
                background: "",
            },
            11: {
                name: "Andy",
                text: "\"Ok, I'll begin.\"",
                background: "",
            },
            12: {
                name: "Andy",
                text: "\"B-buh... but t-to be fr-frank and... gulp... g-g-give it thee... uh... thee... ag-cough-again. Aaand... uh... y-yet I w-wish... deep breath... b-but for the th-thing I... I have. M-my... my b-boun-tee is... is as... boun-duh... squints bound-luss? Bound-less! As the... the s-sea. M-my... l-luv as... sniffs d-deep. The... the m-more I... taps page g-give to... t-thee? Thee. The m-more I... sigh have, f-for... b-both are... in-in... in-fin... gives up in-fin-it.\"",
                background: "",
            },
            13: {
                name: "Classmate",
                text: "\"WRAP IT UPPP\"",
                background: "",
            },
            14: {
                name: "Classmate",
                text: "\"Wait, what did he say?\"",
                background: "",
            },
            15: {
                name: "Classmate",
                text: "\"That was hard to watch.\"",
                background: "",
            },
            16: {
                name: "Ms. Teagues",
                text: "\"Thank you Andy, I think we’ll stop there.\"",
                background: "",
            },
            17: {
                name: "Class",
                text: "*Laughs*",
                background: "",
            },
            18: {
                name: "Narrator",
                text: "*The bell rings and Andy heads to his Chemistry class.*",
                background: "",
            },
            19: {
                name: "Narrator",
                text: "*Andy is standing at his station, his goggles slightly crooked as he squints at the instructions. Mr. Morton paced between the rows, his voice booming over the clatter of glass.*",
                background: "",
            },
            20: {
                name: "Mr. Morton",
                text: "\"Remember, class—precision is key. One wrong measurement, and you might end up with more than you bargained for.\"",
                background: "",
            },
            21: {
                name: "Narrator",
                text: "*Andy frowned, his hands hovering over the powdered magnesium. The instructions called for 2 grams. He dumped in what he hoped was close enough.*",
                background: "",
            },
            22: {
                name: "Andy",
                text: "\"Eh, good enough...\"",
                background: "",
            },
            23: {
                name: "Narrator",
                text: "*He grabs the vial of nitric acid, hesitates, then pours it straight into the mixture without measuring. A hiss. A puff of smoke. His stomach dropped.*",
                background: "",
            },
            24: {
                name: "Andy",
                text: "\"Uh. That’s not—\"",
                background: "",
            },
            25: {
                name: "Narrator",
                text: "*KABOOM.* A deafening crack echoed through the room as Andy’s experiment erupted in a flash of orange and white. The force rattled the windows, sending a shockwave of heat across his face. The class shrieked, diving under desks as a thick, acrid smoke filled the air.*",
                background: "",
            },
            26: {
                name: "Mr. Morton",
                text: "\"ANDY. WHAT. WAS. THAT.\"",
                background: "",
            },
            27: {
                name: "Narrator",
                text: "*Andy, now coated in soot, blinked through watering eyes. His station was a warzone—broken glass, charred paper, and a suspiciously melted pencil.*",
                background: "",
            },
            28: {
                name: "Andy",
                text: "\"I, uh... followed the steps?\"",
                background: "",
            },
            29: {
                name: "Mr. Morton",
                text: "\"You obviously didn’t. Clean. This. Up. Now.\"",
                background: "",
            },
            30: {
                name: "Narrator",
                text: "*With a defeated sigh, Andy grabbed a sponge and a bucket. As he scrubbed blackened streaks off the counter, he noticed the explosion had left a perfect smoke-shadow of his silhouette on the window—like a crime scene outline. He wiped the window and noticed the shiny object in the distance that he passed by yesterday.*",
                background: "",
            },
            31: {
                name: "Andy",
                text: "\"That’s weird. It’s not as shiny as before.\"",
                background: "",
            },
            32: {
                name: "Narrator",
                text: "*The bell rings and he is headed off to lunch*",
                background: "",
            },
            33: {
                name: "Narrator",
                text: "*Andy shuffled forward in the lunch line, his backpack already heavy with his personal stash of white milk cartons. His eyes locked onto the small, handwritten sign taped to the wall:*",
                background: "",
            },
            34: {
                name: "Narrator",
                text: "\"LIMIT 6 CONTAINERS OF MILK. NO MORE DUE TO IMPORTS NOT SHIPPING ON TIME.\"",
                background: "",
            },
            35: {
                name: "Narrator",
                text: "*Andy’s grip on his tray tightened. His chest tightening.*",
                background: "",
            },
            36: {
                name: "Andy",
                text: "\"Six? Six?! That isn’t even enough for a snack, let alone a meal.\"",
                background: "",
            },
            37: {
                name: "Narrator",
                text: "*He could already feel the dryness in his throat, the milkless void stretching before him like a desert. When he reached the front, Doris the lunch lady was already holding up a single carton.*",
                background: "",
            },
            38: {
                name: "Doris",
                text: "Milk?",
                background: "",
            },
            redirectLink: "milk-shortage.html"                
        },
    
        milkShortage: {
            1: {
                name: "Narrator",
                background: "../../../path2_image_backup/englishClass/38.webp", //change this link
                text: {
                    dialog: "Take 6 and listen to the rules",
                    dialog2: "Take 8 because you won't let some sign tell you what to do",
                }
            },
        },
    
        sixMilk: {
            1: {
                name: "Andy",
                text: "\"Yeah. Uh. Six, please.\"",
                background: "",
            },
            2: {
                name: "Narrator",
                text: "*Doris started counting them out. Andy watched, agonized, as she stopped at six and moved the tray away.*",
                background: "",
            },
            3: {
                name: "Narrator",
                text: "*Defeated, Andy trudged to his table, already doing mental math on how to stretch six cartons until dinner. Maybe if he sipped slowly. Maybe if he cried into them for extra moisture. This was a dark day.*",
                background: "",
            },
            //redirect to lunchOutside
            redirectLink: "lunch-outside.html"        
        },
    
        eightMilk: {
            1: {
                name: "Andy",
                text: "\"Doris. C’mon. You know me. I’m a regular. What if I just… took eight? Who’s counting?\"",
                background: "",
            },
            2: {
                name: "Doris",
                text: "\"The district’s counting. The government’s counting. You get six.\"",
                background: "",
            },
            3: {
                name: "Narrator",
                text: "*Andy’s soul left his body. He stared down at the pitiful row of cartons mocking him. Behind him, some kid snorted.*",
                background: "",
            },
            4: {
                name: "Random Kid",
                text: "\"Dude, it’s just milk.\"",
                background: "",
            },
            5: {
                name: "Narrator",
                text: "*Andy whipped around, eyes wild.*",
                background: "",
            },
            6: {
                name: "Andy",
                text: "\"JUST milk?! It’s the backbone of civilization! The liquid spine of humanity! Without it, we’re just—just animals!\"",
                background: "",
            },
            7: {
                name: "Another Random Kid",
                text: "\"Move along, Shakespeare. You’re holding up the line!\"",
                background: "",
            },
            8: {
                name: "Narrator",
                text: "*Andy without hesitation uses his left arm to push an entire row of milk onto his tray. Once Andy counted eight cartons, he sprinted out of the line.*",
                background: "",
            },
            9: {
                name: "Doris",
                text: "\"Andy! Get back here now!\"",
                background: "",
            },
            redirectLink: "stolen-milk.html"                
        },
    
        stolenMilk: {
            1: {
                name: "Narrator",
                background: "../../../path2_image_backup/eightMilk/9.webp", //change this link
                text: {
                    dialog: "Bring back the milk because you know that Doris is just doing her job",
                    dialog2: "Ignore her",
                }
            },
        },
    
        bringBackMilk: {
            1: {
                name: "Narrator",
                text: "*Andy stopped in his tracks and came to a realization.*",
                background: "",
            },
            2: {
                name: "Andy",
                text: "\"Doris is just doing her job. I can’t do this to her…\"",
                background: "",
            },
            3: {
                name: "Narrator",
                text: "*Andy goes back in line to return the milk.*",
                background: "",
            },
            //redirect to milkShortage options
            redirectLink: "milk-shortage.html"        
        },
    
        ignoreDoris: {
            1: {
                name: "Narrator",
                text: "*As he ran, he caught Doris’s eye one last time. She shook her head. He shook his milk carton. A silent standoff. The war had begun.*",
                background: "",
            },
            2: {
                name: "Narrator",
                text: "*Andy chugs 4 cartons and decides to drop off the other 4 at his locker before lunch ends. When he is walking towards his locker, he notices that there is a lot of campus security in the hallway. Campus security—more than he’d ever seen in one place—lurked like wolves in polyester uniforms. Their walkie-talkies crackled with static, their boots squeaked against the floor, and their eyes scanned. Andy’s grip tightened on his milk. One guard at the water fountain. Two by the math wing. Three… no, four…*",
                background: "",
            },
            3: {
                name: "Andy",
                text: "\"Oh no.\"",
                background: "",
            },
            4: {
                name: "Narrator",
                text: "*A crowd of them stood in a half-circle around his locker. The metal door hung open. And inside—oh god, inside—his beautiful, beautiful stockpile was being plundered. Carton after carton, lifted out like evidence in a crime scene. His stomach dropped. His vision tunneled.*",
                background: "",
            },
            5: {
                name: "Andy",
                text: "\"Run.\"",
                background: "",
            },
            6: {
                name: "Narrator",
                text: "*A meaty hand clamped onto his shoulder before he could bolt.*",
                background: "",
            },
            7: {
                name: "Security Guard",
                text: "\"Hey kid, you’re Andy, right?\"",
                background: "",
            },
            8: {
                name: "Narrator",
                text: "*Andy’s brain short-circuited. Deny. Deny. DENY.*",
                background: "",
            },
            9: {
                name: "Andy",
                text: "\"Which one? There are a lot of Andy’s at this school.\"",
                background: "",
            },
            10: {
                name: "Narrator",
                text: "*The guard’s mustache twitched.*",
                background: "",
            },
            11: {
                name: "Security Guard",
                text: "\"No there’s actually one. You’re coming with us.\"",
                background: "",
            },
            12: {
                name: "Narrator",
                text: "*The security guard takes Andy to the principal office.*",
                background: "",
            },
            13: {
                name: "Principal",
                text: "\"We have a MAJOR milk shortage! You are going to have MAJOR consequences for stealing and tampering with the school’s cooling system!\"",
                background: "",
            },
            14: {
                name: "Narrator",
                text: "*Andy’s mouth went dry. Tampering?! He’d just… rerouted a few pipes. For efficiency.*",
                background: "",
            },
            15: {
                name: "Andy",
                text: "\"I’m sorry, I won’t do it again.\"",
                background: "",
            },
            16: {
                name: "Principal",
                text: "\"YOU. ARE. EXPELLED.\"",
                background: "",
            },
            17: {
                name: "Narrator",
                text: "*Andy gets kicked out of the school. He can no longer have unlimited white milk… no milk, no life.*",
                background: "",
            },
            //redirect to game over screen
            redirectLink: "stolen-milk.html"
        },
    
        lunchOutside: {
            1: {
                name: "Narrator",
                text: "*Andy goes outside and sits down criss crossed on his usual patch of concrete. He was about to eat his lunch until his eyes drifted upward—wait. The sky was crowded. More planes than he’d ever seen. Jets screamed past in formation, their afterburners painting streaks of panic across the horizon.*",
                background: "",
            },
            2: {
                name: "Andy",
                text: "\"Weird. Must be some airshow…\"",
                background: "",
            },
            3: {
                name: "Narrator",
                text: "*His gaze flicked to the far edge of the field, where that weird artifact was now glowing. A faint, pulsing hum vibrated through the ground.*",
                background: "",
            },
            4: {
                name: "Andy",
                text: "\"Eh. Probably just… science.\"",
                background: "",
            },
            5: {
                name: "Narrator",
                text: "*The bell rings and Andy goes to his next class. Ceramics class was Andy’s sanctuary. Today, he put the final touches on his latest masterpiece: a lopsided violin, its strings made of dental floss.*",
                background: "",
            },
            6: {
                name: "Erica",
                text: "\"Skipping chem. What’s up, Picasso?\"",
                background: "",
            },
            7: {
                name: "Andy",
                text: "\"It’s functional art. Here.\" He shows her the violin. \"Play me something sad. Like the sound of my milk stash dying.\"",
                background: "",
            },
            8: {
                name: "Erica",
                text: "\"Oh, so this is what you were hiding from me!\" Erica plucked at the strings. \"Beautiful. I love it!\"",
                background: "",
            },
            9: {
                name: "Andy",
                text: "\"Thanks.\"",
                background: "",
            },
            //Achievement unlocked: Crafted with Care
            10: {
                name: "Narrator",
                text: "*The bell rings and Erica follows Andy to witness his post-school activity, dumpster diving. He emerged victorious—WM total: 10—including the carton Erica had conveniently left in their usual spot.*",
                background: "",
            },
            11: {
                name: "Erica",
                text: "\"You’re like a raccoon with a death wish.\"",
                background: "",
            },
            12: {
                name: "Andy",
                text: "\"Death wish? I’ve been doing this for years now.\"",
                background: "",
            },
            13: {
                name: "Erica",
                text: "\"Are you done now?\"",
                background: "",
            },
            14: {
                name: "Andy",
                text: "\"Yeah, let's go home.\"",
                background: "",
            },
            15: {
                name: "Narrator",
                text: "*As they walked home, the pavement beneath them spiderwebbed with cracks.*",
                background: "",
            },
            16: {
                name: "Erica",
                text: "\"Uh… new sidewalk budget cuts?\"",
                background: "",
            },
            17: {
                name: "Narrator",
                text: "*Andy kicked a pebble into the fissure. It didn’t hit bottom.*",
                background: "",
            },
            18: {
                name: "Andy",
                text: "\"I didn’t hear it hit the bottom…\"",
                background: "",
            },
            19: {
                name: "Erica",
                text: "\"Are your ears something else you need to get checked out too?\"",
                background: "",
            },
            20: {
                name: "Andy",
                text: "\"I’m being serious!\"",
                background: "",
            },
            21: {
                name: "Erica",
                text: "\"Hahaha ok I’ll see you later.\"",
                background: "",
            },
            22: {
                name: "Narrator",
                text: "*Erica goes inside her house and Andy continues to walk home for another 2 minutes. Home sweet home. Andy barely made it inside before the earthquake hit—harder, longer. Picture frames rattled off walls as his milk cartons trembled in the fridge.*",
                background: "",
            },
            23: {
                name: "Narrator",
                text: "*Then, the dogs. Every breed, every size, bolting down the street in a frenzied stampede. A poodle wearing a diamond collar nearly took him out at the knees.*",
                background: "",
            },
            24: {
                name: "Andy",
                text: "\"Okay. Okay. This is fine.\"",
                background: "",
            },
            25: {
                name: "Narrator",
                text: "*Andy went to the TV and turned on the news channel.*",
                background: "",
            },
            26: {
                name: "Reporter",
                text: "\"—mass evacuations—hazmat teams at local high school—unknown object emitting—\"",
                background: "",
            },
            27: {
                name: "Narrator",
                text: "*The screen cut to his school. Scientists in hazmat suits surrounded the artifact, now levitating.*",
                background: "",
            },
            28: {
                name: "Andy",
                text: "\"Bummer… WAIT. WAITWAITWAIT—MY MILK GENERATORS!\"",
                background: "",
            },
            29: {
                name: "Narrator",
                text: "*The news feed glitched. A black hole, swirling, grew larger around the artifact. The ground trembled harder. Andy’s first instinct is to go to his emergency stash of milk. When he is about to gather some milk, he looks out the window to see his neighbors.*",
                background: "",
            },
            30: {
                name: "Neighbor Tom",
                text: "\"SORRY ANDY, LOVE THE WIFE MORE!\"",
                background: "",
            },
            31: {
                name: "Narrator",
                text: "*Andy dialed his parents. No answer.*",
                background: "",
            },
            32: {
                name: "Andy",
                text: "\"Cool. Coolcoolcool.\"",
                background: "",
            },
            33: {
                name: "Narrator",
                text: "*He grabbed 2 gallons of milk, his backpack, and ran. Ten minutes in, Andy paused for a mandatory milk break (priorities). When Andy makes it to the convenience store, it was empty, picked clean except for:*",
                background: "",
            },
            34: {
                name: "Narrator",
                text: "+3 King-Sized Hershey Bars (emergency rations)\n+2 Bottled Waters (for mixing with milk, obviously)\n+4 Rolls of TP (because chaos demands pettiness)",
                background: "",
            },
            // Achievement unlocked: Looting
            35: {
                name: "Narrator",
                text: "*After his looting, he detoured to Mr. Hankey’s house—his math teacher, the tyrant of statistics—and TP’d it into a mummy’s tomb.*",
                background: "",
            },
            36: {
                name: "Andy",
                text: "\"This… this is for the test.\"",
                background: "",
            },
            // Achievement unlocked: I would do that too but I dont have TP money
            37: {
                name: "Narrator",
                text: "*Uncle Dave’s house was next. Andy ransacked the fridge.*",
                background: "",
            },
            38: {
                name: "Narrator",
                text: "+1 gallon of milk",
                background: "",
            },
            39: {
                name: "Narrator",
                text: "*The news blared: the black hole was closer. He peeked outside. The horizon bent as trees leaned toward it.*",
                background: "",
            },
            40: {
                name: "Andy",
                text: "\"…I gotta go check this out.\"",
                background: "",
            },
            41: {
                name: "Narrator",
                text: "*Andy goes outside to confirm and:*",
                background: "",
            },        
            redirectLink: "andys-end.html"                
        },
    
        andysEnd: {
            1: {
                name: "Narrator",
                background: "../../../path2_image_backup/lunchOutside/41.webp", //change this link
                text: {
                    dialog: "Admire the view",
                    dialog2: "The Lactose Legacy",
                }
            },
        },
    
        admireTheView: {
            1: {
                name: "Narrator",
                text: "*Andy stood outside looking at the chaos unfolding before him. The wind howled, the ground trembled, and the black hole loomed—an endless, swirling hole taking over the sky. Houses, trees, even the light bent toward it, stretching like taffy into the void. He should’ve been terrified. But damn, it was kind of beautiful.*",
                background: "",
            },
            2: {
                name: "Andy",
                text: "\"Huh.\"",
                background: "",
            },
            3: {
                name: "Narrator",
                text: "*He took one last gulp of milk, the carton crumpling in his grip. The pull was irresistible now, gravity’s fingers curling around him. His feet left the ground.*",
                background: "",
            },
            4: {
                name: "Andy",
                text: "\"Welp. At least I died pretty.\"",
                background: "",
            },
            5: {
                name: "Narrator",
                text: "*And then— Silence. No more milk shortages. No more rationing. Just an infinite, starless dark. Somewhere, in the abyss, a single white carton floated past.*",
                background: "",
            },
            //redirect to game over screen
            redirectLink: "../path1/start-and-end/game-end.html"
        },
    
        theLactoseLegacy: {
            1: {
                name: "Narrator",
                text: "*Andy wasn’t about to let the apocalypse ruin his grand finale. Andy had one mission left. Find the milk. All of it. He burst into the nearest mansion with a hot tub (abandoned, obviously—rich people were the first to rocket off-world). The garage was a goldmine:*",
                background: "",
            },
            2: {
                name: "Narrator",
                text: "+12 gallons of whole milk\n+6 half-and-halfs\n+1 sacred carton of chocolate milk",
                background: "",
            },
            3: {
                name: "Andy",
                text: "\"Jackpot.\"",
                background: "",
            },
            4: {
                name: "Narrator",
                text: "*He ripped the lid off the hot tub and started pouring. Glug after glug, the white flood rose. The last drops of chocolate milk plopped in like a ceremonial sacrifice. The ground shook. The black hole groaned. Andy climbed in.*",
                background: "",
            },
            5: {
                name: "Andy",
                text: "\"This… this is art.\"",
                background: "",
            },
            6: {
                name: "Narrator",
                text: "*He leaned back, watching the sky twist itself inside out. A chunk of the neighbor’s roof plopped into the tub beside him.*",
                background: "",
            },
            7: {
                name: "Andy",
                text: "\"Extra sprinkles.\"",
                background: "",
            },
            8: {
                name: "Narrator",
                text: "*As the liquid filled his lungs, his last thought was pure bliss:*",
                background: "",
            },
            9: {
                name: "Andy",
                text: "\"I die… as I lived.\"",
                background: "",
            },
            //redirect to game over screen
            redirectLink: "../path1/start-and-end/game-end.html"
        }
    }


    let currentSceneSet = sceneSets[sceneSetName];

    const nameElement = document.querySelector(".name p");

    // Handle all #character-description elements
    const textElements = {
        dialog: document.querySelector("#character-description"),
        dialog2: document.querySelector("#character-description2"),
        dialog3: document.querySelector("#character-description3"),
        dialog4: document.querySelector("#character-description4")
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
                        typewriterTimeouts.push(setTimeout(typeChar, 30)); //controlls the speed of the typewriter effect
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
            preloadImages(sceneSetName, currentSceneNumber, 2);

            if (typeof text === 'object') {
                typeWriterText(text);
            } else {
                typeWriterText({ dialog: text });
            }

             //THIS WILL HELP IZZY A LOT
             // 👇 Only show button on scene 3
            const buttonContainer = document.getElementById("scene-button-container");
            const bookImage = document.getElementById("book");
            const rope = document.getElementById("rope");

            if (buttonContainer) {
                buttonContainer.style.display = (currentSceneNumber === 4) ? "block" : "none";
            }

            if (bookImage) {
                bookImage.style.display = (currentSceneNumber === 44) ? "block" : "none";
            }

            if (rope) {
                rope.style.display = (currentSceneNumber === 2) ? "block" : "none";
            }

            //add acheivements here
            const achievement1Container = document.getElementById("achievement1-container");

            if (achievement1Container) {
                if (currentSceneNumber === 1) {
                   achievement1Container.style.display = "block";
                } else {
                   achievement1Container.style.display = "none";
                }
           }
           const achievement2Container = document.getElementById("achievement2-container");

           if (achievement2Container) {
               if (currentSceneNumber === 9) {
                  achievement2Container.style.display = "block";
               } else {
                  achievement2Container.style.display = "none";
               }
          }
          const achievement3Container = document.getElementById("achievement3-container");

          if (achievement3Container) {
              if (currentSceneNumber === 34) {
                 achievement3Container.style.display = "block";
              } else {
                 achievement3Container.style.display = "none";
              }
         }
         const achievement4Container = document.getElementById("achievement4-container");

         if (achievement4Container) {
             if (currentSceneNumber === 36) {
                achievement4Container.style.display = "block";
             } else {
                achievement4Container.style.display = "none";
             }
        }

        }
    }

    /*function goToNextScene() {
        currentSceneNumber++;
        const totalScenes = Object.keys(currentSceneSet).filter(key => key !== 'redirectLink').length;
    
        if (currentSceneNumber > totalScenes) {
            // Removed redirection to default-endpage.html
            return; // You can also add logic here if you'd like to handle "end of scenes" in some other way
        } else {
            scene = currentSceneSet[currentSceneNumber];
            name = scene.name;
            text = scene.text;
            background = scene.background;
            nextScene = scene.nextScene || null;
    
            nameElement.textContent = name;
            updateBackground(sceneSetName, currentSceneNumber);
            preloadImages(sceneSetName, currentSceneNumber, 2);
    
            if (typeof text === 'object') {
                typeWriterText(text);
            } else {
                typeWriterText({ dialog: text });
            }
    
            // 👇 Only show button on scene 4
            const buttonContainer = document.getElementById("scene-button-container");
            const bookImage = document.getElementById("book");
            const rope = document.getElementById("rope");
    
            if (buttonContainer) {
                buttonContainer.style.display = (currentSceneNumber === 4) ? "block" : "none";
            }
    
            if (bookImage) {
                bookImage.style.display = (currentSceneNumber === 44) ? "block" : "none";
            }
    
            if (rope) {
                rope.style.display = (currentSceneNumber === 2) ? "block" : "none";
            }
    
            // Add achievements here
            const achievement1Container = document.getElementById("achievement1-container");
    
            if (achievement1Container) {
                achievement1Container.style.display = (currentSceneNumber === 3) ? "block" : "none";
            }
    
            const achievement2Container = document.getElementById("achievement2-container");
    
            if (achievement2Container) {
                achievement2Container.style.display = (currentSceneNumber === 3) ? "block" : "none";
            }
    
            const achievement3Container = document.getElementById("achievement3-container");
    
            if (achievement3Container) {
                achievement3Container.style.display = (currentSceneNumber === 5) ? "block" : "none";
            }
        }
    }*/
    

    document.addEventListener("click", displayFullText);
    document.addEventListener("keydown", displayFullText);

    if (typeof text === 'object') {
        typeWriterText(text);
    } else {
        typeWriterText({ dialog: text });
    }
});

// in hopes this will make the mobile part not have overflowing text

window.addEventListener("resize", () => {
    document.body.style.height = window.innerHeight + "px";
});







// loading the images before the user sees them

function preloadAllSceneImages(sceneSetName, onComplete) {
    if (!sceneSetName) {
        console.error('sceneSetName is required');
        return;
    }

    const folderPath = `../../../path2/${sceneSetName}/`;
    let sceneNumber = 1;
    let totalImagesPreloaded = 0;
    const loadedImages = new Set(); // Track loaded images to avoid duplicates

    function loadNext() {
        const imgPath = `${folderPath}${sceneNumber}.webp`;

        if (loadedImages.has(imgPath)) {
            sceneNumber++;
            loadNext(); // Skip already loaded images
            return;
        }

        const img = new Image();
        img.onload = () => {
            console.log(`[Preloading] Loaded: ${imgPath}`); // Log each image being preloaded
            loadedImages.add(imgPath);
            totalImagesPreloaded++;
            sceneNumber++;
            loadNext(); // Load the next image in this set
        };

        img.onerror = () => {
            console.error(`[Error] Failed to load: ${imgPath}`); // Log error if image fails to load
            sceneNumber++;
            loadNext(); // Continue to next image
        };

        img.src = imgPath;
    }

    loadNext(); // Start loading images for the first scene

    // If preload is complete, execute the onComplete callback (if provided)
    const checkIfComplete = setInterval(() => {
        if (loadedImages.size > 0 && loadedImages.size === totalImagesPreloaded) {
            clearInterval(checkIfComplete); // Stop checking once all images are loaded
            console.log(`[Preload Complete] Scene Set: "${sceneSetName}", Total images preloaded: ${totalImagesPreloaded}`);
            if (onComplete) onComplete(); // Call the onComplete callback if provided
        }
    }, 100);
}




// path to icon (its inside assets under forced path)

// Create a new <link> element
var link = document.createElement('link');
link.rel = 'icon';
link.type = 'image/jpeg';  // Specify the type as JPEG (or "image/jpg")
link.href = '/intro/images/andy-walking.gif'; // Path to the image in the 'assets' folder

// Append the <link> element to the <head> section
document.head.appendChild(link);


