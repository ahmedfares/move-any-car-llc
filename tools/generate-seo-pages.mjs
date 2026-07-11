import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const phoneDisplay = "(470) 222-4927";
const phoneHref = "+14702224927";
const email = "moveanycarus@gmail.com";
const googleProfile = "https://share.google/2CQI1jbhxcHrPcZaW";

const pages = [
  {
    slug: "towing-atlanta",
    city: "Atlanta",
    service: "Towing",
    title: "24/7 Towing in Atlanta, GA | Move Any Car LLC",
    description:
      "Call Move Any Car LLC for 24/7 towing in Atlanta, GA. Local towing, vehicle transport, jump starts, tire changes, lockouts, and roadside assistance.",
    h1: "24/7 towing in Atlanta, GA.",
    intro:
      "When your vehicle is stuck in Atlanta, Move Any Car LLC helps you get the next step handled with professional towing and roadside support.",
    areas: "Downtown Atlanta, Midtown, Buckhead, Westside, East Atlanta, and nearby Metro Atlanta communities",
    bullets: [
      "Local towing for cars, vans, pickups, and light vehicles",
      "Roadside help for jump starts, flat tires, lockouts, and fuel delivery",
      "Professional communication from pickup through drop-off",
      "Useful for breakdowns at homes, apartments, offices, shops, and parking lots"
    ],
    faq: [
      ["Do you offer towing in Atlanta at night?", "Yes. Move Any Car LLC offers 24/7 towing and roadside assistance in Atlanta and nearby Georgia areas."],
      ["What should I tell dispatch?", "Share your pickup location, vehicle type, issue, and the destination if your vehicle needs towing."]
    ]
  },
  {
    slug: "roadside-assistance-atlanta",
    city: "Atlanta",
    service: "Roadside Assistance",
    title: "Roadside Assistance in Atlanta, GA | Move Any Car LLC",
    description:
      "Need roadside assistance in Atlanta? Call Move Any Car LLC for jump starts, tire changes, lockouts, fuel delivery, and towing support.",
    h1: "Roadside assistance in Atlanta when your plans stop moving.",
    intro:
      "A dead battery, flat tire, lockout, or empty tank can interrupt the whole day. Move Any Car LLC helps Atlanta drivers get moving again.",
    areas: "Atlanta neighborhoods, business districts, apartments, shopping areas, and nearby roads",
    bullets: [
      "Jump start support for dead batteries",
      "Flat tire help when you have a usable spare",
      "Vehicle lockout assistance",
      "Fuel delivery and towing options when roadside help is not enough"
    ],
    faq: [
      ["Can you tow the vehicle if roadside help does not fix it?", "Yes. If the vehicle cannot continue safely, Move Any Car LLC can help with towing or transport based on availability."],
      ["Is calling better than texting?", "For urgent roadside assistance, calling is usually fastest. Texting is also available if you need to send details."]
    ]
  },
  {
    slug: "jump-start-atlanta",
    city: "Atlanta",
    service: "Jump Start Service",
    title: "Jump Start Service in Atlanta, GA | Move Any Car LLC",
    description:
      "Dead battery in Atlanta? Call Move Any Car LLC for jump start service, roadside assistance, and towing if your vehicle still will not start.",
    h1: "Jump start service in Atlanta, GA.",
    intro:
      "If your battery dies at home, work, a store, or a parking lot in Atlanta, Move Any Car LLC can help you get the vehicle started or plan a tow.",
    areas: "Atlanta homes, offices, parking decks, retail lots, and nearby Metro Atlanta areas",
    bullets: [
      "Battery jump start support for everyday vehicles",
      "Roadside help when your car will not start",
      "Towing support if the vehicle still cannot drive safely",
      "Clear dispatch details so you know what to send before help arrives"
    ],
    faq: [
      ["What if my car still will not start after a jump?", "If the vehicle still will not start, Move Any Car LLC can help discuss towing or transport options."],
      ["What details should I send?", "Send your exact location, vehicle make/model, parking situation, and whether the vehicle is accessible from the front."]
    ]
  },
  {
    slug: "car-lockout-atlanta",
    city: "Atlanta",
    service: "Car Lockout Service",
    title: "Car Lockout Service in Atlanta, GA | Move Any Car LLC",
    description:
      "Locked out of your vehicle in Atlanta? Call Move Any Car LLC for vehicle lockout help, roadside assistance, and towing support.",
    h1: "Car lockout help in Atlanta, GA.",
    intro:
      "Keys locked inside the car can turn a normal stop into a real delay. Move Any Car LLC helps Atlanta drivers with vehicle lockout support.",
    areas: "Atlanta parking lots, apartments, workplaces, shopping centers, and nearby communities",
    bullets: [
      "Vehicle lockout assistance for common roadside situations",
      "Useful when keys are locked inside the vehicle",
      "Roadside and towing support available when needed",
      "Fast phone contact for urgent situations"
    ],
    faq: [
      ["Can you help if the keys are locked inside?", "Move Any Car LLC can help with vehicle lockout situations based on vehicle type and access."],
      ["Should I call or text?", "Call for the fastest response, especially if you are stranded or blocking traffic."]
    ]
  },
  {
    slug: "towing-marietta",
    city: "Marietta",
    service: "Towing",
    title: "24/7 Towing in Marietta, GA | Move Any Car LLC",
    description:
      "Call Move Any Car LLC for towing in Marietta, GA. 24/7 towing, vehicle transport, jump starts, lockouts, tire changes, and roadside assistance.",
    h1: "Professional towing in Marietta, GA.",
    intro:
      "Move Any Car LLC helps Marietta drivers with local towing, roadside assistance, and vehicle transport when a breakdown interrupts the day.",
    areas: "Marietta, East Cobb, nearby Cobb County communities, and Metro Atlanta service areas",
    bullets: [
      "Towing for cars, vans, pickups, and light vehicles",
      "Roadside assistance for common breakdowns",
      "Help from parking lots, homes, auto shops, and roadside locations",
      "5-star Google profile and professional service"
    ],
    faq: [
      ["Do you serve Marietta and nearby Cobb County areas?", "Yes. Move Any Car LLC serves Marietta and nearby Metro Atlanta communities based on route and availability."],
      ["Can you pick up from an auto shop?", "Yes. Share the shop address, vehicle details, and destination so dispatch can plan the tow."]
    ]
  },
  {
    slug: "towing-alpharetta",
    city: "Alpharetta",
    service: "Towing",
    title: "24/7 Towing in Alpharetta, GA | Move Any Car LLC",
    description:
      "Need towing in Alpharetta, GA? Call Move Any Car LLC for 24/7 towing, roadside assistance, jump starts, lockouts, tire changes, and vehicle transport.",
    h1: "Towing and roadside help in Alpharetta, GA.",
    intro:
      "Move Any Car LLC helps Alpharetta drivers with towing, vehicle transport, and roadside assistance for breakdowns and urgent vehicle issues.",
    areas: "Alpharetta, Roswell, Johns Creek, North Fulton, and nearby Metro Atlanta communities",
    bullets: [
      "Local towing and vehicle transport",
      "Jump starts, tire changes, lockouts, and fuel delivery",
      "Support for homes, offices, parking lots, and roadside calls",
      "Clear communication before and during the job"
    ],
    faq: [
      ["Do you serve Alpharetta and North Fulton?", "Yes. Move Any Car LLC serves Alpharetta and nearby areas including Roswell and Johns Creek based on availability."],
      ["Can I text the pickup and drop-off details?", "Yes. You can text details to the same phone number, but calling is best for urgent towing."]
    ]
  }
];

