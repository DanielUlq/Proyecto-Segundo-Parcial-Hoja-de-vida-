/*se le da funciones a la página para que se pueda mover en ella haciendo click en el menu*/

(function($) { /*use strict es una forma de elegir una variante restringida de JavaScript*/
  "use strict"; 

  // desplazamiento con jquery
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  //cierra el menu cuando se le da click
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // elementos de la barra de navegación "Menu"
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // fin de strict
