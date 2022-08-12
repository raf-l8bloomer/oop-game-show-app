/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */




let game;

// initializes Game when 'start game' is clicked'
document.querySelector('#btn__reset').addEventListener('click', function(){
        game = new Game;
        game.startGame();
        console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

        
})

// captures the content of each key 'clicked' and initializes Game's handleInteraction
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('click',(e) => {
        const chosenLetter = e.target;
        game.handleInteraction(chosenLetter);
 }));
