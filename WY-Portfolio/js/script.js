const timelineSection = document.querySelector('.timeline-section');

const timelineObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.2 });

timelineObserver.observe(timelineSection);

function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function handleScroll() {
    var timelineItems = document.querySelectorAll('.timeline-section .timeline-4');
    timelineItems.forEach(function(item) {
      if (isElementInViewport(item)) {
        item.classList.add('animate');
      }
    });
  }

  document.addEventListener('scroll', handleScroll);
  handleScroll(); // Trigger the animation for the visible items on page load