// Watch database - Add your own images to the 'images' folder
const watchDatabase = [
    {
        brand: "Rolex",
        model: "Submariner 116610LN",
        genuine: "images/rolex-submariner-genuine.jpg",
        replica: "images/rolex-submariner-replica.jpg",
        hints: "Check the dial printing quality, cyclops magnification, and crown guards"
    },
    {
        brand: "Rolex",
        model: "Datejust 41",
        genuine: "images/rolex-datejust-genuine.jpg",
        replica: "images/rolex-datejust-replica.jpg",
        hints: "Look at the fluted bezel details and date window alignment"
    },
    {
        brand: "Rolex",
        model: "Daytona 116500LN",
        genuine: "images/rolex-daytona-genuine.jpg",
        replica: "images/rolex-daytona-replica.jpg",
        hints: "Examine the chronograph subdials and tachymeter markings"
    },
    {
        brand: "Patek Philippe",
        model: "Nautilus 5711/1A",
        genuine: "images/patek-nautilus-genuine.jpg",
        replica: "images/patek-nautilus-replica.jpg",
        hints: "Study the horizontal embossing on the dial and bracelet finishing"
    },
    {
        brand: "Patek Philippe",
        model: "Calatrava 5196",
        genuine: "images/patek-calatrava-genuine.jpg",
        replica: "images/patek-calatrava-replica.jpg",
        hints: "Focus on the hand finishing and dial text clarity"
    },
    {
        brand: "Omega",
        model: "Seamaster Professional 300M",
        genuine: "images/omega-seamaster-genuine.jpg",
        replica: "images/omega-seamaster-replica.jpg",
        hints: "Check the wave pattern on the dial and helium escape valve"
    },
    {
        brand: "Omega",
        model: "Speedmaster Professional",
        genuine: "images/omega-speedmaster-genuine.jpg",
        replica: "images/omega-speedmaster-replica.jpg",
        hints: "Look at the tachymeter bezel font and dial dot placement"
    },
    {
        brand: "Jaeger-LeCoultre",
        model: "Reverso Classic",
        genuine: "images/jlc-reverso-genuine.jpg",
        replica: "images/jlc-reverso-replica.jpg",
        hints: "Examine the Art Deco font and case finishing details"
    },
    {
        brand: "Jaeger-LeCoultre",
        model: "Master Ultra Thin Moon",
        genuine: "images/jlc-master-moon-genuine.jpg",
        replica: "images/jlc-master-moon-replica.jpg",
        hints: "Study the moon phase accuracy and dial printing"
    },
    {
        brand: "Audemars Piguet",
        model: "Royal Oak 15400ST",
        genuine: "images/ap-royaloak-genuine.jpg",
        replica: "images/ap-royaloak-replica.jpg",
        hints: "Check the 'Tapisserie' pattern and screw placement"
    },
    {
        brand: "Cartier",
        model: "Santos de Cartier",
        genuine: "images/cartier-santos-genuine.jpg",
        replica: "images/cartier-santos-replica.jpg",
        hints: "Look at the Roman numeral clarity and screw details"
    },
    {
        brand: "IWC",
        model: "Pilot's Watch Mark XVIII",
        genuine: "images/iwc-pilot-genuine.jpg",
        replica: "images/iwc-pilot-replica.jpg",
        hints: "Examine the luminous markers and date window"
    }
];

// Game state
let gameState = {
    score: 0,
    round: 1,
    totalRounds: 0,
    correctAnswers: 0,
    currentWatch: null,
    genuinePosition: null,
    usedWatches: []
};

// DOM elements
const elements = {
    score: document.getElementById('score'),
    round: document.getElementById('round'),
    accuracy: document.getElementById('accuracy'),
    currentBrand: document.getElementById('current-brand'),
    currentModel: document.getElementById('current-model'),
    imageLeft: document.getElementById('image-left'),
    imageRight: document.getElementById('image-right'),
    selectLeft: document.getElementById('select-left'),
    selectRight: document.getElementById('select-right'),
    watchLeft: document.getElementById('watch-left'),
    watchRight: document.getElementById('watch-right'),
    feedback: document.getElementById('feedback'),
    feedbackIcon: document.getElementById('feedback-icon'),
    feedbackText: document.getElementById('feedback-text'),
    feedbackDetail: document.getElementById('feedback-detail'),
    nextBtn: document.getElementById('next-btn')
};

// Initialize game
function initGame() {
    gameState.usedWatches = [];
    loadNewRound();

    // Add event listeners
    elements.selectLeft.addEventListener('click', () => handleSelection('left'));
    elements.selectRight.addEventListener('click', () => handleSelection('right'));
    elements.nextBtn.addEventListener('click', loadNewRound);
}

