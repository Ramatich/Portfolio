// Show Sections on Scroll
window.addEventListener('scroll', reveal);

function reveal() {
  var sections = document.querySelectorAll('.section');
  for (var i = 0; i < sections.length; i++) {
    var section = sections[i];
    var sectionTop = section.getBoundingClientRect().top;
    var sectionBottom = section.getBoundingClientRect().bottom;
    if (sectionTop < window.innerHeight && sectionBottom >= 0) {
      section.classList.add('visible');
    } else {
      section.classList.remove('visible');
    }
  }
}

// Smooth Scrolling
var links = document.querySelectorAll('nav a');
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', smoothScroll);
}

function smoothScroll(e) {
  e.preventDefault();
  var target = this.getAttribute('href');
  var targetElement = document.querySelector(target);
  var targetTop = targetElement.getBoundingClientRect().top;
  var currentTop = window.pageYOffset;
  var difference = targetTop - currentTop;
  var duration = 1000;
  var start;
  window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp;
    var progress = timestamp - start;
    window.scrollTo(0, easeInOutQuad(progress, currentTop, difference, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  });
}

function easeInOutQuad(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
}
