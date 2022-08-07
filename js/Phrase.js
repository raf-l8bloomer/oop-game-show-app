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
        this.phrase.split("").forEach(character => {
            const phraseDiv = document.querySelector('#phrase');
            const li = document.createElement('li');
            li.textContent = character;
            phraseDiv.appendChild(li);
            if (character !== " ") {
                li.setAttribute('class', `hide letter ${character}`);
            } else {
                li.setAttribute('class', 'space');
            }
        }
    )}


    checkLetter(){

    }

    showMatchedLetter(){

    }
}