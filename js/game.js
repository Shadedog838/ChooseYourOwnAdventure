// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    background_image:"https://jooinn.com/images/dark-room-9.jpg",
    music:"Killer Movie Scene-SoundBible.com-208071934.mp3",
    levels: {

        room: {
            message: "You wake up in an empty unknown room. There is only a window and two staircases. Go up, or go down?",

            choices: [
                {
                    text: "Up",
                    nextLevel: "up",
                },

                {
                    text: "Down",
                    nextLevel: "Down",
                },

            ]
        },

        up: {
            message: "Leads to a rooftop with a suspension bridge connected to the next building. Cross or wait at current building?",
            background_image:"https://steemitimages.com/DQmXy1s5NwHsb8faTA3WK4JiudqinJN9y78kVFuHq4ZHHTc/rooftop1.jpg",
            music:"Movie Freaky Scene-SoundBible.com-498428129.mp3",
            choices: [
                {
                    text: "wait",
                    nextLevel: "Wait",
                },
                {
                  text:"Cross",
                  nextLevel:"Cross",
                },
            ]
        },

        Cross: {
            message: "The rooftop looks the same as the last. As you go around the door you see a masked figure. Approch or hide?",
            background_image:"http://infornicle.com/wp-content/uploads/2015/01/rooftop.jpg",
            music:"Eerie Horror Scene-SoundBible.com-153408320.mp3",
            choices: [
                {
                    text: "Approach",
                    nextLevel: "Approach",
                },
                {
                    text:"Hide",
                    nextLevel:"Hide",
                },
            ]
        },
        Approach: {
            message: "As you begin to approach them, they suddently start after you, yielding a knife. Fight or run away?",
            background_image:"https://vignette.wikia.nocookie.net/abandoned-discovery-island-2017-edition/images/0/0b/7374086-a-dangerous-hooded-man-standing-in-the-dark-and-holding-a-shiny-knife-face-can-not-be-seen.jpg/revision/latest?cb=20180730224337",
            music:"Incoming_Suspense-Maximilien_-1060577487.mp3",
            choices: [
                {
                    text:"Fight",
                    nextLevel:"Fight",
                },
                {
                    text:"Run",
                    nextLevel:"Run",
                },
                ]
        },
        Fight:{
            message:"You are overpowered and Killed.",
             background_image:"https://i.ytimg.com/vi/AuhYI1LZ3LI/maxresdefault.jpg",
             music:"Scary Scream-SoundBible.com-1115384336.mp3",
            choices: [
                {
                    text:"Start Over",
                    nextLevel:"room",
                },

                ]

        },
        Run:{
            message:"You are caught and Killed. HA HA",
             background_image:"https://i.ytimg.com/vi/AuhYI1LZ3LI/maxresdefault.jpg",
             music:"Scary Scream-SoundBible.com-1115384336.mp3",
            choices:[
                {
                    text:"Start Over",
                    nextLevel:"room",
                },

                ]
        },
        Down:{
            message:"Dead end. Go back upstairs",
            background_image:"https://images-na.ssl-images-amazon.com/images/I/51VFV3pHfwL._SX466_.jpg",
            choices: [
                {
                    text:"Up",
                    nextLevel:"up",
                },

                ]
            },
        Wait:{
            message:"You hope someone will come and find you so you wait. Night falls and an unknown figure approches you from behind and kills you silently and swiftly.",
            background_image:"https://i.ytimg.com/vi/AuhYI1LZ3LI/maxresdefault.jpg",
            music:"Scary Scream-SoundBible.com-1115384336.mp3",
            choices: [
                {
                    text:"Start Over",
                    nextLevel:"room",
                },

                ]
        },
        Hide:{
            message:"You notice his bloodstained clothes and knife so you decided to hide. While observing you didn't notice a second figure approach you from behind. You are killed",
            background_image:"https://i.ytimg.com/vi/AuhYI1LZ3LI/maxresdefault.jpg",
            music:"Scary Scream-SoundBible.com-1115384336.mp3",
            choices: [
                {
                    text:"Start Over",
                    nextLevel:"room",
                },
                ]
        }
    }
};

