
document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("site-header");
  const footer = document.getElementById("site-footer");

  if (header) header.innerHTML = renderHeader();
  if (footer) footer.innerHTML = renderFooter();

  const year = document.getElementById("current-year");
  if (year) year.textContent = new Date().getFullYear();

  // Mobile navigation
  const menuButton = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", () => {
      const isOpening = mobileMenu.classList.contains("hidden");

      mobileMenu.classList.toggle("hidden");
      menuButton.setAttribute("aria-expanded", String(isOpening));
      menuButton.setAttribute(
        "aria-label",
        isOpening ? "Close navigation" : "Open navigation"
      );
    });

    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation");
      });
    });
  }

  // Tailwind-only scroll reveal
  const revealElements = document.querySelectorAll("[data-reveal]");

  revealElements.forEach(element => {
    element.classList.add(
      "opacity-0",
      "translate-y-6",
      "transition-all",
      "duration-700",
      "ease-out"
    );
  });

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0", "translate-y-6");
          elementVisible(entry.target);
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealElements.forEach(element => revealObserver.observe(element));
  } else {
    revealElements.forEach(element => {
      element.classList.remove("opacity-0", "translate-y-6");
      elementVisible(element);
    });
  }

  function elementVisible(element) {
    element.classList.add("opacity-100", "translate-y-0");
  }

  // Animated number counters
  const counters = document.querySelectorAll("[data-count]");

  function animateCounter(element) {
    const target = Number(element.dataset.count);

    if (!Number.isFinite(target)) return;

    const duration = 1400;
    const start = performance.now();

    function update(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      element.textContent = Math.floor(target * eased).toLocaleString();

      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }

  if ("IntersectionObserver" in window) {
    const counterObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));
  } else {
    counters.forEach(counter => {
      counter.textContent = Number(counter.dataset.count).toLocaleString();
    });
  }

  // Render product cards from config.js
  const productGrid = document.getElementById("product-grid");

  if (productGrid) {
    productGrid.innerHTML = SITE_CONFIG.products.map(product => `
      <article class="group overflow-hidden rounded-lg border border-slate-200 bg-white transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
        data-reveal>
        <a href="contact.html?product=${encodeURIComponent(product.title)}">
          <div class="overflow-hidden">
            <img src="${product.image}"
              alt="${product.title}"
              loading="lazy"
              class="h-60 w-full object-cover transition duration-700 group-hover:scale-105">
          </div>
          <div class="p-7">
            <p class="text-xs font-bold uppercase tracking-widest text-blue-700">
              ${product.number} / ${product.category}
            </p>
            <h2 class="mt-4 text-2xl font-bold text-slate-900">
              ${product.title}
            </h2>
            <p class="mt-3 leading-7 text-slate-600">
              ${product.description}
            </p>
            <span class="mt-6 inline-flex font-bold text-blue-800">
              Enquire About This Product ↗
            </span>
          </div>
        </a>
      </article>
    `).join("");

    productGrid.querySelectorAll("[data-reveal]").forEach(element => {
      element.classList.add(
        "opacity-0",
        "translate-y-6",
        "transition-all",
        "duration-700"
      );
    });

    if ("IntersectionObserver" in window) {
      const productObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-6");
            entry.target.classList.add("opacity-100", "translate-y-0");
            productObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      productGrid.querySelectorAll("[data-reveal]").forEach(element => {
        productObserver.observe(element);
      });
    } else {
      productGrid.querySelectorAll("[data-reveal]").forEach(element => {
        element.classList.remove("opacity-0", "translate-y-6");
        element.classList.add("opacity-100", "translate-y-0");
      });
    }
  }

  // Contact information
  const contactEmail = document.getElementById("contact-email");
  const contactPhone = document.getElementById("contact-phone");
  const contactAddress = document.getElementById("contact-address");
  const contactCompany = document.getElementById("contact-company");

  if (contactEmail) {
    contactEmail.textContent = SITE_CONFIG.contact.email;
    contactEmail.href = `mailto:${SITE_CONFIG.contact.email}`;
  }

  if (contactPhone) {
    contactPhone.textContent = SITE_CONFIG.contact.phone;
    contactPhone.href = `tel:${SITE_CONFIG.contact.phone.replace(/[^+\\d]/g, "")}`;
  }

  if (contactAddress) contactAddress.textContent = SITE_CONFIG.contact.address;
  if (contactCompany) contactCompany.textContent = SITE_CONFIG.company.name;

  // Read product/service query parameters
  const params = new URLSearchParams(window.location.search);
  const requestedItem = params.get("product") || params.get("service");

  const productSelect = document.getElementById("product");
  const subjectInput = document.getElementById("subject");

  if (requestedItem && subjectInput) {
    subjectInput.value = `Enquiry: ${requestedItem}`;
  }

  if (requestedItem && productSelect) {
    const match = Array.from(productSelect.options).find(option =>
      option.value.toLowerCase() === requestedItem.toLowerCase() ||
      option.text.toLowerCase() === requestedItem.toLowerCase()
    );

    if (match) productSelect.value = match.value;
  }

  // Email-based contact form fallback
  const form = document.getElementById("enquiry-form");
  const formStatus = document.getElementById("form-status");

  if (form && formStatus) {
    form.addEventListener("submit", event => {
      event.preventDefault();

      if (!form.reportValidity()) return;

      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      const email = String(data.get("email") || "").trim();
      const company = String(data.get("company") || "").trim();
      const product = String(data.get("product") || "").trim();
      const subject = String(data.get("subject") || "Website enquiry").trim();
      const message = String(data.get("message") || "").trim();

      const body = [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "Not provided"}`,
        `Product / Service: ${product}`,
        "",
        "Project Details:",
        message
      ].join("\n");

      const mailto = new URL(`mailto:${SITE_CONFIG.contact.email}`);
      mailto.searchParams.set("subject", subject);
      mailto.searchParams.set("body", body);

      formStatus.textContent =
        "Opening your email application. Please send the prepared message to complete your enquiry.";

      window.location.href = mailto.toString();
    });
  }
});
