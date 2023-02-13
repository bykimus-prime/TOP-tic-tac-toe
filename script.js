// if you only ever need one of something, use a module. if you need multiples of something, use factories

const createPlayer = (name, marker) => {
   return {name, marker};
}

// gameboard module
const gameBoardModule = (function() {

   // make board array
   let board = [];
   for (i = 0; i < 9; i++) {
      board.push('');
   }

   let gameboard = document.querySelector('.gameboard');

   // add event listeners on each square
   Array.from(gameboard.children).forEach((cell, index) => {
      cell.addEventListener('click', () => {
         // display active player marker
         cell.innerHTML = (gameControllerModule.currentPlayer.marker);
         cell.setAttribute('data', gameControllerModule.currentPlayer.marker);
         // update array value to be that of active player
         board[index] = gameControllerModule.currentPlayer.marker;
         // remove event listener from the marked index
         cell.style.pointerEvents = 'none';
         gameControllerModule.nextPlayer();
      })
   });
   return {board};
})();

// game controller module
const gameControllerModule = (() => {

   // declare players
   const playerOne = createPlayer('Player 1', 'X');
   const playerTwo = createPlayer('Player 2', 'O');

   // starting point
   let currentPlayer = playerOne;

   // next player
   function nextPlayer() {
      if (currentPlayer === playerOne) {
         currentPlayer = playerTwo;
      } else{
         currentPlayer = playerOne;
      }
      // ? this.currentPlayer = playerTwo : this.currentPlayer = playerOne;
      console.log('nextPlayer() function ran')
      console.log('current player: ' + currentPlayer.name);
   }

   return {
      currentPlayer,
      nextPlayer,
   };
})();

// modal logic
// const openAddBookModal = () => {
//    addBookModal.classList.add('active');
//    overlay.classList.add('active');
// }

// const closeAddBookModal = () => {
//    addBookModal.classList.remove('active');
//    overlay.classList.remove('active');
// }

// addNewBookBtn.onclick = openAddBookModal;
// overlay.onclick = closeAddBookModal;