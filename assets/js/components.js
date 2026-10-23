
function renderHeader() {
  const currentPage = location.pathname.split("/").pop() || "index.html";

  return `
    <div class="bg-slate-950 text-slate-300 text-xs sm:text-sm">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 py-3 flex flex-wrap justify-between gap-2">
        <p>Precision Engineering Since ${SITE_CONFIG.company.established}</p>
        <a href="mailto:${SITE_CONFIG.contact.email}" class="hover:text-amber-400 transition">
          ${SITE_CONFIG.contact.email}
        </a>
      </div>
    </div>

    <header class="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <nav class="mx-auto max-w-7xl px-4 sm:px-6 py-4 flex items-center justify-between gap-5">
        <a href="index.html" class="flex items-center gap-3 shrink-0">
          <img src="${SITE_CONFIG.logo.image}"
            alt="${SITE_CONFIG.logo.alt}"
            class="h-11 w-24 object-contain"
            onerror="this.style.display='none'">
          <span class="text-xl font-black tracking-tight text-slate-900">
            ${SITE_CONFIG.company.shortName}<span class="text-blue-600">.</span>
            <span class="block text-[9px] uppercase tracking-widest text-slate-500">
              Tooling Technology
            </span>
          </span>
        </a>

        <button id="menu-toggle"
          type="button"
          aria-label="Open navigation"
          aria-expanded="false"
          aria-controls="mobile-menu"
          class="md:hidden rounded-lg border border-slate-200 p-2 text-slate-800 transition hover:bg-slate-100">
          <svg id="menu-icon" xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round">
            <path d="M4 7h16M4 12h16M4 17h16"/>
          </svg>
        </button>

        <div class="hidden md:flex items-center gap-5 lg:gap-7">
          ${SITE_CONFIG.navigation.map(item => `
            <a href="${item.url}"
              ${currentPage === item.url ? 'aria-current="page"' : ""}
              class="text-sm font-semibold transition hover:text-blue-700
              ${currentPage === item.url ? "text-blue-800" : "text-slate-600"}">
              ${item.label}
            </a>
          `).join("")}

          <a href="contact.html"
            class="inline-flex items-center gap-2 rounded bg-blue-950 px-5 py-3 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-700">
            Request a Quote <span>↗</span>
          </a>
        </div>
      </nav>

      <div id="mobile-menu" class="hidden border-t border-slate-200 bg-white md:hidden">
        <div class="mx-auto max-w-7xl px-4 pb-5">
          ${SITE_CONFIG.navigation.map(item => `
            <a href="${item.url}"
              class="flex items-center justify-between border-b border-slate-100 py-4 text-sm font-semibold
              ${currentPage === item.url ? "text-blue-800" : "text-slate-700"}">
              ${item.label}<span>↗</span>
            </a>
          `).join("")}

          <a href="contact.html"
            class="mt-4 flex justify-center rounded bg-blue-950 px-5 py-3 font-bold text-white transition hover:bg-blue-700">
            Request a Quote
          </a>
        </div>
      </div>
    </header>
  `;
}

function renderFooter() {
  return `
    <footer class="bg-slate-950 text-slate-300">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 pt-16 pb-8">
        <div class="grid gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="index.html" class="text-3xl font-black text-white">
              ${SITE_CONFIG.company.shortName}<span class="text-blue-400">.</span>
            </a>
            <p class="mt-5 text-sm leading-7 text-slate-400">
              ${SITE_CONFIG.company.description}
            </p>
          </div>

          <div>
            <h2 class="mb-5 font-bold text-white">Quick Links</h2>
            <div class="flex flex-col gap-3 text-sm">
              ${SITE_CONFIG.navigation.map(item => `
                <a href="${item.url}" class="transition hover:text-white">
                  ${item.label}
                </a>
              `).join("")}
            </div>
          </div>

          <div>
            <h2 class="mb-5 font-bold text-white">Industries</h2>
            <div class="flex flex-col gap-3 text-sm">
              ${SITE_CONFIG.industries.map(item => `
                <span>${item.title}</span>
              `).join("")}
            </div>
          </div>

          <div>
            <h2 class="mb-5 font-bold text-white">Contact Information</h2>
            <div class="flex flex-col gap-4 break-words text-sm">
              <a href="mailto:${SITE_CONFIG.contact.email}"
                class="transition hover:text-white">
                ${SITE_CONFIG.contact.email}
              </a>
              <a href="tel:${SITE_CONFIG.contact.phone.replace(/[^+\\d]/g, '')}"
                class="transition hover:text-white">
                ${SITE_CONFIG.contact.phone}
              </a>
              <p>${SITE_CONFIG.contact.address}</p>
              <a href="contact.html" class="font-semibold text-blue-400 hover:text-blue-300">
                Discuss Your Project ↗
              </a>
            </div>
          </div>
        </div>

        <div class="flex flex-col justify-between gap-3 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>© <span id="current-year"></span> ${SITE_CONFIG.company.name}. All rights reserved.</p>
          <a href="contact.html" class="hover:text-white">Contact Us ↗</a>
        </div>
      </div>
    </footer>
  `;
}
