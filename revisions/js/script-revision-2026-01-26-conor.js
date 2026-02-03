// Logique pour la vidéo de Conor Neill
document.addEventListener('DOMContentLoaded', () => {
    // On cible uniquement les quiz de la première vidéo par leurs IDs
    const conorSections = ['#quiz-comprehension', '#quiz-vocab', '#quiz-grammar'];
    
    conorSections.forEach(id => {
        const container = document.querySelector(id);
        if (!container) return;

        const options = container.querySelectorAll('.option-item, li');
        const correctIndex = parseInt(container.querySelector('.options').getAttribute('data-correct'));

        options.forEach((option, index) => {
            option.addEventListener('click', function() {
                options.forEach(opt => opt.style.pointerEvents = 'none');
                if (index === correctIndex) {
                    this.classList.add('correct');
                } else {
                    this.classList.add('wrong');
                    options[correctIndex].classList.add('correct');
                }
            });
        });
    });
});