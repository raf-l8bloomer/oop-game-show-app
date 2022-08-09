/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor () {
        this.missed = 0;
        this.phrases = [
            new Phrase ('Alien Superstar'),
            new Phrase ('America Has A Problem'),
            new Phrase ('Church Girl'),
            new Phrase ('Cuff It'),
            new Phrase ('Plastic Off The Sofa')
        ];
        this.activePhrase = null;
    }


    /**
    * Begins game by selecting a random phrase and displaying it to user
    */


    startGame(){
        document.querySelector('#overlay').style.display = 'none';
        const phrase = this.getRandomPhrase()
        phrase.addPhraseToDisplay();
        this.activePhrase = phrase ;
    }

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */

    getRandomPhrase () {
        const randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
        return randomPhrase;
    }

    /**
    * Allows game interaction with clicks
    * @return {Object} chosen letters to check if in phrase
    */

    handleInteraction(){


    }
    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin() {

        const activeLetters = document.querySelectorAll('.letter');
        activeLetters.forEach(letter => {
            if (letter.classList.contains('hide')) {
                console.log('false');
            } else {
                console.log('true');
            }
        })
    };
    
    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        this.missed += 1;
        document.querySelector('.tries').style.display = "none";
        if (this.missed === 5){
            //end game
            console.log('GAME OVER');
        }
    };

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        if (gameWon){
            // winner
        } else {
            //loser
            document.querySelector(#game-over-message).innerHTML = "GAME OVER";
        }
    };


}