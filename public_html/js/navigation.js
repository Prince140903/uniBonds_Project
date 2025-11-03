/**
 * Navigation Component
 * Handles responsive navigation, dropdowns, and mobile menu
 */

class Navigation {
  constructor() {
    this.navbar = document.querySelector('.navbar');
    this.mobileToggle = document.querySelector('.mobile-menu-toggle');
    this.menu = document.querySelector('.navbar-menu');
    this.dropdowns = document.querySelectorAll('.navbar-item.has-dropdown');
    
    // Only initialize if navbar exists
    if (this.navbar) {
      this.init();
    }
  }

  init() {
    // Mobile menu toggle
    if (this.mobileToggle && this.menu) {
      this.mobileToggle.addEventListener('click', () => this.toggleMobileMenu());
    }

    // Dropdown toggles for mobile
    this.dropdowns.forEach(dropdown => {
      const link = dropdown.querySelector('.navbar-link');
      link.addEventListener('click', (e) => {
        if (window.innerWidth <= 1024) {
          e.preventDefault();
          this.toggleDropdown(dropdown);
        }
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!this.navbar.contains(e.target) && this.menu.classList.contains('active')) {
        this.closeMobileMenu();
      }
    });

    // Handle scroll behavior
    window.addEventListener('scroll', () => this.handleScroll());

    // Close mobile menu on window resize
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1024 && this.menu.classList.contains('active')) {
        this.closeMobileMenu();
      }
    });

    // Set active page
    this.setActivePage();
  }

  toggleMobileMenu() {
    this.menu.classList.toggle('active');
    this.mobileToggle.classList.toggle('active');
    document.body.style.overflow = this.menu.classList.contains('active') ? 'hidden' : '';
  }

  closeMobileMenu() {
    this.menu.classList.remove('active');
    this.mobileToggle.classList.remove('active');
    document.body.style.overflow = '';
  }

  toggleDropdown(dropdown) {
    const isActive = dropdown.classList.contains('active');
    
    // Close all dropdowns
    this.dropdowns.forEach(d => d.classList.remove('active'));
    
    // Toggle current dropdown
    if (!isActive) {
      dropdown.classList.add('active');
    }
  }

  handleScroll() {
    if (window.scrollY > 50) {
      this.navbar.classList.add('scrolled');
    } else {
      this.navbar.classList.remove('scrolled');
    }
  }

  setActivePage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('.navbar-link, .dropdown-link');
    
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPage || href === `./${currentPage}`) {
        link.classList.add('active');
        
        // If it's a dropdown link, also mark parent as active
        const parentDropdown = link.closest('.has-dropdown');
        if (parentDropdown) {
          parentDropdown.querySelector('.navbar-link').classList.add('active');
        }
      }
    });
  }
}

// Initialize navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new Navigation();
});

