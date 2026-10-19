/**
 * JavaScript for Hodinový Manžel website
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');

  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('active');
    });

    // Close mobile menu when a nav link is clicked
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 2. Sticky Header elevation on scroll
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // 3. Contact Form Submission (Mock / Front-end handling)
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name')?.value.trim();
      const phone = document.getElementById('phone')?.value.trim();
      const message = document.getElementById('message')?.value.trim();

      if (!name || !phone || !message) {
        alert('Prosím, vyplňte všechna povinná pole.');
        return;
      }

      // Show success feedback
      formStatus.textContent = 'Děkujeme za poptávku! Ozveme se vám v co nejkratším možném čase.';
      formStatus.className = 'form-status success';
      contactForm.reset();

      // Clear notice after 6 seconds
      setTimeout(() => {
        formStatus.className = 'form-status';
        formStatus.textContent = '';
      }, 6000);
    });
  }

  // 4. Update copyright year dynamically
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
