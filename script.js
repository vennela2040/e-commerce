// 'use strict';

// const addEventOnElem = function (elem, type, callback) {
//   if (elem instanceof NodeList || Array.isArray(elem)) {
//     // If elem is a NodeList or an array of elements
//     for (let i = 0; i < elem.length; i++) {
//       elem[i].addEventListener(type, callback);
//     }
//   } else {
//     // If elem is a single element
//     elem.addEventListener(type, callback);
//   }
// }



// /**
//  * navbar toggle
//  */
// const navTogglers = document.querySelectorAll("[data-nav-toggler]");
// const navbar = document.querySelector("[data-navbar]");
// const navbarLinks = document.querySelectorAll("[data-nav-link]");
// const overlay = document.querySelector("[data-overlay]");

// const toggleNavbar = function () {
//   navbar.classList.toggle("active");
//   overlay.classList.toggle("active");
// }

// addEventOnElem(navTogglers, "click", toggleNavbar);

// const closeNavbar = function () {
//   navbar.classList.remove("active");
//   overlay.classList.remove("active");
// }

// addEventOnElem(navbarLinks, "click", closeNavbar);

// /**
//  * header sticky & back top btn active
//  */
// const header = document.querySelector("[data-header]");
// const backTopBtn = document.querySelector("[data-back-top-btn]");

// const headerActive = function () {
//   if (window.scrollY > 150) {
//     header.classList.add("active");
//     backTopBtn.classList.add("active");
//   } else {
//     header.classList.remove("active");
//     backTopBtn.classList.remove("active");
//   }
// }

// addEventOnElem(window, "scroll", headerActive);

// let lastScrolledPos = 0;

// const headerSticky = function () {
//   if (lastScrolledPos >= window.scrollY) {
//     header.classList.remove("header-hide");
//   } else {
//     header.classList.add("header-hide");
//   }

//   lastScrolledPos = window.scrollY;
// }

// addEventOnElem(window, "scroll", headerSticky);

// /**
//  * scroll reveal effect
//  */
// const sections = document.querySelectorAll("[data-section]");

// const scrollReveal = function () {
//   for (let i = 0; i < sections.length; i++) {
//     if (sections[i].getBoundingClientRect().top < window.innerHeight / 2) {
//       sections[i].classList.add("active");
//     }
//   }
// }

// scrollReveal();

// addEventOnElem(window, "scroll", scrollReveal);

// /**
//  * Add to cart functionality
//  */
// document.addEventListener("DOMContentLoaded", () => {
//   const addToCartButtons = document.querySelectorAll(".action");

//   addToCartButtons.forEach(button => {
//     button.addEventListener("click", function() {
//       const productId = this.getAttribute("data-product-id");
//       const productElement = document.getElementById(productId);

//       // Check if product element exists
//       if (productElement) {
//         const productHtml = productElement.outerHTML;

//         let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//         cartItems.push(productHtml);
//         localStorage.setItem("cartItems", JSON.stringify(cartItems));

//         window.location.href = "shop.html";
//       } else {
//         console.error(`Product with id ${productId} not found`);
//       }
//     });
//   });

//   const shopContainer = document.querySelector(".sc");

//   if (shopContainer) {
//     let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//     cartItems.forEach(item => {
//       shopContainer.insertAdjacentHTML("beforeend", item);
//     });
//   }
// });
'use strict';

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}

/**
 * navbar toggle
 */
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);

/**
 * header sticky & back top btn active
 */
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
  if (window.scrollY > 150) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", headerActive);

let lastScrolledPos = 0;

const headerSticky = function () {
  if (lastScrolledPos >= window.scrollY) {
    header.classList.remove("header-hide");
  } else {
    header.classList.add("header-hide");
  }

  lastScrolledPos = window.scrollY;
}

addEventOnElem(window, "scroll", headerSticky);

/**
 * scroll reveal effect
 */
const sections = document.querySelectorAll("[data-section]");

const scrollReveal = function () {
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].getBoundingClientRect().top < window.innerHeight / 2) {
      sections[i].classList.add("active");
    }
  }
}

scrollReveal();

addEventOnElem(window, "scroll", scrollReveal);

/**
 * Add to cart functionality
 */
document.addEventListener("DOMContentLoaded", () => {
  const addToCartButtons = document.querySelectorAll(".action");

  addToCartButtons.forEach(button => {
    button.addEventListener("click", function() {
      const productId = this.getAttribute("data-product-id");
      const productElement = document.getElementById(productId);

      // Check if product element exists
      if (productElement) {
        const productHtml = productElement.outerHTML;

        let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        cartItems.push(productHtml);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));

        window.location.href = "shop.html";
      } else {
        console.error(`Product with id ${productId} not found`);
      }
    });
  });

  const shopContainer = document.querySelector(".sc");

  if (shopContainer) {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems.forEach((item, index) => {
      // Create a shop item div
      const shopItem = document.createElement("div");
      shopItem.classList.add("shop-item");
      shopItem.innerHTML = item;

      // Create a remove button
      const removeButton = document.createElement("button");
      removeButton.classList.add("remove-button");
      removeButton.innerText = "Remove";
      removeButton.addEventListener("click", () => {
        // Remove item from cartItems array
        cartItems.splice(index, 1);
        // Update localStorage
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        // Remove the shop item from the DOM
        shopItem.remove();
      });

      // Append the remove button to the shop item
      shopItem.appendChild(removeButton);

      // Append the shop item to the shop container
      shopContainer.appendChild(shopItem);
    });
  }
});
