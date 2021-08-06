const dLight = document.getElementById("dLight");
const dlightImage = document.getElementById("dLightImage");

const aLight = document.getElementById("aLight");
const alightImage = document.getElementById("aLightImage");

const tLight = document.getElementById("tLight");
const tlightImage = document.getElementById("tLightImage");



dLight.addEventListener("mouseover", function(event) {
    dlightImage.setAttribute("src", "assets/discordidle.gif");
});

dLight.addEventListener("mouseout", function(event) {
    dlightImage.setAttribute("src", "assets/empty.png");
});

aLight.addEventListener("mouseover", function(event) {
    alightImage.setAttribute("src", "assets/atlantisidle.gif");
});

aLight.addEventListener("mouseout", function(event) {
    alightImage.setAttribute("src", "assets/empty.png");
});

tLight.addEventListener("mouseover", function(event) {
    tlightImage.setAttribute("src", "assets/twitteridle.gif");
});

tLight.addEventListener("mouseout", function(event) {
    tlightImage.setAttribute("src", "assets/empty.png");
});