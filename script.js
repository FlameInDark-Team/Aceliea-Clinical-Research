document.addEventListener("DOMContentLoaded", function () {
  // Load navbar.html into the page
  fetch("navbar.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("navbar-placeholder").innerHTML = data;

      // Setup toggle after navbar is inserted
      const toggle = document.getElementById("menu-toggle");
      const navLinks = document.getElementById("nav-links");

      if (toggle && navLinks) {
        toggle.addEventListener("click", () => {
          navLinks.classList.toggle("active");
        });
      }

      // Mobile dropdown toggle
      const dropdowns = document.querySelectorAll(".dropdown > a");
      dropdowns.forEach(link => {
        link.addEventListener("click", (e) => {
          if (window.innerWidth <= 768) {
            e.preventDefault(); // Prevent navigation
            link.parentElement.classList.toggle("active");
          }
        });
      });

      // Shrink navbar on scroll
      const header = document.querySelector("header");
      window.addEventListener("scroll", () => {
        if (window.scrollY > 10) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      });

      // Handle tab switch for Locations page (if exists)
      const tabButtons = document.querySelectorAll(".tab-button");
      const tabPanels = document.querySelectorAll(".tab-panel");

      tabButtons.forEach(btn => {
        btn.addEventListener("click", () => {
          tabButtons.forEach(b => b.classList.remove("active"));
          tabPanels.forEach(p => p.classList.remove("active"));

          btn.classList.add("active");
          const tab = btn.getAttribute("data-tab");
          const panel = document.getElementById(tab);
          if (panel) panel.classList.add("active");
        });
      });
    });

  // Handle video play/pause (if video exists)
  const video = document.getElementById("myVideo");
  const btn = document.getElementById("myBtn");

  if (btn && video) {
    btn.addEventListener("click", function () {
      if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
      } else {
        video.pause();
        btn.innerHTML = "Play";
      }
    });
  }
});
