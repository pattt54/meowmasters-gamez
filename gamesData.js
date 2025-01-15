// i suggest you use js for this, its easier. here is a sample from my site


const games = {
    tetris: {
        title: "Twitch Tetris",
        url: "game-template.html?id=tetris",
        originalUrl: "https://emulatoros.github.io/gfile/tetris/index.html",
        image: "images/proxyandgameimages/gameimages/tetris.png",
        description: "You know what this is, a ripoff of Tetris.",
        ratings: [],
        likes: 0,
        dislikes: 0,
    },
    cookieClicker: {
        title: "Cookie Clicker (first method)",
        url: "game-template.html?id=cookieClicker",//there are different ways to do this, but doing it this way reduces code. 
        originalUrl: "https://ozh.github.io/cookieclicker/", //putting game stuff here is good becuase it saves space
        image: "images/proxyandgameimages/gameimages/cookie.jpeg",
        description: "Won't be blocked if it's on GitHub! (this one click link to the game)",
        controls: `
        Cookie clicker hacks and cheats here: <br>
        <a href="../hacks.html#cookie-clicker">Cookie Clicker Hacks</a>
        `,//can be used for controls
       /* ratings: [],
        likes: 0,
        dislikes: 0,
        */ //not needed, for my site its gonna be a feature
    },