const navLinks = `
        <a href="/#services">Services</a>
        <a href="/#areas">Areas</a>
        <a href="/#proof">Photos</a>
        <a href="/#reviews">Reviews</a>
        <a href="/#faq">FAQ</a>`;

const pageLinks = pages
  .map((page) => `<a href="/${page.slug}/">${page.service} in ${page.city}</a>`)
  .join("\n            ");

function buildSchema(page) {
  return JSON.stringify(
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          "@id": "https://moveanycarus.com/#business",
          name: "Move Any Car LLC",
          url: "https://moveanycarus.com/",
          telephone: phoneHref,
          email,
          image: "https://moveanycarus.com/public/images/tow-truck.jpg",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            addressRegion: "GA",
            addressCountry: "US"
          },
          areaServed: [
            { "@type": "City", name: page.city },
            { "@type": "State", name: "Georgia" }
          ],
          sameAs: [googleProfile]
        },
        {
          "@type": "Service",
          "@id": `https://moveanycarus.com/${page.slug}/#service`,
          name: `${page.service} in ${page.city}, GA`,
          provider: { "@id": "https://moveanycarus.com/#business" },
          areaServed: { "@type": "City", name: page.city },
          serviceType: page.service
        },
        {
          "@type": "WebPage",
          "@id": `https://moveanycarus.com/${page.slug}/#webpage`,
          url: `https://moveanycarus.com/${page.slug}/`,
          name: page.title,
          description: page.description,
          about: { "@id": `https://moveanycarus.com/${page.slug}/#service` },
          isPartOf: { "@id": "https://moveanycarus.com/#website" },
          inLanguage: "en-US"
        },
        {
          "@type": "FAQPage",
          mainEntity: page.faq.map(([question, answer]) => ({
            "@type": "Question",
            name: question,
            acceptedAnswer: {
              "@type": "Answer",
              text: answer
            }
          }))
        }
      ]
    },
    null,
    8
  );
}

