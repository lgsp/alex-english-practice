document.addEventListener('DOMContentLoaded', () => {
    const options = document.querySelectorAll('.option-item');

    options.forEach(option => {
        option.addEventListener('click', function() {
            const parent = this.closest('.options');
            const correctIndex = parseInt(parent.getAttribute('data-correct'));
            const siblings = parent.querySelectorAll('.option-item');
            
            siblings.forEach(s => s.style.pointerEvents = 'none');
            const currentIndex = Array.from(siblings).indexOf(this);

            if (currentIndex === correctIndex) {
                this.style.backgroundColor = "#27ae60";
                this.style.color = "white";
                this.style.borderColor = "#27ae60";
            } else {
                this.style.backgroundColor = "#e74c3c";
                this.style.color = "white";
                this.style.borderColor = "#e74c3c";
                siblings[correctIndex].style.backgroundColor = "#27ae60";
                siblings[correctIndex].style.color = "white";
                siblings[correctIndex].style.borderColor = "#27ae60";
            }
        });
    });
});