
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


  // Render client cards from config.js
  const clientsGrid = document.getElementById("clients-grid");

  if (clientsGrid && Array.isArray(SITE_CONFIG.clients)) {
    clientsGrid.replaceChildren();

    SITE_CONFIG.clients.forEach(client => {
      const card = document.createElement("div");

      card.className =
        "flex min-h-36 items-center justify-center rounded-xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg";

      const image = document.createElement("img");
      image.src = client.logo;
      image.alt = client.alt || `${client.name} logo`;
      image.loading = "lazy";
      image.className = "max-h-16 max-w-full object-contain";

      image.onerror = () => {
        const fallback = document.createElement("span");
        fallback.className =
          "text-center text-sm font-semibold text-slate-500";
        fallback.textContent = client.name || "Client";
        card.replaceChildren(fallback);
      };

      if (client.website) {
        const link = document.createElement("a");
        link.href = client.website;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.className = "flex items-center justify-center";
        link.setAttribute(
          "aria-label",
          `Visit ${client.name || "client"} website`
        );
        link.appendChild(image);
        card.appendChild(link);
      } else {
        card.appendChild(image);
      }

      clientsGrid.appendChild(card);
    });
  }



  
/* =========================================================
   FAQ Renderer — Data from config.js
   ========================================================= */

const faqList = document.getElementById("faq-list");

if (faqList && Array.isArray(SITE_CONFIG.faqs)) {
  faqList.replaceChildren();

  SITE_CONFIG.faqs.forEach((faq, index) => {
    const item = document.createElement("div");

    item.className =
      "faq-item rounded-xl border border-slate-200 bg-white transition duration-300 hover:border-blue-300";

    const questionId = `faq-question-${index + 1}`;
    const answerId = `faq-answer-${index + 1}`;

    const button = document.createElement("button");
    button.type = "button";
    button.id = questionId;
    button.className =
      "flex w-full items-center justify-between gap-5 p-5 text-left sm:p-6";
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-controls", answerId);

    const questionText = document.createElement("span");
    questionText.className =
      "text-base font-semibold text-slate-900 sm:text-lg";
    questionText.textContent = faq.question;

    const iconWrapper = document.createElement("span");
    iconWrapper.className =
      "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-800";

    const icon = document.createElement("i");
    icon.className = "fa-solid fa-plus";
    icon.setAttribute("aria-hidden", "true");

    iconWrapper.appendChild(icon);
    button.append(questionText, iconWrapper);

    const answer = document.createElement("div");
    answer.id = answerId;
    answer.className = "hidden px-5 pb-6 sm:px-6";
    answer.setAttribute("role", "region");
    answer.setAttribute("aria-labelledby", questionId);

    const answerText = document.createElement("p");
    answerText.className = "leading-7 text-slate-600";
    answerText.textContent = faq.answer;

    answer.appendChild(answerText);
    item.append(button, answer);
    faqList.appendChild(item);

    button.addEventListener("click", () => {
      const shouldOpen =
        button.getAttribute("aria-expanded") !== "true";

      // Close all FAQ items
      faqList.querySelectorAll(".faq-item").forEach((otherItem) => {
        const otherButton = otherItem.querySelector("button");
        const otherAnswer = otherItem.querySelector('[role="region"]');
        const otherIcon = otherItem.querySelector("button i");

        otherButton.setAttribute("aria-expanded", "false");
        otherAnswer.classList.add("hidden");
        otherIcon.classList.replace("fa-minus", "fa-plus");

        otherItem.classList.remove(
          "border-blue-300",
          "bg-blue-50/30"
        );
      });

      // Open the selected item
      if (shouldOpen) {
        button.setAttribute("aria-expanded", "true");
        answer.classList.remove("hidden");
        icon.classList.replace("fa-plus", "fa-minus");

        item.classList.add(
          "border-blue-300",
          "bg-blue-50/30"
        );
      }
    });
  });
}



/* =========================================================
   Client Reviews Renderer — Data from config.js
   ========================================================= */

const reviewsGrid = document.getElementById("reviews-grid");

if (reviewsGrid && Array.isArray(SITE_CONFIG.reviews)) {
  reviewsGrid.replaceChildren();

  SITE_CONFIG.reviews.forEach((review) => {
    const card = document.createElement("article");

    card.className =
      "flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg sm:p-8";

    // Quote icon
    const quote = document.createElement("div");
    quote.className =
      "flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-800";

    const quoteIcon = document.createElement("i");
    quoteIcon.className = "fa-solid fa-quote-left text-xl";
    quoteIcon.setAttribute("aria-hidden", "true");
    quote.appendChild(quoteIcon);

    // Rating
    const rating = document.createElement("div");
    rating.className = "mt-6 flex items-center gap-1";
    rating.setAttribute(
      "aria-label",
      `${Math.max(0, Math.min(5, Number(review.rating) || 0))} out of 5 stars`
    );

    const ratingValue = Math.max(
      0,
      Math.min(5, Number(review.rating) || 0)
    );

    for (let i = 0; i < 5; i++) {
      const star = document.createElement("i");
      star.className =
        i < ratingValue
          ? "fa-solid fa-star text-amber-400"
          : "fa-regular fa-star text-slate-300";
      star.setAttribute("aria-hidden", "true");
      rating.appendChild(star);
    }

    // Review text
    const reviewText = document.createElement("p");
    reviewText.className =
      "mt-5 flex-1 text-base leading-8 text-slate-600";
    reviewText.textContent = review.review;

    // Client details
    const person = document.createElement("div");
    person.className =
      "mt-7 flex items-center gap-4 border-t border-slate-100 pt-6";

    if (review.image) {
      const image = document.createElement("img");
      image.src = review.image;
      image.alt = "";
      image.loading = "lazy";
      image.className =
        "h-12 w-12 rounded-full object-cover";

      image.onerror = () => image.remove();
      person.appendChild(image);
    } else {
      const initials = document.createElement("div");
      initials.className =
        "flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-950";
      initials.textContent = (review.name || "C")
        .trim()
        .charAt(0)
        .toUpperCase();

      person.appendChild(initials);
    }

    const details = document.createElement("div");
    details.className = "min-w-0";

    const name = document.createElement("h3");
    name.className = "font-bold text-slate-950";
    name.textContent = review.name || "Client";

    const role = document.createElement("p");
    role.className = "mt-1 text-sm text-slate-500";
    role.textContent = [review.role, review.company]
      .filter(Boolean)
      .join(" · ");

    details.append(name, role);
    person.appendChild(details);

    card.append(quote, rating, reviewText, person);
    reviewsGrid.appendChild(card);
  });
}
