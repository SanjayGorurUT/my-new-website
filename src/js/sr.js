import assignProps from './assignProps';
export default function() {
  const defaultProps = {
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    distance: '50px',
    duration: 1200,
    desktop: true,
    mobile: true,
    reset: false
  };
  
  /* Section Titles */
  ScrollReveal().reveal('.section-title', {
    ...defaultProps,
    delay: 200,
    distance: '30px',
    origin: 'bottom',
    opacity: 0
  });

  /* Hero Section */
  ScrollReveal().reveal('.hero-content', {
    ...defaultProps,
    delay: 400,
    origin: 'left',
    distance: '60px',
    opacity: 0
  });

  ScrollReveal().reveal('.hero-side', {
    ...defaultProps,
    delay: 800,
    origin: 'right',
    distance: '60px',
    opacity: 0
  });
  
  /* About Section */
  ScrollReveal().reveal('.about-image', {
    ...defaultProps,
    delay: 300,
    origin: 'left',
    distance: '60px',
    opacity: 0
  });

  ScrollReveal().reveal('.about-text', {
    ...defaultProps,
    delay: 600,
    origin: 'right',
    distance: '60px',
    opacity: 0
  });

  /* Experience Section */
  ScrollReveal().reveal('.experience-item', {
    ...defaultProps,
    delay: 300,
    origin: 'left',
    distance: '60px',
    opacity: 0,
    interval: 200
  });

  /* Skills Section */
  ScrollReveal().reveal('.skill-category', {
    ...defaultProps,
    delay: 200,
    origin: 'bottom',
    distance: '50px',
    opacity: 0,
    interval: 150
  });

  /* Projects Section */
  ScrollReveal().reveal('.project-card', {
    ...defaultProps,
    delay: 200,
    origin: 'bottom',
    distance: '60px',
    opacity: 0,
    interval: 200
  });

  /* Contact Section */
  ScrollReveal().reveal('.contact-content', {
    ...defaultProps,
    delay: 400,
    origin: 'bottom',
    distance: '50px',
    opacity: 0
  });
}
