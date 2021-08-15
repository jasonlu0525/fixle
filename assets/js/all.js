"use strict";

var gl_images_row = document.querySelector(".scroll-img-row");
var gl_images_row_reverse = document.querySelector(".scroll-img-reverse");
var gl_slide_start = document.querySelectorAll('.slide-start');
var gl_slide_end = document.querySelectorAll('.slide-end');
;

(function (self) {
  AOS.init();
  var row_init_value = -200;
  var reverse_init_value = 100;
  self.addEventListener('scroll', function () {
    var scroll = this.pageYOffset; //圖片 scroll 部分

    console.log(scroll, gl_images_row.offsetTop, gl_images_row_reverse.offsetTop); //979px

    if (scroll <= gl_images_row.offsetTop) {
      gl_images_row.style['background-position'] = "".concat(row_init_value + scroll / 10, "px");
    } //979px                                           //1833px
    else if (scroll > gl_images_row.offsetTop && scroll <= gl_images_row_reverse.offsetTop) {
        gl_images_row_reverse.style['background-position'] = "".concat(reverse_init_value - scroll / 10, "px");
      } // 文字 scroll 部分


    function textSlide(element, prefix) {
      element.forEach(function (el) {
        console.log(scroll >= gl_images_row.offsetTop, scroll < gl_images_row_reverse.offsetTop);

        if (scroll >= gl_images_row.offsetTop && scroll < gl_images_row_reverse.offsetTop) {
          el.style.transform = "translateX( ".concat(prefix).concat(scroll / 50, "px)");
        }
      });
    }

    textSlide(gl_slide_start, '-');
    textSlide(gl_slide_end, '+');
  });
})(window);
//# sourceMappingURL=all.js.map
