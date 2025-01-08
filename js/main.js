document.addEventListener('DOMContentLoaded', function() {
    // Récupérer le chemin actuel
    const currentPath = window.location.pathname;
    
    // Récupérer tous les liens de navigation
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Pour chaque lien
    navLinks.forEach(link => {
        // Si le href du lien correspond au chemin actuel
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
        
        // Ajouter l'effet hover
        link.addEventListener('mouseenter', function() {
            this.style.color = 'var(--primary-color)';
        });
        
        link.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.color = '';
            }
        });
    });
}); 