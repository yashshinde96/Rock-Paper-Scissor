const choices = {
    rock: { icon: '✊', beats: 'scissors' },
    paper: { icon: '✋', beats: 'rock' },
    scissors: { icon: '✌️', beats: 'paper' }
};

let gameState = {
    userScore: 0,
    compScore: 0,
    roundsPlayed: 0,
    wins: 0,
    streak: 0,
    history: [],
    mode: null, // 'bestof5' or 'infinite'
    targetScore: 5,
    gameStarted: false
};

const elements = {
    userScore: document.getElementById('userScore'),
    compScore: document.getElementById('compScore'),
    roundsPlayed: document.getElementById('roundsPlayed'),
    winRate: document.getElementById('winRate'),
    streak: document.getElementById('streak'),
    resultArea: document.getElementById('resultArea'),
    battleDisplay: document.getElementById('battleDisplay'),
    userBattleIcon: document.getElementById('userBattleIcon'),
    compBattleIcon: document.getElementById('compBattleIcon'),
    historySection: document.getElementById('historySection'),
    historyList: document.getElementById('historyList'),
    resetBtn: document.getElementById('resetBtn'),
    bestOf5Btn: document.getElementById('bestOf5Btn'),
    infiniteBtn: document.getElementById('infiniteBtn')
};

function getComputerChoice() {
    const choiceKeys = Object.keys(choices);
    return choiceKeys[Math.floor(Math.random() * choiceKeys.length)];
}

function determineWinner(userChoice, compChoice) {
    if (userChoice === compChoice) return 'draw';
    return choices[userChoice].beats === compChoice ? 'win' : 'lose';
}

function updateStats() {
    elements.userScore.textContent = gameState.userScore;
    elements.compScore.textContent = gameState.compScore;
    elements.roundsPlayed.textContent = gameState.roundsPlayed;
    
    const winRate = gameState.roundsPlayed > 0 
        ? Math.round((gameState.wins / gameState.roundsPlayed) * 100) 
        : 0;
    elements.winRate.textContent = winRate + '%';
    elements.streak.textContent = gameState.streak;
}

function addToHistory(userChoice, compChoice, result) {
    const historyItem = {
        round: gameState.roundsPlayed,
        userChoice,
        compChoice,
        result
    };
    gameState.history.unshift(historyItem);
    
    if (gameState.history.length > 10) {
        gameState.history.pop();
    }

    updateHistoryDisplay();
}

function updateHistoryDisplay() {
    if (gameState.history.length > 0) {
        elements.historySection.style.display = 'block';
        elements.historyList.innerHTML = gameState.history.map(item => {
            const resultClass = item.result === 'win' ? 'win' : item.result === 'lose' ? 'lose' : 'draw';
            const resultText = item.result === 'win' ? 'Won' : item.result === 'lose' ? 'Lost' : 'Draw';
            return `
                <div class="history-item">
                    <span class="history-round">Round ${item.round}</span>
                    <span>${choices[item.userChoice].icon} vs ${choices[item.compChoice].icon}</span>
                    <span class="${resultClass}">${resultText}</span>
                </div>
            `;
        }).join('');
    }
}

function showResult(userChoice, compChoice, result) {
    elements.battleDisplay.style.display = 'flex';
    elements.userBattleIcon.textContent = choices[userChoice].icon;
    elements.compBattleIcon.textContent = choices[compChoice].icon;

    let message, detail, messageClass;
    
    if (result === 'draw') {
        message = "It's a Draw!";
        detail = `Both chose ${userChoice}`;
        messageClass = 'draw';
    } else if (result === 'win') {
        message = "You Win!";
        detail = `${userChoice.charAt(0).toUpperCase() + userChoice.slice(1)} beats ${compChoice}`;
        messageClass = 'win';
        gameState.userScore++;
        gameState.wins++;
        gameState.streak++;
    } else {
        message = "You Lose!";
        detail = `${compChoice.charAt(0).toUpperCase() + compChoice.slice(1)} beats ${userChoice}`;
        messageClass = 'lose';
        gameState.compScore++;
        gameState.streak = 0;
    }

    gameState.roundsPlayed++;
    addToHistory(userChoice, compChoice, result);
    updateStats();

    elements.resultArea.innerHTML = `
        <div class="result-message ${messageClass}">${message}</div>
        <div class="result-detail">${detail}</div>
    `;

    elements.resultArea.classList.add('pulse');
    setTimeout(() => elements.resultArea.classList.remove('pulse'), 500);

    checkGameEnd();
}

