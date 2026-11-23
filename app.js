
/* =================================
   NOIR FASHION - Main JavaScript
   ================================= */

document.addEventListener("DOMContentLoaded", () => {

  // قائمة الهاتف
  const menuButton = document.querySelector(
    ".menu-toggle, .nav-toggle, [data-menu-toggle]"
  );

  const mobileMenu = document.querySelector(
    ".mobile-menu, .nav-links, [data-menu]"
  );

  if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("active");
      menuButton.setAttribute(
        "aria-expanded",
        mobileMenu.classList.contains("active")
      );
    });
  }

  // السنة الحالية
  document.querySelectorAll("[data-year]").forEach(element => {
    element.textContent = new Date().getFullYear();
  });

  // سلة التسوق
  let cart = [];

  try {
    cart = JSON.parse(localStorage.getItem("noir_cart")) || [];
  } catch {
    cart = [];
  }

  const saveCart = () => {
    localStorage.setItem("noir_cart", JSON.stringify(cart));
    updateCartCount();
  };

  const updateCartCount = () => {
    const count = cart.reduce((total, item) => total + item.quantity, 0);

    document.querySelectorAll(
      "#cart-count, .cart-count, [data-cart-count]"
    ).forEach(element => {
      element.textContent = count;
    });
  };

  // إضافة منتج إلى السلة
  document.addEventListener("click", event => {
    const button = event.target.closest(
      ".add-to-cart, [data-add-to-cart]"
    );

    if (!button) return;

    const product = button.closest(
      ".product-card, .product, [data-product]"
    );

    const name =
      button.dataset.name ||
      product?.querySelector(".product-name, h3, h2")?.textContent?.trim() ||
      "منتج NOIR";

    const price = Number(
      button.dataset.price ||
      product?.querySelector("[data-price]")?.dataset.price ||
      0
    );

    const existing = cart.find(item => item.name === name);

    if (existing) {
      existing.quantity++;
    } else {
      cart.push({
        name,
        price,
        quantity: 1
      });
    }

    saveCart();

    const oldText = button.textContent;
    button.textContent = "تمت الإضافة ✓";

    setTimeout(() => {
      button.textContent = oldText;
    }, 1200);
  });

  updateCartCount();

  // رسائل النماذج
  document.querySelectorAll("form[data-local-form]").forEach(form => {
    form.addEventListener("submit", event => {
      event.preventDefault();
      alert("تم استلام البيانات.");
    });
  });

  // تأثير ظهور العناصر
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(
    ".product-card, .feature-card, .reveal"
  ).forEach(element => {
    observer.observe(element);
  });

});
