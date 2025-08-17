const dogImage = document.getElementById("dogImage");
const catImage = document.getElementById("catImage");
const birdImage = document.getElementById("birdImage");
const dogList = document.getElementById("dogList");
const catList = document.getElementById("catList");
const birdList = document.getElementById("birdList");
const goBackBtn = document.getElementById("goBackBtn");

dogImage.onclick = function() {
    petMenu.style.display = "none";
    goBackBtn.style.display = "block";
    dogList.style.display = "flex";
    dogList.style.justifyContent = "space-around";
    dogList.style.alignItems = "center";
}

catImage.onclick = function() {
    petMenu.style.display = "none";
    goBackBtn.style.display = "block";
    catList.style.display = "flex";
    catList.style.justifyContent = "space-around";
    catList.style.alignItems = "center";
}

birdImage.onclick = function() {
    petMenu.style.display = "none";
    goBackBtn.style.display = "block";
    birdList.style.display = "flex";
    birdList.style.justifyContent = "space-around";
    birdList.style.alignItems = "center";
}

goBackBtn.onclick = function() {
    petMenu.style.display = "flex";
    goBackBtn.style.display = "none";
    dogList.style.display = "none";
    catList.style.display = "none";
    birdList.style.display = "none";
}
