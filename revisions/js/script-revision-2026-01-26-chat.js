// Petit script rapide pour le nouveau quiz "chat"
        document.addEventListener('DOMContentLoaded', () => {
            const chatOptions = document.querySelectorAll('#quiz-chat .option-item');
            chatOptions.forEach((option, index) => {
                option.addEventListener('click', function() {
                    const parent = this.closest('.options');
                    const correctIndex = parseInt(parent.getAttribute('data-correct'));
                    const siblings = parent.querySelectorAll('.option-item');
                    
                    siblings.forEach(s => s.style.pointerEvents = 'none');
                    
                    const currentIndex = Array.from(siblings).indexOf(this);
                    if (currentIndex === correctIndex) {
                        this.style.background = "#27ae60";
                        this.style.color = "white";
                    } else {
                        this.style.background = "#e74c3c";
                        this.style.color = "white";
                        siblings[correctIndex].style.background = "#27ae60";
                        siblings[correctIndex].style.color = "white";
                    }
                });
            });
        });