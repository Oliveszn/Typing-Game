window.addEventListener("load", init);

let time = 5;
let score = 0;
let isPlaying;

let wordInput = document.querySelector(".form-control");
let currentWord = document.querySelector(".current--word");
let scoreDisplay = document.querySelector(".score");
let timeDisplay = document.querySelector(".time");
let message = document.querySelector(".message");
let seconds = document.querySelector(".seconds");

const words = [
  "subjectivize",
  "jeopardizing",
  "clandestine",
  "homophobic",
  "subjectively",
  "maximization",
  "developer",
  "establishment",
  "furniture",
  "cancellation",
  "embezzlement",
  "checkmarking",
  "decommunized",
  "abbreviating",
  "horrendous",
  "accidentally",
  "acceleration",
  "displaying",
  "barcelona",
  "electronica",
  "reasonable",
  "academically",
  "ambidextrous",
  "decentralize",
  "eccentricity",
  "eavesdropper",
  "facilitating",
  "farstretched",
  "galvanometer",
  "generational",
  "handsomeness",
  "handkerchief",
  "illegitimacy",
  "legalization",
  "macrobiotics",
  "neighborhood",
  "zoochemistry",
  "zoographical",
  "zoologically",
  "accomplished",
  "acknowledges",
  "acknowledged",
  "horometrical",
  "heterosexual",
  "backbenchers",
  "ballhandling",
  "becomingness",
  "befuddlement",
  "tailormaking",
  "tastefulness",
  "technologies",
  "telecommunication",
  "sacrednesses",
  "safeguarding",
  "salamandrian",
  "savagenesses",
  "saxophonists",
  "scavengering",
  "pacesettings",
  "pandaemonium",
  "photographer",
  "maintenances",
  "marksmanship",
  "landscapings",
  "laundrywoman",
];

//initialize game
function init() {
  //load word from array
  showWord(words);
  //Start matching on input
  wordInput.addEventListener("input", startMatch);

  //Call countdown
  setInterval(countdown, 1000);
  //check game status
  setInterval(checkStatus, 50);
}

//Start Match
const startMatch = function () {
  if (matchWords()) {
    isPlaying = true;
    time = 6;
    showWord(words);
    wordInput.value = "";
    score++;
  }

  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
};

//Match currentword to wordinput
const matchWords = function () {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "Correct";
    message.style.color = "green";
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
};

//Pick and show random words
const showWord = function (words) {
  const randomInd = Math.floor(Math.random() * words.length);
  currentWord.innerHTML = words[randomInd];
};

//Show time
const countdown = function () {
  if (time > 0) {
    time--;
  } else if (time === 0) {
    isPlaying = false;
  }

  timeDisplay.innerHTML = time;
};

//Check game status
const checkStatus = function () {
  if (!isPlaying && time === 0) {
    message.innerHTML = "Game Over!!!";
    message.style.color = "red";
    score = -1;
  }
};
