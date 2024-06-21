document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar .nav-link');
    const discoverMeButton = document.getElementById('discover-me');
    const aboutLink = document.querySelector('.navbar a[href="#apropos"]');

    function activateLink(link) {
        navLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            activateLink(this);
        });
    });

    discoverMeButton.addEventListener('click', function() {
        activateLink(aboutLink);
    });
});