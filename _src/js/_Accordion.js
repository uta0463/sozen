/* Accordion
----------------------------------------------- */

export default class Accordion {
  /* constructor
  ----------------------------------------------- */

  constructor(Resize, breakpoint) {
    Accordion.resize = Resize;
    Accordion.breakpoint = breakpoint;
  }

  /* ready
  ----------------------------------------------- */

  static ready() {
    // setting

    let elements = document.getElementsByClassName('js-accordion');
    let length = elements.length;

    if (length > 0) {
      Accordion.params = new Array();
      Accordion.height = new Array();

      for (let i = 0; i < length; i++) {
        let elem = elements[i];
        let value = elem.nextElementSibling;

        Accordion.height.push(value.clientHeight);

        value.style.height = '0px';
        value.style.transition = 'height 0.4s';
        value.style.overflow = 'hidden';
        value.style.willChange = 'height';

        elem.addEventListener('click', Accordion.toggle, false);

        Accordion.params.push(elem);
      }

      // // resize;

      // let guideline = document.getElementsByClassName('js-guideline')[0];

      // Accordion.resize = new ResizeObserver(Accordion.action);

      // Accordion.resize.observe(guideline);

      // Accordion.action();
    }
  }

  /* action
	----------------------------------------------- */

  static action() {
    for (let i in Accordion.params) {
      let elem = Accordion.params[i];
      let value = elem.nextElementSibling;

      elem.classList.remove('is-hide');

      value.style.height = Accordion.value_height + 'px';
    }
  }

  /* toggle
	----------------------------------------------- */

  static toggle() {
    let elem = this;
    let value = elem.nextElementSibling;
    let index = $('.js-accordion').index(this);

    elem.classList.toggle('is-hide');

    if ($(elem).hasClass('c-faq__head')) {
      $(elem).parents('.c-faq').toggleClass('is-show');
    }

    value.style.height = value.clientHeight == 0 ? Accordion.height[index] + 'px' : '0px';
  }
}
