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
        this.activePhrase = phrase;
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

    handleInteraction(button){
        console.log(button);
        const letter = button.textContent;
        button.disabled = true;
        if(this.activePhrase.checkLetter(letter)) {
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(letter);
            this.checkForWin();
            if (this.checkForWin()){
                this.gameOver(this.checkForWin());
            }
        } else {
            button.classList.add('wrong');
            this.removeLife();
        }


    }
    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin() {
        const hide = document.querySelectorAll('.hide');
        if(hide.length > 0) {
            return false
        } else {
            return true;
        }
    };
    
    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
      const hearts = document.querySelectorAll('.tries img');
      this.missed += 1;
      hearts[this.missed - 1].src = "images/lostHeart.png"
      if (this.missed === 5){
        this.gameOver();
      }
    };

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        const start = document.querySelector('.start');
        const h1 = start.querySelector('h1');
        document.querySelector('#overlay').style.display = '';
        if (gameWon){
            h1.innerHTML = "Congratulations WINNER!"
            start.classList.add('win');
            this.resetGame();
        } else {
            h1.innerHTML = "Sorry, try again next time~"
            start.classList.add('lose');
            this.resetGame();
        };
    }   

     /**
    * Removes all 'li' elements from Phrase 'ul'
    * Resets shown letters on gameboard 
    * Enables keyboard buttons
    * Resets all hearts/lives
    */

    resetGame (){
        // const phraseDiv = document.querySelector('#phrase ul');
       
        this.activePhrase.split("").forEach(character => {
            const phraseDiv = document.querySelector('#phrase');
            const li = document.querySelectorAll('li');
            phraseDiv.removeChild(li);
        })

        while (phraseDiv.firstChild){
             phraseDiv.removeChild(phraseDiv.firstChild)} // https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/
              

        const matched = document.querySelectorAll(`.show`);
        matched.forEach(match => match.classList.replace('show', 'hide'));

        const buttons = document.querySelectorAll('.key');
        buttons.forEach(button => {
            button.disabled = false;
            button.classList.remove('chosen');
            button.classList.remove('wrong');
        })

        const hearts = document.querySelectorAll('.tries img');
        hearts.forEach(heart => heart.src = "images/liveHeart.png");



    }


}