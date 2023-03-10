// Mobile Menu
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const toggleButtonClose = document.getElementsByClassName(
  "toggle-button-close"
)[0];
const mobileMenu = document.getElementsByClassName("mobile-menu")[0];

toggleButton.addEventListener("click", function () {
  mobileMenu.classList.toggle("active");
});
toggleButtonClose.addEventListener("click", function () {
  mobileMenu.classList.toggle("active");
});

document.querySelectorAll(".mobile-links").forEach((n) =>
  n.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  })
);

// Animations
const tl = gsap.timeline({
  defaults: {
    duration: 0.35,
    ease: "power2.easeOut",
  },
});
tl.from(".navigation", { opacity: 0, y: 50 });
tl.fromTo(
  ".home-img",
  { opacity: 0, scale: 0 },
  {
    opacity: 1,
    scale: 1,
    duration: 1,
    ease: "circ.out",
  },
  "<"
);
tl.from(
  ".title, .showcase-para, .home-btns",
  { opacity: 0, duration: 0.8, y: 100 },
  "<"
);

tl.from(
  ".socials",
  { opacity: 0, y: 150, ease: "power2.inOut", duration: 1 },
  "<"
);

// scroll Trigger
gsap.registerPlugin(ScrollTrigger);

gsap.defaults({
  ease: "power2.in",
  duration: 0.75,
});

// about
gsap.fromTo(
  ".about-grid",
  { opacity: 0, y: 100 },
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: ".about-grid",
      toggleActions: "restart none restart none",
    },
  }
);

// Yoga video
gsap.fromTo(
  ".yoga-vid",
  { opacity: 0, scale: 0.5 },
  {
    opacity: 1,
    scale: 1,
    scrollTrigger: {
      trigger: ".yoga-vid",
      toggleActions: "restart none restart none",
    },
  }
);

// Our studio
gsap.fromTo(
  ".location",
  { opacity: 0, x: -300 },
  {
    opacity: 1,
    x: 0,
    scrollTrigger: {
      trigger: ".studio",
      toggleActions: "restart none restart none",
    },
  }
);
gsap.fromTo(
  ".paragraph",
  { opacity: 0, x: 300 },
  {
    opacity: 1,
    x: 0,
    scrollTrigger: {
      trigger: ".studio",
      toggleActions: "restart none restart none",
    },
  }
);
gsap.fromTo(
  ".panel-2",
  { opacity: 0, y: 100 },
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: ".studio",
      toggleActions: "restart none restart none",
    },
  }
);

// Testimonial
gsap.fromTo(
  "#testimonial",
  { opacity: 0, y: 100 },
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: "#testimonial",
      toggleActions: "restart none restart none",
    },
  }
);

gsap.fromTo(
  ".test-left",
  { opacity: 0, scale: 0 },
  {
    opacity: 1,
    scale: 1,
    duration: 1,
    ease: "circ.out",
    scrollTrigger: {
      trigger: ".test-left",
      toggleActions: "restart none restart none",
    },
  }
);
gsap.fromTo(
  ".test-right",
  { opacity: 0, x: -200 },
  {
    opacity: 1,
    x: 0,
    duration: 1,
    ease: "circ.out",
    scrollTrigger: {
      trigger: ".test-right",
      toggleActions: "restart none restart none",
    },
  }
);

// Partners
gsap.fromTo(
  ".partners-list",
  { opacity: 0, x: -1000 },
  {
    opacity: 1,
    x: 0,
    scrollTrigger: {
      trigger: ".partners",
      toggleActions: "restart none restart none",
    },
  }
);

// Classes
gsap.fromTo(
  ".classes-container",
  { opacity: 0, y: 100 },
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: "#classes",
      toggleActions: "restart none restart none",
    },
    duration: 0.75,
  }
);

//   trigger: "#classes",
//   toggleActions: "restart none none none",
// }
// // scrollTrigger: "#classes"

// Contact us
gsap.fromTo(
  ".contact-details",
  { opacity: 0, y: 100 },
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: ".contact-info",
      toggleActions: "restart none restart none",
    },
  }
);

// footer
gsap.fromTo(
  "footer",
  { opacity: 0 },
  {
    opacity: 1,
    scrollTrigger: {
      trigger: "footer",
      toggleActions: "restart none restart none",
    },
  }
);
