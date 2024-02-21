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

import FullHeight from './top/_FullHeight';

// liblary

import jQuery from 'jquery';

/* class
----------------------------------------------- */
new Resize(breakpoint);
new BodyFix();
new Smooth();
new Scroll();

new FullHeight(Resize, breakpoint);

// liblary

window.$ = window.jQuery = jQuery;

/* loading
----------------------------------------------- */

let loading = {
  ready: function () {
    loading.elem = document.getElementsByClassName('js-loading')[0];

    loading.elem.classList.add('is-loading-ready');

    window.addEventListener('load', loading.load, false);
  },

  load: function () {
    setTimeout(loading.start, 500);
  },
  start: function () {
    loading.elem.classList.add('is-loading-start');

    setTimeout(loading.end, 500);
  },
  end: function () {
    loading.elem.classList.add('is-loading-end');

    // 動画を再生
    let video = $('#video').get(0);
    video.play();

    let videosp = $('#videosp').get(0);
    videosp.play();

    // 画面固定解除
    $('body').removeClass('is-init');

    $('.u-loading__mask').on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function () {
      $('.u-loading').remove();

      if ($('.l-header__hamburger').css('display') == 'block') {
        $('.l-header__head').addClass('is-show');
        $('.l-header__btn').addClass('is-show');
        $('.c-hamburger').addClass('is-show');
      } else {
        $('#header').addClass('is-show');
      }

      $('.top__mv__title').addClass('is-show');
    });
  }
};

/* ready
----------------------------------------------- */

Resize.ready();
BodyFix.ready();
Smooth.ready();
Scroll.ready();

FullHeight.ready();

loading.ready();
