(function($) {
    $(document).ready(function() {
  
      //for desktop
      $(".gallery-frame li:first-child").addClass("active");
      $(".gallery-thumb img").on('click', function() {
        $(".gallery-frame li").removeClass('active');
        setTimeout(function() {
          $(".gallery-thumbs li").each(function(index) {
            if ($(this).hasClass('active')) {
              $(".gallery-frame li").eq(index).addClass("active");
              $(".gallery-frame li.active img").addClass("small_img");
              $('.small_img').imagezoomsl({
                zoomrange: [3, 3],
                zoomstart: 3,
                innerzoommagnifier: true,
                classmagnifier: 'glass',
                magnifiersize: [150, 150]
              });
            }
          })
        }, 100);
      });
  
      // for mobile
      if ($(window).width() < 767) {
        $(".gallery-thumb a").on('click', function() {
          $(".gallery-frame li").removeClass('active');
          setTimeout(function() {
            $(".gallery-thumbs li").each(function(index) {
              if ($(this).hasClass('active')) {
                $(".gallery-frame li").eq(index).addClass("active");
                $(".gallery-frame li.active img").addClass("small_img");
                $('.small_img').imagezoomsl({
                  zoomrange: [3, 3],
                  zoomstart: 3,
                  innerzoommagnifier: true,
                  classmagnifier: 'glass',
                  magnifiersize: [150, 150]
                });
              }
            })
          }, 100);
        });
      }
  
      if ($('.gallery-frame li').hasClass('active')) {
        $('body').removeClass("three-sixty-degree");
        $(".gallery-frame li.active img").addClass("small_img");
        $('.small_img').imagezoomsl({
          zoomrange: [3, 3],
          zoomstart: 3,
          innerzoommagnifier: true,
          classmagnifier: 'glass',
          magnifiersize: [150, 150]
        });
      }
  
      $(".gallery-thumb img").click(function() {
        $('body').removeClass("three-sixty-active")
      });
  
  
    })
  })(jQuery);