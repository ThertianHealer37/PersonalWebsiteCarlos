/*window.addEventListener('DOMContentLoaded', () => {

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        if (entry.intersectionRatio > 0) {
          document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
        } else {
          document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
        }
      });
    });
  
    // Track all sections that have an `id` applied
    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });
    
  });
  */

//What I want to do, once you click to the section keep the text darker, when you click the next one forget and go next


tracker = document.querySelector("nav")
