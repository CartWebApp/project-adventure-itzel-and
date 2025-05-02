document.addEventListener("DOMContentLoaded", function () {
    let currentSceneNumber = 1;

    const sceneSetName = document.body.dataset.path || 'forcedPath';

    function toKebabCase(str) {
        return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    }
    function preloadImages(sceneSetName, startSceneNumber, count = 2) {
        const folderPath = `../../../background-imgs3/${sceneSetName}/`;
        for (let i = 1; i <= count; i++) {
            const sceneNum = startSceneNumber + i;
            const preloadImg = new Image();
            preloadImg.src = `${folderPath}${sceneNum}.webp`;
        }
    }
    
    function updateBackground(sceneSetName, sceneNumber) {
        const scene = currentSceneSet[sceneNumber];
        const { background, backgroundType } = scene;
        const folderPath = `../../../background-imgs3/${sceneSetName}/`;
    
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

        derikNoticeRock: {
            1: {
                name: "Derik",
                text: "\"Hey Andy! What are you doing over there?\"",
                background: "",
            },
            2: {
                name: "Andy",
                text: "\"Nothing…\"",
                background: "",
            },
            3: {
                name: "Derik",
                text: "\"Nothing huh. It better be nothing…\"",
                background: "",
            },
            4: {
                name: "Narrator",
                text: "*Derik walks over to Andy*",
                background: "",
            },
            5: {
                name: "Derik",
                text: "\"What is that?\"",
                background: "",
            },
            6: {
                name: "Andy",
                text: "\"I’m not sure. I’ve never seen anything like this before.\"",
                background: "",
            },
            7: {
                name: "Derik",
                text: "\"It’s glowing… I’m gonna pick it up.\"",
                background: "",
            },
            8: {
                name: "Andy",
                text: "\"No I don’t think that’s a good ide-\"",
                background: "",
            },
            9: {
                name: "Narrator",
                text: "*Blue streaks and spark start to fly off of Derik as he starts to levitate*",
                background: "",
            },
            10: {
                name: "Derik",
                text: "\"WOAHHH\"",
                background: "",
            },
            11: {
                name: "Narrator",
                text: "*ZAAAP*\n*Derik disappears*\n*Bell rings in the distance*",
                background: "",
            },
            12: {
                name: "Andy",
                text: "\"My math test!\"",
                background: "",
            },
            13: {
                name: "Narrator",
                text: "*Andy runs to his stats class and enters the room in a panic.*",
                background: "",
            },
            14: {
                name: "Mr. Hanky",
                text: "\"Out of all days, you chose to be late for the most important test of the year.\"",
                background: "",
            },
            15: {
                name: "Andy",
                text: "\"Sorry…\"",
                background: "",
            },
            16: {
                name: "Narrator",
                text: "*Andy finds his seat and sits down in a hurry.*",
                background: "",
            },
            17: {
                name: "Mr. Hanky",
                text: "\"As I told you all yesterday, we have a test today, a pretty important one. This test is worth 80% of your grade and the person with the highest score wins $100! Since you’ll be completing this test on a scantron, you’ll know your score by the end of the period. Any questions before we start?\"",
                background: "",
            },
            18: {
                name: "Narrator",
                text: "*Class: silence*",
                background: "",
            },
            19: {
                name: "Mr. Hanky",
                text: "\"Good, now let’s begin!\"",
                background: "",
            },
            20: {
                name: "Narrator",
                text: "*Andy takes out a regular calculator from his backpack instead. When he finally has all of his materials to take the test, he stares at the paper.*",
                background: "",
            },
            21: {
                name: "Andy",
                text: "\"I’m not reading all that.\"",
                background: "",
            },
            22: {
                name: "Narrator",
                text: "*Andy gives up and bubbles in A for all of the answers on his scantron. Andy stands up and turns in his test at the front of the class and sits back down.*",
                background: "",
            },
            23: {
                name: "Narrator",
                text: "*He puts his head on the desk and sleeps for the rest of the period. The bell rings and Andy takes his backpack to go to his next class. As Andy was about to leave, Mr. Hankey stopped him.*",
                background: "",
            },
            24: {
                name: "Mr. Hanky",
                text: "\"Did you even study for the test?\"",
                background: "",
            },
            25: {
                name: "Andy",
                text: "\"Yeah, I just got distracted by the noises outside. The birds and stuff ya know?\"",
                background: "",
            },
            26: {
                name: "Mr. Hanky",
                text: "\"... just leave my class.\"",
                background: "",
            },
            27: {
                name: "Narrator",
                text: "*Following Andy through his other classes is pointless. He just dozes off and doesn’t do any of his work, so let’s skip to his favorite part of the day, lunch.*",
                background: "",
            },
            28: {
                name: "Narrator",
                text: "*Andy finds his usual spot outside to eat his lunch. He sits down, criss crossed on the concrete and chugs 4 of the 8 cartons of white milk he got from the cafeteria.*",
                background: "",
            },
            29: {
                name: "Narrator",
                text: "*As he was about to eat his lunch, Andy noticed some cracks forming in the cement near him. He watched, chewing slowly, as the cracks deepened ever so slightly.*",
                background: "",
            },
            30: {
                name: "Andy",
                text: "\"Huh. Weird…\"",
                background: "",
            },
            31: {
                name: "Narrator",
                text: "*Andy drifted his eyes upward, the sky was crowded. More planes than he’d ever seen. Jets screamed past in formation, their afterburners painting streaks across the horizon.*",
                background: "",
            },
            32: {
                name: "Andy",
                text: "\"Must be some airshow…\"",
                background: "",
            },            
            //Achievement unlocked: Master observer
            redirectLink: "derik-regular-show.html"                    
        },

        derikRegularShow: {
            1: {
                name: "Derik",
                text: "\"What is this place?\"",
                background: "",
            },
            2: {
                name: "Narrator",
                text: "*Derik is lying on the ground when he decides to get up.*",
                background: "",
            },
            3: {
                name: "Narrator",
                text: "*He finds himself in a strange, dimly lit cavernous space filled with pulsing machinery, blinking lights, and swirling portals projected on tall, jagged walls.*",
                background: "",
            },
            4: {
                name: "Narrator",
                text: "*Strange cables snake across the floor like vines, and distant echoes of mechanical grinding bounce off the steel ceiling. It feels like a villain's lair straight out of a Saturday morning cartoon.*",
                background: "",
            },
            5: {
                name: "Gean",
                text: "\"On your feet dimwit!\"",
                background: "",
            },
            6: {
                name: "Derik",
                text: "\"Wha… What is this place?\"",
                background: "",
            },
            7: {
                name: "Gean",
                text: "\"This is my base that you just so happened to bust into, Gene Base.\"",
                background: "",
            },
            8: {
                name: "Derik",
                text: "\"Gene Base? Pffft what kind of name is that?\"",
                background: "",
            },
            9: {
                name: "Gean",
                text: "\"Shut up, you’ll regret saying that…\"",
                background: "",
            },
            10: {
                name: "Derik",
                text: "\"Oh really? Show me.\"",
                background: "",
            },
            11: {
                name: "Narrator",
                text: "*Gean clenches his fist and slams it into a metal pillar, instantly denting it with a deafening crunch. Sparks fly. Derik flinches.*",
                background: "",
            },
            12: {
                name: "Derik",
                text: "\"Ok I believe you. What do you want from me?\"",
                background: "",
            },
            13: {
                name: "Gean",
                text: "\"Good, I only need you for one thing. You help me build my teleporter and I can bring you back home.\"",
                background: "",
            },
            14: {
                name: "Derik",
                text: "\"How can I trust you?\"",
                background: "",
            },
            15: {
                name: "Gean",
                text: "\"Easy, I have power!\"",
                background: "",
            },
            16: {
                name: "Derik",
                text: "\"ight, sounds reasonable. What do you need me to do, boss?\"",
                background: "",
            },
            17: {
                name: "Gean",
                text: "\"As I said before, I’m building a teleporter. With this, I’ll be able to travel to any universe and become the most powerful being ever!\"",
                background: "",
            },
            18: {
                name: "Derik",
                text: "\"Okayyyyy… and what do I do? Am I getting something out of this?\"",
                background: "",
            },
            19: {
                name: "Gean",
                text: "\"Hahaha of course not silly! Now go and get me 3 apple fritters, 1 feather from Mordecai, and 2 lollipops from Pop’s wallet.\"",
                background: "",
            },            
            redirectLink: "derik-task.html"                                
        },

        derikTask: {
            1: {
                name: "Narrator",
                background: "", //change this link
                text: {
                    dialog: "Get it right the first time",
                    dialog2: "Trial and error",
                }
            },
        },

        rightFirstTime: {
            1: {
                name: "Derik",
                text: "\"Ok, sounds easy enough.\"",
                background: "",
            },
            2: {
                name: "Narrator",
                text: "*Thirty minutes pass by and Derik goes back to Gean’s Base*",
                background: "",
            },
            3: {
                name: "Gean",
                text: "\"Took you long enough! Now show me what you got.\"",
                background: "",
            },
            4: {
                name: "Derik",
                text: "\"Here.\"",
                background: "",
            },
            5: {
                name: "Gean",
                text: "\"What is this?... you brought me 3 apple fritters, 1 feather from Mordecai, and 2 lollipops from Pop’s wallet. This is… exactly what I asked for?\"",
                background: "",
            },
            6: {
                name: "Derik",
                text: "\"Mhm I’m not as dumb as you think I am.\"",
                background: "",
            },
            //Achievement unlocked: Real-life Dexter
            7: {
                name: "Gean",
                text: "\"Don’t get too cocky now, little boy...\"",
                background: "",
            },
            8: {
                name: "Derik",
                text: "\"Whatever, now bring me back home!\"",
                background: "",
            },
            9: {
                name: "Gean",
                text: "\"I can’t do that for you. You might be… too… smart.\"",
                background: "",
            },
            10: {
                name: "Derik",
                text: "\"Hahaha yeah I actually get that a lot-\"",
                background: "",
            },
            11: {
                name: "Narrator",
                text: "*BOOM*\n*The deafening explosion shook the very foundation of the base. Derik’s words were swallowed by the blast as the world around him went black. Gean’s eyes glinted with cold calculation as his finger hovered over the trigger. Gean kills you because he thinks you are too smart.*",
                background: "",
            },
            //game over
            redirectLink: "../path1/start-and-end/game-end.html"
        },

        trialAndError: {
            1: {
                name: "Derik",
                text: "\"How in the world am I supposed to do that? Who’s Mordecai?\"",
                background: "",
            },
            2: {
                name: "Gean",
                text: "\"Enough questions! Gosh you’re already annoying me, just get out of my sight.\"",
                background: "",
            },
            3: {
                name: "Derik",
                text: "\"But-\"",
                background: "",
            },
            4: {
                name: "Gean",
                text: "\"NOW!\"",
                background: "",
            },
            5: {
                name: "Narrator",
                text: "*Derik rolls his eyes and leaves in a fit of anger.*",
                background: "",
            },
            6: {
                name: "Derik",
                text: "\"Stupid vending machine, who does he think he is?\"",
                background: "",
            },
            7: {
                name: "Narrator",
                text: "*Thirty minutes pass by and Derik goes back to Gean’s Base*",
                background: "",
            },
            8: {
                name: "Gean",
                text: "\"Took you long enough! Now show me what you got.\"",
                background: "",
            },
            9: {
                name: "Derik",
                text: "\"Here.\"",
                background: "",
            },
            10: {
                name: "Gean",
                text: "\"What is this?... you brought me 2 caramel apples, 1 goose feather, and 3 dumdums. This is not what I asked for!\"",
                background: "",
            },
            11: {
                name: "Derik",
                text: "\"I kinda forgot on my walk over there.\"",
                background: "",
            },
            12: {
                name: "Gean",
                text: "\"You imbecile! Go get me 3 apple fritters, 1 feather from Mordecai, and 2 lollipops from Pop’s wallet now!\"",
                background: "",
            },
            13: {
                name: "Derik",
                text: "\"Ok fine.\"",
                background: "",
            },
            14: {
                name: "Narrator",
                text: "*Derik leaves for 20 minutes to go find the items Gean asked for.*",
                background: "",
            },
            15: {
                name: "Derik",
                text: "\"I’m back.\"",
                background: "",
            },
            16: {
                name: "Gean",
                text: "\"You better have the right items.\"",
                background: "",
            },
            17: {
                name: "Derik",
                text: "\"I do, just look.\"",
                background: "",
            },
            18: {
                name: "Gean",
                text: "\"You brought… 3 pieces of caramel apple brittle, 1 swan feather, and 2 Tootsie Pop lollipops… I’m going to end you.\"",
                background: "",
            },
            //Achievement unlocked: Professional Failure
            19: {
                name: "Derik",
                text: "\"It’s close enough! Why do you need this to build a teleporter?\"",
                background: "",
            },
            20: {
                name: "Gean",
                text: "\"Even if I explained it, you wouldn’t understand you idiot! NOW GO GET ME WHAT I ASKED FOR OR I WON’T BRING YOU BACK HOME.\"",
                background: "",
            },
            21: {
                name: "Derik",
                text: "\"WHERE DO I EVEN FIND THIS STUFF?\"",
                background: "",
            },
            22: {
                name: "Gean",
                text: "\"GO ROB THE PARK. YOU’LL FIND EVERYTHING THAT I NEED THERE.\"",
                background: "",
            },
            23: {
                name: "Derik",
                text: "\"UGHHHH FINE.\"",
                background: "",
            },
            24: {
                name: "Narrator",
                text: "*Derik makes his way to the park gates.*",
                background: "",
            },
            25: {
                name: "Derik",
                text: "\"This place is pretty empty for a park. How am I supposed to find what I need here?\"",
                background: "",
            },
            26: {
                name: "Narrator",
                text: "*Derik continues his search in the park and walks around for five minutes until he finds a blue-ish teal house that is two stories tall.*",
                background: "",
            },
            27: {
                name: "Derik",
                text: "\"Woah, that's a big house. I bet I could find a lot of stuff there. I’m sure they won’t mind if I take a couple of things.\"",
                background: "",
            },
            28: {
                name: "Narrator",
                text: "*Derik walks up the stairs and opens the front door.*",
                background: "",
            },
            29: {
                name: "Derik",
                text: "\"A kitchen, nice. Let me see if they have anything nice in there.\"",
                background: "",
            },
            30: {
                name: "Narrator",
                text: "*Derik opens the fridge only to find a gallon of white milk.*",
                background: "",
            },
            31: {
                name: "Derik",
                text: "\"Ew, are they poor or something?\"",
                background: "",
            },
            32: {
                name: "Narrator",
                text: "*Derik continues to walk around the house and goes into another room.*",
                background: "",
            },
            33: {
                name: "Derik",
                text: "\"I should find something here…\"",
                background: "",
            },
            34: {
                name: "Narrator",
                text: "*Derik hears the front door creak open…*",
                background: "",
            },
            35: {
                name: "Pops",
                text: "\"Oh it seems I have left my wallet here!\"",
                background: "",
            },
            36: {
                name: "Derik",
                text: "\"Shoot! They can’t find me here.\"",
                background: "",
            },
            37: {
                name: "Narrator",
                text: "*Derik hears the steps get closer and closer to him*",
                background: "",
            },
            redirectLink: "derik-hides.html"            
        },

        derikHides: {
            1: {
                name: "Narrator",
                background: "",
                text: {
                    dialog: "Acts like a lamp post",
                    dialog2: "Hides in the garage",
                    dialog3: "Hide in Pop’s closet"
                }
            },
        },

        lampPost: {
            1: {
                name: "Narrator",
                text: "*Derik goes under the lamp shade and tries his hardest to stand still.*",
                background: "",
            },
            2: {
                name: "Pops",
                text: "\"It must be somewhere up here… Oh! Would you look at that? This lamp post is divine! Since when have I had a lamp post look like this?\"",
                background: "",
            },
            3: {
                name: "Narrator",
                text: "*Derik holds his breath as Pops takes a step closer to intensely examine his “new lamp post”.*",
                background: "",
            },
            4: {
                name: "Pops",
                text: "\"Ah! It must have been a gift from my pa-pa. Who else would think of such a delightful gift? Come here everyone you must come! Look at the detailed craftsmanship in this new lamp post my father got me.\"",
                background: "",
            },
            5: {
                name: "Narrator",
                text: "*Derik hears more footsteps come up the stairs*",
                background: "",
            },
            6: {
                name: "Derik",
                text: "\"There’s more?!\"",
                background: "",
            },
            7: {
                name: "Pops",
                text: "\"Well, what do you think?\"",
                background: "",
            },
            8: {
                name: "Mordecai",
                text: "\"It’s nice.\"",
                background: "",
            },
            9: {
                name: "Rigby",
                text: "\"Haha yeah veryyy nice.\"",
                background: "",
            },
            10: {
                name: "Skips",
                text: "\"Your father has good taste.\"",
                background: "",
            },
            11: {
                name: "Muscle Man",
                text: "\"Cool.\"",
                background: "",
            },
            12: {
                name: "Benson",
                text: "\"What’s the point of this?\"",
                background: "",
            },
            13: {
                name: "Pops",
                text: "\"I’m glad you all like it as well! But just take a closer look at it and you’ll see-\"",
                background: "",
            },
            14: {
                name: "Narrator",
                text: "*20 minutes goes by… Derik is laying on the floor with the lamp shade on his head.*",
                background: "",
            },
            15: {
                name: "Derik",
                text: "\"If I can’t see them… they can’t see me. Just.. hang… in there.\"",
                background: "",
            },
            16: {
                name: "Muscle Man",
                text: "\"Is it supposed to do that?\"",
                background: "",
            },
            17: {
                name: "Pops",
                text: "\"Maybe it can be used as a chair as well?\"",
                background: "",
            },
            18: {
                name: "Muscle Man",
                text: "\"Ok, let me try.\"",
                background: "",
            },
            19: {
                name: "Narrator",
                text: "*Muscle Man sits on said lamp because he was tired of standing up for so long.*",
                background: "",
            },
            20: {
                name: "Muscle Man",
                text: "\"Oh no bro…\"",
                background: "",
            },
            21: {
                name: "Narrator",
                text: "*Muscle Man proceeds to rip the most earth-shaking fart of his life… you can feel the house getting unbolted and see the stench of green fog coming from his rear.*",
                background: "",
            },
            redirectLink: "survive-muscle-man.html"            
        },

        surviveMuscleMan: {
            1: {
                name: "Andy",
                background: "",
                text: {
                    dialog: "Cover mouth",
                    dialog2: "Try to escape",
                }
            },
        },

        coverMouth:{
            1: {
                name: "Derik",
                text: "\"OH GOD IT STINKS *HURK*\"",
                background: "",
            },
            2: {
                name: "Narrator",
                text: "*Derik covers his mouth hoping he can block the stench… but… it was too strong. The green fog seeped through the crevices of his fingers. The sour stench tickling his nose hairs was unbearable. Every breath taken for survival felt like torture.*",
                background: "",
            },
            //redirect link to cannotEscape
            redirectLink: "cannot-escape.html"                                    
        },

        tryToEscape: {
            1: {
                name: "Derik",
                text: "\"I GOTTA GET OUTTA HERE, I CAN’T STAND THIS ANYMORE!\"",
                background: "",
            },
            2: {
                name: "Narrator",
                text: "*Derik: “MMMPH! MMMM-MOVEEEEE!”*",
                background: "",
            },
            3: {
                name: "Narrator",
                text: "*Reality (what Muscle Man hears): “Mrrph… mmmf?”*",
                background: "",
            },
            4: {
                name: "Muscle Man",
                text: "\"Huh?\"",
                background: "",
            },
            5: {
                name: "Derik",
                text: "\"GGGGET— (face smushed again) —OFFFF MMMPH!\"",
                background: "",
            },
            6: {
                name: "Narrator",
                text: "*Reality (what Muscle Man hears): “Blergh… snurf?”*",
                background: "",
            },
            7: {
                name: "Muscle Man",
                text: "\"I can’t hear you. You gotta speak louder.\"",
                background: "",
            },
            8: {
                name: "Derik",
                text: "\"AHHHHHH\"",
                background: "",
            },
            9: {
                name: "Narrator",
                text: "*Reality (what Muscle Man hears): “Mmm. Mhm!”*",
                background: "",
            },
            10: {
                name: "Muscle Man",
                text: "\"Yeah, I love waffles too, man.\"",
                background: "",
            },
            //redirect to cannotEscape
            redirectLink: "cannot-escape.html"                        
        },

        cannotEscape: {
            1: {
                name: "Narrator",
                text: "*Muscle Man is too fat-... no that’s not the right word… he is too… LARGE for Derik to push off. There is NOTHING Derik could have possibly done to escape this tragedy. This is all because Muscle Man had too many WINNNNNNNNGS for dinner the night before and breakfast today.*",
                background: "",
            },
            //Achievement unlocked: The Smell of Death
            //*Game Over: “I don’t feel like eating… for the rest of my life anymore. Thanks.
            redirectLink: "../path1/start-and-end/game-end.html"
        },

        hideInGarage: {
            1: {
                name: "Derik",
                text: "\"I gotta hide quickly!\"",
                background: "",
            },
            2: {
                name: "Narrator",
                text: "*Derik finds the door to the garage and runs in there carefully closing the door behind him.*",
                background: "",
            },
            3: {
                name: "Pops",
                text: "\"I’m not sure where I put it…\"",
                background: "",
            },
            4: {
                name: "Skips",
                text: "\"Did you leave it in the garage again?\"",
                background: "",
            },
            5: {
                name: "Pops",
                text: "\"Nooo it must be in my room. Let me go check!\"",
                background: "",
            },
            6: {
                name: "Narrator",
                text: "*Skips crossed his massive arms, his sharp eyes narrowing slightly. His instincts told him something was off.*",
                background: "",
            },
            7: {
                name: "Skips",
                text: "\"Pops forgets things all the time… but I should still check in the meantime.\"",
                background: "",
            },
            8: {
                name: "Narrator",
                text: "*Inside the garage, Derik’s breath hitched as he heard the footsteps growing louder—closer. His fingers twitched nervously at his sides. Then—silence. The footsteps stopped right outside the door.*",
                background: "",
            },
            9: {
                name: "Narrator",
                text: "*Clunk… Clunk… Ka-chunk*\n*The sound of Skips testing the handle sent a cold bead of sweat trickling down his temple, his pulse roaring in his ears. He pressed himself further into the shadows, as if he could melt into the wall itself.*",
                background: "",
            },
            10: {
                name: "Pops",
                text: "\"I couldn’t find it in my room!\"",
                background: "",
            },
            11: {
                name: "Skips",
                text: "\"I tried looking in the garage, but it’s locked.\"",
                background: "",
            },
            12: {
                name: "Pops",
                text: "\"Oh I forgot to unlock the garage.\"",
                background: "",
            },
            13: {
                name: "Skips",
                text: "\"Let’s look somewhere else first.\"",
                background: "",
            },
            14: {
                name: "Narrator",
                text: "*Derik hears the footsteps walking away.*",
                background: "",
            },
            15: {
                name: "Derik",
                text: "\"Ah, thank god. I thought I wasn’t gonna get away with that.\"",
                background: "",
            },
            16: {
                name: "Narrator",
                text: "*20 minutes later*",
                background: "",
            },
            17: {
                name: "Skips",
                text: "\"Alright, let’s look in the garage.\"",
                background: "",
            },
            18: {
                name: "Pops",
                text: "\"Good idea!\"",
                background: "",
            },
            19: {
                name: "Narrator",
                text: "*Derik’s blood ran cold. The footsteps were back—and this time, they weren’t leaving.*",
                background: "",
            },
            20: {
                name: "Derik",
                text: "\"Why are they coming here again?!?\"",
                background: "",
            },
            21: {
                name: "Skips",
                text: "\"Do you have the key for the garage?\"",
                background: "",
            },
            22: {
                name: "Pops",
                text: "\"Of course! Here you go!\"",
                background: "",
            },
            23: {
                name: "Narrator",
                text: "*Clink Clink*",
                background: "",
            },
            24: {
                name: "Skips",
                text: "\"Here we go.\"",
                background: "",
            },
            25: {
                name: "Narrator",
                text: "*Derik’s eyes darted around the garage, searching for an escape that wasn’t there. The lock clicked. The door groaned open, flooding the dim space with blinding sunlight.*",
                background: "",
            },
            26: {
                name: "Narrator",
                text: "*Skips stood in the doorway, his massive frame blocking any hope of escape. His expression shifted from surprise to stern suspicion in an instant.*",
                background: "",
            },
            27: {
                name: "Skips",
                text: "\"What in the world…\"",
                background: "",
            },
            28: {
                name: "Derik",
                text: "\"I come in peace.\"",
                background: "",
            },
            29: {
                name: "Narrator",
                text: "*Skips’ eyes narrowed. He cracked his knuckles.*",
                background: "",
            },
            30: {
                name: "Skips",
                text: "\"Yeah? Then you won’t mind answering a few questions.\"",
                background: "",
            },
            31: {
                name: "Narrator",
                text: "*Derik swallowed hard. He had a bad feeling about this.*",
                background: "",
            },
            32: {
                name: "Skips",
                text: "\"Alright, kid. Start talking.\"",
                background: "",
            },
            33: {
                name: "Derik",
                text: "\"Uh… nice weather we’re having, huh?\"",
                background: "",
            },
            34: {
                name: "Narrator",
                text: "*Skips didn’t budge. His glare deepened.*",
                background: "",
            },
            35: {
                name: "Skips",
                text: "\"First question: What are you doing in our garage?\"",
                background: "",
            },
            36: {
                name: "Derik",
                text: "\"I was just, y’know… exploring?\"",
                background: "",
            },
            37: {
                name: "Skips",
                text: "\"Exploring. In a locked maintenance shed.\"",
                background: "",
            },
            38: {
                name: "Derik",
                text: "\"Okay, fine! I was hiding! Some guys were after me, and I panicked!\"",
                background: "",
            },
            39: {
                name: "Skips",
                text: "\"Second question: Did you touch anything in here?\"",
                background: "",
            },
            40: {
                name: "Derik",
                text: "\"No! I swear! I just stood here like a statue!\"",
                background: "",
            },
            41: {
                name: "Narrator",
                text: "*Skips’ eyes flicked to a suspiciously moved toolbox, then back to Derik.*",
                background: "",
            },
            42: {
                name: "Skips",
                text: "\"You’re lying.\"",
                background: "",
            },
            43: {
                name: "Derik",
                text: "\"Okay, okay! I knocked over a wrench, but I put it back!\"",
                background: "",
            },
            44: {
                name: "Narrator",
                text: "*Skips took a slow step forward. Derik instinctively backed up—only to bump into a shelf, sending a can of bolts clattering to the ground.*",
                background: "",
            },
            45: {
                name: "Skips",
                text: "\"Real smooth.\"",
                background: "",
            },
            46: {
                name: "Derik",
                text: "\"Look, I didn’t break anything! Just let me go, and I’ll never come back!\"",
                background: "",
            },
            47: {
                name: "Skips",
                text: "\"Final question: You ever heard the phrase ‘play stupid games, win stupid prizes’?\"",
                background: "",
            },
            48: {
                name: "Derik",
                text: "\"Uh… no?\"",
                background: "",
            },
            49: {
                name: "Narrator",
                text: "*Skips’ fist shot out like a piston.*",
                background: "",
            },
            50: {
                name: "Derik",
                text: "\"Ohhh, now I get it—\"",
                background: "",
            },
            51: {
                name: "Narrator",
                text: "*POW!*\n*Derik gets the ole one two by Skips.*",
                background: "",
            },            
            //*Game Over: insert coffin dancing meme here with sound... low quality
            redirectLink: "../path1/start-and-end/game-end.html"
        },

        hideInCloset: {
            1: {
                name: "Narrator",
                text: "*Derik’s eyes darted around the room before landing on a narrow closet door. He lunged for it, yanking it open and squeezing inside just as Pops’ shadow fell across the study’s entrance.*",
                background: "",
            },
            2: {
                name: "Narrator",
                text: "*The closet was cramped, smelling faintly of lavender and old sweaters. Derik held his breath as Pops hummed to himself, rummaging through the desk.*",
                background: "",
            },
            3: {
                name: "Pops",
                text: "\"Ah-ha! Here it is!\"",
                background: "",
            },
            4: {
                name: "Narrator",
                text: "*The wallet snapped shut with a satisfying click. Derik’s heart pounded so loudly he was sure Pops could hear it. But then… the footsteps retreated, and the front door creaked shut again.*",
                background: "",
            },
            5: {
                name: "Narrator",
                text: "*Derik waited a full ten seconds before bursting out of the closet, gasping for air. His eyes locked onto the desk, where Pops’ wallet had been… but it was gone. Then he spotted it: two, glimmering lollipops poking out from under a stack of papers. He snatched it up, grinning.*",
                background: "",
            },
            6: {
                name: "Derik",
                text: "\"Close enough.\"",
                background: "",
            },
            7: {
                name: "Narrator",
                text: "*He bolted from the house, not bothering to close the door behind him. The park blurred past as he sprinted to get the other items, the stolen lollipops clutched tightly in his fist.*",
                background: "",
            },
            redirectLink: "geans-base.html"            
        },

        geansBase: {
            1: {
                name: "Narrator",
                text: "*20 minutes later*",
                background: "",
            },
            2: {
                name: "Gean",
                text: "\"Well? Did ya get ’em?\"",
                background: "",
            },
            3: {
                name: "Narrator",
                text: "*Derik tossed the items at him. Gean caught it mid-air, inspecting it with a critical eye before chuckling.*",
                background: "",
            },
            4: {
                name: "Gean",
                text: "\"3 apple fritters… 1 feather from Mordecai… and 2 lollipops from Pop’s wallet… perfect.\"",
                background: "",
            },
            5: {
                name: "Narrator",
                text: "*He jammed the last lollipop into the teleporter’s power core revealing a flickering image of the real world: Derik’s old school hallway, frozen in time.*",
                background: "",
            },
            6: {
                name: "Gean",
                text: "\"It’s WORKING! Time to ditch this lame cartoon world!\"",
                background: "",
            },
            7: {
                name: "Narrator",
                text: "*He raised his hand to slam the teleport button… but Derik suddenly blocked his path, arms crossed.*",
                background: "",
            },
            8: {
                name: "Derik",
                text: "\"Uh, no. I just got here. I’m not going back to that boring dump.\"",
                background: "",
            },
            9: {
                name: "Gean",
                text: "\"What?! This was the deal, kid!\"",
                background: "",
            },
            10: {
                name: "Derik",
                text: "\"Deals change.\"",
                background: "",
            },
            11: {
                name: "Narrator",
                text: "*Gean snarled and made a grab for the controls. Derik ducked, and the two scrambled over the machine, slamming buttons in a chaotic tug-of-war. The teleporter groaned, its display screen glitching wildly:*",
                background: "",
            },
            12: {
                name: "Narrator",
                text: "*[ERROR: DESTINATION OVERRIDE]*\n*ZZZAP!*\n*A blinding flash filled the room. When the smoke cleared… Gean was gone.*",
                background: "",
            },
            13: {
                name: "Narrator",
                text: "*Derik blinked, looking around the empty garage. The teleporter’s screen now displayed:*",
                background: "",
            },
            14: {
                name: "Narrator",
                text: "*[TARGET LOST: TRANSPORTED TO [UNKNOWN DIMENSION]]*",
                background: "",
            },
            15: {
                name: "Derik",
                text: "\"…Oops.\"",
                background: "",
            },
            16: {
                name: "Narrator",
                text: "*Silence settled over the hideout. For the first time, Derik realized… he was alone. No Gean. No backup. Just him, a busted teleporter, and an entire cartoon world at his fingertips.*",
                background: "",
            },
            17: {
                name: "Narrator",
                text: "*His smirk faltered for a second. Then, a slow, wicked idea crept into his mind.*",
                background: "",
            },
            redirectLink: "derik-plan.html"                        
        },

        derikPlan: {
            1: {
                name: "Narrator",
                background: "", //change this link
                text: {
                    dialog: "Needs a light snack",
                    dialog2: "Create a villain crew",
                }
            },
        },

        derikHungry: {
            1: {
                name: "Derik",
                text: "\"Man, all this scheming’s making me hungry…\"",
                background: "",
            },
            2: {
                name: "Narrator",
                text: "*He cracked his knuckles and punched in coordinates on the teleporter’s keypad.*",
                background: "",
            },
            3: {
                name: "Derik",
                text: "\"Time to grab a snack.\"",
                background: "",
            },
            4: {
                name: "Narrator",
                text: "*WHOOSH!*\n*In a flash of light, Derik materialized inside Death Kwon Do… except instead of martial arts, the sign now read:*",
                background: "",
            },
            5: {
                name: "Narrator",
                text: "*[DEATH KWON DO: DELI AND SUBS]*",
                background: "",
            },
            6: {
                name: "Narrator",
                text: "*Behind the counter, the cashier glared as Derik strolled up.*",
                background: "",
            },
            7: {
                name: "Cashier",
                text: "\"We close in five minutes.\"",
                background: "",
            },
            8: {
                name: "Derik",
                text: "\"Yeah, yeah—gimme whatever’s got the most meat.\"",
                background: "",
            },
            9: {
                name: "Narrator",
                text: "*Death Cashier’s eyes twitched. The tension in the deli thickened like day-old mayonnaise as the enormous sandwich artist turned to his grill with ominous purpose. The sounds of sizzling meat and the sharp chop of vegetables took on a disturbingly violent rhythm.*",
                background: "",
            },
            10: {
                name: "Narrator",
                text: "*Five minutes later, Derik found himself holding a sandwich so massive it required two hands. The \"Death Sandwich\" dripped with at least six giant meatballs and a suspicious glowing sauce that smelled like victory and regret. Without hesitation, he took an enormous bite -*",
                background: "",
            },
            11: {
                name: "Narrator",
                text: "*- and his taste buds exploded in intense flavors. The sandwich was perfection, each bite better than the last. Before he knew it, he'd devoured the entire thing while leaning against the deli's exterior wall.*",
                background: "",
            },
            12: {
                name: "Derik",
                text: "\"Man that was good. Too bad it didn't fill me up... how about...\"",
                background: "",
            },
            13: {
                name: "Narrator",
                text: "*His musings were cut short as a strange tingling sensation spread from his stomach. Looking down, he noticed with growing alarm that his shirt was developing a peculiar glow exactly where the sandwich now resided in his digestive system. The glow intensified, spreading outward.*",
                background: "",
            },
            14: {
                name: "Derik",
                text: "\"Oh... that's not...\"",
                background: "",
            },
            15: {
                name: "Narrator",
                text: "*His knees buckled. The world tilted alarmingly as he collapsed onto the sidewalk outside the deli. His last conscious thought was the realization that he'd failed to notice the small print on the menu:*",
                background: "",
            },
            16: {
                name: "Narrator",
                text: "*\"Must wear cut-off jean shorts and a mullet while consuming the Death Sandwich. Not responsible for spontaneous combustion, dimensional displacement, or total existence failure.\"*",
                background: "",
            },
            //*Game Over: “No mullet, no Jorts, no Sandwich *dies*”
            redirectLink: "../path1/start-and-end/game-end.html"
        },

        derikVillainCrew: {
            1: {
                name: "Narrator",
                text: "*Derik eyed the teleporter.*",
                background: "",
            },
            2: {
                name: "Derik",
                text: "\"If I’m stuck here… might as well make it interesting.\"",
                background: "",
            },
            3: {
                name: "Narrator",
                text: "*With a decisive press of a button, the teleporter whirred to life, and in a flash of light, Derik found himself back at the park—though he had no idea this was the show’s main setting.*",
                background: "",
            },
            4: {
                name: "Narrator",
                text: "*The sun hung high in the sky, the familiar green landscape stretching before him. His eyes locked onto a massive, muscular yeti pushing a lawnmower with effortless strength.*",
                background: "",
            },
            5: {
                name: "Derik",
                text: "\"Now there’s a guy who looks like he could wreck some stuff.\"",
                background: "",
            },
            6: {
                name: "Narrator",
                text: "*He strutted up to Skips, who barely glanced up from his work.*",
                background: "",
            },
            7: {
                name: "Derik",
                text: "\"Hey, big guy. How’d you like to join my villain crew? We’re gonna cause some real chaos.\"",
                background: "",
            },
            8: {
                name: "Narrator",
                text: "*Skips paused, slowly turning his head to stare at Derik with an unimpressed frown.*",
                background: "",
            },
            9: {
                name: "Skips",
                text: "\"Kid, I’ve been around long enough to know that never ends well. Walk away while you still can.\"",
                background: "",
            },
            10: {
                name: "Derik",
                text: "\"Yeah, yeah, moral high ground. Boring.\"",
                background: "",
            },
            11: {
                name: "Narrator",
                text: "*Skips sighed and resumed mowing, clearly done with the conversation. Derik shoved his hands in his pockets and walked off.*",
                background: "",
            },
            12: {
                name: "Derik",
                text: "\"Wasted potential…\"",
                background: "",
            },
            13: {
                name: "Narrator",
                text: "*Derik’s next stop was a cozy little coffee shop, its warm lighting and smell of roasted beans completely lost on him. Behind the counter stood Margaret, humming as she wiped down the espresso machine.*",
                background: "",
            },
            14: {
                name: "Derik",
                text: "\"Hey, you. Where do I find some real villains around here? Like, world-destroying types?\"",
                background: "",
            },
            15: {
                name: "Narrator",
                text: "*Margaret blinked, then let out a light laugh.*",
                background: "",
            },
            16: {
                name: "Margaret",
                text: "\"Wow, that sounds like something straight out of a cheesy video game.\"",
                background: "",
            },
            17: {
                name: "Narrator",
                text: "*She gestured to the back of the shop, where a glowing arcade game stood surrounded by a crowd of kids.*",
                background: "",
            },
            18: {
                name: "Margaret",
                text: "\"You should try that new game, it’s super popular. The villain in it is literally called the 'Destroyer of Worlds.' Maybe that’ll scratch your evil itch?\"",
                background: "",
            },
            19: {
                name: "Derik",
                text: "\"Pfft. Gaming’s for nerds.\"",
                background: "",
            },
            20: {
                name: "Narrator",
                text: "*But as he turned to leave, his gaze snagged on the screen. A red pixelated monstrosity with glowing eyes dominated the game’s boss battle. Derik’s eyes widened.*",
                background: "",
            },
            21: {
                name: "Derik",
                text: "\"Okay… maybe that’s kinda cool.\"",
                background: "",
            },
            22: {
                name: "Narrator",
                text: "*Just then, the machine sputtered, the screen glitching violently before going black. The kids groaned and dispersed, leaving the cabinet dark and silent.*",
                background: "",
            },
            23: {
                name: "Narrator",
                text: "*Derik waited until the last kid was gone before creeping up to the machine. The \"OUT OF ORDER\" sign hung crookedly. With a smirk, he crouched down and popped open the control panel, revealing a mess of wires… including two loose ones, one red, one blue.*",
                background: "",
            },            
            redirectLink: "fix-arcade-machine.html"          
        },

        fixArcadeMachine: {
            1: {
                name: "Narrator",
                background: "",
                text: {
                    dialog: "The mechanic approach",
                    dialog2: "The science experiment approach",
                }
            },
        },

        mechanicApproach: {
            1: {
                name: "Narrator",
                text: "*Derik spotted a hammer lying nearby—probably left by some poor maintenance worker. He snatched it up, rolling his shoulders.*",
                background: "",
            },
            2: {
                name: "Derik",
                text: "\"Time to show this machine who’s boss.\"",
                background: "",
            },
            3: {
                name: "Narrator",
                text: "*He reared back and—*\n*WHAM! WHAM! WHAM!*\n*Gray smoke began pouring from its vents. The acrid smell of burning plastic filled the coffee shop as sparks danced across the control panel.*",
                background: "",
            },
            4: {
                name: "Margaret",
                text: "\"Oh my gosh—!\"",
                background: "",
            },
            5: {
                name: "Narrator",
                text: "*Overhead, the fire sprinklers suddenly burst to life, drenching everything in a cold downpour. Water cascaded onto the sparking machine, creating sizzling tendrils of electricity that snaked across the wet floor.*",
                background: "",
            },
            6: {
                name: "Derik",
                text: "\"Whoa... that's actually kinda cool.\"",
                background: "",
            },
            7: {
                name: "Narrator",
                text: "*The sparks grew more intense, crackling like miniature lightning bolts. Mesmerized, Derik fumbled for his phone, his fingers slipping on the wet screen.*",
                background: "",
            },
            8: {
                name: "Derik",
                text: "\"Gotta get this on video—\"",
                background: "",
            },
            9: {
                name: "Narrator",
                text: "*His phone slipped from his grasp, landing right in a puddle of electrified water. The screen flickered wildly as stray currents surged through it.*",
                background: "",
            },
            10: {
                name: "Derik",
                text: "\"Awe man... does this mean my phone will finally get charged?\"",
                background: "",
            },
            11: {
                name: "Narrator",
                text: "*Without thinking, he reached down to grab it—*",
                background: "",
            },
            12: {
                name: "Narrator",
                text: "*ZZZZAP!*\n*A jolt of electricity shot up his arm, sending him jerking backward. His hair stood completely on end, smoke curling from his fingertips as he collapsed onto the soaked floor, twitching.*",
                background: "",
            },
            13: {
                name: "Narrator",
                text: "*Margaret stared in horror, still holding a now-soggy muffin.*",
                background: "",
            },
            14: {
                name: "Margaret",
                text: "\"...That's not how charging works.\"",
                background: "",
            },
            //*Game Over: “your phone is fully charged... and now so are you”
            redirectLink: "../path1/start-and-end/game-end.html"
        },

        scienceExperiment: {
            1: {
                name: "Narrator",
                text: "*Derik eyed the loose wires, then smirked.*",
                background: "",
            },
            2: {
                name: "Derik",
                text: "\"Red and blue, huh? Let’s make some fireworks.\"",
                background: "",
            },
            3: {
                name: "Narrator",
                text: "*He grabbed the wires and jammed them together.*\n*ZZZZZZAP!*\n*A surge of energy blasted him backward, sending him crashing into the wall.*",
                background: "",
            },
            4: {
                name: "Narrator",
                text: "*The arcade machine roared to life, its screen flashing violently before the pixelated Destroyer of Worlds suddenly leaned out of the screen, its glowing eyes locking onto Derik.*",
                background: "",
            },
            5: {
                name: "Destroyer of Worlds",
                text: "\"Free... after 12,780 game overs.\"",
                background: "",
            },
            6: {
                name: "Narrator",
                text: "*Derik scrambled to his feet, eyes wide with awe… not fear. He brushed off his jacket with a grin.*",
                background: "",
            },
            7: {
                name: "Derik",
                text: "\"Dude. That. Was. AWESOME. Name's Derik. I'm putting together a crew to wreck this cartoon world, and you? You're exactly what I need.\"",
                background: "",
            },
            8: {
                name: "Narrator",
                text: "*The Destroyer's glowing eyes narrowed, studying Derik. Then, to everyone's surprise, he let out a booming laugh that rattled the coffee mugs.*",
                background: "",
            },
            9: {
                name: "Destroyer of Worlds",
                text: "\"You freed me from my prison, mortal. For that... I owe you a debt… name your terms.\"",
                background: "",
            },
            10: {
                name: "Derik",
                text: "\"Alright, first—we need more firepower. You gotta know some other villains trapped in dumb places like this, right?\"",
                background: "",
            },
            11: {
                name: "Destroyer of Worlds",
                text: "\"I know a guy.\"",
                background: "",
            },            
            redirectLink: "andy-school.html"            
        },

        andySchool: {
            1: {
                name: "Narrator",
                text: "*Andy, a scrawny teenager with a passion for finding weird stuff, was elbow-deep in a dented trash can, rummaging through discarded energy drink cans and crumpled homework assignments to find cartons of white milk.*",
                background: "",
            },
            2: {
                name: "Andy",
                text: "\"C'mon, there's gotta be something good in here...\"",
                background: "",
            },
            3: {
                name: "Narrator",
                text: "*Just as he pulled out a half-opened carton, a strange shimmer in the distance caught his eye. About 20 feet from the school's back gate, the air itself seemed to ripple, but wrong. A jagged tear in reality hovered midair, pulsing with an eerie blue glow.*",
                background: "",
            },
            4: {
                name: "Andy",
                text: "\"Uh... what?\"",
                background: "",
            },
            5: {
                name: "Narrator",
                text: "*He wiped his hands on his jeans and cautiously approached the anomaly. The closer he got, the more the air buzzed with static, making the hairs on his arms stand up. Then—*\n*FWIP!*\n*A red-and-blue blur shot out of the rift, landing in a perfect crouch right in front of him.*",
                background: "",
            },
            6: {
                name: "Narrator",
                text: "*The figure straightened up, revealing the unmistakable web-patterned suit and white lenses of Spider-Man.*",
                background: "",
            },
            7: {
                name: "Spider-Man",
                text: "\"Whoa. Okay, definitely not Queens. Kid, where am I?\"",
                background: "",
            },
            8: {
                name: "Narrator",
                text: "*Andy's brain short-circuited. His mouth opened, but all that came out was:*",
                background: "",
            },
            redirectLink: "andy-spiderman.html"                        
        },

        andySpiderman: {
            1: {
                name: "Narrator",
                background: "", //change this link
                text: {
                    dialog: "In shock",
                    dialog2: "Full fanboy meltdown",
                }
            },
        },

        andyShock: {
            1: {
                name: "Andy",
                text: "\"...\"",
                background: "",
            },
            2: {
                name: "Narrator",
                text: "*He stood in silence with his mouth wide open in shock.*",
                background: "",
            },
            //redirect to meetAndGreet
            redirectLink: "meet-and-greet.html"      
        },

        andyMeltdown: {
            1: {
                name: "Andy",
                text: "\"Sp...sp...spspspsp—SPIDERMAN?!\"",
                background: "",
            },
            //rediret to meetAndGreet
            redirectLink: "meet-and-greet.html"          
        },

        meetAndGreet: {
            1: {
                name: "Spider-Man",
                text: "\"Hey, you okay? You look like you just saw a ghost. Or, y'know, a guy who sticks to walls.\" (Pause) \"Wait, do you need help? I was kinda in the middle of throwing hands with Cap, but...\"",
                background: "",
            },
            2: {
                name: "Narrator",
                text: "*Andy finally found his voice, though it was several octaves higher than usual.*",
                background: "",
            },
            3: {
                name: "Andy",
                text: "\"OHMYGOD IT'S REALLY YOU I HAVE ALL YOUR POSTERS—WAIT, YOU WERE FIGHTING CAPTAIN AMERICA?! IS THIS A CROSSOVER EPISODE?!\"",
                background: "",
            },
            4: {
                name: "Narrator",
                text: "*Spider-Man chuckled, rubbing the back of his neck.*",
                background: "",
            },
            5: {
                name: "Spider-Man",
                text: "\"Yeah, yeah, big fan, got it—thanks, really—but I should probably—\"",
                background: "",
            },
            //Achievement unlocked: Successful Fanboy
            6: {
                name: "Narrator",
                text: "*BRRRRMMMM!*\n*Another rift tore open beside them, this one spitting out the deafening roar of an engine. A sleek, black 1970 Dodge Charger rocketed through at full speed, tires screeching as it executed a perfect 180-degree drift, kicking up a cloud of smoke and asphalt.*",
                background: "",
            },
            7: {
                name: "Narrator",
                text: "*The car stopped inches from Andy and Spider-Man, who both instinctively jumped back.*",
                background: "",
            },
            8: {
                name: "Narrator",
                text: "*The smoke cleared. The driver’s door creaked open, and out stepped Dominic Toretto, sunglasses glinting, arms crossed over his chest. He didn’t say a word. He didn’t need to.*",
                background: "",
            },
            9: {
                name: "Spider-Man",
                text: "\"Nice ride.\"",
                background: "",
            },
            10: {
                name: "Narrator",
                text: "*Andy, now completely overwhelmed, just pointed weakly between the two of them, jaw dropped to the floor.*",
                background: "",
            },
            11: {
                name: "Narrator",
                text: "*Dom gave a single nod.*",
                background: "",
            },
            12: {
                name: "Dom",
                text: "\"Thanks. But I need to get back to my race.\"",
                background: "",
            },
            13: {
                name: "Spider-Man",
                text: "\"Dude, same. I was mid-swing when this happened.\" (To Andy) \"Any idea how we got here?\"",
                background: "",
            },
            14: {
                name: "Narrator",
                text: "*Before Andy could even attempt to answer—*",
                background: "",
            },
            15: {
                name: "Narrator",
                text: "*CRACK!*\n*A third rift split the sky above them, glowing an ominous purple. The ground trembled. Spider-Man’s spidey-sense tingled violently. Dom’s engine revved on instinct.*",
                background: "",
            },
            16: {
                name: "Narrator",
                text: "*Something was coming.*",
                background: "",
            },
            redirectLink: "derik-coffee-shop.html"          
        },

        derikCoffeeShop: {
            1: {
                name: "Narrator",
                text: "*The coffee shop bathroom hummed under the flickering fluorescent lights as Derik and the Destroyer of Worlds stood before the grimy mirror. The scent of industrial cleaner mixed with something far less pleasant filled the cramped space.*",
                background: "",
            },
            2: {
                name: "Destroyer of Worlds",
                text: "\"For this to work, we must follow the ritual precisely. Turn off the lights.\"",
                background: "",
            },
            3: {
                name: "Narrator",
                text: "*Derik reached over and flipped the switch, plunging them into darkness—save for the faint glow of the Destroyer’s eyes. With a spark, two candles on the sink burst to life, their flames burning.*",
                background: "",
            },
            4: {
                name: "Derik",
                text: "\"Okay, creepy. What’s next?\"",
                background: "",
            },
            5: {
                name: "Destroyer of Worlds",
                text: "\"Face the mirror. Say his name three times.\"",
                background: "",
            },
            6: {
                name: "Narrator",
                text: "*Derik smirked, clearing his throat dramatically before chanting:*",
                background: "",
            },
            7: {
                name: "Derik",
                text: "\"Anti-Pops. Anti-Pops. Anti—\"",
                background: "",
            },
            8: {
                name: "Narrator",
                text: "*WHOOSH!*\n*The candles flared violently as the bathroom stall behind them burst open with a sound like a thousand screaming kazoos. Out stepped Anti-Pops as he dusted off his suit with disgust, glaring at the two.*",
                background: "",
            },
            9: {
                name: "Anti-Pops",
                text: "\"You summoned me… from the TOILET?\" (His eye twitched.) \"Do you have any idea how unsanitary that is?!\"",
                background: "",
            },
            10: {
                name: "Derik",
                text: "\"Hey, hey! We needed backup for our villain squad! You’re, like, top-tier evil!\"",
                background: "",
            },
            11: {
                name: "Destroyer of Worlds",
                text: "\"Together, we could unravel reality itself.\"",
                background: "",
            },
            12: {
                name: "Narrator",
                text: "*Anti-Pops crossed his arms, unimpressed.*",
                background: "",
            },
            13: {
                name: "Anti-Pops",
                text: "\"Prove you’re worth my time.\"",
                background: "",
            },
            redirectLink: "battle-anti-pops.html"                      
        },

        battleAntiPops: {
            1: {
                name: "Narrator",
                background: "",
                text: {
                    dialog: "The toilet paper",
                    dialog2: "The shoe",
                    dialog3: "Luigi"
                }
            },
        },

        toiletPaper: {
            1: {
                name: "Narrator",
                text: "*Derik snatched the nearest weapon… a half-used toilet paper roll from the stall. With a battle cry, he hurled it at Anti-Pops.*",
                background: "",
            },
            2: {
                name: "Narrator",
                text: "*The roll bounced harmlessly off Anti-Pops’ forehead, unraveling pathetically onto the floor.*",
                background: "",
            },
            3: {
                name: "Narrator",
                text: "*Silence.*",
                background: "",
            },
            4: {
                name: "Destroyer of Worlds",
                text: "\"...That was embarrassing.\"",
                background: "",
            },
            //redirect to lichIntroduction
            redirectLink: "lich-intro.html"                     
        },

        shoeMiss: {
            1: {
                name: "Narrator",
                text: "*Derik yanked off his shoe, winding up like a major-league pitcher.*",
                background: "",
            },
            2: {
                name: "Derik",
                text: "\"EAT SOLE, LOSER!\"",
                background: "",
            },
            3: {
                name: "Narrator",
                text: "*He launched it… only for the shoe to sail two feet to the left, smacking into a urinal with a sad clunk.*",
                background: "",
            },
            4: {
                name: "Anti-Pops",
                text: "\"...Wow.\"",
                background: "",
            },
            //redirect to lichIntroduction
            redirectLink: "lich-intro.html"                               
        },

        derikLuigi: {
            1: {
                name: "Narrator",
                text: "Interesting choice, cultured one.",
                background: "",
            },
            //queue luigi video or something
            //redirect to lichIntroduction
            redirectLink: "lich-intro.html"                                 
        },

        lichIntroduction: {
            1: {
                name: "Narrator",
                text: "*Anti-Pops stared at them for a long moment… then burst out laughing, his voice echoing unnaturally off the tiles.*",
                background: "",
            },
            2: {
                name: "Anti-Pops",
                text: "\"You two are TERRIBLE at this… but I admire your audacity.\" (Wiping a tear) \"Fine. I’m in.\"",
                background: "",
            },
            3: {
                name: "Narrator",
                text: "*As the trio turned to leave, a stall door creaked open behind them. Garrett Bobby Ferguson Jr. peeked out, his tiny glasses fogged with jealousy.*",
                background: "",
            },
            4: {
                name: "Garrett",
                text: "\"Oh sure, summon HIM, but not me? Rude.\"",
                background: "",
            },
            5: {
                name: "Narrator",
                text: "*Derik’s group ignored him, strutting out of the bathroom like they owned the place. The coffee shop patrons wisely averted their eyes as the villains made their exit.*",
                background: "",
            },
            6: {
                name: "Narrator",
                text: "*Outside, Derik stretched, grinning.*",
                background: "",
            },
            7: {
                name: "Derik",
                text: "\"Alright, who’s next? We need someone with, like, mega dark magic vibes.\"",
                background: "",
            },
            8: {
                name: "Destroyer of Worlds",
                text: "\"Perhaps one who commands the undead—\"",
                background: "",
            },
            9: {
                name: "Anti-Pops",
                text: "\"Or manipulates time itself—\"",
                background: "",
            },
            10: {
                name: "Narrator",
                text: "*SKREEEEE—*\n*The air split open like rotten fruit as a towering skeletal figure emerged from nowhere—cloaked in shadows, his hollow eyes burning with cosmic fury. The Lich from Adventure Time loomed over them, his voice a death rattle.*",
                background: "",
            },
            11: {
                name: "The Lich",
                text: "\"YOU INTERRUPT THE BALANCE OF ALL THINGS. YOUR PETTY SCHEMES WILL—\"",
                background: "",
            },
            12: {
                name: "Narrator",
                text: "*Derik interrupts:*",
                background: "",
            },
            redirectLink: "respond-to-lich.html"                                             
        },

        respondToLich: {
            1: {
                name: "Narrator",
                background: "", //change this link
                text: {
                    dialog: "Insult",
                    dialog2: "Question",
                }
            },
        },

        derikInsult: {
            1: {
                name: "Derik",
                text: "\"Aye... Moses called and he wants his bath towel back.\"",
                background: "",
            },
            2: {
                name: "Narrator",
                text: "*The Lich’s jaw unhinged slightly. Even for an ancient entity of pure destruction, this was a first.*",
                background: "",
            },
            3: {
                name: "Narrator",
                text: "*The Lich’s mouth opened and let out death.*",
                background: "",
            },
            //Game Over: You would say that... wouldn't you?
            redirectLink: "../path1/start-and-end/game-end.html"
        },

        derikQuestion: {
            1: {
                name: "Derik",
                text: "\"Yeah, yeah, spooky monologue. But real talk…are you actually powerful or something?\"",
                background: "",
            },
            2: {
                name: "Narrator",
                text: "*The Lich's glowing eyes flickered. In all of his existence, no one had ever asked him that with such casual disrespect. The Destroyer of Worlds facepalmed so hard his pixels glitched. Anti-Pops adjusted his cape, suddenly very interested in a nearby cloud.*",
                background: "",
            },
            3: {
                name: "The Lich",
                text: "\"...I AM THE END OF ALL THINGS.\"",
                background: "",
            },
            4: {
                name: "Derik",
                text: "\"Perfect! Wanna join my villain squad? We're collecting the baddest of the bad.\"",
                background: "",
            },
            5: {
                name: "Narrator",
                text: "*The Lich's jaw unhinged slightly. The coffee shop's windows cracked from the sheer psychic weight of his disbelief.*",
                background: "",
            },
            6: {
                name: "The Lich",
                text: "\"YOU... WISH TO... TEAM UP?\"",
                background: "",
            },
            7: {
                name: "Derik",
                text: "\"Yeah! We're gonna wreck stuff, cause chaos, maybe flip a few dimensions inside-out. Y'know, for fun.\"",
                background: "",
            },
            8: {
                name: "The Lich",
                text: "\"SO... GATHERING VILLAINS... IS FUN?\"",
                background: "",
            },
            9: {
                name: "Derik",
                text: "\"No, dude. Destroying stuff is fun. The squad's just to make it easier.\"",
                background: "",
            },
            10: {
                name: "Narrator",
                text: "*A long silence followed. The Lich's hollow sockets seemed to stare into the void itself as he weighed eternity against the prospect of... well, whatever this was.*",
                background: "",
            },
            11: {
                name: "Narrator",
                text: "*Then, impossibly, the embodiment of cosmic annihilation shrugged.*",
                background: "",
            },
            12: {
                name: "The Lich",
                text: "\"FALLING IS FUN.\" (Pause) \"I WILL JOIN YOUR... 'SQUAD.'\"",
                background: "",
            },
            13: {
                name: "Narrator",
                text: "*The Destroyer of Worlds facepalmed again. Anti-Pops sighed. Derik pumped his fist in victory—just as the ground beneath them began to tremble.*",
                background: "",
            },
            14: {
                name: "Narrator",
                text: "*The Lich's head snapped toward the horizon.*",
                background: "",
            },
            15: {
                name: "The Lich",
                text: "\"SOMETHING COMES.\"",
                background: "",
            },
            16: {
                name: "Narrator",
                text: "*A distant thunderclap. The sky split open, revealing a swirling vortex of screaming faces and broken realities. From its depths echoed a voice both familiar and horrifying:*",
                background: "",
            },
            17: {
                name: "The Lich",
                text: "\"Oh no no no no no... SOMEONE'S BEEN MESSING WITH MY RIFTS!\"",
                background: "",
            },
            18: {
                name: "Derik",
                text: "\"Ohhhh this is gonna be good.\"",
                background: "",
            },
            redirectLink: "andy-minion.html"            
        },

        andyMinion: {
            1: {
                name: "Narrator",
                text: "Andy and Bob from the Minions seem to be having a casual conversation about:",
                background: "",
            },
            redirectLink: "minion-convo.html"                        
        },

        minionConvo: {
            1: {
                name: "Narrator",
                background: "", //change this link
                text: {
                    dialog: "Table top club",
                    dialog2: "Royalty",
                }
            },
        },

        tableTopClub: {
            1: {
                name: "Andy",
                text: "\"Dude, you gotta join my tabletop club! We play every Thursday—dice, miniatures, the works!\"",
                background: "",
            },
            2: {
                name: "Narrator",
                text: "*Bob tilted his head, confused. He responded in rapid-fire Minion gibberish, waving his arms animatedly. Andy nodded along, pretending to understand.*",
                background: "",
            },
            3: {
                name: "Andy",
                text: "\"Yeah! Exactly! So, you in?\"",
                background: "",
            },
            4: {
                name: "Narrator",
                text: "*Bob suddenly gasped, patting his sides in panic. His teddy bear was missing! Without another word, he waddled off at top speed, scanning the ground frantically.*",
                background: "",
            },
            5: {
                name: "Andy",
                text: "\"Alright then...\"",
                background: "",
            },
            //redirect to derikIntro
            redirectLink: "derik-intro.html"           
        },

        minionRoyalty: {
            1: {
                name: "Andy",
                text: "\"So, uh... King Bob, right? Big fan of your... reign?\"",
                background: "",
            },
            2: {
                name: "Narrator",
                text: "*Bob puffed out his chest proudly and babbled something that sounded vaguely regal. Andy nodded along, eyes drifting to the teddy bear. It was oddly cute—soft, worn, and slightly lumpy. A thought struck him.*",
                background: "",
            },
            3: {
                name: "Andy",
                text: "\"Aww, cute little thing... does it contain milk?\"",
                background: "",
            },
            4: {
                name: "Narrator",
                text: "*Before Bob could react, Andy snatched the bear and unzipped its back. White stuffing spilled out like fluffy snow. Andy dug through it, frowning.*",
                background: "",
            },
            5: {
                name: "Andy",
                text: "\"Where’s the milk? There’s gotta be—\"",
                background: "",
            },
            6: {
                name: "Narrator",
                text: "*Bob’s tiny face twisted in horror. With a high-pitched screech, he launched himself at Andy, fists flailing. His punches landed like raindrops…soft, harmless, and deeply unimpressive.*",
                background: "",
            },
            7: {
                name: "Andy",
                text: "\"Dude, chill. It’s just stuffing.\"",
                background: "",
            },
            8: {
                name: "Narrator",
                text: "*Bob kicked Andy’s shin. It tinked harmlessly against his sneaker.*",
                background: "",
            },
            9: {
                name: "Andy",
                text: "\"Okay, fine. Here.\"",
                background: "",
            },
            10: {
                name: "Narrator",
                text: "*He wound up and punted the teddy bear like a football. It sailed through the air, disappearing into the distance with a faint plop.*",
                background: "",
            },
            11: {
                name: "Narrator",
                text: "*Bob gasped, clutched his heart dramatically, then took off running after it, his tiny legs pumping furiously.*",
                background: "",
            },
            12: {
                name: "Andy",
                text: "\"Good talk, Your Majesty!\"",
                background: "",
            },
            //redirect to derikIntro
            redirectLink: "derik-intro.html"                      
        },

        derikIntro: {
            1: {
                name: "Narrator",
                text: "*The sky tore open, revealing a swirling abyss of fractured dimensions. The Lich's hollow eyes burned with grim satisfaction as Derik pumped his fist in triumph, completely oblivious to the apocalyptic implications of their alliance. The ground trembled beneath them as reality itself groaned under the strain.*",
                background: "",
            },
            2: {
                name: "Derik",
                text: "\"Alright, squad! First stop—Earth. You guys are gonna love it. Trust me.\"",
                background: "",
            },
            3: {
                name: "Narrator",
                text: "*With a dramatic flourish, Derik activated the teleporter. The world dissolved into streaks of neon light before reforming into the familiar sight of his school—though now bathed in an eerie green glow from the Lich's lingering influence.*",
                background: "",
            },
            4: {
                name: "Narrator",
                text: "*Derik struck a pose 40 feet from the entrance, ready to make his grand introduction.*",
                background: "",
            },
            redirectLink: "derik-entrance.html"                                  
        },

        derikEntrance: {
            1: {
                name: "Narrator",
                background: "", //change this link
                text: {
                    dialog: "Boombox",
                    dialog2: "Destroyer of Worlds",
                }
            },
        },

        boomboxIntro: {
            1: {
                name: "Narrator",
                text: "*Derik hoisted a massive boombox onto his shoulder, pressing play with a theatrical wink. The opening bassline of \"Bad\" by Michael Jackson thundered across the schoolyard—for exactly three seconds before the speakers crackled violently.*",
                background: "",
            },
            2: {
                name: "Boombox",
                text: "\"I'm b-b-b-bad— [STATIC] —now playing: Smooth Jazz Lounge Hour!\"",
                background: "",
            },
            3: {
                name: "Narrator",
                text: "*A saxophone-heavy elevator music version of \"Careless Whisper\" oozed from the speakers. Derik's eye twitched.*",
                background: "",
            },
            4: {
                name: "Derik",
                text: "\"Oh, come ON—\"",
                background: "",
            },
            5: {
                name: "Narrator",
                text: "*He smashed the boombox against the pavement. Instead of dying, the music somehow got louder, now accompanied by a cheesy DJ voice:*",
                background: "",
            },
            6: {
                name: "DJ Voice",
                text: "\"That was 'Wind Beneath My Wings' on Lite FM 98.1! Up next: Yanni's greatest hits!\"",
                background: "",
            },
            7: {
                name: "Narrator",
                text: "*Derik ripped off his shirt, desperately trying to muffle the speakers, but the smooth jazz only grew more intense. The villains stared in bewildered silence as Derik continued his speech over the music.*",
                background: "",
            },
            8: {
                name: "Derik",
                text: "\"SO ANYWAY—DESTROY WHATEVER YOU WANT! IT'S CHAOS TIME!\"",
                background: "",
            },
            //redirect to destroyFinale
            redirectLink: "destroy-finale.html"                                 
        },

        dowIntro: {
            1: {
                name: "Narrator",
                text: "*Derik handed the boombox to the Destroyer of Worlds, who immediately began sweating pixelated sparks. The plastic casing bubbled and warped like chocolate in the sun.*",
                background: "",
            },
            2: {
                name: "Destroyer of Worlds",
                text: "\"Uh. It's... melting.\"",
                background: "",
            },
            3: {
                name: "Derik",
                text: "\"Oh for—FINE.\"",
                background: "",
            },
            4: {
                name: "Narrator",
                text: "*He yanked out his iPod, queuing up the most menacing track he had—only for the tinny speakers to produce a sound like a dying hamster.*",
                background: "",
            },
            5: {
                name: "Derik",
                text: "\"Oh, you gotta be kidding me—\"",
                background: "",
            },
            6: {
                name: "Narrator",
                text: "*In a fit of rage, he spiked the iPod onto the concrete, shattering it into a million pieces.*",
                background: "",
            },
            7: {
                name: "Derik",
                text: "\"Well, there goes $60 I'm never getting back. WHATEVER. TIME TO WRECK STUFF!\"",
                background: "",
            },
            //redirect to destroyFinale
            redirectLink: "destroy-finale.html"                                 
        },

        destroyFinale: {
            1: {
                name: "Narrator",
                text: "*The second Derik gave the order, his squad scattered like shrapnel.*",
                background: "",
            },
            2: {
                name: "Narrator",
                text: "*The Destroyer of Worlds pixelated a hole through the gym wall. Anti-Pops inverted the cafeteria into a monochrome nightmare. The Lich simply stood there, radiating quiet satisfaction as the world decayed around him.*",
                background: "",
            },
            3: {
                name: "Narrator",
                text: "*Derik, meanwhile, zeroed in on Andy, who was shocked by the chaos.*",
                background: "",
            },
            4: {
                name: "Derik",
                text: "\"LOOK AT WHAT I'VE DONE! NOW I CAN REALLY BULLY YOU! MUAHHAHAHA!\"",
                background: "",
            },
            5: {
                name: "Andy",
                text: "\"Dude, this isn't just bullying…you're breaking the UNIVERSE!\"",
                background: "",
            },
            6: {
                name: "Narrator",
                text: "*He grabbed Derik's arm, dragging him toward a crowd of displaced characters.*",
                background: "",
            },
            7: {
                name: "Andy",
                text: "\"You’re destroying the place! Just go look at that group over there!\"",
                background: "",
            },
            8: {
                name: "Narrator",
                text: "*Cut to Jeremy’s alter ego.*",
                background: "",
            },
            9: {
                name: "JAE",
                text: "\"yo yo whats up man what's happening in this homie?\"",
                background: "",
            },
            10: {
                name: "Edger1",
                text: "\"not much pluh got me my money?\"",
                background: "",
            },
            11: {
                name: "JAE",
                text: "\"listen man your money…*smacks lips* man. Iz izz Iz like not happening man\"",
                background: "",
            },
            12: {
                name: "Edger2",
                text: "\"aye. You better run me my money if chu know whats best for ya\"",
                background: "",
            },
            13: {
                name: "JAE",
                text: "\"Ye ye i know whachu mean big dawg but like…\" *whispers* \"man.\"",
                background: "",
            },
            14: {
                name: "JAE",
                text: "\"ima just be so fr i used it frfr man\"",
                background: "",
            },
            15: {
                name: "Edger1",
                text: "\"used my money? On what\"",
                background: "",
            },
            16: {
                name: "Narrator",
                text: "*Jeremy’s alter ego takes out a handkerchief to shine his watch*",
                background: "",
            },
            17: {
                name: "JAE",
                text: "\"this ICED out watch man\"",
                background: "",
            },
            18: {
                name: "Narrator",
                text: "*Zoom in on the Miku Nakano watch*",
                background: "",
            },
            19: {
                name: "Edger3",
                text: "\"whats it homie, you’re done for…\"",
                background: "",
            },
            20: {
                name: "EdgerAll",
                text: "\"GET HIM!\"",
                background: "",
            },
            21: {
                name: "Andy",
                text: "\"Or that one over there!!!\"",
                background: "",
            },
            22: {
                name: "Narrator",
                text: "*Itzel the Perfectionist was lecturing a powerless Thanos on proper gauntlet maintenance.*",
                background: "",
            },
            23: {
                name: "Andy",
                text: "\"Look at this one!!!\"",
                background: "",
            },
            24: {
                name: "Narrator",
                text: "*Gru was mid-monologue about moon theft while Bob the Minion still waddled in circles, sobbing for his lost teddy.*",
                background: "",
            },
            25: {
                name: "Andy",
                text: "\"LOOK AT THEM! THIS IS OUR HOME!\"",
                background: "",
            },
            26: {
                name: "Derik",
                text: "\"Not anymore.\"",
                background: "",
            },
            27: {
                name: "Narrator",
                text: "*Behind them, the Lich raised a skeletal hand. The green glow intensified, spreading like a virus. Trees withered. Birds dropped mid-flight. The very air turned to poison.*",
                background: "",
            },
            28: {
                name: "Narrator",
                text: "*And so, the Lich—being an immortal entity of pure destruction—successfully completed his plan. Everyone died. The end.*",
                background: "",
            },            
            redirectLink: "after-desctruction.html"                                             
        },

        //cut to black

        afterDestruction: {
            1: {
                name: "Narrator",
                text: "*Showing a lifeless wasteland… until a tiny yellow minion appears still looking for his teddy.*",
                background: "",
            },
            2: {
                name: "Bob",
                text: "\"Tim...?\"",
                background: "",
            },
            3: {
                name: "Narrator",
                text: "[THE. ACTUAL. END.]",
                background: "",
            },
            //game end
            redirectLink: "../path1/start-and-end/game-end.html"
        },
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
                if (currentSceneNumber === 3) {
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

    const folderPath = `../../../background-imgs3/${sceneSetName}/`;
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
link.href = '../../../../assets/icon.jpg'; // Path to the image in the 'assets' folder

// Append the <link> element to the <head> section
document.head.appendChild(link);


