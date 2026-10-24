# PROJECT RULES — BSJ TOOLING TECHNOLOGY WEBSITE

## 1. Project Identity

**Company:** B.S.J Tooling Technology Limited
**Website:** Corporate industrial manufacturing website
**Location:** Dongguan, Guangdong, China
**Established:** 2010
**Factory area:** Approximately 10,000 m²
**Employees:** Approximately 120

The company develops and manufactures injection molds for industrial applications.

### Industries

- Automotive
- Electronics
- Smart Home
- Healthcare

### Product Categories

- Injection Molds
- Hot Runner Systems
- Auxiliary Equipment
- Robot Systems

Treat company details as supplied project information. Do not invent certifications, customer names, awards, factory capabilities, contact details, or other business claims.

---

## 2. Mandatory Technology Stack

Use only the following technologies unless I explicitly approve a change:

- HTML5
- Tailwind CSS through its CDN
- Vanilla JavaScript
- Standard browser APIs

### Strict Restrictions

- Do not use React.
- Do not use Next.js.
- Do not use TypeScript.
- Do not use Bootstrap.
- Do not use jQuery.
- Do not introduce another CSS framework.
- Do not create a custom CSS stylesheet.
- Do not write custom CSS rules inside `<style>` tags.
- Do not introduce unnecessary libraries or build tools.
- Do not migrate the project to another framework.

Use Tailwind utility classes directly in HTML and JavaScript-generated markup.

---

## 3. Permanent Folder Structure

Keep this structure unchanged unless I explicitly request a change:

```text
bsj-website/
├── index.html
├── about.html
├── products.html
├── services.html
├── contact.html
└── assets/
    └── js/
        ├── config.js
        ├── components.js
        └── main.js
```

### File responsibilities

- `index.html`: Homepage and company overview.
- `about.html`: Company history, profile, and approach.
- `products.html`: Product categories and product enquiries.
- `services.html`: Services and project workflow.
- `contact.html`: Contact information and enquiry form.
- `assets/js/config.js`: Centralized company information, theme settings, navigation, images, products, and industries.
- `assets/js/components.js`: Shared navigation and footer.
- `assets/js/main.js`: Mobile menu, animations, counters, product rendering, and form behavior.

Do not create duplicate files or alternative versions unnecessarily.

---

## 4. Design Rules — Do Not Change the Style

Maintain the existing visual direction:

- Professional industrial and manufacturing website.
- Modern, clean, premium corporate appearance.
- White backgrounds for content sections.
- Dark navy and slate colors for headings and major sections.
- Blue accents for links, buttons, and highlights.
- Amber accents for important calls to action.
- Large, bold headings.
- Generous spacing and clean alignment.
- Responsive layouts for mobile, tablet, laptop, and desktop.
- Industrial photography and product-focused layouts.
- Subtle hover effects, transitions, and scroll-reveal animations.
- Consistent buttons, cards, typography, navigation, and footer.

Use the existing design as the baseline. Do not redesign the website, change the color scheme, replace the layout, or introduce a new visual style unless I explicitly request it.

Do not add unnecessary decorative effects or animations that make the website look less professional.

---

## 5. Tailwind CSS Rules

Every HTML page must load Tailwind using:

```html
<script src="https://cdn.tailwindcss.com"></script>
```

Use Tailwind utilities for all styling, including:

- Layout and containers
- Grid and flexbox
- Padding and margins
- Colors and typography
- Borders and shadows
- Responsive breakpoints
- Hover and focus states
- Transitions and transforms
- Visibility and mobile navigation
- Animation utilities

Do not create classes such as `.button-primary`, `.navbar`, or `.card` that depend on custom CSS definitions.

Reusable components must contain their own Tailwind utility classes.

JavaScript may toggle existing Tailwind utility classes to implement interactions.

For dynamic hero backgrounds, use existing inline background-image attributes or appropriate JavaScript. Do not add custom CSS rules.

---

## 6. Shared Configuration Rules

Keep company-specific and reusable data in `assets/js/config.js`.

Examples include:

- Company name and tagline
- Email and telephone number
- Address
- Logo
- Images
- Navigation links
- Product information
- Industries
- Theme-related settings

When a detail already exists in the configuration, reuse it instead of hardcoding a conflicting value elsewhere.

Do not invent actual contact information. Keep placeholders until I provide verified details.

