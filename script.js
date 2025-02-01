// Running Birthday Message
const message = "Wishing you a day filled with love, joy, and happiness! 🎂✨";
let i = 0;

function typeMessage() {
    if (i < message.length) {
        document.getElementById("message").innerHTML += message.charAt(i);
        i++;
        setTimeout(typeMessage, 100);
    }
}
typeMessage();

// Play Music Function
function playMusic() {
    document.getElementById("bg-music").play();
}

// Pause Music Function
function pauseMusic() {
    document.getElementById("bg-music").pause();
}
