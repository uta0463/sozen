/* Scroll
----------------------------------------------- */

export default class Scroll {
  /* constructor
  ----------------------------------------------- */

  constructor() {}

  /* ready
  ----------------------------------------------- */

  static ready() {
    Scroll.params = new Object();
    Scroll.top = 0;
    Scroll.bottom = window.innerHeight;

    window.addEventListener('scroll', Scroll.start, { passive: true });

    Scroll.start();
  }

  /* start
	----------------------------------------------- */

  static start() {
    requestAnimationFrame(Scroll.process);
  }

  /* process
	----------------------------------------------- */

  static process() {
    Scroll.top = window.scrollY || window.pageYOffset;
    Scroll.bottom = Scroll.top + window.innerHeight;

    for (let i in Scroll.params) {
      Scroll.params[i]();
    }
  }
}
