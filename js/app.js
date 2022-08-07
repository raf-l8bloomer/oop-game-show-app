/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */



const startGame = document.querySelector('#btn__reset')

startGame.addEventListener('click', function(){
    const game = new Game;
    game.startGame();
})