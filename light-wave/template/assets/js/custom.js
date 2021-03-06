/*=============================================================
    Authour URL: www.designbootstrap.com
    
    http://www.designbootstrap.com/

    License: MIT

    http://opensource.org/licenses/MIT

    100% Free To use For Personal And Commercial Use.

    IN EXCHANGE JUST TELL PEOPLE ABOUT THIS WEBSITE
   
========================================================  */

$(document).ready(function () {

/*====================================
SCROLLING SCRIPTS
======================================*/

$('.scroll-me a').bind('click', function (event) { //just pass scroll-me in design and start scrolling
var $anchor = $(this);
$('html, body').stop().animate({
scrollTop: $($anchor.attr('href')).offset().top
}, 1200, 'easeInOutExpo');
event.preventDefault();
});


/*====================================
SLIDER SCRIPTS
======================================*/


//$('#carousel-slider').carousel({
//interval: 2000 //TIME IN MILLI SECONDS
//});


/*====================================
VAGAS SLIDESHOW SCRIPTS
======================================*/
$.vegas('slideshow', {
backgrounds: [
{ src: 'assets/img/1.jpg', fade: 1000, delay: 9000 },
{ src: 'assets/img/2.jpg', fade: 1000, delay: 9000 },
]
})('overlay', {
/** SLIDESHOW OVERLAY IMAGE **/
src: 'assets/js/vegas/overlays/06.png' // THERE ARE TOTAL 01 TO 15 .png IMAGES AT THE PATH GIVEN, WHICH YOU CAN USE HERE
});


/*====================================
POPUP IMAGE SCRIPTS
======================================*/
$('.fancybox-media').fancybox({
openEffect: 'elastic',
closeEffect: 'elastic',
helpers: {
title: {
type: 'inside'
}
}
});


/*====================================
FILTER FUNCTIONALITY SCRIPTS
======================================*/
$(window).load(function () {
var $container = $('#work-div');
$container.isotope({
filter: '*',
animationOptions: {
duration: 750,
easing: 'linear',
queue: false
}
});
$('.caegories a').click(function () {
$('.caegories .active').removeClass('active');
$(this).addClass('active');
var selector = $(this).attr('data-filter');
$container.isotope({
filter: selector,
animationOptions: {
duration: 750,
easing: 'linear',
queue: false
}
});
return false;
});

});



/*====================================
WRITE YOUR CUSTOM SCRIPTS BELOW
======================================*/

//$('.top-menu li a, .top-menu li ul').hover(function(){
//        $(this).parent("li.dropdown").toggleClass("open");
//});

//function count($this){
//		var current = parseInt($this.html(), 10);
//		current = current + 1; /* Where 1 is increment */
////                 console.log(current);   
//		$this.html(++current);
//		if(current > $this.data('count')){
////                    console.log("vinay")
//			$this.html($this.data('count'));
//		} else {
////                    console.log("kumar")
//			setTimeout(function(){count($this)}, 50);
//		}
//	}
//
//	jQuery(".stat-count").each(function() {
//	  jQuery(this).data('count', parseInt(jQuery(this).html(), 10));
//	  jQuery(this).html('0');
//	  count(jQuery(this));
//	});


// Generated by CoffeeScript 1.6.3
// 
// 
  $(".gallery .isotope-item").children()
          .mouseenter(function(){
      alert("enter");
        $(this).find(".hover-text").addClass("slideInLeft");
    });
    $(".gallery .isotope-item").mouseleave(function(){
        $(this).find(".hover-text").removeClass("slideInLeft");
    });

// $(".gallery > div").hover(function(){
//     if($(this).hasClass("animate-in zoom-in")){
//        $(this).removeClass("animate-in zoom-in");
//     }else{
//        $(this).addClass("animate-in zoom-in");
//     }
// });

});
//$(".gallery .work-wrapper a").hover(
//  function () {
//    $(this).children(".hover-text").addClass("slideInLeft");
//  },
//  function () {
//    $(this).children(".hover-text").removeClass("slideInLeft");
//  }
//);


$(function () {
    $(".jcarousel").jcarouselAutoscroll()
}), function (o) {
    o(function () {
        var t = o(".jcarousel");
        t.on("jcarousel:reload jcarousel:create", function () {
            var t = o(this), n = t.innerWidth();
            n >= 600 ? n /= 3 : n >= 350 && (n /= 2), t.jcarousel("items").css("width", Math.ceil(n) + "px")
        }).jcarousel({wrap: "circular"}), o(".jcarousel-control-prev").jcarouselControl({target: "-=1"}), o(".jcarousel-control-next").jcarouselControl({target: "+=1"}), o(".jcarousel-pagination").on("jcarouselpagination:active", "a", function () {
            o(this).addClass("active")
        }).on("jcarouselpagination:inactive", "a", function () {
            o(this).removeClass("active")
        }).on("click", function (o) {
            o.preventDefault()
        }).jcarouselPagination({perPage: 1, item: function (o) {
                return'<a href="#' + o + '">' + o + "</a>"
            }})
    })
}(jQuery), function (o) {
    o(function () {
        o(".verticle-slider").jcarousel({vertical: !0, size: 5}), o(".jcarousel-control-prev").on("jcarouselcontrol:active", function () {
            o(this).removeClass("inactive")
        }).on("jcarouselcontrol:inactive", function () {
            o(this).addClass("inactive")
        }).jcarouselControl({target: "-=1"}), o(".jcarousel-control-next").on("jcarouselcontrol:active", function () {
            o(this).removeClass("inactive")
        }).on("jcarouselcontrol:inactive", function () {
            o(this).addClass("inactive")
        }).jcarouselControl({target: "+=1"}), o(".jcarousel-pagination").on("jcarouselpagination:active", "a", function () {
            o(this).addClass("active")
        }).on("jcarouselpagination:inactive", "a", function () {
            o(this).removeClass("active")
        }).jcarouselPagination()
    })
}(jQuery);

function ShowUTCDate()
{
var dNow = new Date();
var utc = new Date(dNow.getTime())
//var utcdate=  utc.getHours() + ':' + utc.getMinutes() + ' ' + (utc.getMonth()+1) + '/' + utc.getDate() + '/' + utc.getFullYear();
var utcdate=  (utc.getMonth()+1) + '/' + utc.getDate() + '/' + utc.getFullYear();
$('#currentDate').text(utcdate);
};
ShowUTCDate();
 