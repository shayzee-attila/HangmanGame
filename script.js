// Function to hide the loading spinner
const hideLoadingSpinner = () => {
  const loadingSpinner = document.getElementById("loading-spinner");
  loadingSpinner.style.display = "none";
};

// Add an event listener to hide the spinner when the page is fully loaded
window.addEventListener("load", () => {
  hideLoadingSpinner();
});

//Initial References
const letterContainer = document.getElementById("letter-container");
const optionsContainer = document.getElementById("options-container");
const userInputSection = document.getElementById("user-input-section");
const newGameContainer = document.getElementById("new-game-container");
const newGameButton = document.getElementById("new-game-button");
const canvas = document.getElementById("canvas");
const resultText = document.getElementById("result-text");

//options values for buttons
let options = {
  music: [
    "Ambient",
    "Acid",
    "Amapiano",
    "Afro",
    "Bass",
    "Blues",
    "Breakbeat",
    "Ballroom",
    "Country",
    "Classical",
    "Disco",
    "DarkWave",
    "DNB",
    "Dub",
    "Dubstep",
    "Electronic",
    "EDM",
    "Funk",
    "Folk",
    "Garage",
    "Grime",
    "Gqom",
    "HipHop",
    "House",
    "IDM",
    "Indie",
    "Industrial",
    "Jazz",
    "Jungle",
    "Kwaito",
    "Melodic",
    "Psychedelic",
    "Pop",
    "Rap",
    "Reggae",
    "Rock",
    "Techno",
    "Trap",
    "Trance",
  ],

  coding: [
    "Algorithm",
    "Attributes",
    "App",
    "Arrays",
    "Assert",
    "Border",
    "Boolean",
    "Bootstrap",
    "Buffer",
    "Bug",
    "Callback",
    "Child",
    "Character",
    "Class",
    "Console",
    "Constant",
    "CSS",
    "Datetime",
    "Directory",
    "Debug",
    "Document",
    "Domain",
    "Error",
    "File",
    "Filter",
    "Format",
    "Functions",
    "Global",
    "HTTP",
    "HTML",
    "JavaScript",
    "Loops",
    "Methods",
    "Margin",
    "Mapping",
    "Manipulation",
    "Module",
    "Node",
    "Number",
    "OOP",
    "Operation",
    "Padding",
    "Parent",
    "Process",
    "Programming",
    "Pyhton",
    "Query",
    "Readline",
    "Request",
    "Script",
    "Selector",
    "String",
    "Style",
    "SQL",
    "Terminal",
    "Traverse",
    "Variables",
    "URL",
  ],

  countries: [
    "Afghanistan",
    "Albainia",
    "Algeria",
    "Angola",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Bolivia",
    "Bosnia",
    "Botswana",
    "Brazil",
    "Bulgaria",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Denmark",
    "Ecuador",
    "Egypt",
    "Estonia",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Guatemala",
    "Guinea",
    "Haiti",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Kenya",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Malta",
    "Mauritius",
    "Mexico",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "Nigeria",
    "Norway",
    "Pakistan",
    "Panama",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Samoa",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Singapore",
    "Slovakia",
    "Somalia",
    "Spain",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tanzania",
    "Thailand",
    "Tonga",
    "Trinidad",
    "Tunisia",
    "Turkey",
    "Uganda",
    "Ukraine",
    "Uruguay",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ],

  animals: [
    "Albatross",
    "Alligator",
    "Alpaca",
    "Baboon",
    "Bat",
    "Bee",
    "Bear",
    "Bison",
    "Bunny",
    "Buck",
    "Deer",
    "Dog",
    "Dragonfly",
    "Cat",
    "Camel",
    "Chicken",
    "Chinchilla",
    "Cow",
    "Cheetah",
    "Crab",
    "Eagle",
    "Eel",
    "Elephant",
    "Falcon",
    "Fish",
    "Fox",
    "Frog",
    "Goat",
    "Hedgehog",
    "Hyena",
    "Jaguar",
    "Kangaroo",
    "Lamb",
    "Lemur",
    "Lion",
    "Lizard",
    "Leopard",
    "Monkey",
    "Mouse",
    "Meerkat",
    "Otter",
    "Owl",
    "Parrot",
    "Panther",
    "Pig",
    "Penguin",
    "Python",
    "Rat",
    "Rabbit",
    "Rhinoceros",
    "Shark",
    "Sheep",
    "Snake",
    "Snail",
    "Seal",
    "Turtle",
    "Tiger",
    "Wolf",
    "Zebra",
  ],
};


//count
let winCount = 0;
let count = 0;

let chosenWord = "";

//Display option buttons
const displayOptions = () => {
  optionsContainer.innerHTML += `<h3 class='options'>Please Select An Option</h3>`;
  let buttonCon = document.createElement("div");
  for (let value in options) {
    buttonCon.innerHTML += `<button class="options" onclick="generateWord('${value}')">${value}</button>`;
  }
  optionsContainer.appendChild(buttonCon);
};

