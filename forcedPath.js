document.addEventListener("DOMContentLoaded", function () {
    let currentSceneNumber = 1;

    const sceneSets = {
        // when replacing the dialog with up to 3 pieces of dialog,
        //  make sure you replace the css in the new html, and you follow this format for dialog
        /*text: {
            dialog: "Andy wakes up from his bed and sluggishly makes his way to his closet.",
            dialog2: "He stretches and yawns, still groggy from sleep.",
            dialog3: "The morning light creeps in through the blinds."
        }*/
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
            

            redirectLink: "path1/bring-who.html"  // Redirect here after all scenes in this path
        },

        regularShowBringWho: {
            1: {
                name: "Narrator",
                background: "../../../assets/alternate-path/tech-background.webp",
                text: {
                    dialog: "Bring everyone but Skips",
                    dialog2: "Bring nobody",
                    dialog3: "Bring only Skips"
                }
            },
            
        },

        regularShowBringAll: {
            1: {
                name: "Narrator",
                text: "Everybody agrees but skips remembering he has something important to do",
                background: "",
            },
            2: {
                name: "Narrator",
                text: "Mordecai, Rigby, Benson, and Pops decide to bring things they could use as weapons before they leave with you",
                background: "",
            },
            3: {
                name: "Narrator",
                text: "As you are walking, you stumble across Gene’s Base then remember that you ran away from this guy",
                background: "",
            },
            4: {
                name: "Gean",
                text: "“Well well well look who we have here… no matter friend, I understand why you ran away… but remember, your actions have consequences”",
                background: "",
            },
            5: {
                name: "Narrator",
                text: "Your group prepares for battle",
                background: "",
            },
            6: {
                name: "Gean",
                text: "“Boys… Go get them”",
                background: "",
            },
            7: {
                name: "Narrator",
                text: "Gene sends 12 of his men right at you and it's looking like an easy win for you guys. That is until you get hit by a stray piece of metal right at your torso *(Health bar 100% ->75%)",
                background: "",
            },
            8: {
                name: "Andy",
                text: "“Aghh guys… owie owie that hurt”",
                background: "",
            },
            9: {
                name: "Narrator",
                text: "You brush it off as if nothing happened but it still hurts",
                background: "",
            },
            10: {
                name: "Narrator",
                text: "While you were too busy whining about the pain, your team got rid of all the bad guys",
                background: "",
            },
            11: {
                name: "Gean",
                text: "“Impressive… well I guess this means I am defeated… “",
                background: "",
            },
            12: {
                name: "Gean",
                text: "“Oh wait I forgot he-he-he I have a new apprentice… how about we make things interesting… “",
                background: "",
            },
            13: {
                name: "Gean",
                text: "“You beat my apprentice in a 1 on 1 and you win, but if you lose, I win. Sounds fair?”",
                background: "",
            },
            14: {
                name: "Benson",
                text: "“Of course not Gene. You’re probably just going to-”",
                background: "",
            },
            15: {
                name: "Gean",
                text: "“Enough out of you guys”",
                background: "",
            },
            16: {
                name: "Narrator",
                text: "Gene uses smoke bombs on Mordecai, Rigby, Benson, and Pops and has some of his backup men tie them up",
                background: "",
            },
            17: {
                name: "Gean",
                text: "“Great, I see no objection so here we go. Old apprentice, I want you to meet the new apprentice”",
                background: "",
            },
            18: {
                name: "Narrator",
                text: "You start thinking to yourself about what you could use against such a specimen but then remember the 101 My Mom Jokes book you were given earlier.",
                background: "",
            },
            19: {
                name: "Narrator",
                text: "You start flipping through the pages and stumble across one that reads…",
                background: "",
            },
            

            
        redirectLink: "yo-mama-reads.html"
        },
        regularShowMyMomjokes: {
            1: {
                name: "Andy",
                background: "",
                text: {
                    dialog: "“You know who else looks over 250 lbs on a regular day…?”",
                    dialog2: "“You know who else … looks ugly…?”",
                }
            },
        
        },

        regularShowMyMomjoke250: {
            1: {
                name: "Narrator",
                text: "you hesitate for a little, not sure if this will work",
                background: "",
            },
            2: {
                name: "Andy",
                text: "“MY MOM!”",
                background: "",
            },
            3: {
                name: "Narrator",
                text: "you notice Muscle Man just got weak from that",
                background: "",
            },
            4: {
                name: "Muscle man",
                text: "“You know who else reads other people's books? MY MOM”",
                background: "",
            },
            5: {
                name: "Narrator",
                text: "nothing happened… could it be that Muscle Man was thrown off by your response",
                background: "",
            },
            6: {
                name: "Narrator",
                text: "It’s your turn ",
                background: "",
            },
            7: {
                name: "Narrator",
                text: "you start flipping through the book once more and stumble across the finisher move",
                background: "",
            },
            8: {
                name: "Andy",
                text: "” I once asked what’s the max you can bench press to some people in a gym…”",
                background: "",
            },
            9: {
                name: "Narrator",
                text: "you start shaking because it's just too funny for you",
                background: "",
            },
            10: {
                name: "Andy",
                text: "” They all said, MY MOM!”",
                background: "",
            },
            11: {
                name: "Narrator",
                text: "Muscle man has been defeated by someone using the book he wrote several years ago",
                background: "",
            },
            12: {
                name: "Narrator",
                text: "It appears that Muscle Man was under some sort of trance that turned him evil, but now that trance is broken.",
                background: "",
            },
            13: {
                name: "Narrator",
                text: "Muscle man threw himself onto gene",
                background: "",
            },
            14: {
                name: "Muscle man",
                text: "“Go Go bro… GET OUT OF HERE… I… I… can't hold him down forever”",
                background: "",
            },
            15: {
                name: "Narrator",
                text: "You approach the mysterious object that reminds you of the one you picked up in your world and it, like the other one, picked you up and blue particles spawn all around you",
                background: "",
            },


            redirectLink: "../gravity-falls/gravity-falls.html" 
        
        },

        regularShowMyMomjokeUgly: {
            1: {
                name: "Narrator",
                text: "you hesitate for a little, not sure if this will work",
                background: "",
            },
            2: {
                name: "Andy",
                text: "“MY MOM!”",
                background: "",
            },
            3: {
                name: "Narrator",
                text: "You notice this did not affect Muscle Man… now he's approaching you at max speed",
                background: "",
            },
            4: {
                name: "Narrator",
                text: "This ‘My Mom’ joke was not funny and now you are being punished",
                background: "",
            },
            5: {
                name: "Narrator",
                text: "There is nothing you can do",
                background: "",
            },
            6: {
                name: "Narrator",
                text: "Game Over",
                background: "",
            },
            
            
        redirectLink: "../game-over.html"
        },

        regularShowBringNone: {
            1: {
                name: "Narrator",
                text: "As you are walking, you stumble across Gene’s Base then remember that you ran away from this guy",
                background: "",
            },
            2: {
                name: "Gean",
                text: "“Well well well look who we have here… no matter friend, I understand why you ran away… but remember, your actions have consequences”",
                background: "",
            },
            3: {
                name: "Narrator",
                text: "You stand there terrified of what may come but you realize it is too late to go back for backup now",
                background: "",
            },
            4: {
                name: "Gean",
                text: "“Men… Do what you do best…”",
                background: "",
            },
            5: {
                name: "Narrator",
                text: "Gene’s men unleash everything they have onto you and now there is nothing left to even remind anyone of your existence",
                background: "",
            },
            6: {
                name: "Narrator",
                text: "Game Over",
                background: "",
            },
            
            
        redirectLink: "game-over.html"
        },

        regularShowBringSkips: {
            1: {
                name: "Skips",
                text: "“Yeah, but first… hold on a minute…”",
                background: "",
            },
            2: {
                name: "Narrator",
                text: "skips leaves then returns with study rope",
                background: "",
            },
            3: {
                name: "Skips",
                text: " “We’re going to need this later, you have a backpack and I don't want to carry it so here”",
                background: "",
            },
            4: {
                name: "Narrator",
                text: "You put the rope in your backpack",
                background: "",
            },
            5: {
                name: "Narrator",
                text: "As you are walking, you stumble across Gene’s Base then remember that you ran away from this guy",
                background: "",
            },
            6: {
                name: "Gean",
                text: "“Well well well look who we have here… no matter friend, I understand why you ran away… but remember, your actions have consequences”",
                background: "",
            },
            7: {
                name: "Narrator",
                text: "Skips notices all the men Gene has ‘hidden’ and takes them all on right before Gene can unleash them onto the two",
                background: "",
            },
            8: {
                name: "Skips",
                text: "“MOVE OUT OF THE WAY… THIS IS DANGEROUS”",
                background: "",
            },
            9: {
                name: "Narrator",
                text: "You don't move because you haven't had this type of excitement since finding your first rock",
                background: "",
            },
            10: {
                name: "Gean",
                text: "“Wait! I didn't say ‘Go’ Yet!”",
                background: "",
            },
            11: {
                name: "Narrator",
                text: "you watch in awe as everyone gets taken down by Skips with ease when you suddenly get hit by a stray piece of metal right at the side of your stomach  *(Health bar 100% ->75%)",
                background: "",
            },
            12: {
                name: "Andy",
                text: "“ owie owie owieeeee that hurt”",
                background: "",
            },
            13: {
                name: "Narrator",
                text: "you realize that maybe you should have listened to Skips and you move out of the way",
                background: "",
            },
            14: {
                name: "Narrator",
                text: "you realize there aren't any bad guys remaining besides Gene and Muscle Man so you come out from hiding",
                background: "",
            },
            15: {
                name: "Gean",
                text: "“Well that was disappointing but I had a feeling that's how it would have gone”",
                background: "",
            },
            16: {
                name: "Narrator",
                text: "Gene steps aside to revive Muscle Man",
                background: "",
            },
            17: {
                name: "Skips",
                text: "“QUICK… THE ROPE”",
                background: "",
            },
            

        redirectLink: "regular-show/skips-rope.html"
        },

        regularShowSkipsRope: {
            1: {
                name: "Narrator",
                background: "",
                text: {
                    dialog: "You give Skips the rope",
                    dialog2: "Skips can handle them on his own",
                }
            },
        
        },
        regularShowGivesSkipsRope: {
            1: {
                name: "Narrator",
                text: "Skips ties up Muscle Man then holds Gene hostage as he's telling you to get out of here and to remember the built-in auto-save feature.",
                background: "",
            },
            2: {
                name: "Narrator",
                text: "You approach the mysterious object that reminds you of the one you picked up in your world and it, like the other one, picked you up and blue particles spawn all around you",
                background: "",
            },
            
        redirectLink: "../gravity-falls/gravity-falls.html"
        },

        regularShowDontGivesSkipsRope: {
            1: {
                name: "Narrator",
                text: "Muscle man goes full rampage on Skips, grabs him by the arm, and begins tossing him around like a rag doll.",
                background: "",
            },
            2: {
                name: "Narrator",
                text: "As Muscle man throws him down on the ground, he doesn't get back up… Skips is gone…",
                background: "",
            },
            3: {
                name: "Gean",
                text: "“Well that was easy, now your turn”",
                background: "",
            },
            4: {
                name: "Narrator",
                text: "Gene pulls out a weapon and ends your life right then and there",
                background: "",
            },
            5: {
                name: "Narrator",
                text: "Game Over",
                background: "",
            },
            
            
        redirectLink: "../../game-over.html"
        },















        //forced path
        gravityFallsIntro: {
            1: {
                name: "Narrator",
                text: "You wake up in a dark environment as your eyes take time to adjust to the new environment",
                background: "",
            },
            2: {
                name: "Andy",
                text: "wha… What is this place?",
                background: "",
            },
            3: {
                name: "Narrator",
                text: "You look around and see only darkness as your eyes are done readjusting, you hear a voice. Sounds like someone's very close to you",
                background: "",
            },
            4: {
                name: "Mable",
                text: "Hya there stranger",
                background: "",
            },
            5: {
                name: "Narrator",
                text: "You hear the voice but don't see anyone there",
                background: "",
            },
            6: {
                name: "Mable",
                text: "whoops, forgot about that here",
                background: "",
            },
            7: {
                name: "Narrator",
                text: "The mysterious character turns on the lantern they were holding and now you can see who is talking to you",
                background: "",
            },
            8: {
                name: "Mable",
                text: "woah, Dipper, is he in the book",
                background: "",
            },
            9: {
                name: "Dipper",
                text: "No… I don't think so…",
                background: "",
            },
            10: {
                name: "Soos",
                text: "PROTECT THE KIDS",
                background: "",
            },
            11: {
                name: "Narrator",
                text: "You see the large man in the back try to make his way to you but realize he isn't going anywhere because we are all falling…",
                background: "",
            },
            12: {
                name: "Narrator",
                text: "Wait…",
                background: "",
            },
            13: {
                name: "Narrator",
                text: "WE ARE FALLING AHHHHHHHH",
                background: "",
            },
            14: {
                name: "Narrator",
                text: "Panic",
                background: "",
            },
            15: {
                name: "Narrator",
                text: "You realize nothing will come from it and stop as the three look at you as if you are the odd one for making a scene because you are all falling to your death",
                background: "",
            },
            16: {
                name: "Andy",
                text: "Where… are… we…?",
                background: "",
            },
            17: {
                name: "Dipper",
                text: "You my friend are in the bottomless pit where it is truly bottomless",
                background: "",
            },
            18: {
                name: "Mable",
                text: "Don't worry though because we come back up in about 20 minutes",
                background: "",
            },
            19: {
                name: "Narrator",
                text: "The boy starts thinking to himself that this may be his only chance to discover something new",
                background: "",
            },
            20: {
                name: "Dipper",
                text: "Hey there friend… since we’re going to be in here for a while, mind if I ana-ly-ze you?",
                background: "",
            },
            21: {
                name: "Narrator",
                text: "The boy falls unconscious but he's still falling at the same speed as everyone else",
                background: "",
            },
            22: {
                name: "Mable",
                text: "Wait…",
                background: "",
            },
            23: {
                name: "Narrator",
                text: "You see the girl flip the large man up straight and whisper something in his ear and you hear it but barely",
                background: "",
            },
            24: {
                name: "Mable",
                text: "What if he came here to steal our duck-tective!",
                background: "",
            },
            25: {
                name: "Narrator",
                text: "You realize that you need to speak up or there could be trouble near",
                background: "",
            },
            redirectLink: "duct-tective-choice.html"
        },
        //duct-tective option text
        gravityFallsDuctTectiveOptions: {
            1: {
                name: "Andy",
                background: "",
                text: {
                    dialog: "“He has a twin brother”",
                    dialog2: "“Duct Tective? There is no thing”",
                }
            },
        
        },

        gravityFallsDuctTectiveHasATwinBrother: {
            1: {
                name: "Soos",
                text: "Wait dude how do you know?",
                background: "",
            },
            2: {
                name: "Andy",
                text: "I've seen it in my universe already, it's old news. Didn't surprise me",
                background: "",
            },
            3: {
                name: "Soos",
                text: "I must admit, it wouldn't surprise me neither",
                background: "",
            },
            4: {
                name: "Mable",
                text: "yeah, the way the show’s headed, I wouldn't expect anything less than that",
                background: "",
            },
            5: {
                name: "Narrator",
                text: "You see the boy that passed out, wake up",
                background: "",
            },
            6: {
                name: "Narrator",
                text: "With all three of them being awake and at least somewhat understanding your situation you began explaining",
                background: "",
            },
            7: {
                name: "Andy",
                text: "alright, so im supposed to travel to 4 worlds, defeat the bosses in them, then i can go back home is what some large ape told me in the last world i was in",
                background: "",
            },
            8: {
                name: "Dipper",
                text: "this sounds right about up my alley, you know working with things that don't make sense is right up my alley anyway",
                background: "",
            },
            9: {
                name: "Narrator",
                text: "Dipper starts scanning the room trying to find anything that can help them escape from the falling",
                background: "",
            },
            10: {
                name: "Dipper",
                text: "ummmm Mable… do you have your grappling hook on you?",
                background: "",
            },
            11: {
                name: "Mable",
                text: "well yes I do, I never leave without it",
                background: "",
            },
            12: {
                name: "Narrator",
                text: "You hear the name wrong and you ask questions before progress on your escape is made",
                background: "",
            },
            13: {
                name: "Andy",
                text: "Maple…? As in Maple Syrup…?",
                background: "",
            },
            14: {
                name: "Soos",
                text: "yeah dude its kinda confusing for new people but i can assure you it is in fact as in Maple Syrup",
                background: "",
            },
            15: {
                name: "Mable",
                text: "What…? You too Soos? It's Mable. M-A-B-L-E. MABLE! How could you get it wrong?",
                background: "",
            },
            16: {
                name: "Dipper",
                text: "can't blame them, you never told them",
                background: "",
            },
            17: {
                name: "Narrator",
                text: "You all sit silent for a while until Dipper breaks the silence",
                background: "",
            },
            18: {
                name: "Dipper",
                text: "*Sigh I'm Dipper, the girl’s MABLE, and that's Soos",
                background: "",
            },
            19: {
                name: "Dipper",
                text: "ok, now that we’ve been introduced, who are you?",
                background: "",
            },
            20: {
                name: "Andy",
                text: "I’m Andy",
                background: "",
            },
            21: {
                name: "Dipper",
                text: "great, let's get this escape on and done with",
                background: "",
            },
            22: {
                name: "Dipper",
                text: "Mable, give me your grappling hook",
                background: "",
            },
            23: {
                name: "Narrator",
                text: "You see Mable pull out the grappling hook out of her pocket and note how large it is compared to her pocket and wonder how is that possible but you’re kind of in a hurry to escape",
                background: "",
            },
            24: {
                name: "Narrator",
                text: "Dipper lines his shot up and tells everyone to hold on",
                background: "",
            },
            25: {
                name: "Narrator",
                text: "You and Mable hold onto Dipper as Soos bear hugs everyone because he's so large, he could secure everyone",
                background: "",
            },
            26: {
                name: "Narrator",
                text: "WEEEEEEE",
                background: "",
            },
            27: {
                name: "Narrator",
                text: "You all make it out of the seemingly ‘bottomless pit’ but only Dipper sticks the landing, the rest of you land on your side or faceplant",
                background: "",
            },
            28: {
                name: "Narrator",
                text: "You all get up as if it were planned that you wouldn't stick the landing",
                background: "",
            },
            29: {
                name: "Narrator",
                text: "Dipper gives Mable back the grappling hook he borrowed",
                background: "",
            },
            30: {
                name: "Mable",
                text: "hey Andy, I want to give you this",
                background: "",
            },
            31: {
                name: "Andy",
                text: "your harpoon gun? But why?",
                background: "",
            },
            32: {
                name: "Mable",
                text: "i know how hard it can be going on adventures for the first time",
                background: "",
            },
            33: {
                name: "Narrator",
                text: "She mutters to herself: By the looks of your body, this is maybe the only time you get sunlight",
                background: "",
            },
            34: {
                name: "Mable",
                text: "so here, chances are, you’re going to need it more than me in the long run of things",
                background: "",
            },
            35: {
                name: "Andy",
                text: "awww thanks",
                background: "",
            },
            36: {
                name: "Narrator",
                text: "You put the grappling hook in your backpack",
                background: "",
            },
            37: {
                name: "Narrator",
                text: "+1 Grappling hook",
                background: "",
            },
            38: {
                name: "Narrator",
                text: "Right as you guys get out, Dipper wants to make a trade with you",
                background: "",
            },
            39: {
                name: "Dipper",
                text: "Hey, I’m in need of a Ti 84 calculator and this universe doesn't have them, do you happen to carry any on you?",
                background: "",
            },
            40: {
                name: "Andy",
                text: "Yeah, I just so happen to carry mine on me… but what's in it for me?",
                background: "",
            },
            41: {
                name: "Dipper",
                text: "don't worry, it's super worth it for you. It's a Grow/ Shrink flash light",
                background: "",
            },
            42: {
                name: "Andy",
                text: "does it do what I think it does?",
                background: "",
            },
            43: {
                name: "Dipper",
                text: "exactly, it makes things grow and shrink. So what do ya say?",
                background: "",
            },
            44: {
                name: "Andy",
                text: "sure why not",
                background: "",
            },
            45: {
                name: "Narrator",
                text: "You make the trade and now you have a magical Flash Light",
                background: "",
            },
            46: {
                name: "Narrator",
                text: "+1 Magical Flash Light?",
                background: "",
            },
            47: {
                name: "Dipper",
                text: "Hey, you know what? I have a Great Uncle that knows a lot about this sort of thing. Want to meet him?",
                background: "",
            },
            redirectLink: "meat-fort-que.html"
        },

        gravityFallsMeetFordQue: {
            1: {
                name: "Andy",
                background: "",
                text: {
                    dialog: "“Yeah, it if means i can get home faster”",
                    dialog2: "“No thanks… I'm not too sure about a ‘Great Uncle’”",
                }
            },
        },

        gravityFallsMeatsFort: {
            1: {
                name: "Narrator",
                text: "Dipper walks you to the mystery shack and introduces you to Great Uncle Fort",
                background: "",
            },
            2: {
                name: "Fort",
                text: "Nice to meet you stranger, I'm assuming your name is Bandy? I'm kidding. I know who you are, Andy. You need my help right?",
                background: "",
            },
            3: {
                name: "Andy",
                text: "How… how did you know who I am?",
                background: "",
            },
            4: {
                name: "Narrator",
                text: "You start to regret coming because if this is the boss of this world, you're done for",
                background: "",
            },
            5: {
                name: "Fort",
                text: "Easy, I’m a bit of a wizard, I know everything and everyone, it just takes time for me to remember who’s who",
                background: "",
            },
            6: {
                name: "Fort",
                text: "So you need to take on some boss right? Well here we go, let me get my gear then we’ll go off looking for anything that looks stranger than what I’m used to",
                background: "",
            },
            7: {
                name: "Narrator",
                text: "You start to hear a loud noise coming from the forest and have a feeling that’s the thing that’s not normal",
                background: "",
            },
            8: {
                name: "Fort",
                text: "Well kids, we’re off. We’ll be back… hopefully in one piece",
                background: "",
            },
            redirectLink: "walking-with-fort.html"
        },
        gravityFallsWaistTime: {
            1: {
                name: "Narrator",
                text: "Dipper takes this as an insult because you don't know what type of person he is",
                background: "",
            },
            2: {
                name: "Narrator",
                text: "You begin walking along the path and stumble across a whole town",
                background: "",
            },
            3: {
                name: "Andy",
                text: "I wonder if they were banished or something from this place. It looks nice",
                background: "",
            },
            4: {
                name: "Narrator",
                text: "You enter the first building you see and it's in the shape of a log…? Man this place is weird.",
                background: "",
            },
            5: {
                name: "Narrator",
                text: "You sit down and before you can even order something, 2 pancakes just landed in front of you. You look around and find that it is really strong… something won a game?",
                background: "",
            },
            6: {
                name: "Andy",
                text: "Well these look free, let's chow down then get going",
                background: "",
            },
            7: {
                name: "Narrator",
                text: "You finish eating your pancakes then get going to your next stop which is a really large mansion…",
                background: "",
            },
            8: {
                name: "Andy",
                text: "Should I…? *Sigh, why not… I’m going to travel this entire place might as well get this one done with",
                background: "",
            },
            9: {
                name: "Narrator",
                text: "I… don't have a good feeling about this",
                background: "",
            },
            10: {
                name: "Narrator",
                text: "You spend the next 30 minutes walking up the tall hill",
                background: "",
            },
            11: {
                name: "Narrator",
                text: "You begin to knock on the gate and explain your situation but nobody comes…",
                background: "",
            },
            12: {
                name: "Narrator",
                text: "You realize that you have to walk all the way down with your backpack, realizing that maybe you should have met the ‘Great Uncle’",
                background: "",
            },
            13: {
                name: "Narrator",
                text: "You return from where you came and say sorry for leaving",
                background: "",
            },
                    //the link in here should lead into the one where Andty trusts Grunkle 
            redirectLink: "meat-ford.html"
        },
           
        gravityFallsNoSuchDuctTective: {
            1: {
                name: "Mable",
                text: "Wait… you’re telling me the greatest detective EVER doesn't exist???",
                background: "",
            },
            2: {
                name: "Soos",
                text: "okok dude I can 100% get behind the fact that you're a stranger that we know nothing about but I DRAW THE LINE at questioning Duct tectives existence you are untrustworthy",
                background: "",
            },
            3: {
                name: "Andy",
                text: "but guys… come on… seriously? ‘Duck tective…? You can't be serious",
                background: "",
            },
            4: {
                name: "Mable",
                text: "Gah! you can't trust anybody these days I swear",
                background: "",
            },
            5: {
                name: "Mable",
                text: "Listen… just because Duct tective sounds like a weird name, doesn't make him not real… i'm sick of this",
                background: "",
            },
            6: {
                name: "Narrator",
                text: "Great job, you managed to make the first people you met mad with you over a Duck who just so happens to be a detective",
                background: "",
            },
            7: {
                name: "Mable",
                text: "*Sigh “listen new guy… I’m nice so I’ll rescue you just this once… grab on”",
                background: "",
            },
            8: {
                name: "Narrator",
                text: "You don't trust this new person but regardless, you’re out of options so you resort to doing as she says",
                background: "",
            },
            9: {
                name: "Narrator",
                text: "The girl pulled out a grappling hook seemingly out of thin air and pulled us out of the bottomless pit",
                background: "",
            },
            10: {
                name: "Narrator",
                text: "The only one who sticks the landing was the girl who used the grappling hook who was carrying the boy that passed out",
                background: "",
            },
            11: {
                name: "Narrator",
                text: "You decide to split up from the group and think what your next move should be next",
                background: "",
            },
            redirectLink: "split-from-bottomless-pit-group.html"
        },

        gravityFallsSplitFronBottomlessPitGroup: {
            1: {
                name: "Narrator",
                background: "",
                text: {
                    dialog: "You go check what's inside the mysterious building called “Mystery Shack”",
                    dialog2: "You check around town to see if anyone can help",
                }
            },
        },

        gravityFallsSmallTalkWithFort: //has equipment
        {
            1: {
                name: "Narrator",
                text: "You and the man talk a little and he finally tells you who he is",
                background: "",
            },
            2: {
                name: "Fort",
                text: "I am Ford, long story short, Gravity Falls is no place to be playing around in, there's some CRAZY things going on in here",
                background: "",
            },
            3: {
                name: "Andy",
                text: "oh yeah? Like what?",
                background: "",
            },
            4: {
                name: "Fort",
                text: "well for starters, there's mind control, gnomes, and a triangle demon",
                background: "",
            },
            5: {
                name: "Andy",
                text: "…",
                background: "",
            },
            6: {
                name: "Fort",
                text: "ah but don't worry, you'll do just fine. Besides, you have me. Great Old Uncle Fort",
                background: "",
            },
            7: {
                name: "Narrator",
                text: "As you two walk through the forest, you notice a kid sitting in a chair being displayed on an old black and white tv giving commands to a large man in a flower button up shirt",
                background: "",
            },
            8: {
                name: "Narrator",
                text: "You start to wonder what they’re doing",
                background: "",
            },
            9: {
                name: "Fort",
                text: "Wait, don't advance any further",
                background: "",
            },
            10: {
                name: "Narrator",
                text: "Fort appears to realize something",
                background: "",
            },
            11: {
                name: "Fort",
                text: "Okay, now this may be an issue… good news and bad news.",
                background: "",
            },
            12: {
                name: "Fort",
                text: "The good news is we may have just come across the boss you’re looking for. The bad news is it's a lot of gnomes.",
                background: "",
            },
            13: {
                name: "Andy",
                text: "Gnomes…? That is…?",
                background: "",
            },
            14: {
                name: "Fort",
                text: "Well… if you look over there…",
                background: "",
            },
            15: {
                name: "Narrator",
                text: "Fort points a little to his left",
                background: "",
            },
            16: {
                name: "Andy",
                text: "Wow",
                background: "",
            },
            17: {
                name: "Fort",
                text: "Yeah",
                background: "",
            },
            18: {
                name: "Narrator",
                text: "It's a giant made of lots of gnomes",
                background: "",
            },
            19: {
                name: "Fort",
                text: "Well by the looks of it, Gideon’s controlling Bud (his dad) and his dad is controlling the gnome army",
                background: "",
            },
            20: {
                name: "Narrator",
                text: "You start to wonder what you two should do but come up with nothing",
                background: "",
            },
            21: {
                name: "Fort",
                text: "Do you have my grandkids' grappling hook and magic flashlight?",
                background: "",
            },
            22: {
                name: "Andy",
                text: "Yes, what about them",
                background: "",
            },
            redirectLink: "battle-weapons.html"
        },
        gravityFallsSmallTalkWithFortNoEQ: //doesetn have equipment
        {
            1: {
                name: "Narrator",
                text: "You and the man talk a little and he finally tells you who he is",
                background: "",
            },
            2: {
                name: "Fort",
                text: "I am Ford, long story short, Gravity Falls is no place to be playing around in, there's some CRAZY things going on in here",
                background: "",
            },
            3: {
                name: "Andy",
                text: "oh yeah? Like what?",
                background: "",
            },
            4: {
                name: "Fort",
                text: "well for starters, there's mind control, gnomes, and a triangle demon",
                background: "",
            },
            5: {
                name: "Andy",
                text: "…",
                background: "",
            },
            6: {
                name: "Fort",
                text: "ah but don't worry, you'll do just fine. Besides, you have me. Great Old Uncle Fort",
                background: "",
            },
            7: {
                name: "Narrator",
                text: "As you two walk through the forest, you notice a kid sitting in a chair being displayed on an old black and white tv giving commands to a large man in a flower button up shirt",
                background: "",
            },
            8: {
                name: "Narrator",
                text: "You start to wonder what they’re doing",
                background: "",
            },
            9: {
                name: "Fort",
                text: "Wait, don't advance any further",
                background: "",
            },
            10: {
                name: "Narrator",
                text: "Fort appears to realize something",
                background: "",
            },
            11: {
                name: "Fort",
                text: "Okay, now this may be an issue… good news and bad news.",
                background: "",
            },
            12: {
                name: "Fort",
                text: "The good news is we may have just come across the boss you’re looking for. The bad news is it's a lot of gnomes.",
                background: "",
            },
            13: {
                name: "Andy",
                text: "Gnomes…? That is…?",
                background: "",
            },
            14: {
                name: "Fort",
                text: "Well… if you look over there…",
                background: "",
            },
            15: {
                name: "Narrator",
                text: "Fort points a little to his left",
                background: "",
            },
            16: {
                name: "Andy",
                text: "Wow",
                background: "",
            },
            17: {
                name: "Fort",
                text: "Yeah",
                background: "",
            },
            18: {
                name: "Narrator",
                text: "It's a giant made of lots of gnomes",
                background: "",
            },
            19: {
                name: "Fort",
                text: "Well by the looks of it, Gideon’s controlling Bud (his dad) and his dad is controlling the gnome army",
                background: "",
            },
            20: {
                name: "Narrator",
                text: "You start to wonder what you two should do but come up with nothing",
                background: "",
            },
            21: {
                name: "Fort",
                text: "Do you have my grandkids' grappling hook and magic flashlight?",
                background: "",
            },
            22: {
                name: "Andy",
                text: "Oh, you mean the ones that like Duct tective?",
                background: "",
            },
            23: {
                name: "Fort",
                text: "That is correct, do you have them by any chance?",
                background: "",
            },
            24: {
                name: "Andy",
                text: "Unfortunately, I told them that Duct tective wasn't real and so they didn't trust me",
                background: "",
            },
            25: {
                name: "Fort",
                text: "Aww, that's too bad, this battle would have been more entertaining for me. Oh well, I guess it can't be helped",
                background: "",
            },
            26: {
                name: "Narrator",
                text: "You see Fort pull out a weapon",
                background: "",
            },
            27: {
                name: "Narrator",
                text: "Woah woah woah isn't that a little too extreme? No… alright then if you insist",
                background: "",
            },
            28: {
                name: "Narrator",
                text: "Fort, with one pull of the trigger, completely wipes out the monster",
                background: "",
            },
            29: {
                name: "Fort",
                text: "Oh whoops, looks like I forgot one",
                background: "",
            },
            30: {
                name: "Narrator",
                text: "You see Fort aiming at the TV where Gideon is giving orders to his father.",
                background: "",
            },
            31: {
                name: "Fort",
                text: "...and done",
                background: "",
            },
            32: {
                name: "Narrator",
                text: "Fort managed to destroy the TV which broke the connection between the two",
                background: "",
            },
            33: {
                name: "Bud",
                text: "-Boy, listen, I don't want to be mind-controlled…",
                background: "",
            },
            34: {
                name: "Bud",
                text: "Wait… where am I?",
                background: "",
            },
            35: {
                name: "Fort",
                text: "I got it from here, you better take off",
                background: "",
            },
            36: {
                name: "Andy",
                text: "That's weird… alright Ford, cya",
                background: "",
            },
            37: {
                name: "Narrator",
                text: "You pick up the artifact and get teleported to universe 3",
                background: "",
            },
            redirectLink: "../the-amazing-world-of-gumball/the-amazing-world-of-gumball.html"
            
        },
        gravityFallsChoseYourWeapon: {
            1: {
                name: "Narrator",
                background: "",
                text: {
                    dialog: "Use grappling hook",
                    dialog2: "Use magic flashlight",
                }
            },
        },
        gravityFallsUseGrapplingHook: {
            1: {
                name: "Narrator",
                text: "You pull out the grappling hook and aim it directly at the monster made of gnomes' head",
                background: "",
            },
            2: {
                name: "Fort",
                text: "You fool, what have you done?",
                background: "",
            },
            3: {
                name: "Andy",
                text: "Relax, I’m just using this as a harpoon gun",
                background: "",
            },
            4: {
                name: "Fort",
                text: "THAT'S NOT HOW IT WORKS!",
                background: "",
            },
            5: {
                name: "Narrator",
                text: "You hit the monster spot on but the grappling hook sticks to him… you won't let go of it because you're under the impression that it will come back to you like a boomerang",
                background: "",
            },
            6: {
                name: "Narrator",
                text: "You get pulled towards the monsters and are now hugging the right side of its head",
                background: "",
            },
            7: {
                name: "Narrator",
                text: "The monster believes you are a mosquito and slaps his face.",
                background: "",
            },
            8: {
                name: "Narrator",
                text: "Game Over",
                background: "",
            },
            redirectLink: "game-over.html"
        },
        gravityFallsUseFlashLight: {
            1: {
                name: "Fort",
                text: "There you go lad.",
                background: "",
            },
            2: {
                name: "Narrator",
                text: "You point the flashlight at the monster and turn it on",
                background: "",
            },
            3: {
                name: "Andy",
                text: "Huh… what's up with this thing?",
                background: "",
            },
            4: {
                name: "Fort",
                text: "Have you switched its mode to shrink?",
                background: "",
            },
            5: {
                name: "Andy",
                text: "How do I do that?",
                background: "",
            },
            6: {
                name: "Fort",
                text: "At the front of it, there's a crystal that you rotate",
                background: "",
            },
            7: {
                name: "Narrator",
                text: "You point the flashlight at yourself and turn it off, then realize that the crystal is in the middle, not flipped on either side.",
                background: "",
            },
            8: {
                name: "Narrator",
                text: "You flip the crystal and hope that it's the right side",
                background: "",
            },
            9: {
                name: "Andy",
                text: "Take 2",
                background: "",
            },
            10: {
                name: "Narrator",
                text: "You turn on the flashlight and shine it at the monster before realizing it just got 20 feet larger",
                background: "",
            },
            11: {
                name: "Fort",
                text: "Wrong way",
                background: "",
            },
            12: {
                name: "Narrator",
                text: "You turn the flashlight off and now see that the monster noticed you",
                background: "",
            },
            13: {
                name: "Fort",
                text: "Better hurry, he's coming",
                background: "",
            },
            14: {
                name: "Narrator",
                text: "You quickly flip the crystal, and aim it at the monster",
                background: "",
            },
            15: {
                name: "Andy",
                text: "Take 3",
                background: "",
            },
            16: {
                name: "Narrator",
                text: "You power on the flashlight and this time it's the shrinking side, you make sure to point it at the monster for as long as you can see it.",
                background: "",
            },
            17: {
                name: "Narrator",
                text: "You and Fort no longer see the monster because it's so small",
                background: "",
            },
            18: {
                name: "Fort",
                text: "Great, now for Bud",
                background: "",
            },
            19: {
                name: "Andy",
                text: "Bud?",
                background: "",
            },
            20: {
                name: "Fort",
                text: "Yes, the large guy right there",
                background: "",
            },
            21: {
                name: "Narrator",
                text: "You point your flashlight at Bud and he begins to shrink",
                background: "",
            },
            22: {
                name: "Andy",
                text: "This is my favorite flashlight so far",
                background: "",
            },
            23: {
                name: "Fort",
                text: "I can see why, it's a 3 in 1, who doesn't love those",
                background: "",
            },
            24: {
                name: "Narrator",
                text: "You see a mysterious object you can only imagine is the artifact",
                background: "",
            },
            25: {
                name: "Andy",
                text: "Well th… this is where I take off",
                background: "",
            },
            26: {
                name: "Fort",
                text: "Yup, see you around friend. Take care",
                background: "",
            },
            27: {
                name: "Narrator",
                text: "You pick up the artifact and get teleported to universe 3",
                background: "",
            },
            redirectLink: "../the-amazing-world-of-gumball/the-amazing-world-of-gumball.html"
        },







        theAmazingWorldOfGumballIntro: {
            1: {
                name: "Narrator",
                text: "What… What is this…? Wait… WE GET A REGULAR INTRO. WOOOO!!",
                background: "",
            },
            2: {
                name: "Andy",
                text: "Take 3 is this now…? I'm kinda forgetting.",
                background: "",
            },
            3: {
                name: "Andy",
                text: "So there was the one with the bad mom jokes… then um the gnome-",
                background: "",
            },
            4: {
                name: "Andy",
                text: "Yup, take 3 this is!",
                background: "",
            },
            5: {
                name: "Narrator",
                text: "You see a school in front of you.",
                background: "",
            },
            6: {
                name: "Andy",
                text: "AWWWWWW SCHOOL… wait… where there's school, there's free milk… wooo free milk.",
                background: "",
            },
            7: {
                name: "Narrator",
                text: "You see someone who looks like a cat and wonder if it is Gumball from that cartoon you watched when you were younger…",
                background: "",
            },
            8: {
                name: "Andy",
                text: "Hey, isn't that called… gumball? Yeah, from The Amazing World Of Gumball.",
                background: "",
            },
            9: {
                name: "Andy",
                text: "Let's see what he has for me, probably not milk but in this crazy time, who knows.",
                background: "",
            },
            10: {
                name: "Narrator",
                text: "You open the doors to the school and decide to go in… but something's blocking the path.",
                background: "",
            },
            redirectLink: "centar-choice1.html"
            
        },
        theAmazingWorldOfGumballQuestionTheCentar:{
            1: {
                name: "Andy",
                background: "",
                text: {
                    dialog: "”Woah… who… er- what are you…?”",
                    dialog2: "“Move aside, I have to claim my free milk”",
                }
            },
        },

        theAmazingWorldOfGumballMoveAside: {
            1: {
                name: "Narrator",
                text: "The centaur moves out of the way.",
                background: "",
            },
            2: {
                name: "Andy",
                text: "Wow that was easy… I think it's the fact that I've been to 2 other universes but I feel pretty confident.",
                background: "",
            },
            3: {
                name: "Andy",
                text: "I think I can take on the world. Matter of fact, when I'm out of here, I'll try to become the president of my school.",
                background: "",
            },
            4: {
                name: "Andy",
                text: "Oh wait, it's too late… I'll do something :)",
                background: "",
            },
            5: {
                name: "Narrator",
                text: "Richard moved aside and positioned his hooves toward you.",
                background: "",
            },
            6: {
                name: "Andy",
                text: "Oh golly-",
                background: "",
            },
            7: {
                name: "Narrator",
                text: "The centaur blew flames from its butt and you no longer care about the confidence.",
                background: "",
            },
            8: {
                name: "Narrator",
                text: "Game Over",
                background: "",
            },
            9: {
                name: "Narrator",
                text: "lol what a weak way to go out… a centaur had too much Taco Bell and let it all out on you… this job pays me TOO much for how much I'm enjoying it.",
                background: "",
            },
            redirectLink: "game-over.html"
            
        },

        theAmazingWorldOfGumballCentarNote: {
            1: {
                name: "Andy",
                text: "Got milk or rocks for me?",
                background: "",
            },
            2: {
                name: "Narrator",
                text: "There you see Richard as a centaur.",
                background: "",
            },
            3: {
                name: "Richard",
                text: "I’m feeling quite hungry… bring me nothing but an Annoying Orange and I'll let you pass.",
                background: "",
            },
            4: {
                name: "Narrator",
                text: "You remember that those things could quickly end you with its hooves so you go along with whatever it asks of you.",
                background: "",
            },
            5: {
                name: "Andy",
                text: "Dare I ask… But what is… an Annoying Orange…?",
                background: "",
            },
            6: {
                name: "Richard",
                text: "I have some oranges back at my place. Go check out there.",
                background: "",
            },
            7: {
                name: "Narrator",
                text: "The centaur gives you a sticky note that reads ‘↑ ↑ ↓ ↓ ← → ← → BA Start’.",
                background: "",
            },
            redirectLink: "sticky-note-options.html"
            
        },
        theAmazingWorldOfGumballStickyNoteOptions: {
            1: {
                name: "Narrator",
                background: "",
                text: {
                    dialog: "Throw the sticky note on the ground",
                    dialog2: "‘↑ ↑ ↓ ↓ ← → ← → BA Start’",
                    dialog3: "Konami Code",
                }
            },
        },


        theAmazingWorldOfGumballThrowStickyNote: {
            1: {
                name: "Narrator",
                text: "The centaur gets mad at you for doing that and turns around and sits on you…",
                background: "",
            },
            2: {
                name: "Narrator",
                text: "Game Over",
                background: "",
            },
            3: {
                name: "Narrator",
                text: "Achievement unlocked: It's dark in here",
                background: "",
            },
            
            redirectLink: "game-over.html"
            
        },
        theAmazingWorldOfGumballGoesToHouse: {
            1: {
                name: "Narrator",
                text: "Oh yeah, cutscenes baby… we have budget cuts so this is what you are left with :(",
                background: "",
            },
            2: {
                name: "Narrator",
                text: "You head inside the house.",
                background: "",
            },
            redirectLink: "inside-the-kitchen.html"
            
        },
        theAmazingWorldOfGumballKonamiCode: {
            1: {
                name: "???:",
                text: "Congrats on knowing what that is, here, take this, I’ve got plenty…",
                background: "",
            },
            2: {
                name: "Narrator",
                text: "She gave you a small trophy made of cardboard that does absolutely nothing.",
                background: "",
            },
            3: {
                name: "Achievement",
                text: "Achievement unlocked: Useless Trophy",
                background: "",
            },
            4: {
                name: "Andy",
                text: "Alright! Thank you… ma’am…? I'll be sure to take good care of it.",
                background: "",
            },
            5: {
                name: "Narrator",
                text: "You place it in your backpack and get transported by the witch directly to the right house.",
                background: "",
            },
            6: {
                name: "Narrator",
                text: "Your hair got all frizzled, must have been because you got shaken when you got transported.",
                background: "",
            },
            7: {
                name: "Andy",
                text: "Aww don't tell me that…",
                background: "",
            },
            8: {
                name: "Narrator",
                text: "You open your backpack and yup, sure enough, the trophy broke due to the amount of milk you have in your backpack.",
                background: "",
            },
            9: {
                name: "Andy",
                text: "Of course that would happen well oh well I guess.",
                background: "",
            },
            10: {
                name: "Narrator",
                text: "You throw away the piece of cardboard that did absolutely nothing and go inside.",
                background: "",
            },
            redirectLink: "inside-the-kitchen.html"
            
        },

        theAmazingWorldOfGumballFunnelPath: {
            1: {
                name: "Narrator",
                text: "You go inside the kitchen and look around for the oranges.",
                background: "",
            },
            2: {
                name: "Narrator",
                text: "You start to hear something… it is a voice but you don't see who it is… who could it be?",
                background: "",
            },
            redirectLink: "choose-your-orange.html"
        },

        theAmazingWorldOfGumballDecideOrange: {
            1: {
                name: "Narrator",
                background: "",
                text: {
                    dialog: "Choose the orange with a face, clearly marked ‘Annoying orange’",
                    dialog2: "Choose the plane ole ‘Orange’",
                }
            },
        },

        theAmazingWorldOfGumballAnoyingOrange: {
            1: {
                name: "Andy",
                text: "Um, what are you?",
                background: "",
            },
            2: {
                name: "Annoying Orange",
                text: "Hey! Don't mind me… just slip me in that their backpack of yours and I'll tell you everything about who I am hahaha",
                background: "",
            },
            3: {
                name: "Narrator",
                text: "You have a bad feeling about this. Just the thought of something annoying doesn't sit right with you.",
                background: "",
            },
            4: {
                name: "Narrator",
                text: "You head outside and see some banana about to get pranked?",
                background: "",
            },
            redirectLink: "nicole-shows-up.html"
        },
        theAmazingWorldOfGumballPlaneOleOrange: {
            //from here out, its all forced... no real options... just death lol
            
            1: {
                name: "Narrator",
                text: "You head outside and see some banana about to get pranked?",
                background: "",
            },
            redirectLink: "nicole-shows-up.html"
        },

        theAmazingWorldOfGumballSecretJoe: /*havent tested yet*/{
            1: {
                name: "Andy",
                text: "Woah, what's going on?",
                background: "",
            },
            2: {
                name: "Narrator",
                text: "Well, it looks like you have been transported once more, but this time you are… nowhere on the map… I think this is forgotten… well ima head off because people still remember me. Good luck Andy.",
                background: "",
            },
            3: {
                name: "Rob",
                text: "Oh sweet, someone came… finally. I thought nobody would find this secret. I know it was pretty well hidden and all but man does it feel good to talk to someone.",
                background: "",
            },
            4: {
                name: "Rob",
                text: "What do you say we talk for a little friend?",
                background: "",
            },
            5: {
                name: "Andy",
                text: "Ummm sure…? But the last guy who called me his friend tried to kill me… are you planning on doing the same?",
                background: "",
            },
            6: {
                name: "Narrator",
                text: "I just came back with some popcorn, I can't wait to see how this ends.",
                background: "",
            },
            7: {
                name: "Rob",
                text: "No? Dude, I just told you that I've been ALONE for a long time, which part do you not understand?",
                background: "",
            },
            8: {
                name: "Rob",
                text: "Anyways, I got sent here a long time ago… the original series forgot about me and some other girl but she comes in later.",
                background: "",
            },
            9: {
                name: "Annoying Orange",
                text: "Hey Apple- er- I mean hehehe HEY ANDY!",
                background: "",
            },
            10: {
                name: "Rob",
                text: "What is… that…?",
                background: "",
            },
            11: {
                name: "Andy",
                text: "It's some annoying orange I had to pick up for a quest.",
                background: "",
            },
            12: {
                name: "Rob",
                text: "Well can you tell it to pipe down? I'm trying to tell you my sob story.",
                background: "",
            },
            13: {
                name: "Andy",
                text: "Yeah, yeah sure.",
                background: "",
            },
            14: {
                name: "Narrator",
                text: "You turn to the annoying orange in your backpack and tell it to pipe down or else you'll eat him.",
                background: "",
            },
            15: {
                name: "Annoying Orange",
                text: "Eat me…? Ha. that won't do anything silly, you have to eat my skin as well…",
                background: "",
            },
            16: {
                name: "Andy",
                text: "Oh well, so be it then.",
                background: "",
            },
            17: {
                name: "Narrator",
                text: "You take the annoying orange out and are about to peel it off.",
                background: "",
            },
            18: {
                name: "Annoying Orange",
                text: "No no NO wait wait wait… I'll stop I promise.",
                background: "",
            },
            19: {
                name: "Andy",
                text: "Swear?",
                background: "",
            },
            20: {
                name: "Annoying Orange",
                text: "Yes, I swear, on apple, grape, guava, everyone.",
                background: "",
            },
            21: {
                name: "Rob",
                text: "Weird… anyways it began like last Friday.",
                background: "",
            },
            22: {
                name: "Andy",
                text: "Wait, didn't you say you've been in here for a while?",
                background: "",
            },
            23: {
                name: "Rob",
                text: "Um yeah? Last Friday WAS a while ago.",
                background: "",
            },
            24: {
                name: "Rob",
                text: "So it was last Friday and I just kinda woke up here. I don't know much about this place, I mean I know about the Watersons place. That's where I live… in the home of my old nemesis.",
                background: "",
            },
            25: {
                name: "Rob",
                text: "It's quite a tragedy. You know… because we broke up and now Banana Joe is my new nemesis…",
                background: "",
            },
            26: {
                name: "Narrator",
                text: "Rob goes on for the next several minutes explaining why Banana Joe is a better nemesis than Gumball.",
                background: "",
            },
            27: {
                name: "Narrator",
                text: "You are dozing asleep when Rob notices.",
                background: "",
            },
            28: {
                name: "Rob",
                text: "Hey… HEY! Are you sleeping?",
                background: "",
            },
            29: {
                name: "Andy",
                text: "Sorry about that, your story kinda put me to sleep.",
                background: "",
            },
            30: {
                name: "Rob",
                text: "Argh. no matter… here. Take this and get out of here. I told myself that I would give this weapon to the first person that made contact with me in this dump.",
                background: "",
            },
            31: {
                name: "Narrator",
                text: "You acquire a ‘Magic remote’",
                background: "",
            },
            32: {
                name: "Narrator",
                text: "+1 Magic remote",
                background: "",
            },
            33: {
                name: "Narrator",
                text: "You press the power button and it takes you back to the house, now that you think about it, the house you are in looks a lot like the one Rob was talking about just earlier.",
                background: "",
            },
            redirectLink: "nicole-shows-up.html"
        },

        theAmazingWorldOfGumballBlueWomen: {
            1: {
                name: "Nicole",
                text: "“Hey there hun are you lost…?”",
                background: "",
            },
            2: {
                name: "Andy",
                text: "“Ummm no…?”",
                background: "",
            },
            3: {
                name: "Nicole",
                text: "“Good, that means I can finally let loose”",
                background: "",
            },
            4: {
                name: "Narrator",
                text: "Let the popcorn eating commence.",
                background: "",
            },
            redirectLink: "choice-with-nicole.html"
            
        },

        theAmazingWorldOfGumballDecisionWithNicole: {
            1: {
                name: "Narrator",
                background: "",
                text: {
                    dialog: "Explain who you are",
                    dialog2: "Book it (Run for it)",
                }
            },
        },

        theAmazingWorldOfGumballExplainWhoYouAre: {
            1: {
                name: "Andy",
                text: "Wait wait wait… before you do anything…",
                background: "",
            },
            2: {
                name: "Narrator",
                text: "You show her the orange.",
                background: "",
            },
            3: {
                name: "Nicole",
                text: "Oh is that for my husband? He always does this… sending strangers into our house, expecting them to get things for them. I can't believe him.",
                background: "",
            },
            4: {
                name: "Nicole",
                text: "Don't you hate that? Whenever random people just invite themselves into your home?",
                background: "",
            },
            5: {
                name: "Andy",
                text: "Well actual-",
                background: "",
            },
            6: {
                name: "Nicole",
                text: "Good… well so do I…",
                background: "",
            },
            7: {
                name: "Narrator",
                text: "Nicole starts tapping her foot, waiting impatiently to go berserk on you.",
                background: "",
            },
            8: {
                name: "Narrator",
                text: "You notice something on the ground next to the pieces of broken glass.",
                background: "",
            },
            9: {
                name: "Andy",
                text: "Wow they take care of themselves… the bathrooms in my school have less broken glass on the floor than these people do.",
                background: "",
            },
            10: {
                name: "Narrator",
                text: "You go in to notice the bag close to your feet on the floor.",
                background: "",
            },
            redirectLink: "bag-options.html"
        },

        theAmazingWorldOfGumballEarplugsChoice: {
            1: {
                name: "Narrator",
                background: "",
                text: {
                    dialog: "Pick up the earplugs",
                    dialog2: "leaves the earplugs",
                }
            },
        },
        theAmazingWorldOfGumballAquiredEarplugs: {
            1: {
                name: "Narrator",
                text: "+1 pair of earplugs",
                background: "",
            }, 
            redirectLink: "get-kicked-to-school.html"
        },
        theAmazingWorldOfGumballLeaveEarplugs: {
            1: {
                name: "Narrator",
                text: "what have you done… you chose so incredibly wrong",
                background: "",
            }, 
            redirectLink: "get-kicked-to-school.html"
        },

        theAmazingWorldOfGumballBookIt: {
            1: {
                name: "Narrator",
                text: "You try running out of the house and get pretty far too. You somehow managed to outrun Nicole.",
                background: "",
            },
            2: {
                name: "Narrator",
                text: "You are now at school and you tell her…",
                background: "",
            },
            3: {
                name: "Andy",
                text: "“There… you can't do anything about it now… I am safe…”",
                background: "",
            },
            4: {
                name: "Nicole",
                text: "“Well it's been fun kid”",
                background: "",
            },
            5: {
                name: "Narrator",
                text: "Nicole picks you up by your backpack and kicks you through the double doors of the school, and you land in the centaur's stomach.",
                background: "",
            },
            6: {
                name: "Andy",
                text: "“Ewww what is this”",
                background: "",
            },
            7: {
                name: "Narrator",
                text: "You peel your face away from the sticky substance, realizing it is the centaur.",
                background: "",
            },
            8: {
                name: "Andy",
                text: "“Ew”",
                background: "",
            },
            9: {
                name: "Nicole",
                text: "“Goodbye”",
                background: "",
            },
            10: {
                name: "Narrator",
                text: "Nicole pushes your head into the centaur's fat and you become an un-person.",
                background: "",
            },
            11: {
                name: "Narrator",
                text: "Game Over",
                background: "",
            },
            redirectLink: "game-over.html"
        },

        theAmazingWorldOfGumballNicoleKicksPlayerBackToSchool: {
            1: {
                name: "Nicole",
                text: "“Well whatever, I'm done with this”",
                background: "",
            },
            2: {
                name: "Narrator",
                text: "Nicole kicks you back to the school.",
                background: "",
            },
            redirectLink: "give-centar-the-orange.html"
        },

        theAmazingWorldOfGumballGivesCentarAnnoyingOrange: {
            1: {
                name: "Narrator",
                text: "You give the centar the ‘Annoying Orange",
                background: "",
            },
            2: {
                name: "Richard",
                text: "“You shall pass”",
                background: "",
            },
            3: {
                name: "Narrator",
                text: "The centaur passes you while spraying a rainbow out of his butt.",
                background: "",
            },
            4: {
                name: "Narrator",
                text: "+1 Red Skittle",
                background: "",
            },
            5: {
                name: "Narrator",
                text: "Taste the Rainbow Achievement",
                background: "",
            },
            redirectLink: "you-see-molly.html"
        },
        theAmazingWorldOfGumballGivesCentarRegularOrange: {
            1: {
                name: "Narrator",
                text: "Gives the centaur the ‘Orange’",
                background: "",
            },
            2: {
                name: "Narrator",
                text: "The centaur turns around and lights you on fire using his butt.",
                background: "",
            },
            redirectLink: "game-over.html"
        },

        theAmazingWorldOfGumballYouSeeMolly: /*progam here*/{
            1: {
                name: "Narrator",
                text: "You see a large grey creature in front of you… they seem friendly.",
                background: "",
            },
            2: {
                name: "Molly",
                text: "“Hey there new guy. Wanna hear a story?”",
                background: "",
            },
            3: {
                name: "Narrator",
                text: "You are forced to listen to it because she is standing in the way and you need her to move.",
                background: "",
            },
            4: {
                name: "Andy",
                text: "“Sure, why not”",
                background: "",
            },
            5: {
                name: "Molly",
                text: "“Ok. It all began a really long time ago. Like at my house long ago. Like it was so long ago it was yesterday.”",
                background: "",
            },
            redirectLink: "mollys-story.html"
        },
        //if the user obtained earplugs, they could skip this
        //else, else but the path is like really long
        theAmazingWorldOfGumballMollysStory: {
            1: {
                name: "Molly",
                text: "Okay, so this morning I woke up really early. The alarm went off, and I just didn’t want to get out of bed.",
                background: "",
            },
            2: {
                name: "Molly",
                text: "The sky outside was all gray, like a blanket of clouds had covered everything. It felt... quiet. Too quiet.",
                background: "",
            },
            3: {
                name: "Molly",
                text: "I finally dragged myself to the kitchen. I grabbed my cereal, the one with stars on the box, even though they’re fake.",
                background: "",
            },
            4: {
                name: "Molly",
                text: "I poured the milk, and of course, it spilled. I didn’t care. It always spills. I just wiped it up and moved on.",
                background: "",
            },
            5: {
                name: "Molly",
                text: "After breakfast, I realized I forgot to pack my lunch. So I rushed back to the kitchen and threw together a sandwich.",
                background: "",
            },
            6: {
                name: "Molly",
                text: "It was just peanut butter and jelly, nothing fancy. But I put way too much peanut butter on it. Oops.",
                background: "",
            },
            7: {
                name: "Molly",
                text: "I ate it anyway and then rushed to get my backpack. I almost forgot my art supplies, but grabbed them at the last second.",
                background: "",
            },
            8: {
                name: "Molly",
                text: "As I was walking out, I noticed a brown crayon lying in the hallway. Just there, in the middle of the floor.",
                background: "",
            },
            9: {
                name: "Molly",
                text: "I picked it up. It seemed so random, but something about it felt... important, like it was calling to me.",
                background: "",
            },
            10: {
                name: "Molly",
                text: "I thought about leaving it, but I took it with me. Maybe I could use it for something. It felt like a sign.",
                background: "",
            },
            11: {
                name: "Molly",
                text: "On my way to school, I kept looking at the crayon in my hand. I wondered what I could do with it today.",
                background: "",
            },
            12: {
                name: "Molly",
                text: "Maybe it could help me make a beautiful drawing for art class. Or maybe it’d be another boring day. Who knew?",
                background: "",
            },
            13: {
                name: "Molly",
                text: "I got to school, and the bell rang. Everyone was already drawing, but I was still unsure what to do with the crayon.",
                background: "",
            },
            14: {
                name: "Molly",
                text: "I sat down and stared at my paper. Then, I looked at the crayon again. Maybe I should start simple. Just a line.",
                background: "",
            },
            15: {
                name: "Molly",
                text: "I drew a little square. It wasn’t perfect, but it felt... okay. The brown color felt calming in a way.",
                background: "",
            },
            16: {
                name: "Molly",
                text: "The more I drew, the more I started to like how the crayon felt. It wasn’t too hard or too soft, just right.",
                background: "",
            },
            17: {
                name: "Molly",
                text: "I added a few more lines, then a circle. I was starting to create something. I didn’t know what, but it was mine.",
                background: "",
            },
            18: {
                name: "Molly",
                text: "I looked at it for a moment, and I realized something—I was actually enjoying it. The crayon was working.",
                background: "",
            },
            19: {
                name: "Molly",
                text: "It was only a few simple shapes, but it felt so nice to see them come together. I felt proud of it, strangely.",
                background: "",
            },
            20: {
                name: "Molly",
                text: "As I finished the drawing, I thought, ‘Maybe I’m not as bad at art as I thought.’ I smiled, even though it wasn’t perfect.",
                background: "",
            },
            21: {
                name: "Molly",
                text: "I looked around. No one seemed to notice my picture, but that didn’t matter. I made something all on my own.",
                background: "",
            },
            22: {
                name: "Molly",
                text: "The bell rang, and I started to pack up. But I couldn’t leave my drawing. I just wanted to keep looking at it.",
                background: "",
            },
            23: {
                name: "Molly",
                text: "I picked up the brown crayon, and I thought about how this one simple crayon made my day feel a little better.",
                background: "",
            },
            24: {
                name: "Molly",
                text: "I put the crayon in my backpack and thought, ‘Maybe I’ll use it again tomorrow. Maybe we’ll make more things.’",
                background: "",
            },
            25: {
                name: "Molly",
                text: "And that’s how my morning went. Quiet, simple, but a little special, all thanks to a brown crayon.",
                background: "",
            },
            

            redirectLink: "ending.html"
        },
        theAmazingWorldOfGumballNarratorSkipsMollysStory: {
            1: {
                name: "Narrator",
                text: "You see I don't want to hear the story so I'll just place these in your ears",
                background: "",
            },
            2: {
                name: "Narrator",
                text: "I'm talking about the ear plugs of course",
                background: "",
            },
            3: {
                name: "Narrator",
                text: "You ended up skipping 5 minutes of epic gameplay due to this",
                background: "",
            },
            redirectLink: "ending.html"
        },
        theAmazingWorldOfGumballEnding: {
            1: {
                name: "Narrator",
                text: "After the story with Molly, she heads to class.",
                background: "",
            },
            2: {
                name: "Narrator",
                text: "You can now see the artifact.",
                background: "",
            },
            3: {
                name: "Andy",
                text: "“Finally, I thought that was never going to end”",
                background: "",
            },
            4: {
                name: "Narrator",
                text: "You pick up the artifact and get transported to the fourth and final universe.",
                background: "",
            },
            redirectLink: "../../adventure-time/adventure-time.html"
        },












        adventureTimeForcedpath: {
            1: {
                name: "Narrator",
                text: "Darn, I'm going to miss the intro song when coming to these universes.",
                background: "",
            },
            2: {
                name: "Narrator",
                text: "You spawn inside the tree house.",
                background: "",
            },
            3: {
                name: "Andy",
                text: "“Woah… now this is cool”",
                background: "",
            },
            4: {
                name: "Narrator",
                text: "You see a person, a yellow dog, and a small Game Boy robot making a sandwich.",
                background: "",
            },
            5: {
                name: "Jake",
                text: "“And finally… lobster soul”",
                background: "",
            },
            6: {
                name: "BMO",
                text: "“Looks yummy Jake”",
                background: "",
            },
            7: {
                name: "Fin",
                text: "“Yeah bro. Good job”",
                background: "",
            },
            8: {
                name: "BMO",
                text: "“We should share with that guy standing in the corner”",
                background: "",
            },
            9: {
                name: "Jake",
                text: "“Who?”",
                background: "",
            },
            10: {
                name: "Fin",
                text: "“Nobody should be here BMO”",
                background: "",
            },
            11: {
                name: "Narrator",
                text: "Everyone turns their head and looks at you.",
                background: "",
            },
            12: {
                name: "Andy",
                text: "“Ummmm hi?”",
                background: "",
            },
            13: {
                name: "Fin",
                text: "“Ahhhhh”",
                background: "",
            },
            redirectLink: "first-choice.html"
        },
            

        adventureTimeFirstChoice: {
            1: {
                name: "Andy",
                background: "",
                text: {
                    dialog: "“wait wait wait… I'm here to help”",
                    dialog2: "“Calm down, where's the trouble? I can take care of it”",
                }
            },
        },

        adventureTimeExplainYourself: {
            1: {
                name: "Fin",
                text: "“Help…? Help how?”",
                background: "",
            },
            2: {
                name: "Andy",
                text: "“Well from what I've been told and what I've experienced so far, there is some type of final boss I need to defeat to get back home”",
                background: "",
            },
            3: {
                name: "Andy",
                text: "“Could it be that something is going wrong with your world?”",
                background: "",
            },
            4: {
                name: "Jake",
                text: "“Wait… so you're not from here…?”",
                background: "",
            },
            5: {
                name: "Andy",
                text: "“That's right, this isn't my home, but I would love to live here”",
                background: "",
            },
            6: {
                name: "Narrator",
                text: "You look around in the large tree house.",
                background: "",
            },
            7: {
                name: "Fin",
                text: "“Ok… how about this…”",
                background: "",
            },
            8: {
                name: "Fin",
                text: "“Tell us about the adventures you've had and we'll determine if you are telling the truth or not”",
                background: "",
            },
            9: {
                name: "Andy",
                text: "“Yeah. Ok. Sure. Should be easy enough”",
                background: "",
            },
            10: {
                name: "Narrator",
                text: "Time to test your memory.",
                background: "",
            },
            11: {
                name: "Andy",
                text: "“So… ugh”",
                background: "",
            },
            12: {
                name: "Andy",
                text: "“In the first universe, I met some animals and a gumball machine to take on a green ogre”",
                background: "",
            },
            13: {
                name: "Andy",
                text: "“Hmmm”",
                background: "",
            },
            14: {
                name: "Andy",
                text: "“In the second universe, I had to take on a tower of gnomes”",
                background: "",
            },
            15: {
                name: "Andy",
                text: "“And finally…”",
                background: "",
            },
            16: {
                name: "Andy",
                text: "“The last universe I was in I had to take on a centaur”",
                background: "",
            },
            17: {
                name: "Jake",
                text: "“Wow dude you seem pretty cool.”",
                background: "",
            },
            18: {
                name: "Andy",
                text: "“Back to my question earlier real quick”",
                background: "",
            },
            19: {
                name: "Jake",
                text: "“Oh right… something is wrong with our world, is it?”",
                background: "",
            },
            20: {
                name: "Jake",
                text: "“Yeah man, there's all kinds of things that are wrong with this world”",
                background: "",
            },
            21: {
                name: "Fin",
                text: "“You have the Ice King kidnapping princesses”",
                background: "",
            },
            22: {
                name: "Jake",
                text: "“Giant slugs that try to find romance”",
                background: "",
            },
            23: {
                name: "BMO",
                text: "“Don't forget about the lich”",
                background: "",
            },
            24: {
                name: "Fin",
                text: "“And Jake... THE LICH”",
                background: "",
            },
            25: {
                name: "Jake",
                text: "“That could be it for sure”",
                background: "",
            },
            26: {
                name: "Andy",
                text: "“Who's the lich?”",
                background: "",
            },
            27: {
                name: "Jake",
                text: "“Long story short, it's something that's made of pure evil. It is said that even the purest of those can't get close to him without turning a little evil”",
                background: "",
            },
            28: {
                name: "Andy",
                text: "“Scary… but if it means I get to go back home… I'm all in for it”",
                background: "",
            },
            29: {
                name: "Jake",
                text: "“So am I”",
                background: "",
            },
            30: {
                name: "Fin",
                text: "“Me too, we’re going to need all the help we can get”",
                background: "",
            },
            31: {
                name: "BMO",
                text: "“Yes. I will round up all the troops”",
                background: "",
            },
            32: {
                name: "Narrator",
                text: "You notice the little robot throw itself out of the window.",
                background: "",
            },
            33: {
                name: "Andy",
                text: "“That's nominal I'm assuming…?”",
                background: "",
            },
            34: {
                name: "Fin",
                text: "“Nope, he's just really happy to finally have someone else to talk to”",
                background: "",
            },
            35: {
                name: "Jake",
                text: "“Anyways… more sandwich for Jake”",
                background: "",
            },
            36: {
                name: "Fin",
                text: "“Dude… weak”",
                background: "",
            },
            37: {
                name: "Jake",
                text: "“What? I can't fight on an empty stomach”",
                background: "",
            },
            38: {
                name: "Fin",
                text: "“No dude… don't be rude… share with our guest…”",
                background: "",
            },
            39: {
                name: "Jake",
                text: "“Oh yeah huh… sorry”",
                background: "",
            },
            40: {
                name: "Jake",
                text: "“Here, you want some Perfect Sandwich”",
                background: "",
            },
            41: {
                name: "Andy",
                text: "“If you're offering, then sure”",
                background: "",
            },
            42: {
                name: "Narrator",
                text: "Jake gives you a piece of the sandwich.",
                background: "",
            },
            43: {
                name: "Andy",
                text: "“Hey, this is pretty good-”",
                background: "",
            },
            44: {
                name: "Narrator",
                text: "As you eat the sandwich, you start to feel tingling.",
                background: "",
            },
            45: {
                name: "Narrator",
                text: "NEW Power: Regeneration",
                background: "",
            },
            46: {
                name: "Andy",
                text: "“Woah, I got a regen power…? Nice”",
                background: "",
            },
            47: {
                name: "Jake",
                text: "“Yeah, that's thanks to the lobster soul I added”",
                background: "",
            },
            48: {
                name: "Andy",
                text: "“I ate a… soul… I think I'm going to be sick…”",
                background: "",
            },
            49: {
                name: "Narrator",
                text: "You think for a little about the fact that you just ate a lobster-infused sandwich.",
                background: "",
            },
            50: {
                name: "Andy",
                text: "“Okay, I think I'm fine now…”",
                background: "",
            },
            51: {
                name: "Jake",
                text: "“Alright, let's get headed to PB’s kingdom”",
                background: "",
            },
            52: {
                name: "Andy",
                text: "“PB’s kingdom…?”",
                background: "",
            },
            53: {
                name: "Fin",
                text: "“Princess Bubblegum's Kingdom”",
                background: "",
            },
            54: {
                name: "Andy",
                text: "“Before we continue, can I get some names? Just so I'm not lost in the dark here…?”",
                background: "",
            },
            55: {
                name: "Fin",
                text: "“Oh shoot, yeah. Yeah sure. Sorry about that”",
                background: "",
            },
            56: {
                name: "Fin",
                text: "“I'm Fin the Human”",
                background: "",
            },
            57: {
                name: "Jake",
                text: "“I'm Jake the Dog”",
                background: "",
            },
            58: {
                name: "Fin",
                text: "“The little robot that left through the window is BMO”",
                background: "",
            },
            59: {
                name: "Fin",
                text: "“Um, who else…”",
                background: "",
            },
            60: {
                name: "Fin",
                text: "“Oh. PB is Princess Bubblegum if you didn't get it by now”",
                background: "",
            },
            61: {
                name: "Jake",
                text: "“Don't forget about Ice King”",
                background: "",
            },
            62: {
                name: "Fin",
                text: "“Oh yeah. Ice King. He's… how do I put it… a bit off… Long story short, he's annoying in this state but deep down he's a nice guy.”",
                background: "",
            },
            63: {
                name: "Andy",
                text: "“Noted… is he a bad guy…?”",
                background: "",
            },
            64: {
                name: "Fin",
                text: "“Well technically yes”",
                background: "",
            },
            65: {
                name: "Andy",
                text: "“Okay”",
                background: "",
            },
            66: {
                name: "Narrator",
                text: "You three go outside.",
                background: "",
            },
            67: {
                name: "Andy",
                text: "“Do we have to walk… I don't see any sort of kingdom from here”",
                background: "",
            },
            68: {
                name: "Andy",
                text: "“Isn't it going to be far too…”",
                background: "",
            },
            69: {
                name: "Jake",
                text: "“Don't worry, I'm a magical dog. I can grow and shrink any part of my body”",
                background: "",
            },
            70: {
                name: "Narrator",
                text: "You see Jake grow really large and fall to the ground.",
                background: "",
            },
            71: {
                name: "Andy",
                text: "“Woah, you were not kidding”",
                background: "",
            },
            72: {
                name: "Narrator",
                text: "Jake picks up you and Fin then takes off to the Candy Kingdom.",
                background: "",
            },
            73: {
                name: "Narrator",
                text: "You arrive at the entrance and see two large gumball machines. They look almost like guards with their spears.",
                background: "",
            },
            74: {
                name: "Narrator",
                text: "Jake stretches and now you guys are inside the palace.",
                background: "",
            },
            75: {
                name: "Andy",
                text: "“Hey look, it's the Ice King”",
                background: "",
            },
            76: {
                name: "Narrator",
                text: "The Ice King is in a cage…",
                background: "",
            },
            
            redirectLink: "decide-if-you-slap-ik.html"
        },
        adventureTimeWheresTheTrouble: {
            1: {
                name: "Fin",
                text: "“No…? I've been doing that my whole life”",
                background: "",
            },
            2: {
                name: "Andy",
                text: "“Time to give it up… come on… let it go”",
                background: "",
            },
            3: {
                name: "Fin",
                text: "“No. I won't. You can't make me”",
                background: "",
            },
            4: {
                name: "Andy",
                text: "“I don't need to make you. I just need you to tell me where the danger is”",
                background: "",
            },
            5: {
                name: "Fin",
                text: "“How about I kick you out and you find trouble on your own”",
                background: "",
            },
            6: {
                name: "Andy",
                text: "“Sure, why not? I've been doing this for 3 universes now… what's one more”",
                background: "",
            },
            7: {
                name: "Narrator",
                text: "You get kicked outside by Fin and are greeted by a giant slug.",
                background: "",
            },
            8: {
                name: "Andy",
                text: "“Alright… what do I have to take you on…”",
                background: "",
            },
            9: {
                name: "Narrator",
                text: "You open your backpack.",
                background: "",
            },
            10: {
                name: "Narrator",
                text: "You see the slug approaching you.",
                background: "",
            },
            11: {
                name: "Narrator",
                text: "The slug does not seem to be slowing down.",
                background: "",
            },
            12: {
                name: "Narrator",
                text: "The slug is now on top of you, crushing your body.",
                background: "",
            },
            13: {
                name: "Narrator",
                text: "Game Over",
                background: "",
            },
            
            redirectLink: "game-over.html"
        },

        adventureTimeDecideIfSlapIK: {
            1: {
                name: "Narrator",
                background: "",
                text: {
                    dialog: "you don't slap The Ice King",
                    dialog2: "you walk in his direction and slap The Ice King",
                }
            },
        },
        adventureTimeDontSlapIK: {
            1: {
                name: "Fin",
                text: "“PB, you’ve got to help us, Andy’s stuck until we defeat the final boss”",
                background: "",
            },
            2: {
                name: "Princess Bubblegum",
                text: "“Final boss…? What, does this look like a game to you?”",
                background: "",
            },
            3: {
                name: "Fin",
                text: "“He's a right princess. He needs our help”",
                background: "",
            },
            4: {
                name: "Princess Bubblegum",
                text: "“I don't know about this guy”",
                background: "",
            },
            5: {
                name: "Fin",
                text: "“Please princess… he's here to help also… you know… with that issue…”",
                background: "",
            },
            6: {
                name: "Princess Bubblegum",
                text: "“What issue… OH right yeah yeah yeah. I remember now”",
                background: "",
            },
            7: {
                name: "Andy",
                text: "“Sorry to interrupt but why is the Ice King in jail?”",
                background: "",
            },
            8: {
                name: "Princess Bubblegum",
                text: "“Ice King is in Jail because one of his penguins stole one of my swords”",
                background: "",
            },
            9: {
                name: "Ice King",
                text: "“Then arrest him, not me”",
                background: "",
            },
            10: {
                name: "Princess Bubblegum",
                text: "“Oh yeah huh… well too late”",
                background: "",
            },
            11: {
                name: "Princess Bubblegum",
                text: "“Anyways, this isn't your guy”",
                background: "",
            },
            12: {
                name: "Princess Bubblegum",
                text: "“Wait, what's your name?”",
                background: "",
            },
            13: {
                name: "Andy",
                text: "“Andy… it's been a crazy day…? Week…? I'm not too sure anymore”",
                background: "",
            },
            14: {
                name: "Andy",
                text: "“I got transported to 3 other universes before this one and let me tell you it hasn't been fun…”",
                background: "",
            },
            15: {
                name: "Andy",
                text: "“I wonder if people are looking for me back at home…”",
                background: "",
            },
            16: {
                name: "Narrator",
                text: "*I wouldn't if I were anybody back home*",
                background: "",
            },
            17: {
                name: "Narrator",
                text: "*crickets*",
                background: "",
            },
            
            redirectLink: "random-snail.html"
        },
        adventureTimeSlapIK: {
            1: {
                name: "Ice King",
                text: "“What was that for?”",
                background: "",
            },
            2: {
                name: "Andy",
                text: "“You're a bad guy and you deserve it”",
                background: "",
            },
            3: {
                name: "Jake",
                text: "“Not cool man, he was just hanging out”",
                background: "",
            },
            4: {
                name: "Andy",
                text: "“Yeah but-”",
                background: "",
            },
            5: {
                name: "Princess Bubblegum",
                text: "“You come into my castle and you slap one of my prisoners?”",
                background: "",
            },
            6: {
                name: "Andy",
                text: "“Well I was told that he was an issue”",
                background: "",
            },
            7: {
                name: "Fin",
                text: "“Not what we meant man”",
                background: "",
            },
            8: {
                name: "Andy",
                text: "“Regardless, I need to defeat the bad guy to get back home”",
                background: "",
            },
            9: {
                name: "Princess Bubblegum",
                text: "“I had a feeling something like this was to happen”",
                background: "",
            },
            10: {
                name: "Princess Bubblegum",
                text: "“...”",
                background: "",
            },
            11: {
                name: "Princess Bubblegum",
                text: "“And on my day off too!”",
                background: "",
            },
            12: {
                name: "Fin",
                text: "“Hehe sorry”",
                background: "",
            },
            13: {
                name: "Jake",
                text: "“Sorry about that, princess”",
                background: "",
            },
            14: {
                name: "Narrator",
                text: "*You see the little robot climb through the castle window and it looks like he's carrying something*",
                background: "",
            },
            15: {
                name: "BMO",
                text: "“BMO brought help”",
                background: "",
            },
            16: {
                name: "Narrator",
                text: "*BMO brought hot dogs*",
                background: "",
            },
            17: {
                name: "Andy",
                text: "“How are they supposed to help us…?”",
                background: "",
            },
            18: {
                name: "Fin",
                text: "“BMO! No, you weren't supposed to bring them”",
                background: "",
            },
            19: {
                name: "Jake",
                text: "“Bad BMO. Take the hot dogs back… they are supposed to be guarding hot dog princess”",
                background: "",
            },
            20: {
                name: "Andy",
                text: "“Hot dog princess…?”",
                background: "",
            },
            21: {
                name: "Princess Bubblegum",
                text: "“Yes and what about her? Got a problem?”",
                background: "",
            },
            22: {
                name: "Andy",
                text: "“No no no ma'am”",
                background: "",
            },
            23: {
                name: "Princess Bubblegum",
                text: "“Good”",
                background: "",
            },
            24: {
                name: "Narrator",
                text: "*You see BMO climb the wall and out the window he goes*",
                background: "",
            },
            25: {
                name: "Andy",
                text: "“So… why couldn't it be the Ice King that would be the final boss?”",
                background: "",
            },
            26: {
                name: "Princess Bubblegum",
                text: "“For starters… he's been here for the past 3 days and I have 24/7 cameras on him”",
                background: "",
            },
            27: {
                name: "Ice King",
                text: "“Oooo so even-”",
                background: "",
            },
            28: {
                name: "Narrator",
                text: "*You see Princess Bubblegum hit his cage*",
                background: "",
            },
            29: {
                name: "Princess Bubblegum",
                text: "“I also know when he does bad things or has encounters with bad people, I run tests on him so it couldn't be him. As far as this conversation goes, he's innocent”",
                background: "",
            },
            
            redirectLink: "random-snail.html"
        },

        adventureTimeRandomeSnail: {
            1: {
                name: "Narrator",
                text: "*A random little snail shows up in the middle of the room*",
                background: "",
            },
            2: {
                name: "Narrator",
                text: "*It looks like the group hasn't noticed it just yet…*",
                background: "",
            },
            3: {
                name: "Andy",
                text: "“Hey… you guys… do you see this…?”",
                background: "",
            },
            4: {
                name: "Jake",
                text: "“The little snail? Yeah, what about him?”",
                background: "",
            },
            5: {
                name: "Fin",
                text: "“Aw how cute”",
                background: "",
            },
            6: {
                name: "Fin",
                text: "“Oh wait, we've seen this little guy before, he's not evil”",
                background: "",
            },
            7: {
                name: "Narrator",
                text: "*You see Fin wave to the snail*",
                background: "",
            },
            8: {
                name: "Narrator",
                text: "*The little snail waves back*",
                background: "",
            },
            9: {
                name: "Andy",
                text: "“Is it just me or does it have a little sign that reads ‘EVIL’?”",
                background: "",
            },
            10: {
                name: "Marceline",
                text: "“Welcome to the land of Ooo”",
                background: "",
            },
            11: {
                name: "Princess Bubblegum",
                text: "“Ahhh… Marceline, how many times have I told you to use the front door like a nominal person…?”",
                background: "",
            },
            12: {
                name: "Marceline",
                text: "“Many but what about it…?”",
                background: "",
            },
            13: {
                name: "Marceline",
                text: "“So it looks like the little snail dude's possessed with something. I mean look at its eyes”",
                background: "",
            },
            14: {
                name: "Andy",
                text: "“Yeah, I had a feeling something was not right… What if this is the final boss…? I should step on it”",
                background: "",
            },
            15: {
                name: "Jake",
                text: "“Woah woah woah”",
                background: "",
            },
            16: {
                name: "Narrator",
                text: "*Jake pulls you away from the snail*",
                background: "",
            },
            17: {
                name: "Jake",
                text: "“Don't just step on it just because you don't know what it's about… what if it could be useful to us somehow?”",
                background: "",
            },
            18: {
                name: "Andy",
                text: "“Yeah, I guess you’re right… sorry”",
                background: "",
            },
            19: {
                name: "Marceline",
                text: "“Hey, here's a thought”",
                background: "",
            },
            20: {
                name: "Marceline",
                text: "“Why don't we follow it?”",
                background: "",
            },
            21: {
                name: "Princess Bubblegum",
                text: "“Great idea. Let's go do that”",
                background: "",
            },
            22: {
                name: "Narrator",
                text: "*The snail doesn't move for a little… then it begins*",
                background: "",
            },
            23: {
                name: "Narrator",
                text: "*You watch the snail move for 5 minutes before realizing you haven't made any progress because it's just so slow*",
                background: "",
            },
            24: {
                name: "Princess Bubblegum",
                text: "“UGH”",
                background: "",
            },
            25: {
                name: "Princess Bubblegum",
                text: "“This is taking forever… can't anything ever just go fast in here…”",
                background: "",
            },
            26: {
                name: "Princess Bubblegum",
                text: "“Oh wait hahaha it can”",
                background: "",
            },
            27: {
                name: "Narrator",
                text: "*You see Princess Bubblegum rush out of the room and come back with some sort of remote*",
                background: "",
            },
            28: {
                name: "Princess Bubblegum",
                text: "“And go fast sucka”",
                background: "",
            },
            29: {
                name: "Narrator",
                text: "*She points the remote at the snail and it takes off*",
                background: "",
            },
            30: {
                name: "Jake",
                text: "“Woah now that's what I'm talking about”",
                background: "",
            },
            31: {
                name: "Narrator",
                text: "*Jake stretches outside then grabs everybody*",
                background: "",
            },
            32: {
                name: "Narrator",
                text: "*Jake was able to catch up to the snail… now they are in a cave*",
                background: "",
            },
            33: {
                name: "Jake",
                text: "“Man… i… am never… doing that… again….. AHH”",
                background: "",
            },
            34: {
                name: "Jake",
                text: "“Nah just kidding”",
                background: "",
            },
            35: {
                name: "Jake",
                text: "“I'm magic baby”",
                background: "",
            },
            36: {
                name: "Narrator",
                text: "*There are 2 others in the cave besides your party and the snail*",
                background: "",
            },
            37: {
                name: "Princess Bubblegum",
                text: "“Peppermint Butler, what are you doing in here?”",
                background: "",
            },
            38: {
                name: "Peppermint Butler",
                text: "“I'm running tests on Billy ma’am”",
                background: "",
            },
            39: {
                name: "Princess Bubblegum",
                text: "“Why?”",
                background: "",
            },
            40: {
                name: "Peppermint Butler",
                text: "“Well look at him… he's old and has 6 working fingers… he's rich… when I die. I want to get reincarnated as him.”",
                background: "",
            },
            41: {
                name: "Peppermint Butler",
                text: "“I'll do everything I can to make that become a reality”",
                background: "",
            },
            42: {
                name: "Princess Bubblegum",
                text: "“Well I would be lying if I said that's not cool”",
                background: "",
            },
            43: {
                name: "Peppermint Butler",
                text: "“Apart from wanting to be reincarnated as Billy ma’am, that is not Billy…”",
                background: "",
            },
            44: {
                name: "Princess Bubblegum",
                text: "“Whatchu mean?”",
                background: "",
            },
            45: {
                name: "Peppermint Butler",
                text: "“The real reason I've been running tests on him is because I have a hunch he isn't really who we think he is”",
                background: "",
            },
            46: {
                name: "Jake",
                text: "“HA your crazy man. There's no way that isn't Billy”",
                background: "",
            },
            47: {
                name: "Fin",
                text: "“Yeah Peppermint Butler, I hate to tell you but we’ve been on a lot of adventures together… we know and look up to him.”",
                background: "",
            },
            48: {
                name: "Fin",
                text: "“Let us decide if it's the real Billy or not”",
                background: "",
            },
            49: {
                name: "Narrator",
                text: "*You, Jake, and Fin get closer to the large figure…*",
                background: "",
            },
            50: {
                name: "Billy",
                text: "“I haven’t seen something like this in the past couple of centuries”",
                background: "",
            },
            51: {
                name: "Fin",
                text: "“BILLY!!!!”",
                background: "",
            },
            52: {
                name: "Fin",
                text: "“Long time no see right?”",
                background: "",
            },
            53: {
                name: "Fin",
                text: "“How have you been?”",
                background: "",
            },
            54: {
                name: "Jake",
                text: "“Yeah Billy, how have you been-”",
                background: "",
            },
            55: {
                name: "Jake",
                text: "“Ummm hey Billy… you kinda got a little… ummm…”",
                background: "",
            },
            56: {
                name: "Narrator",
                text: "*You hear noise coming from behind you and it's BMO. He ended up running all this way just to be a part of the adventure.*",
                background: "",
            },
            57: {
                name: "BMO",
                text: "“AHHHHH BILLY. WHAT HAPPENED TO YOU!!!”",
                background: "",
            },
            58: {
                name: "Narrator",
                text: "*You take a few steps back because you know that THIS is the final boss that you have to defeat*",
                background: "",
            },
            59: {
                name: "Billy",
                text: "“Whatever do you mean…? It is me… Billy…”",
                background: "",
            },
            60: {
                name: "Fin",
                text: "“No… you're not the Billy I know”",
                background: "",
            },
            61: {
                name: "Billy",
                text: "“Child. Listen to me. Hear my voice. Look at me. I am Billy. Super strong, super old…”",
                background: "",
            },
            62: {
                name: "BMO",
                text: "“You are a bad guy Billy”",
                background: "",
            },
            63: {
                name: "Billy",
                text: "“I've about just had it with this universe anyway”",
                background: "",
            },
            64: {
                name: "Narrator",
                text: "*Billy stands up and starts approaching you…*",
                background: "",
            },
            redirectLink: "billy-aproaches-you.html"
        },

        adventureTimeIfPlayerHasFlashlight: {
            1: {
                name: "Narrator",
                text: "*Big battle incoming*",
                background: "",
            },
            2: {
                name: "Narrator",
                text: "*You remember the shrink/grow flashlight*",
                background: "",
            },
            3: {
                name: "Andy",
                text: "“Take this!”",
                background: "",
            },
            4: {
                name: "Narrator",
                text: "*The flashlight does not affect Billy*",
                background: "",
            },
            5: {
                name: "Andy",
                text: "“Huh… what… what gives…?”",
                background: "",
            },
            6: {
                name: "Billy",
                text: "“Ha you fool. I am immune to magic”",
                background: "",
            },
            7: {
                name: "Princess Bubblegum",
                text: "“Everything I have is related to magic you doke”",
                background: "",
            },
            8: {
                name: "Peppermint Butler",
                text: "“I have. Nothing of use”",
                background: "",
            },
            9: {
                name: "Narrator",
                text: "*You think and think and finally, you remember that you have a singular Red Skittle*",
                background: "",
            },
            10: {
                name: "Andy",
                text: "“Take that”",
                background: "",
            },
            11: {
                name: "Narrator",
                text: "*You throw the red skittle into Billy’s beard*",
                background: "",
            },
            12: {
                name: "Billy",
                text: "“Is that supposed to be a late-night snack for me later?”",
                background: "",
            },
            13: {
                name: "Narrator",
                text: "*While you were too busy thinking of something clever, Billy threw a rock at your stomach*",
                background: "",
            },
            14: {
                name: "Narrator",
                text: "*Health bar 75% -> 50%*",
                background: "",
            },
            15: {
                name: "Andy",
                text: "“Yup… that's going to leave a mark for sure…”",
                background: "",
            },
            16: {
                name: "Narrator",
                text: "*You flip the crystal on the flashlight going from shrinking to grow*",
                background: "",
            },
            17: {
                name: "Andy",
                text: "“Let's see you survive this”",
                background: "",
            },
            18: {
                name: "Narrator",
                text: "*You use the flashlight on the Red Skittle in Billy's beard and it grows and grows and grows…*",
                background: "",
            },
            19: {
                name: "Narrator",
                text: "*You crushed Billy with a Red M&M*",
                background: "",
            },
            redirectLink: "uses-regin-potion.html"
        },
        adventureTimeIfPlayerDoesentHaveFlashlight: {
            1: {
                name: "Narrator",
                text: "*Big battle incoming*",
                background: "",
            },
            2: {
                name: "Marceline",
                text: "“Hey you know what? I bet my dad could take him on for us”",
                background: "",
            },
            3: {
                name: "Princess Bubblegum",
                text: "“Oh yeah that's right… aw but we don't have a gallon of milk to summon him”",
                background: "",
            },
            4: {
                name: "Andy",
                text: "“I do”",
                background: "",
            },
            5: {
                name: "Marceline",
                text: "“You just so happened to carry a gallon of milk on you at all times?”",
                background: "",
            },
            6: {
                name: "Andy",
                text: "“Well usually less than that but yeah, I more or less always have milk on hand. You can never be too safe ya know”",
                background: "",
            },
            7: {
                name: "Fin",
                text: "“Great… here take this and get drawing, remember his name is Hunson Abadeer”",
                background: "",
            },
            8: {
                name: "Narrator",
                text: "*Fin gives you a convenient stick*",
                background: "",
            },
            9: {
                name: "Andy",
                text: "“Ummm what am I drawing…?”",
                background: "",
            },
        //remember, the end path should be a choice of 3 images (check the doc)  
            redirectLink: "choose-a-face.html" 
        },

        adventureTimeUserSelectsCorrectFace: {
            1: {
                name: "Jake",
                text: "“Great! Now hurry and splash that thing with milk”",
                background: "",
            },
            redirectLink: "takes-out-milk.html" 
        },
        adventureTimeUserSelectsWrongFace: {
            1: {
                name: "Jake",
                text: "Ummm that doesn't look like the right one…",
                background: ""
            },
            2: {
                name: "Billy",
                text: "Times up",
                background: ""
            },
            3: {
                name: "Narrator",
                text: "Billy ended up winning in the end, and you never made it home… all thanks to you now knowing which is the proper face",
                background: ""
            },
            4: {
                name: "Narrator",
                text: "Game Over",
                background: ""
            },
            
            redirectLink: "game-over.html" 
        },

        adventureTimeAndyTakesOutAllHisMilk: {
            1: {
                name: "Narrator",
                text: "You open your backpack and begin throwing milk at the face you drew on the ground, one by one",
                background: "",
            },
            2: {
                name: "Narrator",
                text: "*In the middle of your task, you accidentally prick yourself with a Sharpened #2 Pencil*",
                background: "",
            },
            3: {
                name: "Narrator",
                text: "*Health bar drops to 50%*",
                background: "",
            },
            4: {
                name: "Fin",
                text: "“Fin yells out the incantation”",
                background: "",
            },
            5: {
                name: "Narrator",
                text: "The face splits open and something emerges from it",
                background: "",
            },
            6: {
                name: "Hunson Abadeer",
                text: "“Hey hey hey yall how's it goin?”",
                background: "",
            },
            7: {
                name: "Hunson Abadeer",
                text: "“WOAH. You guys are in trouble that's for sure”",
                background: "",
            },
            redirectLink: "abadeer-options.html" 
        },

        adventureTimeAbadeerOptions: {
            1: {
                name: "Narrator",
                background: "",
                text: {
                    dialog: "Befriend Abadeer",
                    dialog2: "Treat Abadeer like a Pokemon",
                }
            },
        },
        adventureTimeBefriendsAbadeer: {
            1: {
                name: "Andy",
                text: "Woah… how'd you do that?",
                background: "",
            },
            2: {
                name: "Hunson Abadeer",
                text: "Do what? Become the ruler of the Nightosphere?",
                background: "",
            },
            3: {
                name: "Hunson Abadeer",
                text: "Simple… all I had to do was sell my soul…",
                background: "",
            },
            4: {
                name: "Hunson Abadeer",
                text: "Want in?",
                background: "",
            },
            5: {
                name: "Andy",
                text: "Definitely. But before that, can you help me out quick",
                background: "",
            },
            6: {
                name: "Hunson Abadeer",
                text: "Sure thing, I've got some time to kill",
                background: "",
            },
            7: {
                name: "Andy",
                text: "You see that person there",
                background: "",
            },
            8: {
                name: "Hunson Abadeer",
                text: "Oh Billy? Yeah what about him",
                background: "",
            },
            9: {
                name: "Andy",
                text: "Can you destroy him for me?",
                background: "",
            },
            10: {
                name: "Hunson Abadeer",
                text: "I don't see why not",
                background: "",
            },
            11: {
                name: "Hunson Abadeer",
                text: "Stand back, I got this",
                background: "",
            },
            12: {
                name: "Narrator",
                text: "Billy is no longer moving or breathing… Do you think that did the trick?",
                background: "",
            },
            13: {
                name: "Andy",
                text: "Alright well thanks for that, I'll visit you in about 20 minutes for my soul. You ok with that…?",
                background: "",
            },
            14: {
                name: "Hunson Abadeer",
                text: "Yeah yeah yeah for sure. I have no problem with that at all",
                background: "",
            },
            15: {
                name: "Hunson Abadeer",
                text: "Alright well cya wouldn't wanna be ya",
                background: "",
            },
            16: {
                name: "Narrator",
                text: "Hunson Abadeer vanishes into thin air",
                background: "",
            },
            redirectLink: "uses-regin-potion.html"
        },
        adventureTimeTreatsAbadeerLikeAPokeymon: {
            1: {
                name: "Andy",
                text: "ATTACK!!!!!",
                background: "",
            },
            2: {
                name: "Hunson Abadeer",
                text: "Woah there kid… I don't just get summoned to do others dirty work what's this all about?",
                background: "",
            },
            3: {
                name: "Andy",
                text: "HUNSON ABADEER I CHOOSE YOU… USE FIREBALL",
                background: "",
            },
            4: {
                name: "Hunson Abadeer",
                text: "Fireball…? Really?",
                background: "",
            },
            5: {
                name: "Hunson Abadeer",
                text: "Listen kid you better quit it before I get annoyed",
                background: "",
            },
            6: {
                name: "Andy",
                text: "I SAID ATTACK!!!!",
                background: "",
            },
            7: {
                name: "Hunson Abadeer",
                text: "Got it",
                background: "",
            },
            8: {
                name: "Narrator",
                text: "Hunson Abadeer mistakes you for the bad guy and lights you on fire.",
                background: "",
            },
            9: {
                name: "Narrator",
                text: "Game Over",
                background: "",
            },
            redirectLink: "game-over.html"
        },

        adventureTimeShouldUseReginPower: {
            1: {
                name: "Andy",
                text: "Man I should really use that regain power",
                background: "",
            },
            2: {
                name: "Narrator",
                text: "You grunt for a while, trying to get the power to work",
                background: "",
            },
            3: {
                name: "Andy",
                text: "AGH",
                background: "",
            },
            4: {
                name: "Peppermint Butler",
                text: "I didn't do anything",
                background: "",
            },
            5: {
                name: "Andy",
                text: "What did you just do?",
                background: "",
            },
            6: {
                name: "Peppermint Butler",
                text: "You must be seeing things, man. I haven't done anything",
                background: "",
            },
            7: {
                name: "Andy",
                text: "Alright…",
                background: "",
            },
            8: {
                name: "Narrator",
                text: "You start to feel fully energized as if nothing had happened\n(Health bar 50% -> 100%)",
                background: "",
            },
            9: {
                name: "Andy",
                text: "Ha I knew I could do it",
                background: "",
            },
            10: {
                name: "Peppermint Butler",
                text: "Yup…totally",
                background: "",
            },
            11: {
                name: "Narrator",
                text: "You hear yelling in the distance",
                background: "",
            },
            12: {
                name: "Billy",
                text: "AH HAHAHAHA\nWell well well young champ. Looks like you have what it takes after all\nMay the best magic user win…",
                background: "",
            },
            13: {
                name: "Narrator",
                text: "You see Billy peel off his skin\nEveryone in your party is disgusted",
                background: "",
            },
            14: {
                name: "Jake",
                text: "Dude… bleh",
                background: "",
            },
            15: {
                name: "Narrator",
                text: "Jake threw up on Peppermint Butler",
                background: "",
            },
            16: {
                name: "Lich",
                text: "Much better",
                background: "",
            },
            17: {
                name: "Andy",
                text: "Woah… what are you",
                background: "",
            },
            18: {
                name: "Lich",
                text: "I am someone who's trying to end all life and everything in one go so if you excuse me",
                background: "",
            },
            19: {
                name: "Narrator",
                text: "The Lich jumps straight through the mountain",
                background: "",
            },
            20: {
                name: "Jake",
                text: "Everybody get on",
                background: "",
            },
            21: {
                name: "Narrator",
                text: "Your party all gets on Jake as he gets big",
                background: "",
            },
            22: {
                name: "Jake",
                text: "Follows the Lich and realizes he is headed straight for the Candy Kingdom",
                background: "",
            },
            23: {
                name: "Andy",
                text: "What does he want to do there…?",
                background: "",
            },
            24: {
                name: "Princess Bubblegum",
                text: "No… no not the artifact",
                background: "",
            },
            25: {
                name: "Andy",
                text: "What artifact?",
                background: "",
            },
            26: {
                name: "Fin",
                text: "Yeah what artifact princess?",
                background: "",
            },
            27: {
                name: "Princess Bubblegum",
                text: "So this is a big my b guys but I kinda forgot about the artifact that was planted in my room until right now",
                background: "",
            },
            28: {
                name: "Princess Bubblegum",
                text: "I was so distracted I forgot about it",
                background: "",
            },
            29: {
                name: "Princess Bubblegum",
                text: "I had Peppermint Butler run some tests on it and it was the Lich’s doing",
                background: "",
            },
            30: {
                name: "Fin",
                text: "YOU NEVER TOOK IT OUT",
                background: "",
            },
            31: {
                name: "Princess Bubblegum",
                text: "I SAID I FORGOT… geez",
                background: "",
            },
            32: {
                name: "Narrator",
                text: "At the castle…",
                background: "",
            },
            33: {
                name: "Ice King",
                text: "What up y'all came back to party with Simon?",
                background: "",
            },
            34: {
                name: "Narrator",
                text: "Everybody ignores him, including you\nIce King's feelings get hurt :(",
                background: "",
            },
            35: {
                name: "Princess Bubblegum",
                text: "Follow me… this way",
                background: "",
            },
            36: {
                name: "Narrator",
                text: "You are all in Princess Bubblegum's room and see the Lich fighting off hundreds of Banana Guards",
                background: "",
            },
            37: {
                name: "Lich",
                text: "You guys don't stop, do you? No matter, I'm in no rush to end the Multiverse",
                background: "",
            },
            redirectLink: "annoy-the-lich.html"
        },

        adventureTimeForcedIfUserHasGrapplingHook: {
            1: {
                name: "Narrator",
                text: "you decide to take out your grappling hook and aim it at the lich to stop him from attacking anymore",
                background: "",
            },
            redirectLink: "fight-in-pb-room.html"
        },
        adventureTimeForcedIfUserDosentHaveGrabblingHook: {
            1: {
                name: "Narrator",
                text: "You remember that Red Skittle and throw it at the Lich",
                background: "",
            },
            redirectLink: "fight-in-pb-room.html"
        },

        adventureTimeLitchFightInPBRoom: {
            1: {
                name: "Narrator",
                text: "You end up annoying him a little more than anything but at least now you have his attention",
                background: "",
            },
            2: {
                name: "Narrator",
                text: "You look around for anything that could be used as a weapon of some sort",
                background: "",
            },
            3: {
                name: "Princess Bubblegum",
                text: "Don't worry, he's not getting any further… after all, he did decide to bring the fight to my room",
                background: "",
            },
            4: {
                name: "Narrator",
                text: "You see Princess Bubblegum press her nose twice and a giant blob of jello drops from the ceiling.",
                background: "",
            },
            5: {
                name: "Andy",
                text: "Woah… is he stuck in that…?",
                background: "",
            },
            6: {
                name: "Princess Bubblegum",
                text: "Yup, he won't be getting out of there anytime soon after it hardens",
                background: "",
            },
            7: {
                name: "Andy",
                text: "After it hardens…? So he could escape now if he wanted to?",
                background: "",
            },
            8: {
                name: "Princess Bubblegum",
                text: "Well not really, it's a mixture of half jello, and the other half is whatever Peppermint Butler put in it because of his dark magic powers",
                background: "",
            },
            9: {
                name: "Princess Bubblegum",
                text: "It's dark magic jello",
                background: "",
            },
            10: {
                name: "Narrator",
                text: "You see Peppermint Butler get in front of the crowd and say some sort of incantation…\nThis turned the blob of jello into a cube of black",
                background: "",
            },
            11: {
                name: "Peppermint Butler",
                text: "There. The Lich is no more… he's done for good",
                background: "",
            },
            12: {
                name: "Narrator",
                text: "Everyone starts celebrating and jumping when suddenly\nCrunch",
                background: "",
            },
            13: {
                name: "Jake",
                text: "I didn’t mean to do that",
                background: "",
            },
            14: {
                name: "Narrator",
                text: "You see the spirit fly into the sky and only assume that nothing will come of it",
                background: "",
            },
            15: {
                name: "Narrator",
                text: "Everyone celebrates for real this time",
                background: "",
            },
            16: {
                name: "Andy",
                text: "Ok ok. Now I think it's a pretty good time for me to head home… but wait… wasn't the artifact inside that blob with the Lich?",
                background: "",
            },
            17: {
                name: "Princess Bubblegum",
                text: "Normally, yes but because I took the precautions to make sure it moves… it's not",
                background: "",
            },
            18: {
                name: "Princess Bubblegum",
                text: "Right there",
                background: "",
            },
            19: {
                name: "Narrator",
                text: "She points to it in the corner of her room",
                background: "",
            },
            20: {
                name: "Andy",
                text: "Didn't you say you forgot about it?",
                background: "",
            },
            21: {
                name: "Princess Bubblegum",
                text: "Yeah but that was only because I knew the Lich could have been reading my mind",
                background: "",
            },
            22: {
                name: "Princess Bubblegum",
                text: "If it was, and I openly said where the real one was hiding, we would all be done for",
                background: "",
            },
            23: {
                name: "Princess Bubblegum",
                text: "You're welcome",
                background: "",
            },
            24: {
                name: "Andy",
                text: "Well everyone… I'm off now cya",
                background: "",
            },
            25: {
                name: "Narrator",
                text: "They all wave to you as you touch the artifact",
                background: "",
            }, 
            redirectLink: "adventure-time-ending.html"
        },



        adventureTimeForcedEndingIfHasFlashlight: {
            1: {
                name: "Narrator",
                text: "You teleport back outside where you picked up the first artifact. You look around to see if anything has changed in the world. Everything looks the same as how you left it.",
                background: "",
            },
            2: {
                name: "Narrator",
                text: "You realize you still need to go to school and go to your first-period class (Stats). You have a math test (worth 80% of your grade) and your teacher (Mr. Hankey) asks the class to bring out their calculators.",
                background: "",
            },
            3: {
                name: "Narrator",
                text: "You search through your bag trying to find the Ti 84 calculator. You end up touching what feels like the calculator, you bring out the flashlight Dipper gave you.",
                background: "",
            },
            4: {
                name: "Mr. Hankey",
                text: "Where are your materials?",
                background: "",
            },
            5: {
                name: "Andy",
                text: "I got this!",
                background: "",
            },
            6: {
                name: "Narrator",
                text: "You begin to read the math problems. You use reading skills, do the mental math, and BARELY fail the test.",
                background: "",
            },
            7: {
                name: "Student",
                text: "Haha, you failed again, you're so dumb!",
                background: "",
            },
            8: {
                name: "Andy",
                text: "I only failed because I was too busy enjoying life, alright?",
                background: "",
            },
            9: {
                name: "Mr. Hankey",
                text: "That's it, you're getting detention for the rest of the school year for failing the test.",
                background: "",
            },
            10: {
                name: "Narrator",
                text: "And so, you find yourself with a year-long detention, but at least you survived another bizarre day.",
                background: "",
            },
            redirectLink: "../ending-for-path1.html"
        },
        adventureTimeForcedENdingIfNoFlashlight: {
            1: {
                name: "Narrator",
                text: "Andy teleports outside where he first found the original artifact and realizes school is still in session. He checks things out and realizes it's lunch.",
                background: "",
            },
            2: {
                name: "Narrator",
                text: "Eager, Andy gets his food, pays, and sits down by himself (because who would hang out with someone who drinks a gallon of milk a day with school lunch?).",
                background: "",
            },
            3: {
                name: "Narrator",
                text: "Andy opens his backpack and is ready to down those 16 cartons of WHITE milk after a long day... but the milk isn't there.",
                background: "",
            },
            4: {
                name: "Andy",
                text: "MY MILK... MY MILK!!!!!!",
                background: "",
            },
            5: {
                name: "Bully",
                text: "Oh no, looks like someone is having a little meltdown. Time for you to be taken down a peg.",
                background: "",
            },
            6: {
                name: "Narrator",
                text: "The bully, a common nuisance among the nerds, shows up and eliminates MC with ease. The end.",
                background: "",
            },
            redirectLink: "../ending-for-path1.html"

        },



        forcedEndingIfHasFlashlight: {
            1: {
                name: "Narrator",
                text: "*You teleport back outside where he picked up the first artifact.",
                background: "",
            },
            2: {
                name: "Narrator",
                text: "*You look around to see if anything has changed in the world. Everything looks the same as how you left it.",
                background: "",
            },
            3: {
                name: "Narrator",
                text: "*You realize you still need to go to school and go to your first-period class (Stats).",
                background: "",
            },
            4: {
                name: "Narrator",
                text: "*You have a math test (worth 80% of your grade) and your teacher asks the class to bring out their calculators.",
                background: "",
            },
            5: {
                name: "Narrator",
                text: "*You search through your bag trying to find the Ti 84 calculator.",
                background: "",
            },
            6: {
                name: "Narrator",
                text: "*You end up touching what feels like the calculator, you bring out the flashlight Dipper gave you.",
                background: "",
            },
            7: {
                name: "Narrator",
                text: "*The teacher asks where your materials are.",
                background: "",
            },
            8: {
                name: "Narrator",
                text: "*You say out loud 'I got this!' and begin to read the math problems.",
                background: "",
            },
            9: {
                name: "Narrator",
                text: "*You use reading skills, do the mental math, and BARELY fail the test.",
                background: "",
            },
            10: {
                name: "Narrator",
                text: "*Another student makes fun of you saying how dumb you are for failing the test.",
                background: "",
            },
            11: {
                name: "Narrator",
                text: "*You defend yourself and tell them that you only failed because you were too busy enjoying life.",
                background: "",
            },
            12: {
                name: "Narrator",
                text: "*The teacher gave you detention for the rest of the school year for failing the math test.",
                background: "",
            },
            redirectLink: "credits.html"
        },
        forcedEndingIfDoesNotHaveFlashlight: {
            1: {
                name: "Narrator",
                text: "*Andy teleported outside where he first found the original artifact and realized school was still in session.",
                background: "",
            },
            2: {
                name: "Narrator",
                text: "*Andy checks things out and realizes it's lunch.",
                background: "",
            },
            3: {
                name: "Narrator",
                text: "*Eager, he gets his food, pays, and sits down by himself…",
                background: "",
            },
            4: {
                name: "Narrator",
                text: "*because who would hang out with someone that drinks a gallon of milk a day with school lunch.",
                background: "",
            },
            5: {
                name: "Narrator",
                text: "*Andy opens his backpack and is ready to down those 16 cartons of WHITE milk after a long day...",
                background: "",
            },
            6: {
                name: "Narrator",
                text: "*The milk isn't there... Andy freaks out and makes a scene… 'MY MILK.... MY MILK!!!!!!'",
                background: "",
            },
            7: {
                name: "Narrator",
                text: "*Derik shows up and eliminates MC.",
                background: "",
            },
            8: {
                name: "Narrator",
                text: "*The end.",
                background: "",
            },
            redirectLink: "credits.html"
        },

        TEMPLATE1: {
            1: {
                name: "Andy",
                text: "“As you are walking, you stumble across Gene’s Base then remember that you ran away from this guy“",
                background: "",
            },
            
        redirectLink: "game-over.html"
        },

        TEMPLATE2: {
            1: {
                name: "Narrator",
                background: "",
                text: {
                    dialog: "",
                    dialog2: "",
                }
            },
        
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
