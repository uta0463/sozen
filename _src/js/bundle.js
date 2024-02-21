// ==========================================================================
// main
// ==========================================================================

const breakpoint = 768;
const wide_breakpoint = 1200;

/* import
----------------------------------------------- */
import Resize from './_Resize';
import BodyFix from './_BodyFix';
import Smooth from './_Smooth';
import Scroll from './_Scroll';
import Anchor from './_Anchor';

import Header from './_Header';
import Menu from './_Menu';
import Accordion from './_Accordion';

// liblary

import jQuery from 'jquery';

/* class
----------------------------------------------- */
new Resize(breakpoint);
new BodyFix();
new Smooth();
new Scroll();
new Anchor(BodyFix, Smooth, breakpoint);

new Header();
new Menu(BodyFix);
new Accordion(Resize, breakpoint);

// liblary

window.$ = window.jQuery = jQuery;

/* loading
----------------------------------------------- */

let loading = {
  ready: function () {
    // loading.elem = document.getElementsByClassName('js-loading')[0];

    // loading.elem.classList.add('is-loading-ready');

    window.addEventListener('load', loading.load, false);
  },

  load: function () {
    Anchor.ready();

    Header.ready();
    Menu.ready();

    setTimeout(loading.start, 500);
  },
  start: function () {
    // loading.elem.classList.add('is-loading-start');

    setTimeout(loading.end, 500);
  },
  end: function () {
    // loading.elem.classList.add('is-loading-end');
  }
};

/* ready
----------------------------------------------- */

Resize.ready();
BodyFix.ready();
Smooth.ready();
Scroll.ready();
Accordion.ready();

loading.ready();