//Block all the Buttons
const blocker = () => {
  let optionsButtons = document.querySelectorAll(".options");
  let letterButtons = document.querySelectorAll(".letters");
  //disable all options
  optionsButtons.forEach((button) => {
    button.disabled = true;
  });

  //disable all letters
  letterButtons.forEach((button) => {
    button.disabled.true;
  });
  newGameContainer.classList.remove("hide");
};

//Word Generator
const generateWord = (optionValue) => {
  let optionsButtons = document.querySelectorAll(".options");
  //If optionValur matches the button innerText then highlight the button
  optionsButtons.forEach((button) => {
    if (button.innerText.toLowerCase() === optionValue) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
    button.disabled = true;
  });

  //initially hide letters, clear previous word
  letterContainer.classList.remove("hide");
  userInputSection.innerText = "";

  let optionArray = options[optionValue];
  //choose random word
  chosenWord = optionArray[Math.floor(Math.random() * optionArray.length)];
  chosenWord = chosenWord.toUpperCase();

  //replace every letter with span containing dash
  let displayItem = chosenWord.replace(/./g, '<span class="dashes">_</span>');

  //Display each element as span
  userInputSection.innerHTML = displayItem;

  const pleaseSelectHeading = document.querySelector("#options-container h3");
  pleaseSelectHeading.style.display = "none";
};

// Preload the first Hangman image
const preloadFirstHangmanImage = () => {
  const img = new Image();
  img.src = "images/Hangmanleg1.png";
};

preloadFirstHangmanImage();

//Initial Function (Called when page loads/user presses new game)
const initializer = () => {
  winCount = 0;
  count = 0;

  //reset background image
  setHangmanBackground();

  //Initially erase all content and hide letteres and new game button
  userInputSection.innerHTML = "";
  optionsContainer.innerHTML = "";
  letterContainer.classList.add("hide");
  newGameContainer.classList.add("hide");
  letterContainer.innerHTML = "";

  //For creating letter buttons
  for (let i = 65; i < 91; i++) {
    let button = document.createElement("button");
    button.classList.add("letters");
    //Number to ASCII[A-Z]
    button.innerText = String.fromCharCode(i);
    //character button click
    button.addEventListener("click", () => {
      let charArray = chosenWord.split("");
      let dashes = document.getElementsByClassName("dashes");
      //if array contains clciked value replace the matched dash with letter else dram on canvas
      if (charArray.includes(button.innerText)) {
        charArray.forEach((char, index) => {
          //if character in array is same as clicked button
          if (char === button.innerText) {
            //replace dash with letter
            dashes[index].innerText = char;
            //increment counter
            winCount += 1;
            //if winCount equals word lenfth
            if (winCount == charArray.length) {
              resultText.innerHTML = `<h2 class='win-msg'>You Win!!</h2><p>The word was <span>${chosenWord}</span></p>`;
              //block all buttons
              blocker();
            }
          }
        });
      } else {
        //lose count
        count += 1;
        //for drawing man
        drawMan(count);
        //Count==6 because head,body,left arm, right arm,left leg,right leg
        if (count == 6) {
          // Display the "lose" message after a delay
          setTimeout(() => {
            resultText.innerHTML = `<h2 class='lose-msg'>You Lose!!</h2><p>The word was <span>${chosenWord}</span></p>`;
            blocker();
          }, 1500); // Delay for 1 second (1000 milliseconds)
        }
      }
      //disable clicked button
      button.disabled = true;
    });
    letterContainer.append(button);
  }

  displayOptions();
  //Call to canvasCreator (for clearing previous canvas and creating initial canvas)
  let { initialDrawing } = canvasCreator();
  //initialDrawing would draw the frame
  initialDrawing();
};

//Canvas
// Image functions for Hangman
const setImage = (imageSrc) => {
  canvas.style.backgroundImage = `url(images/${imageSrc})`;
  canvas.style.backgroundRepeat = "no-repeat";
};

const setHangmanBackground = () => {
  setImage("HangmanBkg.png");
};

const setHangmanLeg1 = () => {
  setImage("Hangmanleg1.png");
};

const setHangmanLeg2 = () => {
  setImage("Hangmanleg2.png");
};

const setHangmanBody = () => {
  setImage("Hangmanbody.png");
};

const setHangmanArm1 = () => {
  setImage("Hangmanarm1.png");
};

const setHangmanArm2 = () => {
  setImage("Hangmanarm2.png");
};

const setHangmanHead = () => {
  setImage("Hangmanhead.png");
};

// Draw the man
// Draw the man
const drawMan = (count) => {
  switch (count) {
    case 1:
      setHangmanLeg1();
      break;
    case 2:
      setHangmanLeg2();
      break;
    case 3:
      setHangmanBody();
      break;
    case 4:
      setHangmanArm1();
      break;
    case 5:
      setHangmanArm2();
      break;
    case 6:
      setHangmanHead();
      break;
    default:
      break;
  }

  // Disable and style letter buttons that have been tried
  const letterButtons = document.querySelectorAll(".letters");
  letterButtons.forEach((button) => {
    if (button.disabled) {
      button.style.opacity = 0.5; // Reduce opacity for tried letters
    }
  });
};

//New Game
//New Game
newGameButton.addEventListener("click", initializer);
window.onload = () => {
  initializer();
  hideLoadingSpinner();
};