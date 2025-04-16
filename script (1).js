// JavaScript can be used to add more dynamic effects, but for this header, it's mostly CSS-driven.
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
      link.style.transform = 'scale(1.1)';
    });
    link.addEventListener('mouseout', () => {
      link.style.transform = 'scale(1)';
    });
  });
});


document.querySelector('.cta-btn').addEventListener('click', () => {
  alert('Thank you for reaching out!');
});



// Optional: Trigger animation for the button on hover
document.querySelector('.cta-btn').addEventListener('mouseover', () => {
  document.querySelector('.cta-btn').style.transform = "scale(1.1)";
});

document.querySelector('.cta-btn').addEventListener('mouseout', () => {
  document.querySelector('.cta-btn').style.transform = "scale(1)";
});



// Optional: Add scroll-triggered animation (e.g., reveal section when it is in the viewport)
const aboutSection = document.getElementById('about');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, {
  threshold: 0.5
});

observer.observe(aboutSection);





// Optional: Add scroll-triggered animation (e.g., reveal section when it is in the viewport)
const projectCards = document.querySelectorAll('.project-card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, {
  threshold: 0.5
});

projectCards.forEach(card => {
  observer.observe(card);
});




// Optional: Add scroll-triggered animation (e.g., reveal section when it is in the viewport)
const articleCards = document.querySelectorAll('.article-card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, {
  threshold: 0.5
});

articleCards.forEach(card => {
  observer.observe(card);
});



// Optional: Add scroll-triggered animation (e.g., reveal section when it is in the viewport)
const formGroupElements = document.querySelectorAll('.form-group');
const contactSection = document.getElementById('contact');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, {
  threshold: 0.5
});

formGroupElements.forEach(group => {
  observer.observe(group);
});




// Optional: Add scroll-triggered animation (e.g., reveal section when it is in the viewport)
const footerContent = document.querySelector('.footer-content');
const footerCopy = document.querySelector('.footer-copy');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, {
  threshold: 0.5
});

observer.observe(footerContent);
observer.observe(footerCopy);

