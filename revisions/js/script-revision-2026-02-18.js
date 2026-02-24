document.addEventListener('DOMContentLoaded', () => {
    // Sélectionne toutes les options de réponse
    const options = document.querySelectorAll('.option-item');

    options.forEach(option => {
        option.addEventListener('click', function() {
            // Trouve le conteneur parent pour limiter l'action à une seule question
            const parent = this.closest('.options');
            const correctIndex = parseInt(parent.getAttribute('data-correct'));
            const siblings = parent.querySelectorAll('.option-item');
            
            // Désactive les clics sur toutes les options de cette question après le premier choix
            siblings.forEach(s => s.style.pointerEvents = 'none');
            
            // Récupère l'index du bouton cliqué
            const currentIndex = Array.from(siblings).indexOf(this);

            if (currentIndex === correctIndex) {
                // Bonne réponse : Vert
                this.style.backgroundColor = "#27ae60";
                this.style.color = "white";
                this.style.borderColor = "#27ae60";
            } else {
                // Mauvaise réponse : Rouge
                this.style.backgroundColor = "#e74c3c";
                this.style.color = "white";
                this.style.borderColor = "#e74c3c";
                
                // Affiche quand même la bonne réponse en vert
                siblings[correctIndex].style.backgroundColor = "#27ae60";
                siblings[correctIndex].style.color = "white";
                siblings[correctIndex].style.borderColor = "#27ae60";
            }
        });
    });
});