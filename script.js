function dailyBetaScreenshot() {
    const today = new Date().toISOString().split('T')[0];

    console.log("Today's date: " + today);


    if (localStorage.getItem("mainpage_date") !== today) {
        const rand = getRandomInt(1, 28);
        localStorage.setItem("mainpage_date", today);
        localStorage.setItem("mainpage_num", rand);
    }
    const randomNumber = localStorage.getItem("mainpage_num");

    //const randomNumber = getDailyNumber();
    console.log(randomNumber + " - Daily Beta Screenshot");

    if (randomNumber > 24) {
        document.getElementById("betascreenimg").src = "images/betaScreens/gtaiv/betaimgiv" + (randomNumber - 24) + ".webp";
        document.getElementById("betascreenlink").href = "images/betaScreens/gtaiv/betaimgiv" + (randomNumber - 24) + ".webp";
        document.getElementById("betascreentext").innerHTML = "Grand Theft Auto IV";
    } else {
        document.getElementById("betascreenimg").src = "images/betaScreens/gtav/betaimg" + randomNumber + ".webp";
        document.getElementById("betascreenlink").href = "images/betaScreens/gtav/betaimg" + randomNumber + ".webp";
        document.getElementById("betascreentext").innerHTML = "Grand Theft Auto V";
    }
}

function getDailyNumber(min = 1, max = 28) {
    // Get today's date as a string (e.g., "2025-05-30")
    const today = new Date().toISOString().split('T')[0];

    // Create a simple hash from the date string
    let hash = 0;
    for (let i = 0; i < today.length; i++) {
        hash = today.charCodeAt(i) + ((hash << 5) - hash);
    }

    // Use the hash to generate a pseudo-random number in range [min, max]
    const rng = (hash >>> 0) / 0xffffffff; // Convert to positive and normalize
    const number = Math.floor(rng * (max - min + 1)) + min;

    return number;
}
function getRandomInt(min, max) {
    min = Math.ceil(min);   // Round up
    max = Math.floor(max);  // Round down
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
