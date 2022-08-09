/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */




// let game;


// document.querySelector('#btn__reset').addEventListener('click', function(){
    
//     game = new Game;
//     game.startGame();
// })

// const keys = document.querySelectorAll('.key');
//         keys.forEach(key => key.addEventListener('click',(e) => {
//              const chosenLetter = e.target.textContent;
//             game.handleInteraction(chosenLetter)
//         }));


const game = new Game();
game.phrases.forEach((phrase, index) => {
console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
});