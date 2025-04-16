// script.js
window.addEventListener("load", () => {
    gsap.registerPlugin(ScrollTrigger);
  
    gsap.from("section", {
      scrollTrigger: {
        trigger: "section",
        start: "top 85%",
        toggleActions: "play none none reverse"
      },
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2
    });
  
    gsap.utils.toArray(".product-card").forEach((card) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 30,
        duration: 0.5
      });
    });
  
    const products = [
      {
        name: "Cocoa Shine Shampoo",
        image: "picture 1 (2).jpg",
        description: "A hydrating shampoo infused with cocoa butter for ultimate shine.",
        rating: 5
      },
      {
        name: "Bronze Balance Conditioner",
        image: "`picture 2.jpg",
        description: "Nourishing conditioner with bronze minerals to balance scalp health.",
        rating: 4
      },
      {
        name: "Deep Green Hair Oil",
        image: "picture 3 (2).jpg",
        description: "A luxurious blend of botanical oils to promote hair growth.",
        rating: 5
      },
      {
        name: "Zari Hair Growth Elixir",
        image: "picture 4 (2).jpg",
        description: "Stimulate hair follicles and encourage thickness.",
        rating: 4
      },
      {
        name: "Nourishing Leave-in Treatment",
        image: "picture 5 (2).jpg",
        description: "Moisturize and protect with this rich leave-in treatment.",
        rating: 5
      },
      {
        name: "Herbal Revitalizing Scalp Masque",
        image: "picture 6 (2).jpg",
        description: "Deep cleanse and nourish your scalp with potent herbs and antioxidants for a revitalized feel.",
        rating: 5
      },
      {
        name: "Pure Botanical Hair Serum",
        image: "picture 7 (2).jpg",
        description: "A lightweight serum infused with botanical extracts to smooth frizz and boost your hair’s natural shine.",
        rating: 4
      },
      {
        name: "Luxurious Hair Repair Mask",
        image: "picture 8.jpg",
        description: "An intensive repair mask that replenishes moisture and repairs damage for stronger, healthier hair.",
        rating: 5
      },

    ];
  
    const productContainer = document.getElementById("product-container");
  
    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
  
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p>Rating: ${"⭐".repeat(product.rating)}</p>
      `;
      productContainer.appendChild(productCard);
    });
  
    document.getElementById("toggle-theme").addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      if (currentTheme === "dark") {
        document.documentElement.setAttribute("data-theme", "light");
      } else {
        document.documentElement.setAttribute("data-theme", "dark");
      }
    });
  });
  
  function changeContent() {
    const infoText = document.getElementById("info-text");
    infoText.innerHTML = "Our secret formula blends cocoa, avocado, and essential oils for your healthiest hair yet!";
  }