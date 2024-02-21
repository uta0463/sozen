// ==========================================================================
// FullHeight
// ==========================================================================

export default class FullHeight {
  /* constructor
  ----------------------------------------------- */

  constructor(Resize, breakpoint) {
    FullHeight.resize = Resize;
    FullHeight.breakpoint = breakpoint;
  }

  /* ready
  ----------------------------------------------- */

  static ready() {
    // console.log('Full Height');

    // resize

    FullHeight.resize.params.FullHeight = FullHeight.action;
  }

  /* action
  ----------------------------------------------- */

  static action() {
    const vh = window.innerHeight * 0.01;

    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
}
