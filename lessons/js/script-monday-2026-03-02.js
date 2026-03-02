document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.option-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const parent = this.closest('.options');
            const correctIndex = parseInt(parent.getAttribute('data-correct'));
            const siblings = Array.from(parent.querySelectorAll('.option-btn'));
            const currentIndex = siblings.indexOf(this);

            // Bloquer les clics après réponse
            siblings.forEach(btn => btn.disabled = true);

            if (currentIndex === correctIndex) {
                this.style.backgroundColor = "#27ae60";
                this.style.color = "white";
                this.style.borderColor = "#27ae60";
            } else {
                this.style.backgroundColor = "#e74c3c";
                this.style.color = "white";
                this.style.borderColor = "#e74c3c";
                // Montrer la bonne réponse
                siblings[correctIndex].style.backgroundColor = "#27ae60";
                siblings[correctIndex].style.color = "white";
                siblings[correctIndex].style.borderColor = "#27ae60";
            }
        });
    });
});