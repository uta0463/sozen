/* Menu
----------------------------------------------- */

export default class Menu {
  /* constructor
	----------------------------------------------- */

  constructor(Bodyfix) {
    Menu.bodyfix = Bodyfix;
  }

  /* ready
	----------------------------------------------- */

  static ready() {
    Menu.elem = document.getElementsByClassName('js-menu')[0];

    if (Menu.elem) {
      Menu.elem.body = document.getElementsByTagName('body')[0];

      Menu.elem.addEventListener('click', Menu.open, false);

      // resize

      let guideline = document.getElementsByClassName('js-guideline')[0];

      Menu.resize = new ResizeObserver(Menu.action);

      Menu.resize.observe(guideline);

      Menu.action();
    }
  }

  /* action
	----------------------------------------------- */

  static action() {
    Menu.close();
  }

  /* open
	----------------------------------------------- */

  static open() {
    clearTimeout(Menu.timeout);

    // console.log('open');

    Menu.elem.removeEventListener('click', Menu.open, false);
    Menu.elem.addEventListener('click', Menu.close, false);
    Menu.elem.body.classList.add('is-open');

    Menu.timeout = setTimeout(Menu.bodyfix.lock, 250);
  }

  /* close
	----------------------------------------------- */

  static close() {
    clearTimeout(Menu.timeout);

    Menu.elem.addEventListener('click', Menu.open, false);
    Menu.elem.removeEventListener('click', Menu.close, false);
    Menu.elem.body.classList.remove('is-open');

    Menu.bodyfix.unlock();
  }
}
