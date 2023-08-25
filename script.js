  // select the three buttons and the divs, add an eventlistener to the three buttons which starts the round

    const buttons = document.querySelectorAll("button")

    const div = document.querySelector(".player-text");
    const div2 = document.querySelector(".comp-text");
    const div3 = document.querySelector(".results");

    buttons.forEach(function(button) {
        button.addEventListener('click', startRound)
    });

  // select the three icons for each side

  const playerRockImg = document.querySelector(".rock-img-p")
  const playerPaperImg = document.querySelector(".paper-img-p")
  const playerScissorsImg = document.querySelector(".scissors-img-p")

  const compRockImg = document.querySelector(".rock-img-c")
  const compPaperImg = document.querySelector(".paper-img-c")
  const compScissorsImg = document.querySelector(".scissors-img-c")

  // select point counters

  let playerPoints = document.querySelector(".player-points-value")
  let computerPoints = document.querySelector(".computer-points-value")

  let playercounter = 0;
  let computercounter = 0;

  playerPoints.innerHTML = playercounter;
  computerPoints.innerHTML = computercounter;

  // create a  getComputerChoice function that returns either Rock, Paper or Scissors

  function getComputerChoice() {
    const choice = ['rock' , 'paper' , 'scissors'];
    let random = Math.floor(Math.random() * choice.length);
    return choice[random];
  };

  // create a  function that confronts player selection with computer selection

  function confrontSelection(playerSelection, computerSelection) {

    if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'rock')) {
      div3.classList.remove("win")
      div3.classList.add("lose")

      // raise the computer point counter by one

      computercounter += 1;
      computerPoints.innerHTML = computercounter;

      return `You lose! ${computerSelection} beats ${playerSelection}!`;
    
    } else if ((computerSelection === 'rock' && playerSelection === 'paper') || (computerSelection === 'paper' && playerSelection === 'scissors') || (computerSelection === 'scissors' && playerSelection === 'rock')) {
      
      div3.classList.remove("lose")
      div3.classList.add("win");
      
      // raise the player point counter by one
      
      playercounter += 1;
      playerPoints.innerHTML = playercounter;

      return `You win! ${playerSelection} beats ${computerSelection}!`;
    } else {
      div3.classList.remove("lose")
      div3.classList.remove("win");
      return "It's a tie!";
    }
  };

  // create a  function that starts a round. 


  function startRound() {

    // hide all icons

    playerPaperImg.classList.add("hidden")  
    playerScissorsImg.classList.add("hidden")  
    playerRockImg.classList.add("hidden")
    
    compPaperImg.classList.add("hidden")  
    compScissorsImg.classList.add("hidden")  
    compRockImg.classList.add("hidden")    

    document.querySelectorAll("button").forEach((button) => { button.disabled = true })
    div.classList.add("fade");
    const playerSelection = this.textContent.toLowerCase();
    const computerSelection = getComputerChoice()
    div.textContent = `You selected: ${playerSelection}`;

        
    // show rock/paper/scissors icon on player side depending on choice
  
    if (playerSelection === "rock") {
      playerRockImg.classList.remove("hidden")    
    } else if (playerSelection === "scissors") {
      playerScissorsImg.classList.remove("hidden")   
      } else if (playerSelection === "paper") {
          playerPaperImg.classList.remove("hidden")   
        };

    
    // set timeout to delay computer selection 


    setTimeout(() => { 
      div2.classList.add("fade");
      div2.textContent = `Your opponent selected: ${computerSelection}`;


      // show rock/paper/scissors image on computer side depending on choice


      if (computerSelection === "rock") {
        compRockImg.classList.remove("hidden")    
      } else if (computerSelection === "scissors") {
          compScissorsImg.classList.remove("hidden")   
        } else if (computerSelection === "paper") {
            compPaperImg.classList.remove("hidden")   
          }

    } , 1000)

    // set timeout to delay results 

    setTimeout(() => { 
      div3.textContent = confrontSelection(playerSelection, computerSelection) 
      div3.classList.add("fade");
    }, 2000)
    setTimeout(removeFadeClass, 3000)

    // set timeout to disable buttons until end of round

    setTimeout(() => { document.querySelectorAll("button").forEach((button) => { button.disabled = false }) }, 3000)

  };


  // create functions that add and remove the fade class so to give the fade effect to popup text

  function addFadeClass() {
    div.classList.add("fade");
    div2.classList.add("fade");
    div3.classList.add("fade");
  }

  function removeFadeClass() {
    div.classList.remove("fade");
    div2.classList.remove("fade");
    div3.classList.remove("fade");
  }