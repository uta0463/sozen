// ==========================================================================
// Anchor
// ==========================================================================

export default class Anchor {
  /* constructor
	----------------------------------------------- */

  constructor(Bodyfix, smooth, breakpoint, speed) {
    Anchor.bodyfix = Bodyfix;
    Anchor.smooth = smooth;
    Anchor.breakpoint = breakpoint;
    Anchor.speed = speed ? speed : 1000;
  }

  /* ready
	----------------------------------------------- */

  static ready() {
    // link

    let elements = document.querySelectorAll("a[href^='#']");
    let length = elements.length;

    for (let i = 0; i < length; i++) {
      let elem = elements[i];
      let href = elem.getAttribute('href');
      let flag = elem.className.indexOf('js-anchor') > -1 ? true : false;

      elem.flag = flag;

      if (href != '#') {
        elem.addEventListener('click', Anchor.click, false);
      }
    }

    // hashchange
    let hash = location.hash;
    // console.log(hash);
    if (hash) {
      Anchor.hashchange(hash);
    }
  }

  /* start
	----------------------------------------------- */

  static start() {
    requestAnimationFrame(Anchor.hashchange);
  }

  /* click
	----------------------------------------------- */

  static click(event) {
    let hash = this.getAttribute('href');
    let flag = this.flag;

    Anchor.action(hash, flag);

    event.preventDefault();
  }

  /* hashchange
	----------------------------------------------- */

  static hashchange(hash) {
    let id = hash.replace('#', '');
    let headerHeight = window.innerWidth >= 769 ? 75 : 58;
    let target = $('[data-id="' + id + '"]').offset().top;
    let position = target - headerHeight;

    if ($('.l-header__hamburger').css('display') == 'block') {
      clearTimeout(Anchor.timeout);

      $('body').removeClass('is-open');

      Anchor.bodyfix.unlock();
    }

    $('body,html').animate({ scrollTop: position }, 800, 'swing');
  }

  /* action
	----------------------------------------------- */

  static action(hash, flag) {
    let elements = document.querySelectorAll('[data-id]');
    let length = elements.length;
    let headerHeight = window.innerWidth >= 769 ? 75 : 58;

    if ($('.l-header__hamburger').css('display') == 'block') {
      clearTimeout(Anchor.timeout);

      $('body').removeClass('is-open');

      Anchor.bodyfix.unlock();
    }

    for (let i = 0; i < length; i++) {
      let elem = elements[i];
      let id = '#' + elem.dataset.id;

      if (id == hash) {
        Anchor.smooth.start(elem, 800, '', headerHeight);

        break;
      }
    }
  }
}
