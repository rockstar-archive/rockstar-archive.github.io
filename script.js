function dailyBetaScreenshot() {
    const today = new Date().toISOString().split('T')[0];

    console.log("Today's date: " + today);


    if (localStorage.getItem("mainpage_date") !== today) {
        const rand = getRandomInt(1, 39);
        localStorage.setItem("mainpage_date", today);
        localStorage.setItem("mainpage_num", rand);
    }
    const randomNumber = localStorage.getItem("mainpage_num");

    //const randomNumber = getDailyNumber();
    console.log(randomNumber + " - Daily Beta Screenshot");

    
    if (randomNumber > 28) {
        document.getElementById("betascreenimg").src = "images/betaScreens/gta3/betaimgiii" + (randomNumber - 28) + ".webp";
        document.getElementById("betascreenlink").href = "images/betaScreens/gta3/betaimgiii" + (randomNumber - 28) + ".webp";
        document.getElementById("betascreentext").innerHTML = "Grand Theft Auto III";
    }  
	else if (randomNumber > 24) {
        document.getElementById("betascreenimg").src = "images/betaScreens/gtaiv/betaimgiv" + (randomNumber - 24) + ".webp";
        document.getElementById("betascreenlink").href = "images/betaScreens/gtaiv/betaimgiv" + (randomNumber - 24) + ".webp";
        document.getElementById("betascreentext").innerHTML = "Grand Theft Auto IV";
    }else {
        document.getElementById("betascreenimg").src = "images/betaScreens/gtav/betaimg" + randomNumber + ".webp";
        document.getElementById("betascreenlink").href = "images/betaScreens/gtav/betaimg" + randomNumber + ".webp";
        document.getElementById("betascreentext").innerHTML = "Grand Theft Auto V";
    }
}


function getRandomInt(min, max) {
    min = Math.ceil(min);   // Round up
    max = Math.floor(max);  // Round down
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
