/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor () {
        this.missed = 0;
        this.phrases = [
            {phrase: 'Alien Superstar'},
            {phrase: 'America Has A Problem'},
            {phrase: 'Church Girl'},
            {phrase: 'Cuff It'},
            {phrase: 'Plastic Off The Sofa'}
        ];
        this.activePhrase = null;
    }

    startGame(){

    }

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */

    getRandomPhrase () {
       const randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
       return randomPhrase;    
    }
}