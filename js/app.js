const game = () => {
  let pScore = 0;
  let cScore = 0;

  // Start the game
  const startGame = () => {
    const mainScreen = document.querySelector('.presentation');
    const playButton = document.querySelector('.presentation button');
    const match = document.querySelector('.match');

    playButton.addEventListener('click', () => {
      mainScreen.classList.add('fadeOut');
      match.classList.add('fadeIn');
    });
  }
  // Play Match
  const playMatch = () => {
    const options = document.querySelectorAll('.options button');
    const playerHand = document.querySelector('.player-hand');
    const computerHand = document.querySelector('.computer-hand');
    const hands = document.querySelectorAll('.hands img');

    hands.forEach(hand => {
      hand.addEventListener('animationend', function() {
        this.style.animation = '';
      });
    })
    
    // Computer Options
    const computerOptions = ['pedra', 'papel', 'tesoura'];

    options.forEach(option => {
      option.addEventListener('click', function() {
        // Computer Choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber]

        setTimeout(() => {
        // Call compareHands
        compareHands(this.textContent, computerChoice);

        // Update Images
        playerHand.src = `./assets/${this.textContent}.png`;
        computerHand.src = `./assets/${computerChoice}.png`;
        }, 820)

        // Animation
        playerHand.style.animation = "playerShake 1s ease";
        computerHand.style.animation = "computerShake 1s ease";
      })
    });

    const updateScore = () => {
      const playerScore = document.querySelector('.player-score p');
      const computerScore = document.querySelector('.computer-score p');
      playerScore.textContent = pScore;
      computerScore.textContent = cScore;
    }

      const compareHands = (playerChoice, computerChoice) => {
      
      // Update Text
      const winner = document.querySelector('.winner');

      // Check for a tie
      if (playerChoice === computerChoice) {
        winner.textContent = 'Empate'
        return;
      }

      // Check for Rock
      if (playerChoice === 'pedra') {
        if (computerChoice === 'tesoura') {
          winner.textContent = 'Você venceu'
          pScore++;
          updateScore();
          return;
        } else {
          winner.textContent = 'Computador venceu';
          cScore++;
          updateScore();
          return;
        }
      }

      // Check for Paper
      if (playerChoice === 'papel') {
        if (computerChoice === 'tesoura') {
          winner.textContent = 'Computador venceu'
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = 'Você venceu';
          pScore++;
          updateScore();
          return;
        }
      }

      // Check for Scissors
      if (playerChoice === 'tesoura') {
        if (computerChoice === 'pedra') {
          winner.textContent = 'Computador venceu'
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = 'Você venceu';
          pScore++;
          updateScore();
          return;
        }
      }
    }
  }

  // Call the inner functions
  startGame();
  playMatch();
}

// Start the game function
game();