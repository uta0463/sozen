// ==========================================================================
// BodyFix
// ==========================================================================

export default class BodyFix {
  /* constructor
  ----------------------------------------------- */

  constructor() {}

  /* ready
  ----------------------------------------------- */

  static ready() {
    BodyFix.html = document.getElementsByTagName('html')[0];
    BodyFix.body = document.getElementsByTagName('body')[0];
    BodyFix.flag = true;
  }

  /* lock
  ----------------------------------------------- */

  static lock() {
    if (BodyFix.flag) {
      BodyFix.offset = window.scrollY || window.pageYOffset;

      BodyFix.html.style.height = window.innerHeight + 'px';
      BodyFix.body.style.position = 'fixed';
      BodyFix.body.style.top = -BodyFix.offset + 'px';
      BodyFix.body.style.left = '0px';
      BodyFix.body.style.right = '0px';
      BodyFix.body.style.zIndex = 1;

      BodyFix.body.classList.add('is-locked');

      BodyFix.flag = false;
    }
  }

  /* unlock
  ----------------------------------------------- */

  static unlock() {
    if (!BodyFix.flag) {
      BodyFix.html.style.height = 'auto';
      BodyFix.body.style.position = 'static';

      setTimeout(function () {
        BodyFix.body.classList.remove('is-locked');
      }, 25);

      window.scrollTo(0, BodyFix.offset);

      BodyFix.flag = true;
    }
  }
}
