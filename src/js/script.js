const currentLang = getLanguage();
setLanguage(currentLang);


var health = 1;
var distmap = document.getElementById("distMap");
var textElement = document.getElementById("PickText");
var pickText2Element = document.getElementById("PickText2");
var heading1 = document.getElementById("Heading");
var rightDiv = document.getElementById("right");
var leftDiv = document.getElementById("left");
var messageContainer = document.getElementById("messageContainer");
var messageHeading = document.getElementById("messageHeading");
var messageText = document.getElementById("messageText");
var successPic = document.createElement("img");
var newDiv = document.createElement("div");
var correctMap = document.createElement("img");
correctMap.src ="../../../imgs/bars/pivo/pivoAnswer.png";
correctMap.style.marginLeft = "6%";
correctMap.id = "correctMap"; // Add ID for CSS targeting


var change = localStorage.getItem("levelDone");
var answer = false;
var counter = 0;
var maxTime = 120;
var counterDiv = document.createElement("div");
counterDiv.setAttribute("id", "cDiv");
var counterDisplay = document.createElement("p");
counterDiv.appendChild(counterDisplay);
rightDiv.appendChild(counterDiv);

     // Define global variables for timer and countdown
var countdown;
var counter = 30; // Initial value for countdown in seconds

// Function to initialize the page
function initializePage() {

    // Set the distance map image source
    document.getElementById("distMap").src = config.images.distMap;

    // Set the map image source
    document.getElementById("map").src = config.images.map.src;

    // Create map areas dynamically
    var imageMap = document.getElementById("image-map");
    config.images.map.areas.forEach(function(area) {
        var areaElement = document.createElement("area");
        areaElement.alt = area.alt;
        areaElement.title = area.title;
        areaElement.href = area.onClick;
        areaElement.coords = area.coords;
        areaElement.shape = area.shape;
        imageMap.appendChild(areaElement);
    });

    
    // Start the timer when the page loads
    timer();
}

// Function to change the element based on the language
function changeElem() {
    document.getElementById("levelHeading").innerHTML = "Level 2!";
}


function changeLevel(){
        var change = localStorage.getItem("levelDone");
        //console.log(change);
        if(change == "1"){
            changeElem();
        }else{
            //console.log("0");
        }
    }
    changeLevel();


// Function to change the element based on the language
function setLanguage(lang) {
    document.getElementById('Heading').innerText = config.translations[lang].Heading;
    document.getElementById('PickText2').innerText = config.translations[lang].PickText2;

    // Update level heading based on current language and level status
    const levelHeadingElement = document.getElementById('levelHeading');
    if (levelHeadingElement.innerText.includes("Level 1") || levelHeadingElement.innerText.includes("Επίπεδο 1")) {
        levelHeadingElement.innerText = config.translations[lang].levelHeading.levelHeading1;
    } else if (levelHeadingElement.innerText.includes("Level 2") || levelHeadingElement.innerText.includes("Επίπεδο 2")) {
        levelHeadingElement.innerText = config.translations[lang].levelHeading.levelHeading2;
    }

    document.getElementById('PickText').innerText = config.translations[lang].PickText;

    // Update interactive message elements with current language
    document.getElementById('messageHeading').innerText = '';
    document.getElementById('messageText').innerText = '';

    // Remove 'selected' class from all language buttons
    document.querySelectorAll('.language-buttons button').forEach(button => {
        button.classList.remove('selected');
    });

    // Add 'selected' class to the clicked language button
    document.getElementById(`${lang}-btn`).classList.add('selected');

    // Store the selected language in a cookie
    document.cookie = `lang=${lang};path=/`;

    // Update level heading again to ensure it's correct after language change
    // changeElem();
}


function getLanguage() {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; lang=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return 'en'; // default to English if no language cookie found
}
function goBackButton() {
    history.back();
}

// Timer functionality
var countdown;
var counter = 30; // Initial value for countdown in seconds

function timer() {
    countdown = setInterval(function () {
        if (counter > 0) {
            document.getElementById('timerDisplay').innerText = counter;
            counter--;
        } else {
            clearInterval(countdown);
            outOfTime();
        }
    }, 1000);
}

