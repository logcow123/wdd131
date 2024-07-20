document.addEventListener('DOMContentLoaded', function() {
    const questionContainer = document.getElementById('question-container');
    const questionElement = document.getElementById('question-text');
    const answerButtonsElement = document.getElementById('answer-buttons');
    const progressBar = document.getElementById('progress');
    const progressText = document.getElementById('progress-text');
    const resultElement = document.getElementById('result');

    let currentQuestionIndex = 0;
    let score = 0;

    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        showQuestion(quizQuestions[currentQuestionIndex]);
    }

    function showQuestion(question) {
        questionElement.innerText = question.question;
        answerButtonsElement.innerHTML = '';
        question.options.forEach((answer, index) => {
            const button = document.createElement('button');
            button.innerText = answer.text;
            button.classList.add('btn');
            button.addEventListener('click', () => selectAnswer(index));
            answerButtonsElement.appendChild(button);
        });
        updateProgress();
    }

    function updateProgress() {
        const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
        progressBar.style.width = progress + '%';
        progressText.innerText = `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`;
    }

    function selectAnswer(index) {
        const question = quizQuestions[currentQuestionIndex];
        if (question.options[index].correct) {
            score++;
        }
        
        currentQuestionIndex++;
        
        if (currentQuestionIndex < quizQuestions.length) {
            showQuestion(quizQuestions[currentQuestionIndex]);
        } else {
            showResult();
        }
    }

    function showResult() {
        questionContainer.classList.add('hide');
        resultElement.classList.remove('hide');
        resultElement.innerText = `You scored ${score} out of ${quizQuestions.length}`;
    }

    startQuiz();
});