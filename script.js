window.onload = function () {
    

    var det = document.getElementById("3ds");
    if (det) {
        var w = screen.width;
        if (w <= 320) {
            det.innerHTML = "Are you visiting this page on a 3DS? swag.";
            window.location.href = 'https://rockstar-archive.github.io/legacy/index.html';
        } else {
            det.innerHTML = "";
        }
    }

    var nVer = navigator.appVersion;
    var nAgt = navigator.userAgent;
    var browserName = navigator.appName;
    var fullVersion = '' + parseFloat(navigator.appVersion);
    var majorVersion = parseInt(navigator.appVersion, 10);
    var nameOffset, verOffset, ix;


    // In Opera 15+, the true version is after "OPR/" 
    if ((verOffset = nAgt.indexOf("OPR/")) != -1) {
        browserName = "Opera";
        fullVersion = nAgt.substring(verOffset + 4);
    }
    // In older Opera, the true version is after "Opera" or after "Version"
    else if ((verOffset = nAgt.indexOf("Opera")) != -1) {
        browserName = "Opera";
        fullVersion = nAgt.substring(verOffset + 6);
        if ((verOffset = nAgt.indexOf("Version")) != -1)
            fullVersion = nAgt.substring(verOffset + 8);
    }
    // In MSIE, the true version is after "MSIE" in userAgent
    else if ((verOffset = nAgt.indexOf("MSIE")) != -1) {
        browserName = "Microsoft Internet Explorer";
        fullVersion = nAgt.substring(verOffset + 5);
    }
    // In Chrome, the true version is after "Chrome" 
    else if ((verOffset = nAgt.indexOf("Chrome")) != -1) {
        browserName = "Chrome";
        fullVersion = nAgt.substring(verOffset + 7);
    }
    // In Safari, the true version is after "Safari" or after "Version" 
    else if ((verOffset = nAgt.indexOf("Safari")) != -1) {
        browserName = "Safari";
        fullVersion = nAgt.substring(verOffset + 7);
        if ((verOffset = nAgt.indexOf("Version")) != -1)
            fullVersion = nAgt.substring(verOffset + 8);
    }
    // In Firefox, the true version is after "Firefox" 
    else if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
        browserName = "Firefox";
        fullVersion = nAgt.substring(verOffset + 8);
    }
    // In most other browsers, "name/version" is at the end of userAgent 
    else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) <
        (verOffset = nAgt.lastIndexOf('/'))) {
        browserName = nAgt.substring(nameOffset, verOffset);
        fullVersion = nAgt.substring(verOffset + 1);
        if (browserName.toLowerCase() == browserName.toUpperCase()) {
            browserName = navigator.appName;
        }
    }
    // trim the fullVersion string at semicolon/space if present
    if ((ix = fullVersion.indexOf(";")) != -1)
        fullVersion = fullVersion.substring(0, ix);
    if ((ix = fullVersion.indexOf(" ")) != -1)
        fullVersion = fullVersion.substring(0, ix);

    majorVersion = parseInt('' + fullVersion, 10);
    if (isNaN(majorVersion)) {
        fullVersion = '' + parseFloat(navigator.appVersion);
        majorVersion = parseInt(navigator.appVersion, 10);
    }


    alert("Name:" + browserName + " Version " + majorVersion);
};



let times = 0;


log("Your screen resolution is: " + screen.width + "x" + screen.height);

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
    } else {
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

const div = document.getElementById('secret');
const unlc = document.getElementById('unlockerscrt');
const unlceee = document.getElementById('unlockershut');

div.addEventListener('mouseenter', () => {
    console.log('Mouse entered!');
    times++;
    if (times % 3 === 0) {
        console.log('secreeeeet');
        document.getElementById("texty2").innerHTML = "debug mode activated";

    }

});
unlc.addEventListener('mouseenter', () => {
    if (times % 3 === 0) {
        console.log('secreeeeet');

        setSecret();
    }

});

unlceee.addEventListener('mouseenter', () => {
    if (times % 3 === 0) {
        console.log('secreeeeet');

        setShuttime();
    }

});

function setShuttime() {
    var countDownDate = new Date("April 16, 2026").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById("texty1").innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s <br> left until h0rizon shut down";

        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("texty1").innerHTML = "EXPIRED";
        }
    }, 1000);
}



function setSecret() {
    var countDownDate = new Date("May 28, 2026").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById("texty1").innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s <br> left until updating Buzzheavier";

        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("texty1").innerHTML = "EXPIRED";
        }
    }, 1000);
}