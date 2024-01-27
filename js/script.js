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


    // Language
    $(function(){
        $('.selectpicker').selectpicker();
    });




    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
  
    
    
    // Back to top button
 

/* Please ❤ this if you like it! */



(function($) { "use strict";

//Switch dark/light

$(".switch").on('click', function () {
    if ($("body").hasClass("light")) {
        $("body").removeClass("light");
        $(".switch").removeClass("switched");
    }
    else {
        $("body").addClass("light");
        $(".switch").addClass("switched");
    }
});
    
$(document).ready(function(){"use strict";

    //Scroll back to top
    
    var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
    var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
    }
    updateProgress();
    $(window).scroll(updateProgress);	
    var offset = 50;
    var duration = 550;
    jQuery(window).on('scroll', function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.progress-wrap').addClass('active-progress');
        } else {
            jQuery('.progress-wrap').removeClass('active-progress');
        }
    });				
    jQuery('.progress-wrap').on('click', function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
    
    
});

})(jQuery); 
 
    // Header carousel
    var Slider = function(){
    
        var Images = function(){
            $(".is-background").imgLiquid();
        }
        
        var Component = function(){
            var $Slider = $('.js-slider');
            
            // bind event listener first
            $Slider.on('ready.flickity', function() {
                // Loader...
                TweenMax.to($('.js-slider-loader'), 1,{
                    delay: 0.5,
                    autoAlpha: 0,
                    ease: Expo.easeInOut,
                    onComplete: function(){
                        // Slider...
                        TweenMax.to($Slider, 0.5,{
                            delay: 0,
                            autoAlpha: 1,
                            ease: Expo.easeInOut
                        });
    
                        // Text...
                        TweenMax.to($('.slider__item__text h1'), 0.8,{
                            delay: 0.3,
                            autoAlpha: 1,
                            ease: Expo.easeInOut
                        });
                        TweenMax.to($('.slider__item__text p'), 0.8,{
                            delay: 0.6,
                            autoAlpha: 1,
                            ease: Expo.easeInOut
                        });
                        TweenMax.to($('.slider__item__text a'), 0.8,{
                            delay: 0.9,
                            autoAlpha: 1,
                            ease: Expo.easeInOut
                        });
                    }
                });
            });
            
            $Slider.flickity({
                cellAlign: 'left',
                contain: true,
                draggable: true,
                cellSelector: '.slider__item',
                wrapAround: true,
                autoPlay: 3600,
                pauseAutoPlayOnHover: false,
                prevNextButtons: false
            });
            
            // Controls...
            $('.js-slider-button-prev').on( 'click', function() {
                $Slider.flickity('previous');
            });
            $('.js-slider-button-next').on( 'click', function() {
                $Slider.flickity('next');
            });
        }
    
        return{
            init: function(){
                Images();
                Component();
            }
        };
    }();
    
    // Run...
    Slider.init();

    // Patners Slide
    $(document).ready(function(){
        $('.customer-logos').slick({
            slidesToShow: 3,
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
     






    // Contact Form 

})(jQuery);