function buildPage(page) {
  const schema = buildSchema(page);
  const bulletItems = page.bullets.map((bullet) => `<li>${bullet}</li>`).join("\n              ");
  const faqItems = page.faq
    .map(
      ([question, answer], index) => `
          <div class="faq-item">
            <button class="faq-question" type="button" aria-expanded="false" aria-controls="faq-answer-${index + 1}">
              ${question}
            </button>
            <div class="faq-answer" id="faq-answer-${index + 1}">
              <div>
                <p>${answer}</p>
              </div>
            </div>
          </div>`
    )
    .join("");

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${page.title}</title>
    <meta name="description" content="${page.description}" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://moveanycarus.com/${page.slug}/" />
    <meta name="theme-color" content="#08111f" />

    <meta property="og:type" content="website" />
    <meta property="og:title" content="${page.title}" />
    <meta property="og:description" content="${page.description}" />
    <meta property="og:url" content="https://moveanycarus.com/${page.slug}/" />
    <meta property="og:image" content="https://moveanycarus.com/public/images/tow-truck.jpg" />
    <meta property="og:image:alt" content="Move Any Car LLC tow truck providing ${page.service.toLowerCase()} in ${page.city}, Georgia" />
    <meta property="og:site_name" content="Move Any Car LLC" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${page.title}" />
    <meta name="twitter:description" content="${page.description}" />
    <meta name="twitter:image" content="https://moveanycarus.com/public/images/tow-truck.jpg" />
    <meta name="author" content="Move Any Car LLC" />
    <meta name="geo.region" content="US-GA" />
    <meta name="geo.placename" content="${page.city}, Georgia" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Outfit:wght@600;700;800;900&display=swap"
      rel="stylesheet"
    />
    <link rel="icon" href="/public/images/logo.jpg" />
    <link rel="preload" as="image" href="/public/images/tow-truck.jpg" />
    <link rel="sitemap" type="application/xml" href="https://moveanycarus.com/sitemap.xml" />
    <link rel="stylesheet" href="/styles.css" />
    <script defer src="/script.js"></script>
    <script type="application/ld+json">
      ${schema}
    </script>
  </head>
  <body>
    <header class="site-header" aria-label="Primary navigation">
      <a class="brand" href="/" aria-label="Move Any Car LLC home">
        <img src="/public/images/logo.jpg" alt="Move Any Car LLC logo" width="64" height="64" />
        <span>
          <strong>Move Any Car LLC</strong>
          <small>We get you back on the road</small>
        </span>
      </a>
      <nav class="nav-links" aria-label="Site sections">${navLinks}
      </nav>
      <a class="header-call" href="tel:${phoneHref}">Call ${phoneDisplay}</a>
    </header>

    <main id="top">
      <section class="local-hero" aria-labelledby="hero-title">
        <div class="local-hero-media" aria-hidden="true">
          <img src="/public/images/tow-truck.jpg" alt="" />
        </div>
        <div class="local-hero-content reveal">
          <p class="eyebrow">${page.city}, Georgia</p>
          <h1 id="hero-title">${page.h1}</h1>
          <p>${page.intro}</p>
          <div class="cta-row" aria-label="Contact options">
            <a class="button button-primary" href="tel:${phoneHref}">Call Now</a>
            <a class="button button-secondary" href="sms:${phoneHref}">Text Us</a>
          </div>
        </div>
      </section>

      <section class="local-page-wrap">
        <div class="local-main">
          <section class="local-section reveal" aria-labelledby="service-title">
            <p class="eyebrow">${page.service}</p>
            <h2 id="service-title">${page.service} for drivers in ${page.city}.</h2>
            <p>
              Call Move Any Car LLC at <a href="tel:${phoneHref}">${phoneDisplay}</a> when you need help with towing,
              roadside assistance, vehicle transport, jump starts, lockouts, tire changes, fuel delivery, or light hauling.
            </p>
            <ul class="check-list">
              ${bulletItems}
            </ul>
          </section>

          <section class="local-section reveal" aria-labelledby="area-title">
            <p class="eyebrow">Service area</p>
            <h2 id="area-title">Serving ${page.areas}.</h2>
            <p>
              Service availability depends on route, timing, vehicle condition, and location access. For the fastest answer,
              call and share your exact pickup location, vehicle type, and destination if towing is needed.
            </p>
          </section>

          <section class="local-section faq reveal" aria-labelledby="faq-title">
            <p class="eyebrow">FAQ</p>
            <h2 id="faq-title">Questions about ${page.service.toLowerCase()} in ${page.city}.</h2>
            <div class="faq-list">${faqItems}
            </div>
          </section>
        </div>

        <aside class="local-sidebar">
          <div class="contact-panel tilt-card">
            <img src="/public/images/logo.jpg" alt="Move Any Car LLC logo" width="140" height="140" />
            <h3>Need help now?</h3>
            <p>Call dispatch and share your location, vehicle type, and what happened.</p>
            <a class="button button-primary" href="tel:${phoneHref}">Call ${phoneDisplay}</a>
            <a class="plain-link" href="${googleProfile}" rel="noopener" target="_blank">View Google Business Profile</a>
          </div>
          <div class="local-link-card">
            <h3>Other service pages</h3>
            <div class="local-links">
              ${pageLinks}
            </div>
          </div>
        </aside>
      </section>
    </main>

    <footer class="site-footer">
      <div>
        <strong>Move Any Car LLC</strong>
        <p>24/7 towing and roadside assistance in Georgia.</p>
      </div>
      <div class="footer-links">
        <a href="tel:${phoneHref}">${phoneDisplay}</a>
        <a href="sms:${phoneHref}">Text us</a>
        <a href="mailto:${email}">${email}</a>
        <a href="${googleProfile}" rel="noopener" target="_blank">Google Business Profile</a>
      </div>
    </footer>

    <div class="mobile-action-bar" aria-label="Quick contact">
      <a href="tel:${phoneHref}">Call Now</a>
      <a href="sms:${phoneHref}">Text Us</a>
    </div>
  </body>
</html>
`;
}

for (const page of pages) {
  const dir = join(root, page.slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), buildPage(page));
}
