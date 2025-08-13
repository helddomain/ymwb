
// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').innerText = new Date().getFullYear();
    
    // Navbar scroll behavior
    const navbar = document.getElementById('navbar');
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    
    window.addEventListener('scroll', function() {
      // Add scrolled class to navbar when scrolled
      if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
      
      // Show/hide scroll to top button
      if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('visible');
      } else {
        scrollToTopBtn.classList.remove('visible');
      }
      
      // Feature cards animation
      const featureCards = document.querySelectorAll('.feature-card');
      featureCards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          // Apply animation with the delay from the data attribute
          setTimeout(() => {
            card.classList.add('animate');
          }, parseInt(card.dataset.delay || 0));
        }
      });
    });
    
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    mobileMenuToggle.addEventListener('click', function() {
      // Toggle mobile menu
      if (mobileMenu.style.display === 'flex') {
        mobileMenu.style.display = 'none';
        mobileMenuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
      } else {
        mobileMenu.style.display = 'flex';
        mobileMenuToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
      }
    });
    
    // Close mobile menu when clicking a link
    const mobileMenuLinks = document.querySelectorAll('.mobile-nav-link, .mobile-download-btn');
    
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.style.display = 'none';
        mobileMenuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
      });
    });
    
    // Scroll to top button
    scrollToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    // Gallery modal functionality
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image');
    const closeModal = document.querySelector('.close-modal');
    
    galleryItems.forEach(item => {
      item.addEventListener('click', function() {
        const imgSrc = this.querySelector('img').src;
        const imgAlt = this.querySelector('img').alt;
        
        modalImg.src = imgSrc;
        modalImg.alt = imgAlt;
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
      });
    });
    
    // Close modal on X button click
    closeModal.addEventListener('click', function() {
      modal.classList.remove('show');
      document.body.style.overflow = ''; // Re-enable scrolling
    });
    
    // Close modal when clicking outside the image
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.classList.remove('show');
        document.body.style.overflow = ''; // Re-enable scrolling
      }
    });
    
    // FAQ accordion functionality
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
      const header = item.querySelector('.accordion-header');
      
      header.addEventListener('click', function() {
        // Close all other open items
        accordionItems.forEach(otherItem => {
          if (otherItem !== item && otherItem.classList.contains('active')) {
            otherItem.classList.remove('active');
            const content = otherItem.querySelector('.accordion-content');
            content.style.height = "0";
          }
        });
        
        // Toggle current item
        item.classList.toggle('active');
        const content = item.querySelector('.accordion-content');
        
        if (item.classList.contains('active')) {
          content.style.height = content.scrollHeight + "px";
        } else {
          content.style.height = "0";
        }
      });
    });
    
    // Trigger scroll event to initialize animations
    window.dispatchEvent(new Event('scroll'));
  });
  