(function ($) {
  "use strict";

  // Initiate the wowjs
  new WOW().init();

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  // $(".back-to-top").click(function () {
  //   $("html, body").animate({ scrollTop: 0 }, 300, "easeInOutExpo");
  //   return false;
  // });

  // Sticky Navbar
  // $(window).scroll(function () {
  //     if ($(this).scrollTop() > 90) {
  //         $('.nav-bar').addClass('nav-sticky');
  //         $('.carousel, .page-header').css("margin-top", "73px");
  //     } else {
  //         $('.nav-bar').removeClass('nav-sticky');
  //         $('.carousel, .page-header').css("margin-top", "0");
  //     }
  // });

  // Dropdown on mouse hover
  // $(document).ready(function () {
  //   function toggleNavbarMethod() {
  //     if ($(window).width() > 992) {
  //       $(".navbar .dropdown")
  //         .on("mouseover", function () {
  //           $(".dropdown-toggle", this).trigger("click");
  //         })
  //         .on("mouseout", function () {
  //           $(".dropdown-toggle", this).trigger("click").blur();
  //         });
  //     } else {
  //       $(".navbar .dropdown").off("mouseover").off("mouseout");
  //     }
  //   }
  //   toggleNavbarMethod();
  //   $(window).resize(toggleNavbarMethod);
  // });

  // jQuery counterUp
  // $('[data-toggle="counter-up"]').counterUp({
  //   delay: 10,
  //   time: 2000,
  // });

  // Modal Video
  // $(document).ready(function () {
  //   var $videoSrc;
  //   $(".btn-play").click(function () {
  //     $videoSrc = $(this).data("src");
  //   });
  //   console.log($videoSrc);

  //   $("#videoModal").on("shown.bs.modal", function (e) {
  //     $("#video").attr(
  //       "src",
  //       $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
  //     );
  //   });

  //   $("#videoModal").on("hide.bs.modal", function (e) {
  //     $("#video").attr("src", $videoSrc);
  //   });
  // });

  // Testimonial Slider
  // $(".testimonial-slider").slick({
  //   infinite: true,
  //   autoplay: true,
  //   arrows: false,
  //   dots: false,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   asNavFor: ".testimonial-slider-nav",
  // });
  // $(".testimonial-slider-nav").slick({
  //   arrows: false,
  //   dots: false,
  //   focusOnSelect: true,
  //   centerMode: true,
  //   centerPadding: "22px",
  //   slidesToShow: 3,
  //   asNavFor: ".testimonial-slider",
  // });
  // $(".testimonial .slider-nav").css({ position: "relative", height: "160px" });

  // Blogs carousel
  // $(".related-slider").owlCarousel({
  //   autoplay: true,
  //   dots: false,
  //   loop: true,
  //   nav: true,
  //   navText: [
  //     '<i class="fa fa-angle-left" aria-hidden="true"></i>',
  //     '<i class="fa fa-angle-right" aria-hidden="true"></i>',
  //   ],
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     576: {
  //       items: 1,
  //     },
  //     768: {
  //       items: 2,
  //     },
  //   },
  // });

  // Portfolio isotope and filter
  // var portfolioIsotope = $(".portfolio-container").isotope({
  //   itemSelector: ".portfolio-item",
  //   layoutMode: "fitRows",
  // });

  // $("#portfolio-flters li").on("click", function () {
  //   $("#portfolio-flters li").removeClass("filter-active");
  //   $(this).addClass("filter-active");

  //   portfolioIsotope.isotope({ filter: $(this).data("filter") });
  // });
})(jQuery);

// const submitNewsletterBtn = document.getElementById("submit-newsletter-btn");
// submitNewsletterBtn.addEventListener("click", () => {
//   alert("Thank you for subscribing to our newsletter We won't spam, promise! ");
// });

//leafleat library
// var map = L.map("map").setView([51.505, -0.09], 13);

// L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
//   attribution:
//     '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
// }).addTo(map);

// L.marker([51.5, -0.09])
//   .addTo(map)
//   .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
//   .openPopup();

//#endregion

// Custom Javascript

const allLinks = document.querySelectorAll(".downloadLink").forEach((link) => {
  link.addEventListener("click", () => {
    const downloadButton = document.getElementById("downloadBtn");

    const a = document.createElement("a");
    a.textContent = "Submit & Download";
    a.classList.add("btn", "btn-primary");
    a.setAttribute("id", "downloadBtn");
    a.setAttribute("type", "button");
    // a.setAttribute("download", "download");
    a.setAttribute("href", "#");
    document.querySelector(".modal-footer").replaceChild(a, downloadButton);

    a.addEventListener("click", () => {
      const name = document.getElementById("inputName");
      const email = document.getElementById("inputEmail");
      const contact = document.getElementById("inputContact");

      console.log(`Name: ${name} \nEmail: ${email} \nContact: ${contact}`);

      if (!name.value || !email.value || !contact.value) {
        a.removeAttribute("download");
        Swal.fire({
          title: "Please Enter All Fields",
          confirmButtonText: "OK",
        });
        return;
      }

      const validEmail =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (email.value.match(validEmail)) {
      } else {
        Swal.fire({
          title: "Please check your email again!",
          confirmButtonText: "OK",
        });
        return;
      }

      const validPhone = "^([0-9()/+ -]*)$";
      if (contact.value.match(validPhone)) {
      } else {
        Swal.fire({
          title: "Please check your phone number!",
          confirmButtonText: "OK",
        });
        return;
      }

      a.setAttribute("download", "download");

      // if (link.textContent == "Brochure")
      //   a.setAttribute("href", "./7Canal Brochure.pdf");
      // else if (link.textContent == "3D Walkthrough")
      //   a.setAttribute("href", "./walkthroughVideo.mp4");
      // else if (link.textContent == "Price Lists")
      //   a.setAttribute("href", "./walkthroughVideo.mp4");
      // else if (link.textContent == "Construction Update")
      //   a.setAttribute("href", "./walkthroughVideo.mp4");
      // else if (link.textContent == "Layouts")
      //   a.setAttribute("href", "./walkthroughVideo.mp4");

      if (link.textContent == "Brochure")
        a.setAttribute("href", "./daonlod.jpg");
      else if (link.textContent == "3D Walkthrough")
        a.setAttribute("href", "./daonlod.jpg");
      else if (link.textContent == "Price Lists")
        a.setAttribute("href", "./daonlod.jpg");
      else if (link.textContent == "Construction Update")
        a.setAttribute("href", "./daonlod.jpg");
      else if (link.textContent == "Layouts")
        a.setAttribute("href", "./daonlod.jpg");
      else if (link.textContent == "Floor Plans")
        a.setAttribute("href", "./daonlod.jpg");
    });
  });
});

// const brochure = document.getElementById("brochureLink");

// brochure.addEventListener("click", () => {
//   const downloadButton = document.getElementById("downloadBtn");

//   const a = document.createElement("a");
//   a.textContent = "Submit & Download";
//   a.classList.add("btn", "btn-primary");
//   a.setAttribute("id", "downloadBtn");
//   a.setAttribute("type", "button");
//   a.setAttribute("href", "./7Canal Brochure.pdf");
//   document.querySelector(".modal-footer").replaceChild(a, downloadButton);

//   const downloadBtn = document.getElementById("downloadBtn");

//   downloadBtn.addEventListener("click", () => {
//     console.log(downloadBtn.textContent);
//   });
// });

// if (document.getElementById("inputName").textContent.length < 0) {
//   document.getElementById("sendMessageButton").disabled = true;
// }

// const submitBtn = document.getElementById("sendMessageButton");

// submitBtn.addEventListener("click", () => {
//   const name = document.getElementById("personName").value;
//   const email = document.getElementById("personEmail").value;
//   const message = document.getElementById("personMessage").value;

//   console.log("coming from here=========>>>   ", name, email, message);

//   const personObject = {
//     name,
//     email,
//     message,
//   };

//   fetch("http://localhost:5501", {
//     method: "POST",
//     mode: "no-cors",
//     headers: { "Content-Type": "application/json" },
//     body: personObject,
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// to handle dropdownof bootstrap and make it open when hovering instead of clicking on it
// https://www.tutorialrepublic.com/faq/how-to-open-bootstrap-dropdown-menu-on-hover-rather-than-click.php#:~:text=Answer%3A%20Use%20the%20jQuery%20hover,using%20the%20CSS%20and%20jQuery.
$(document).ready(function () {
  $(".dropdown").hover(function () {
    var dropdownMenu = $(this).children(".dropdown-menu");
    if (dropdownMenu.is(":visible")) {
      dropdownMenu.parent().toggleClass("open");
    }
  });
});
