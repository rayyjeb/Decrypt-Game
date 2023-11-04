const words = [
    'TECHNOLOGY',
    'CYBER', 
    'SECURITY', 
    'MALWARE', 
    'FIREWALL', 
    'ANALYTICS',
    'ENCRYPTION', 
    'ROUTER', 
    'DATABASE', 
    'FRAMEWORK', 
    'BACKUP', 
    'CLOUD', 
    'SERVER', 
    'HARDWARE', 
    'SOFTWARE', 
    'NETWORK', 
    'ALGORITHM', 
    'DOMAIN', 
    'MINING', 
    'HOSTING', 
    'PROTOCOL', 
    'CACHE' 
];

const hints = [
    "Application of Scientific Knowledge", 
    "Digital World and Online Security", 
    "Safety and Protection",
    "Harmful Software often Disguised", 
    "Digital Barrier that Protects Network",
    "Data Examination to Gain Insights",
    "Secret Code for your Data",
    "Device that directs and manages Data Traffic",
    "Digital filling Cabinet",
    "Structured Environment - Tools - Developers",
    "Safety Net for your Data",
    "Remote Storage and computing system",
    "Powehouse of a Network",
    "Physical Components of a computer",
    "Digital Instructions that tell a computer what to do",
    "Web of interconnected devices and Systems",
    "Step-By-Step set of Instructions",
    "Unique Address or Location",
    "Extracting Valuable Information",
    "Providing a Home for Websites",
    "Set of Rules and Conventions",
    "Temporarily holds frequently accessed Data"
];

let score = 0;
let currentWordIndex = 0;
let currentWord = getRandomWordAndHint();

const jumbleWords = document.getElementById("encryptedwords");
const hintwords = document.getElementById("game__hint");
const guessinput = document.getElementById("input--guess");
const guessbtn = document.getElementById("guessbtn");

function displayShuffledText(scrambledWords) {
    const array = scrambledWords.split('');
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array.join('');
}

function getRandomWordAndHint() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return {
        word: words[randomIndex],
        hint: hints[randomIndex]
    };
}

function displayNextWord() {
    currentWord = getRandomWordAndHint();
    const scrambledWords = displayShuffledText(currentWord.word);
    jumbleWords.innerHTML = scrambledWords;
    hintwords.innerHTML = currentWord.hint;
    guessinput.value = ''; // Clear the input field
}
let attempts=0;
function checkGuess() {
    const guess = guessinput.value;
    if (guess === currentWord.word) {
        score++;
        localStorage.setItem("score",score);
        console.log("Success");
        console.log("Score: " + score);
        displayNextWord();
    } else {
        attempts++;
        console.log("Fail");
    }
        // displayNextWord();
    if(attempts==2){
        window.location.href="gameover.html"
    }
}

guessbtn.addEventListener('click', checkGuess);
displayNextWord(); // Start the game
