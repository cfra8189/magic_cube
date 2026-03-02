// MAGIC CUBE v1.0 - 1980s Macintosh Edition
// Retro-futuristic fortune telling system with Light/Dark Mode

const answers = {
    1: "YES - DEFINITELY",
    2: "IT IS DECIDEDLY SO",
    3: "WITHOUT A DOUBT",
    4: "REPLY HAZY, TRY AGAIN",
    5: "ASK AGAIN LATER",
    6: "BETTER NOT TELL YOU NOW",
    7: "MY SOURCES SAY NO",
    8: "OUTLOOK NOT SO GOOD",
    9: "VERY DOUBTFUL",
    10: "H3# YESSSS!",
    11: "H3# NOOOO!!",
    12: "...NO CLUE..."
};

// DOM elements
const magicCube = document.getElementById('magicCube');
const answerText = document.getElementById('answerText');
const nameInput = document.getElementById('nameInput');
const questionInput = document.getElementById('questionInput');
const shakeButton = document.getElementById('shakeButton');
const result = document.getElementById('result');
const questionDisplay = document.getElementById('questionDisplay');
const answerDisplay = document.getElementById('answerDisplay');
const themeToggle = document.getElementById('themeToggle');
const themeLabel = document.querySelector('.theme-label');

// Theme Management
function initTheme() {
    const savedTheme = localStorage.getItem('magic8ball-theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggle.checked = true;
        themeLabel.textContent = '🌙 DARK';
    } else {
        themeLabel.textContent = '☀️ LIGHT';
    }
}

function toggleTheme() {
    if (themeToggle.checked) {
        document.body.classList.add('dark-theme');
        themeLabel.textContent = '🌙 DARK';
        localStorage.setItem('magic8ball-theme', 'dark');
    } else {
        document.body.classList.remove('dark-theme');
        themeLabel.textContent = '☀️ LIGHT';
        localStorage.setItem('magic8ball-theme', 'light');
    }
}

// Function to get random answer
function getRandomAnswer() {
    const randomNumber = Math.floor(Math.random() * 12) + 1;
    return answers[randomNumber];
}

// Function to shake the magic cube
function shakeMagicCube() {
    const question = questionInput.value.trim();
    const name = nameInput.value.trim();
    
    if (!question) {
        // Retro alert message
        const alertBox = document.createElement('div');
        alertBox.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: var(--bg-secondary);
            border: 4px solid var(--border-primary);
            padding: 20px;
            font-family: 'ChicagoFLF', monospace;
            font-weight: bold;
            z-index: 1000;
            box-shadow: 8px 8px 0px var(--shadow-color);
        `;
        alertBox.innerHTML = `
            <div>⚠️ SYSTEM ERROR ⚠️</div>
            <div style="margin-top: 10px;">PLEASE ASK A QUESTION!</div>
            <button onclick="this.parentElement.remove()" style="
                margin-top: 15px;
                padding: 8px 16px;
                background: var(--bg-button);
                color: var(--text-secondary);
                border: 2px solid var(--border-tertiary);
                font-family: 'ChicagoFLF', monospace;
                font-weight: bold;
                cursor: pointer;
            ">OK</button>
        `;
        document.body.appendChild(alertBox);
        return;
    }
    
    // Add shaking animation
    magicCube.classList.add('shaking');
    answerText.textContent = "?";
    
    // Show question immediately
    if (name) {
        questionDisplay.textContent = `> ${name.toUpperCase()} ASKS: ${question.toUpperCase()}`;
    } else {
        questionDisplay.textContent = `> QUESTION: ${question.toUpperCase()}`;
    }
    
    // After shake animation, show answer
    setTimeout(() => {
        magicCube.classList.remove('shaking');
        const answer = getRandomAnswer();
        answerText.textContent = answer;
        answerDisplay.textContent = `► MAGIC CUBE ANSWER: ${answer}`;
        result.classList.add('show');
    }, 300);
}

// Event listeners
themeToggle.addEventListener('change', toggleTheme);
magicCube.addEventListener('click', shakeMagicCube);
shakeButton.addEventListener('click', shakeMagicCube);

// Allow Enter key to submit
questionInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        shakeMagicCube();
    }
});

nameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        questionInput.focus();
    }
});

// Clear question input when clicked
questionInput.addEventListener('focus', () => {
    if (questionInput.value === "Does this code work?") {
        questionInput.value = "";
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    questionInput.focus();
    // Add retro startup effect
    answerText.style.opacity = '0';
    setTimeout(() => {
        answerText.style.transition = 'opacity 0.5s';
        answerText.style.opacity = '1';
    }, 100);
});
