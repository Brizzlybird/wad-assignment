// Code for responsive menu taken from w3schools.com -
// https://www.w3schools.com/howto/howto_js_topnav_responsive.asp

function navReposive() {
    var x = document.getElementById("nav");
    console.log(x);
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}
