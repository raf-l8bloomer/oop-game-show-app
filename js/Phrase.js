/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase{
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
     
    }

    /**
    * Display phrase on game board
    */
    addPhraseToDisplay(){
        // splits phrase into array and creates individual elements out of characters in phrase
        this.phrase.split("").forEach(character => {
            const phraseUL = document.querySelector('#phrase ul');
            const li = document.createElement('li');
            li.textContent = character;
            phraseUL.appendChild(li);
            if (character !== " ") {
                li.setAttribute('class', `hide letter ${character}`);
            } else {
                li.setAttribute('class', 'space');
            }
        }
    )}


    // /**
    // * Checks if passed letter is in phrase
    // * @param (string) letter - Letter to check
    // */
    checkLetter(letter) {
        if (this.phrase.split("").includes(letter)){
            return true;
        } else {
            return false;
            
        }
    };

    // /**
    // * Displays passed letter on screen after a match is found
    // * @param (string) letter - Letter to display
    // */
    showMatchedLetter(letter){
        const matched = document.querySelectorAll(`.${letter}`);
        matched.forEach(match => match.classList.replace('hide', 'show'));
    }

}