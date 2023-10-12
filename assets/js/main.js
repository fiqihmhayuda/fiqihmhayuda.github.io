// navbar ilang
    var nav = document.querySelector('nav');

        window.addEventListener('scroll', function() {
        if (window.pageYOffset > 100) {
          nav.classList.add('bs-dark-bg-subtle', 'shadow');
        } else {
         nav.classList.remove('bs-dark-bg-subtle', 'shadow');
     }
});
// navbar ilang ketika di klik
    const navbarCollapse = document.querySelector('#navbarNav');

        // Add a click event listener to the navbar collapse
    navbarCollapse.addEventListener('click', function() {
        // Toggle the collapse state
    navbarCollapse.classList.toggle('show');
});
        // When the navbar collapse is shown, add a class to the navbar
    navbarCollapse.addEventListener('shown.bs.collapse', function() {
        // Add the class
    document.querySelector('.navbar').classList.add('open');
});
        // When the navbar collapse is hidden, remove the class from the navbar
    navbarCollapse.addEventListener('hidden.bs.collapse', function() {
        // Remove the class
    document.querySelector('.navbar').classList.remove('open');
});

// animasi tulisan
    var typed = new Typed(".typing", {
        strings: ["Software Engineer", "Front-end Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
});



