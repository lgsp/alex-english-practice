document.addEventListener('DOMContentLoaded', () => {
    const optionButtons = document.querySelectorAll('.option-item');

    optionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const parentOptions = this.parentElement;
            const correctIndex = parseInt(parentOptions.getAttribute('data-correct'));
            const allOptions = parentOptions.querySelectorAll('.option-item');
            const currentIndex = Array.from(allOptions).indexOf(this);

            // Désactiver les boutons après le clic
            allOptions.forEach(btn => btn.style.pointerEvents = 'none');

            if (currentIndex === correctIndex) {
                this.style.backgroundColor = "#27ae60";
                this.style.color = "white";
            } else {
                this.style.backgroundColor = "#e74c3c";
                this.style.color = "white";
                allOptions[correctIndex].style.backgroundColor = "#27ae60";
                allOptions[correctIndex].style.color = "white";
            }
        });
    });
});