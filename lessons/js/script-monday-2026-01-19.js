let current = 0;
let score = 0;
const questions = document.querySelectorAll('.question-container');
const nextBtn = document.getElementById('next-btn');
const progressText = document.getElementById('progress');

document.querySelectorAll('.option-btn').forEach(btn => {
    btn.onclick = function() {
        const container = questions[current];
        const buttons = container.querySelectorAll('.option-btn');
        const isCorrect = this.getAttribute('data-correct') === 'true';

        buttons.forEach(b => {
            b.style.pointerEvents = 'none';
            if(b.getAttribute('data-correct') === 'true') b.classList.add('correct');
        });

        if(!isCorrect) this.classList.add('wrong');
        else score++;

        nextBtn.style.display = 'block';
    };
});

nextBtn.onclick = function() {
    questions[current].classList.remove('active');
    current++;
    
    if(current < questions.length) {
        questions[current].classList.add('active');
        progressText.innerText = `Question ${current + 1} / ${questions.length}`;
        nextBtn.style.display = 'none';
    } else {
        showResult();
    }
};

function showResult() {
    document.getElementById('quiz-flow').innerHTML = `
        <div class="results">
            <h2>Assessment Complete!</h2>
            <div class="score">${score} / ${questions.length}</div>
            <p>Focus on 'BE' auxiliary for continuous forms!</p>
        </div>`;
    nextBtn.style.display = 'none';
}