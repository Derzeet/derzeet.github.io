function astmove() {
    $("#animation").css({ "left": "70%", "width": "125px", "transition": "all 0.5s" });
}


function homemove() {
    $("#animation").css({ "left": "0%", "width": "60px", "transition": "all 0.5s" });
}

function planmove() {
    $("#animation").css({ "left": "22%", "width": "90px", "transition": "all 0.5s" });
}

function notmove() {
    $("#animation").css({ "left": "47%", "width": "85px", "transition": "all 0.5s" });
}

/* TABS */

function showTab(evt, name) {
    var i, tabcontent, tablinks;

    tabcontent = $(".tabCon");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = $(".item");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(name).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("first").click();

/* GALLERY */

function gallery() {
    $(".modaljs:eq(0)").css("display", "block");
    $("header").css("z-index", 0);
}

function clozegall() {
    $(".modaljs:eq(0)").css("display", "none")
    $("header").css("z-index", 8);
}

function openphotos(x) {
    var array = $(".modaljs");
    array[x].style.display = "block";
    array[0].style.display = "none";
}

function closephotos(x) {
    var array = $(".modaljs");
    array[x].style.display = "none";
    array[0].style.display = "block";
}

function closeall() {
    $(".modaljs").css("display", "none");
    $("header").css("z-index", 8);
}