// Load a new round
function loadNewRound() {
    // Reset UI
    elements.feedback.classList.add('hidden');
    elements.watchLeft.classList.remove('correct', 'incorrect', 'disabled');
    elements.watchRight.classList.remove('correct', 'incorrect', 'disabled');
    elements.selectLeft.disabled = false;
    elements.selectRight.disabled = false;

    // Get available watches
    const availableWatches = watchDatabase.filter(
        watch => !gameState.usedWatches.includes(watch)
    );

    // Reset if all watches have been used
    if (availableWatches.length === 0) {
        gameState.usedWatches = [];
        showGameComplete();
        return;
    }

    // Select random watch
    const randomIndex = Math.floor(Math.random() * availableWatches.length);
    gameState.currentWatch = availableWatches[randomIndex];
    gameState.usedWatches.push(gameState.currentWatch);

    // Randomly position genuine watch (left or right)
    gameState.genuinePosition = Math.random() < 0.5 ? 'left' : 'right';

    // Update UI
    elements.currentBrand.textContent = gameState.currentWatch.brand;
    elements.currentModel.textContent = gameState.currentWatch.model;

    if (gameState.genuinePosition === 'left') {
        elements.imageLeft.src = gameState.currentWatch.genuine;
        elements.imageRight.src = gameState.currentWatch.replica;
    } else {
        elements.imageLeft.src = gameState.currentWatch.replica;
        elements.imageRight.src = gameState.currentWatch.genuine;
    }

    // Handle image load errors with placeholder
    elements.imageLeft.onerror = () => {
        elements.imageLeft.src = createPlaceholder('A');
    };
    elements.imageRight.onerror = () => {
        elements.imageRight.src = createPlaceholder('B');
    };

    updateScoreDisplay();
}

// Create placeholder image
function createPlaceholder(label) {
    const canvas = document.createElement('canvas');
    canvas.width = 400;
    canvas.height = 400;
    const ctx = canvas.getContext('2d');

    // Background
    ctx.fillStyle = '#2a2a3e';
    ctx.fillRect(0, 0, 400, 400);

    // Text
    ctx.fillStyle = '#d4af37';
    ctx.font = 'bold 48px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`Watch ${label}`, 200, 180);

    ctx.font = '20px Arial';
    ctx.fillStyle = '#b8b8b8';
    ctx.fillText('Add image to', 200, 220);
    ctx.fillText('images folder', 200, 245);

    return canvas.toDataURL();
}

// Handle user selection
function handleSelection(position) {
    const isCorrect = position === gameState.genuinePosition;

    // Update score
    gameState.totalRounds++;
    if (isCorrect) {
        gameState.score += 100;
        gameState.correctAnswers++;
    }

    // Disable buttons
    elements.selectLeft.disabled = true;
    elements.selectRight.disabled = true;

    // Visual feedback on watch containers
    if (isCorrect) {
        if (position === 'left') {
            elements.watchLeft.classList.add('correct');
            elements.watchRight.classList.add('disabled');
        } else {
            elements.watchRight.classList.add('correct');
            elements.watchLeft.classList.add('disabled');
        }
    } else {
        if (position === 'left') {
            elements.watchLeft.classList.add('incorrect');
            elements.watchRight.classList.add('correct');
        } else {
            elements.watchRight.classList.add('incorrect');
            elements.watchLeft.classList.add('correct');
        }
    }

    // Show feedback
    showFeedback(isCorrect);

    // Update round counter
    gameState.round++;
    updateScoreDisplay();
}

// Show feedback
function showFeedback(isCorrect) {
    elements.feedback.classList.remove('hidden', 'correct', 'incorrect');

    if (isCorrect) {
        elements.feedback.classList.add('correct');
        elements.feedbackIcon.textContent = '✓';
        elements.feedbackText.textContent = 'Correct!';
        elements.feedbackDetail.textContent = `Great eye! You identified the genuine ${gameState.currentWatch.brand} ${gameState.currentWatch.model}.`;
    } else {
        elements.feedback.classList.add('incorrect');
        elements.feedbackIcon.textContent = '✗';
        elements.feedbackText.textContent = 'Not Quite!';
        elements.feedbackDetail.textContent = `The genuine watch was on the ${gameState.genuinePosition}. ${gameState.currentWatch.hints}`;
    }
}

// Update score display
function updateScoreDisplay() {
    elements.score.textContent = gameState.score;
    elements.round.textContent = gameState.round;

    if (gameState.totalRounds > 0) {
        const accuracy = Math.round((gameState.correctAnswers / gameState.totalRounds) * 100);
        elements.accuracy.textContent = `${accuracy}%`;
    }
}

// Show game complete
function showGameComplete() {
    elements.feedback.classList.remove('hidden', 'incorrect');
    elements.feedback.classList.add('correct');
    elements.feedbackIcon.textContent = '🏆';
    elements.feedbackText.textContent = 'Game Complete!';

    const accuracy = Math.round((gameState.correctAnswers / gameState.totalRounds) * 100);
    elements.feedbackDetail.textContent = `You've completed all ${watchDatabase.length} watches with ${accuracy}% accuracy and a score of ${gameState.score}!`;

    elements.nextBtn.textContent = 'Play Again';
    elements.nextBtn.onclick = () => {
        gameState.score = 0;
        gameState.round = 1;
        gameState.totalRounds = 0;
        gameState.correctAnswers = 0;
        gameState.usedWatches = [];
        elements.nextBtn.textContent = 'Next Round →';
        elements.nextBtn.onclick = loadNewRound;
        loadNewRound();
    };
}

// Start the game when page loads
document.addEventListener('DOMContentLoaded', initGame);
