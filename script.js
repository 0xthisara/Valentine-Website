const typingText = document.getElementById("typing");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const game = document.getElementById("game");
const heartsArea = document.getElementById("heartsArea");
const loveMeter = document.getElementById("loveMeter");

const questions = [
    "Do you like me? 😏",
    "Do I make you smile? 😊",
    "Are you sure you don't want me? 👀",
    "Will you finally be my Valentine? 💘"
];

let questionIndex = 0;
let love = 0;

// Typing effect
function typeWriter(text, i = 0) {
    if (i < text.length) {
        typingText.innerHTML += text.charAt(i);
        setTimeout(() => typeWriter(text, i + 1), 40);
    }
}

function loadQuestion() {
    typingText.innerHTML = "";
    typeWriter(questions[questionIndex]);
}

loadQuestion();

// NO button
noBtn.addEventListener("click", () => {
    questionIndex++;
    if (questionIndex < questions.length) {
        loadQuestion();
    } else {
        yesBtn.disabled = false;
        typingText.innerHTML = "You tried... but YES is your destiny 😌💖";
    }
});

// YES button unlock
yesBtn.addEventListener("click", () => {
    document.getElementById("questionBox").classList.add("hidden");
    game.classList.remove("hidden");
    startGame();
});

// Mini Love Game
function startGame() {
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement("span");
        heart.innerHTML = "💖";
        heart.classList.add("heart");

        heart.addEventListener("click", () => {
            love += 7;
            loveMeter.style.width = love + "%";
            heart.remove();

            if (love >= 100) {
                winGame();
            }
        });

        heartsArea.appendChild(heart);
    }
}

function winGame() {
    typingText.innerHTML = "YOU WIN MY HEART FOREVER 😭💘";
    confetti({
        particleCount: 300,
        spread: 150,
        origin: { y: 0.6 }
    });
}
