/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// const phrase = new Phrase();
// const game = new Game();

// const phrase = new Phrase('Life is like a box of chocolates');
// console.log(`Phrase - phrase: ${phrase.phrase}`);

const logPhrase = (phrase) => {
    console.log( phrase.phrase);
    };
    const game = new Game();
    logPhrase(game.getRandomPhrase());

game.getRandomPhrase().addPhraseToDisplay();