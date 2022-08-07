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
    addPhraseToDisplay() {
        this.phrase.forEach(character => {
            const phraseDiv = document.querySelector('#phrase');
            const ul = phraseDiv.firstChild
            const li = document.createElement('li');
            ul.appendChild(li);
            if (character !== " ") {
                li.setAttribute('class', character);
                li.textContent = character;
            } else {
                li.setAttribute('class', 'space');
                li.textContent = character;
            }
        }
    )}


    checkLetter(){

    }

    showMatchedLetter(){

    }
}