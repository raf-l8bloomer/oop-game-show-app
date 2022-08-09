/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */




let game;


document.querySelector('#btn__reset').addEventListener('click', function(){
    
    game = new Game
    game.startGame();
    console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
})

// const keys = document.querySelectorAll('.key');
//         keys.forEach(key => key.addEventListener('click',(e) => {
//              const chosenLetter = e.target.textContent;
//             game.handleInteraction(chosenLetter)
//         }));


