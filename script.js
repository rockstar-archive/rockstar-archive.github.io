let times = 0;

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

div.addEventListener('mouseenter', () => {
    console.log('Mouse entered!');
    times++;

});
unlc.addEventListener('mouseenter', () => {
    if (times === 4) {
        console.log('secreeeeet');
       document.getElementById("texty1").innerHTML = "debug mode activated";
        setSecret();
    }

});



function setSecret(){
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