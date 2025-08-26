// Toggle mobile menu
const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('mobile-menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

// Testimonial Slider Logic
document.addEventListener("DOMContentLoaded", function () {
  const testimonials = document.querySelectorAll(".testimonial");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let currentIndex = 0;

  function showSlide(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.classList.remove("active");
      dots[i].classList.remove("active");
    });

    testimonials[index].classList.add("active");
    dots[index].classList.add("active");
  }

  // Event Listeners
  if (nextBtn && prevBtn && dots.length) {
    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % testimonials.length;
      showSlide(currentIndex);
    });

    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
      showSlide(currentIndex);
    });

    dots.forEach((dot, idx) => {
      dot.addEventListener("click", () => {
        currentIndex = idx;
        showSlide(currentIndex);
      });
    });

    // Auto-slide every 6s
    setInterval(() => {
      currentIndex = (currentIndex + 1) % testimonials.length;
      showSlide(currentIndex);
    }, 6000);
  }

  // Initialize first slide
  showSlide(currentIndex);
});

// patners js

document.addEventListener("DOMContentLoaded", function () {
  const partners = [
    { img: "images/blak 2.png", name: "Post bank Uganda" },
    { img: "images/blue.png", name: "20th intake sacco" },
    { img: "partner3.png", name: "Partner 3 Name" },
    { img: "partner4.png", name: "Partner 4 Name" },
    { img: "partner5.png", name: "Partner 5 Name" }
  ];

  let currentPartner = 0;

  const logoEl = document.getElementById("partnerLogo");
  const nameEl = document.getElementById("partnerName");
  const prevBtn = document.getElementById("partnerPrev");
  const nextBtn = document.getElementById("partnerNext");

  function updatePartnerDisplay(index) {
    logoEl.src = partners[index].img;
    logoEl.alt = partners[index].name;
    nameEl.textContent = partners[index].name;
  }

  prevBtn.addEventListener("click", () => {
    currentPartner = (currentPartner - 1 + partners.length) % partners.length;
    updatePartnerDisplay(currentPartner);
  });

  nextBtn.addEventListener("click", () => {
    currentPartner = (currentPartner + 1) % partners.length;
    updatePartnerDisplay(currentPartner);
  });

  // Autoplay every 5 seconds
  setInterval(() => {
    currentPartner = (currentPartner + 1) % partners.length;
    updatePartnerDisplay(currentPartner);
  }, 5000);

  // Initialize
  updatePartnerDisplay(currentPartner);
});
