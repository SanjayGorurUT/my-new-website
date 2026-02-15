// Animate skill bars when they come into view
export default function initSkillBars() {
  const skillBars = document.querySelectorAll('.skill-bar-fill');
  
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const rating = parseInt(bar.getAttribute('data-rating'));
        const width = (rating / 10) * 100;
        
        // Reset and animate
        bar.style.width = '0%';
        setTimeout(() => {
          bar.style.width = `${width}%`;
        }, 100);
        
        observer.unobserve(bar);
      }
    });
  }, observerOptions);

  skillBars.forEach(bar => {
    observer.observe(bar);
  });
}