function outOfTime() {
    Answer();
    var loss = parseInt(localStorage.getItem("looses"));
    loss += 1;
    localStorage.setItem("looses", loss);
    var exit = document.createElement("a");
    var textLoose = document.createElement("p");
    textLoose.innerHTML = translations[currentLang].outOfTimeMessage;
    textLoose.setAttribute("class", "font no-margin-bottom");
    exit.innerHTML = "EXIT";
    exit.setAttribute("type", "button");
    exit.setAttribute("href", "../../end.html?noOfAnswers=0");
    exit.setAttribute("class", "butt-time exit-btn");
    exit.style.position = "relative"; /* Ensure positioning is relative */
    rightDiv.appendChild(textLoose);
    var looseImg = document.createElement("img");
    looseImg.src = "../../../imgs/random/sad.png";
    looseImg.setAttribute("class", "aImg");
    leftDiv.appendChild(looseImg);
    rightDiv.appendChild(exit);
}


function Answer() {
    answer = true;
    var imgMap = document.getElementById("map");
    imgMap.style.display = "none";
    textElement.style.display = "none";
    pickText2Element.style.display = "none";
    distmap.style.display = "none";
    rightDiv.appendChild(correctMap);
    rightDiv.appendChild(messageContainer);
    leftDiv.appendChild(successPic);
    leftDiv.appendChild(newDiv);
}


function wrongAnswer() {
    answer = true;
    if (health == 1) {
        health = 0;
        var loss = parseInt(localStorage.getItem("looses"));
        loss += 1;
        localStorage.setItem("looses", loss);
        alert("You have another try!");
    } else {
        clearInterval(countdown); // Stop the timer
        messageContainer.classList.add('message-wrong');
        messageContainer.classList.remove('message-correct');
        messageContainer.style.display = 'block';
        messageHeading.innerText = translations[currentLang].wrongAnswerHeading;
        messageText.innerText = translations[currentLang].wrongAnswerMessage;
        exitButton();
    }
}

function correctAnswer() {
    answer = true;
    clearInterval(countdown); // Stop the timer
    document.getElementById("messageContainer").classList.add('message-correct');
    document.getElementById("messageContainer").classList.remove('message-wrong');
    document.getElementById("messageContainer").style.display = 'block';
    if (change != "1") {
        document.getElementById("messageHeading").innerText = config.translations[currentLang].correctAnswerHeading;
        document.getElementById("messageText").innerText = config.translations[currentLang].correctAnswerMessage;
        var nextLevel = document.createElement("a");
        nextLevel.innerHTML = "LEVEL 2!";
        nextLevel.setAttribute("type", "button");
        nextLevel.setAttribute("href", "../../infoScreen/info1.html");
        nextLevel.setAttribute("class", "butt");
        successPic.setAttribute("src", "../../../imgs/random/beer.png");
        successPic.setAttribute("id", "successPic-beer");
        newDiv.appendChild(nextLevel);
        Answer();
    } else {
        document.getElementById("messageHeading").innerText = config.translations[currentLang].correctAnswerHeading;
        document.getElementById("messageText").innerText = config.translations[currentLang].correctAnswerMessage;
        var nextLevel = document.createElement("a");
        nextLevel.innerHTML = "LEVEL 3!";
        nextLevel.setAttribute("type", "button");
        nextLevel.setAttribute("href", "../../infoScreen/info2.html");
        nextLevel.setAttribute("class", "butt");
        successPic.setAttribute("src", "../../../imgs/random/beer.png");
        successPic.setAttribute("id", "successPic-beer");
        newDiv.appendChild(nextLevel);
        Answer();
    }
}

function exitButton() {
    var exit = document.createElement("a");
    exit.innerHTML = "EXIT";
    exit.setAttribute("type", "button");
    exit.setAttribute("href", "../../end.html?noOfAnswers=0");
    exit.setAttribute("class", "butt exit-btn");
    exit.style.position = "relative"; /* Ensure positioning is relative */
    newDiv.appendChild(exit);
    Answer();
}

$(document).ready(function () {
    $('map').imageMapResize();
});
