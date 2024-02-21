/* Header
----------------------------------------------- */

export default class Header {
  /* constructor
	----------------------------------------------- */

  constructor() {}

  /* ready
	----------------------------------------------- */

  static ready() {
    Header.body = document.getElementsByTagName('body')[0];
    Header.guideline = document.getElementsByClassName('js-guideline')[0];
    let trigger = window.innerHeight / 2 + 'px';

    // scroll

    const options = { root: null, rootMargin: trigger, threshold: 1 };

    Header.observer = new IntersectionObserver(Header.process, options);

    Header.observer.observe(Header.guideline);
  }

  /* process
	----------------------------------------------- */

  static process(elems) {
    if (elems[0].isIntersecting) {
      Header.body.classList.remove('is-compact');
    } else {
      Header.body.classList.add('is-compact');
    }
  }
}