Avoid duplicating product data unnecessarily across pages.

---

## 7. JavaScript Rules

Use vanilla JavaScript and preserve the existing shared-file architecture.

- `components.js` owns the shared header and footer.
- `main.js` owns shared interactive behavior.
- `config.js` owns reusable configuration and data.

Keep the mobile menu functional and accessible.

Preserve existing behavior for:

- Mobile navigation
- Active navigation links
- Scroll-reveal animations
- Animated counters
- Product cards generated from configuration
- Product-specific enquiry links
- Contact information rendered from configuration
- Contact form validation and email preparation

Do not remove existing functionality when adding new features.

Avoid unnecessary global variables, duplicate event listeners, broken selectors, and repeated implementations of the same feature.

---

## 8. Responsive and Accessibility Rules

Every page must work on:

- Mobile phones
- Tablets
- Laptops
- Desktop screens

Use responsive Tailwind breakpoints such as `sm:`, `md:`, `lg:`, and `xl:` when appropriate.

Maintain:

- Semantic HTML
- Proper heading hierarchy
- Accessible form labels
- Useful image alt text
- Keyboard-accessible links and buttons
- Visible focus states
- Appropriate color contrast
- Accessible mobile menu states

Prevent horizontal overflow and ensure navigation remains usable on small screens.

---

## 9. SEO and Performance Rules

Preserve and improve:

- Unique page titles
- Meta descriptions
- Semantic headings
- Descriptive links
- Image alt text
- Meaningful URLs and filenames
- Appropriate image sizing
- Lazy loading for below-the-fold images
- Consistent navigation between pages

Do not claim that a static contact form submits to a server when it only opens an email application.

Do not claim that a feature works unless the implementation supports it.

---

## 10. Critical Rule for Future Code Changes

**Never change the existing project style, structure, technology stack, naming conventions, or established behavior without my explicit permission.**

When I request a feature or correction:

1. Understand the existing implementation first.
2. Keep the current design and project architecture.
3. Make only the changes necessary to fulfil my request.
4. Preserve all unrelated features.
5. Reuse existing components, configuration, and utility-class patterns.
6. Do not rewrite the entire project for a small change.
7. Do not replace working code with a different implementation without a clear reason.
8. Do not introduce custom CSS.
9. Do not switch frameworks or add dependencies without asking me first.
10. Keep all pages visually consistent.

If a proposed change would require breaking one of these rules, explain the reason and ask before proceeding.

---

## 11. Code Delivery Rules

I prefer complete, individually copyable files rather than ZIP archives.

When I request code:

- Clearly identify each filename.
- Provide the complete contents of each file you need to create or replace.
- Do not omit important sections with phrases such as "rest of the code remains the same" when I request a complete file.
- Do not rename files without permission.
- Include all necessary imports or script references.
- Ensure script loading order is correct.
- Ensure links between pages work.
- Ensure referenced IDs and selectors match.
- Avoid unnecessary explanations between code blocks.

### When changing an existing file

Provide only the affected file or files unless I explicitly request the entire project again.

Do not regenerate all five pages for a change that only affects one page.

### When I request the entire project

Provide every required file in the established folder structure, with complete copy-and-paste code.

---

## 12. How to Handle Ambiguity

If my instruction is brief or contains spelling mistakes, interpret it using the existing project context.

Do not repeatedly ask me to confirm decisions that are already established in this file.

Ask a clarification question only when a genuinely important detail is missing or when different interpretations would produce substantially different results.

Do not assume that a request to add a feature means I want the existing design changed.

---

## 13. Final Quality Checklist

Before providing code, verify:

- [ ] The existing project structure is preserved.
- [ ] No custom CSS file or custom CSS rules have been introduced.
- [ ] Tailwind utility classes are used consistently.
- [ ] Existing styling and page layouts remain consistent.
- [ ] Shared configuration is reused.
- [ ] Navigation and links point to the correct pages.
- [ ] JavaScript selectors match the HTML.
- [ ] Existing functionality has not been accidentally removed.
- [ ] The code is responsive and accessible.
- [ ] No company facts or contact details have been invented.
- [ ] The response contains complete files when complete files were requested.

**Final instruction:** Treat this document as the permanent baseline for the BSJ Tooling Technology website. Maintain continuity across future changes. Modify the project only as requested, and never make unrelated design or architecture changes.
