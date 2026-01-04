
// navbar ilang
// Navbar scroll effect
var nav = document.querySelector('nav');
window.addEventListener('scroll', function() {
  if (window.pageYOffset > 100) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Navbar collapse untuk mobile
const navbarCollapse = document.querySelector('#navbarNav');

// Add a click event listener to the navbar collapse
navbarCollapse.addEventListener('click', function() {
  // Close navbar when clicking on a link (mobile)
  if (window.innerWidth < 992) {
    navbarCollapse.classList.remove('show');
    const navbarToggler = document.querySelector('.custom-hamburger');
    if (navbarToggler) {
      navbarToggler.setAttribute('aria-expanded', 'false');
    }
  }
});

// Close navbar when clicking outside (mobile)
document.addEventListener('click', function(event) {
  const navbarToggler = document.querySelector('.custom-hamburger');
  const navbarCollapse = document.querySelector('#navbarNav');
  
  if (window.innerWidth < 992 && 
      navbarCollapse.classList.contains('show') &&
      !navbarCollapse.contains(event.target) &&
      !navbarToggler.contains(event.target)) {
    navbarCollapse.classList.remove('show');
    if (navbarToggler) {
      navbarToggler.setAttribute('aria-expanded', 'false');
    }
  }
});

// Update active link on scroll (tanpa checkbox)
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

function updateActiveLink() {
  let scrollY = window.pageYOffset;
  
  // Jika di Home section (atas halaman)
  if (scrollY < 100) {
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#') {
        link.classList.add('active');
      }
    });
    return;
  }
  
  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');
    
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

// Scroll event listener
window.addEventListener('scroll', updateActiveLink);

// Handle menu item clicks (tanpa checkbox)
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    // Remove active class from all links
    navLinks.forEach(l => l.classList.remove('active'));
    
    // Add active class to clicked link
    this.classList.add('active');
    
    // Close mobile menu after click
    if (window.innerWidth < 992) {
      const navbarCollapse = document.querySelector('#navbarNav');
      const navbarToggler = document.querySelector('.custom-hamburger');
      
      if (navbarCollapse) {
        navbarCollapse.classList.remove('show');
      }
      if (navbarToggler) {
        navbarToggler.setAttribute('aria-expanded', 'false');
      }
    }
  });
});

// animasi tulisan
    var typed = new Typed(".typing", {
        strings: ["Software Engineer", "Front-end Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
});




