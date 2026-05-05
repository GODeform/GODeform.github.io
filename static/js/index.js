window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function () {
  $(".navbar-burger").click(function () {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  var options = {
    slidesToScroll: 1,
    slidesToShow: 3,
    loop: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  if (document.querySelectorAll(".carousel").length > 0 && typeof bulmaCarousel !== "undefined") {
    bulmaCarousel.attach(".carousel", options);
  }

  if (typeof bulmaSlider !== "undefined") {
    bulmaSlider.attach();
  }
});
