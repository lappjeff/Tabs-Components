let slideMenu = new TimelineMax({paused: true, reverse: true})

slideMenu.
    fromTo('.dropdown-content', .90, {top: '45px', display: 'none', height: '0'}, {top: '60px', display: 'flex', height: '157.4px'})
    .staggerFrom('.dropdown-link', .2, {fontSize: 0}, .095)
    // to('.dropdown-content', 2, {height: '157.4px'})
    // .to('.dropdown-link', 1, {scale: 1})
class Dropdown {
  constructor(element) {

    // Assign this.element to the dropdown element
    this.element = element;

    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.element.querySelector('.dropdown-button');

    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = this.element.querySelector('.dropdown-content');

    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener('click', this.toggleContent.bind(this));
  }

  toggleContent() {

    // Toggle the ".dropdown-hidden" class off and on
    this.content.classList.toggle('dropdown-hidden');
    //GSAP animations
    slideMenu.reversed() ? slideMenu.play() : slideMenu.reverse();
  }
}


// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));
