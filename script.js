$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Student", "Backend-Developer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Student", "Backend-Developer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

//Scroll Reveal
const sr = ScrollReveal();

sr.reveal(".title", {
  distance: "100px",
  origin: "right",
  duration: 2000,
  delay: 300,
  reset: true,
});

sr.reveal(".about-img", {
  distance: "200px",
  origin: "top",
  duration: 3000,
  delay: 400,
  reset: true,
});
sr.reveal(".right", {
  distance: "100px",
  origin: "left",
  duration: 2500,
  delay: 300,
  reset: true,
});
sr.reveal(".about-btn", {
  distance: "200px",
  origin: "bottom",
  duration: 3000,
  delay: 300,
  reset: true,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
});
sr.reveal(".home", {
  distance: "200px",
  origin: "top",
  duration: 2000,
  delay: 200,
  reset: true,
  easing: "ease-in-out",
});