function checkGameEnd() {
    if (gameState.mode === 'bestof5') {
        // Check if 5 rounds are complete
        if (gameState.roundsPlayed >= 5) {
            setTimeout(() => {
                let resultMessage, resultClass, resultDetail;
                
                if (gameState.userScore > gameState.compScore) {
                    resultMessage = '🎉 Victory! 🎉';
                    resultClass = 'win';
                    resultDetail = `You won ${gameState.userScore}-${gameState.compScore}!`;
                } else if (gameState.compScore > gameState.userScore) {
                    resultMessage = 'Game Over';
                    resultClass = 'lose';
                    resultDetail = `Computer won ${gameState.compScore}-${gameState.userScore}!`;
                } else {
                    resultMessage = "It's a Tie!";
                    resultClass = 'draw';
                    resultDetail = `Both scored ${gameState.userScore} points!`;
                }
                
                elements.resultArea.innerHTML = `
                    <div class="result-message ${resultClass}">${resultMessage}</div>
                    <div class="result-detail">${resultDetail}</div>
                `;
                disableChoices();
            }, 1000);
        }
    }
    // Infinite mode never ends
}

function disableChoices() {
    document.querySelectorAll('.choice-card').forEach(card => {
        card.style.pointerEvents = 'none';
        card.style.opacity = '0.5';
    });
}

function enableChoices() {
    document.querySelectorAll('.choice-card').forEach(card => {
        card.style.pointerEvents = 'auto';
        card.style.opacity = '1';
    });
}

function playRound(userChoice) {
    if (!gameState.gameStarted) {
        elements.resultArea.innerHTML = `
            <div class="result-message" style="color: #fbbf24;">Select a Mode First!</div>
            <div class="result-detail">Choose "Best of 5" or "Infinite Mode" above to start playing</div>
        `;
        return;
    }
    const compChoice = getComputerChoice();
    const result = determineWinner(userChoice, compChoice);
    showResult(userChoice, compChoice, result);
}

function resetGame() {
    const currentMode = gameState.mode;
    gameState = {
        userScore: 0,
        compScore: 0,
        roundsPlayed: 0,
        wins: 0,
        streak: 0,
        history: [],
        mode: currentMode,
        targetScore: 5,
        gameStarted: currentMode !== null
    };

    updateStats();
    
    if (gameState.gameStarted) {
        elements.resultArea.innerHTML = `
            <div class="result-message">Game Reset!</div>
            <div class="result-detail">Pick your move to continue playing ${currentMode === 'bestof5' ? 'Best of 5' : 'Infinite Mode'}</div>
        `;
    } else {
        elements.resultArea.innerHTML = `
            <div class="result-message">Ready to Play?</div>
            <div class="result-detail">Choose a game mode above to start</div>
        `;
    }
    
    elements.battleDisplay.style.display = 'none';
    elements.historySection.style.display = 'none';
    elements.historyList.innerHTML = '';
    enableChoices();
}

function setGameMode(mode) {
    gameState.mode = mode;
    gameState.gameStarted = true;
    
    // Update button styles
    if (mode === 'bestof5') {
        elements.bestOf5Btn.style.background = 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)';
        elements.bestOf5Btn.style.border = 'none';
        elements.infiniteBtn.style.background = 'rgba(255,255,255,0.25)';
        elements.infiniteBtn.style.border = '2px solid rgba(255,255,255,0.3)';
    } else {
        elements.infiniteBtn.style.background = 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';
        elements.infiniteBtn.style.border = 'none';
        elements.bestOf5Btn.style.background = 'rgba(255,255,255,0.25)';
        elements.bestOf5Btn.style.border = '2px solid rgba(255,255,255,0.3)';
    }
    
    resetGame();
    elements.resultArea.innerHTML = `
        <div class="result-message">Let's Go!</div>
        <div class="result-detail">Playing ${mode === 'bestof5' ? 'Best of 5' : 'Infinite Mode'} - Make your first move!</div>
    `;
}

document.querySelectorAll('.choice-card').forEach(card => {
    card.addEventListener('click', () => {
        const choice = card.dataset.choice;
        playRound(choice);
    });
});

elements.resetBtn.addEventListener('click', resetGame);
elements.bestOf5Btn.addEventListener('click', () => setGameMode('bestof5'));
elements.infiniteBtn.addEventListener('click', () => setGameMode('infinite'));