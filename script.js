document.addEventListener('DOMContentLoaded', function() {
    var dropdownButtons = document.querySelectorAll('.dropdown-button');
    var menuToggle = document.getElementById('menu-toggle');
    var menuList = document.getElementById('menu-list');
    
    // Assurer que tous les sous-menus sont cachés au chargement de la page
    dropdownButtons.forEach(function(button) {
        var menuId = button.getAttribute('data-menu');
        var dropdownMenu = document.getElementById(menuId);
        dropdownMenu.style.display = 'none';
        
        // Toggle le menu déroulant lors du clic
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Empêche la redirection si c'est un lien
            var isVisible = dropdownMenu.style.display === 'block';
            // Ferme tous les autres sous-menus
            document.querySelectorAll('.submenu').forEach(function(menu) {
                menu.style.display = 'none';
            });
            // Affiche ou cache le sous-menu cliqué
            dropdownMenu.style.display = isVisible ? 'none' : 'block';
        });
    });

    // Toggle le menu principal mobile
    menuToggle.addEventListener('click', function() {
        menuList.classList.toggle('show');
    });

    // Fermer les sous-menus si on clique en dehors
    document.addEventListener('click', function(event) {
        if (!event.target.classList.contains('dropdown-button') && !menuToggle.contains(event.target)) {
            document.querySelectorAll('.submenu').forEach(function(menu) {
                menu.style.display = 'none';
            });
        }
        if (!menuToggle.contains(event.target) && !menuList.contains(event.target)) {
            menuList.classList.remove('show');
        }
    });
});


//animation
document.addEventListener('DOMContentLoaded', function() {
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    let currentIndex = 0;

    function showNextTestimonial() {
        testimonialItems[currentIndex].style.opacity = 0;
        testimonialItems[currentIndex].style.transform = 'translateX(-100%)';
        
        currentIndex = (currentIndex + 1) % testimonialItems.length;
        
        testimonialItems[currentIndex].style.opacity = 1;
        testimonialItems[currentIndex].style.transform = 'translateX(0)';
    }

    setInterval(showNextTestimonial, 5000); // Change testimonial every 5 seconds
});
