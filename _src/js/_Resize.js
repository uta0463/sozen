// ==========================================================================
// Resize
// ==========================================================================

export default class Resize {
  /* constructor
  ----------------------------------------------- */

  constructor(breakpoint) {
    Resize.istouch = 'ontouchend' in document ? true : false;
    Resize.breakpoint = breakpoint;
    Resize.current = window.innerWidth;
  }

  /* ready
  ----------------------------------------------- */

  static ready() {
    Resize.params = new Object();
    Resize.body = document.body.clientHeight;
    Resize.width = window.innerWidth;
    Resize.height = window.innerHeight;
    Resize.flag = true;

    window.addEventListener('resize', Resize.start, false);

    Resize.start();
  }

  /* start
  ----------------------------------------------- */

  static start() {
    clearTimeout(Resize.timeout);

    if ((Resize.istouch && Resize.width != window.innerWidth) || !Resize.istouch) {
      requestAnimationFrame(Resize.end);
    }
  }

  /* end
  ----------------------------------------------- */

  static end() {
    clearTimeout(Resize.timeout);

    Resize.body = document.body.clientHeight;
    Resize.width = window.innerWidth;
    Resize.height = window.innerHeight;

    if ((Resize.current <= Resize.breakpoint && window.innerWidth > Resize.breakpoint) || (Resize.current > Resize.breakpoint && window.innerWidth <= Resize.breakpoint)) {
      Resize.flag = true;
    } else {
      Resize.flag = false;
    }

    Resize.current = window.innerWidth;

    for (let i in Resize.params) {
      Resize.params[i]();
    }
  }
}
