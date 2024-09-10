document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.page');
    const navLinks = document.querySelectorAll('#navigation a');

    // Show the section corresponding to the clicked nav link
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);

            // Hide all sections
            sections.forEach(section => {
                section.classList.remove('active');
            });

            // Show the selected section
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });

    // Initially show the "About" section
    document.getElementById('about').classList.add('active');
});
