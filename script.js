document.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  const jumbotronContainer = document.querySelector('.jumbotron-container');
  
  const jumbotronContainerRect = jumbotronContainer.getBoundingClientRect();
  const jumbotronContainerBottom = jumbotronContainerRect.bottom;

  if (jumbotronContainerBottom <= 0) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});