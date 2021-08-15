 let gl_images_row = document.querySelector(".scroll-img-row");
 let gl_images_row_reverse = document.querySelector(".scroll-img-reverse");
 let gl_slide_start = document.querySelectorAll('.slide-start');
 let gl_slide_end = document.querySelectorAll('.slide-end');;
 (function (self) {
     AOS.init();

     let row_init_value = -200;
     let reverse_init_value = 100;
     self.addEventListener('scroll', function () {
         let scroll = this.pageYOffset;

         //圖片 scroll 部分

         console.log(scroll, gl_images_row.offsetTop, gl_images_row_reverse.offsetTop);
         //979px
         if (scroll <= gl_images_row.offsetTop) {
             gl_images_row.style['background-position'] = `${row_init_value+(scroll/10)}px`;
         } //979px                                           //1833px
         else if (scroll > gl_images_row.offsetTop && scroll <= gl_images_row_reverse.offsetTop) {
             gl_images_row_reverse.style['background-position'] = `${reverse_init_value-(scroll/10)}px`;
         }


         // 文字 scroll 部分

         function textSlide(element, prefix) {
             element.forEach(function (el) {
                 console.log(scroll >= gl_images_row.offsetTop, scroll < gl_images_row_reverse.offsetTop);
                 if (scroll >= gl_images_row.offsetTop && scroll < gl_images_row_reverse.offsetTop) {

                     el.style.transform = `translateX( ${prefix}${scroll/50}px)`;

                 }
             })

         }
         textSlide(gl_slide_start, '-');
         textSlide(gl_slide_end, '+');


     })

 })(window);