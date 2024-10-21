class Quiz {
    // YOUR CODE HERE:
    //
    constructor(questionsValue, timeLimitValue, timeRemainingValue) {
        this.questions = questionsValue
        this.timeLimit = timeLimitValue
        this.timeRemaining = timeRemainingValue
        this.correctAnswers = 0
        this.currentQuestionIndex = 0
    }

    getQuestion() {

        let currentQuestion

        currentQuestion = this.questions[this.currentQuestionIndex]

        return currentQuestion
    }

    moveToNextQuestion() {
        this.currentQuestionIndex++
    }

    shuffleQuestions() {
        let randomQuestion = [];
        let n = this.questions.length;
        let i

        if (n) {
            i = Math.floor(Math.random() * this.questions.length);

            if (i in this.questions) {
                randomQuestion.push(this.questions[i]);
                delete this.questions[i];
                n--
            }

        }

        return randomQuestion;
    }

    checkAnswer(answer) {

        if (answer === this.questions[this.currentQuestionIndex].answer) {

            this.correctAnswers++

        }

    }

    hasEnded() {

        if (this.currentQuestionIndex < this.questions.length) {
            return false
        } else if (this.currentQuestionIndex = this.questions.length) {
            return true
        }

    }
}




