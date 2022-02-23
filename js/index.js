function astmove() {
    $("#animation").css({ "left": "70%", "width": "125px", "transition": "all 0.5s" });
}

function starsmove() {
    $("#animation").css({ "left": "47%", "width": "85px", "transition": "all 0.5s" });
}

function planmove() {
    $("#animation").css({ "left": "22%", "width": "90px", "transition": "all 0.5s" });
}

function notmove() {
    $("#animation").css({ "left": "0%", "width": "60px", "transition": "all 0.5s" });
}


var welcome = new Audio('../audio/mcWelcome.mp3');
welcome.play();