document.addEventListener("DOMContentLoaded", function() {
    const categoryTabs = document.querySelectorAll(".category__tab");
    const menuCards = document.querySelectorAll(".menu__card");

    categoryTabs.forEach(tab => {
      tab.addEventListener("click", () => {

        categoryTabs.forEach(t => t.classList.remove("active"));

        tab.classList.add("active");

        const category = tab.getAttribute("data-category");

        menuCards.forEach(card => {
          if (category === "all" || card.getAttribute("data-category") === category) {
            card.classList.remove("hide");
          } else {
            card.classList.add("hide");
          }
        });
      });
    });

    const scrollRevealOption = {
      distance: "50px",
      origin: "bottom",
      duration: 1000,
    };
  
    ScrollReveal().reveal(".menu__header h1", scrollRevealOption);
    ScrollReveal().reveal(".menu__header .section__description", {
      ...scrollRevealOption,
      delay: 500,
    });
  
    ScrollReveal().reveal(".category__tabs", {
      ...scrollRevealOption,
      delay: 800,
    });
  
    ScrollReveal().reveal(".menu__card", {
      ...scrollRevealOption,
      interval: 300,
    });
  
    ScrollReveal().reveal(".menu__cta", {
      ...scrollRevealOption,
      delay: 300,
    });
  });