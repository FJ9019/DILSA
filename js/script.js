(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
  
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

 
    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Patners Slide
    $(document).ready(function(){
        $('.customer-logos').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
            arrows: false,
            dots: false,
            pauseOnHover:false,
            responsive: [{
                breakpoint: 768,
                setting: {
                    slidesToShow:4
                }
            }, {
                breakpoint: 520,
                setting: {
                    slidesToShow: 3
                }
            }]
        });
    });


     // Stock 
     var gallery = (function(){
  
        'use strict';
        
        // vars
        var gal_item = $('.gallery_item'),
            gal_img = $('.gallery_item_preview a img'),
            gal_full = $('.gallery_item_full'),
            gal_box = $('.box'),
            gal_top =  $('.gallery_top');
        
        
        return {
          // this.js(obj)
          js: function(e){return $("[data-js="+e+"]");},
          // this.lk(obj)
          lk: function(e){return $("[data-lk="+e+"]");},
          // Ready functions
          ready_: function(){this.events();},
          //  functions
          events:function(){
            var self = this;
            // add close link
            gal_full.append('<a href="#" data-js="cl" class="cl">X</a>');
            // Get all data js and add clickOn function
            var k = $('a[data-js]');
            k.each(function(i, v){
              i = i+1;
              self.clickOn(i);
            });
            // close on click
            self.js('cl').on("click",function(e){
              e.preventDefault();
              self.fx_out(gal_full);
              self.fx_out(gal_box);
            });
      
            // list style
            self.js('list').on("click",function(e){
              e.preventDefault();
              // toggle class
              gal_item.toggleClass('gallery_item_list');
              gal_img.toggleClass('gallery_line');
              
              
              // change icon style
              if(gal_item.hasClass('gallery_item_list')){
                $(this).addClass('icon_list_open')
                .html('<span>•••</span>'+
                      '<span>•••</span>'+
                      '<span>•••</span>');
                gal_top.attr("class", "gallery_top gallery_hide_top");
              }else{
                $(this).removeClass('icon_list_open')
                .html('<span>• -</span>'+
                      '<span>• -</span>'+
                      '<span>• -</span>');
                gal_top.attr("class", "gallery_top");
              }
            });
          },
          // Show on click
          clickOn: function(i){
            var self = this;
            this.js(i).on('click',function(e){
              e.preventDefault();
              self.fx_in(self.lk(i)); 
              self.fx_in(gal_box);
            });
          }, 
          // out function
          fx_out: function(el){
            el.addClass('efOut')
            .delay(500)
            .fadeOut('fast')
            .removeClass('efIn');
            // show scroll
            $('body').css({overflow:'auto'});
            return false;
          }, 
          // in function
          fx_in: function(el){
            el.removeClass('efOut')
            .show(200)
            .addClass('efIn');
            // hide scroll
            $('body').css({overflow:'hidden'});
            return false;
          }
        };
      })();
      // ready function of gallery
      gallery.ready_();







    // Contact Form 

})(jQuery);

