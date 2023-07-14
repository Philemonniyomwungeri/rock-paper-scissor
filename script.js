const selectionButtons = document.querySelectorall('[data-selection]')

selectionButtons.foreach(selectionButtons => {
    selectionButton.addEventListener('click', e =>{
        const selectionName = selectionButton.dataset.selection
        makeselection(selectionName)
    })
})
function makeselection() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  function playRound(initPlay, computerSelection) {
    initPlay = initPlay.toLowerCase();
  
    if (!['rock', 'paper', 'scissors'].includes(initPlay)) {
      return 'Invalid selection. Please choose rock, paper, or scissors.';
    }
  
    if (initPlay === computerSelection) {
      return 'It\'s a tie!';
    }
  
    if (
      (initPlay === 'rock' && computerSelection === 'scissors') ||
      (initPlay === 'paper' && computerSelection === 'rock') ||
      (initPlay === 'scissors' && computerSelection === 'paper')
    ) {
      return `You win! ${initPlay} beats ${computerSelection}.`;
    } else {
      return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
  }
  
  function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 0; i < 5; i++) {
      const initPlay = prompt('Enter your choice: rock, paper, or scissors');
      const computerSelection = computerPlay();
      const result = playRound(playerSelection, computerSelection);
      console.log(result);
  
      if (result.includes('win')) {
        playerScore++;
      } else if (result.includes('lose')) {
        computerScore++;
      }
    }
  
    console.log(`Final Score - You: ${playerScore} | Computer: ${computerScore}`);
  
    if (playerScore > computerScore) {
      console.log('Congratulations! You won the game!');
    } else if (playerScore < computerScore) {
      console.log('Sorry! You lost the game.');
    } else {
      console.log('It\'s a tie game!');
    }
  }
  
  game();
  