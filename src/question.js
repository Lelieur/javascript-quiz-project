class Question {
    // YOUR CODE HERE:
    //
    constructor(textValue, choicesValue, answerValue, difficultyValue) {
        this.text = textValue
        this.choices = choicesValue
        this.answer = answerValue
        this.difficulty = difficultyValue
    }
    shuffleChoices() {
        let randomChoices = [];
        let n = this.choices.length;
        let i

        if (n) {
            i = Math.floor(Math.random() * this.choices.length);

            if (i in this.choices) {
                randomChoices.push(this.choices[i]);
                delete this.choices[i];
                n--
            }

        }

        return randomChoices;
    }
}




