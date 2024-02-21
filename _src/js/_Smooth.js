// ==========================================================================
// Smooth
// ==========================================================================

export default class Smooth {
  /* constructor
  ----------------------------------------------- */

  constructor() {
    Smooth.ease = {
      easeInOutCubic: function (x) {
        return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
      },
      easeInOutQuart: function (x) {
        return x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2;
      },
      easeInOutQuint: function (x) {
        return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;
      },
      easeInOutExpo: function (x) {
        return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? Math.pow(2, 20 * x - 10) / 2 : (2 - Math.pow(2, -20 * x + 10)) / 2;
      }
    };
  }

  /* ready
  ----------------------------------------------- */

  static ready() {
    Smooth.body = document.getElementsByTagName('body')[0];
  }

  /* start
  ----------------------------------------------- */

  static start(elem, duration, ease, margin) {
    Smooth.easing = ease ? Smooth.ease[ease] : Smooth.ease.easeInOutQuint;
    Smooth.current = document.documentElement.scrollTop || document.body.scrollTop;
    Smooth.time = Date.now();
    Smooth.duration = duration;
    Smooth.elem = elem;
    Smooth.margin = margin;

    // resize

    Smooth.resize = new ResizeObserver(Smooth.action);

    Smooth.resize.observe(Smooth.body);

    Smooth.action();
  }

  /* action
  ----------------------------------------------- */

  static action() {
    let pageoffset = window.scrollY || window.pageYOffset;
    let rect = Smooth.elem.getBoundingClientRect();
    let offset = rect.top + pageoffset;

    Smooth.current = document.documentElement.scrollTop || document.body.scrollTop;
    Smooth.position = offset - Smooth.margin;

    requestAnimationFrame(Smooth.process);
  }

  /* process
  ----------------------------------------------- */

  static process() {
    let now = Date.now();
    let time = now - Smooth.time;
    let duration = time / Smooth.duration;
    let y = Smooth.current + (Smooth.position - Smooth.current) * Smooth.easing(duration);

    if (duration <= 0.999) {
      window.scrollTo(0, y);

      requestAnimationFrame(Smooth.process);
    } else {
      window.scrollTo(0, Smooth.position);

      Smooth.resize.disconnect();
    }
  }
}
