// components/SeoWrapper/SeoWrapper.jsx
// ONLY injects JSON-LD structured data.
// All <title>/<meta> come from generateMetadata() in each page.js — Next.js 15 App Router best practice.

import { siteSEO } from "@/utils/seoConfig";

export default function SeoWrapper({ schemas = [], pageUrl = "/", children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ChemicalCompany",
        "@id": `${siteSEO.baseUrl}/#chemicalcompany`,
        name: siteSEO.siteName,
        alternateName: ["Envichem", "Envichem Chemicals", "Envichem Nashik"],
        url: `${siteSEO.baseUrl}${pageUrl}`,
        telephone: siteSEO.phone,
        email: siteSEO.email,
        image: `${siteSEO.baseUrl}${siteSEO.defaultImage}`,
        logo: `${siteSEO.baseUrl}/logo.png`,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteSEO.address.split(",")[0].trim(),
          addressLocality: "Nashik",
          addressRegion: "Maharashtra",
          postalCode: siteSEO.address.match(/\d{6}/)?.[0] || "422005",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 20.0117, // Update with actual coordinates
          longitude: 73.7862, // Update with actual coordinates
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "09:00",
            closes: "18:00",
          },
        ],
        priceRange: "$$",
        areaServed: [
          "Nashik",
          "Maharashtra",
          "Mumbai",
          "Pune",
          "Gujarat",
          "Madhya Pradesh",
          "India",
        ],
        description:
          "Manufacturer of water treatment chemicals, boiler water treatment, cooling water treatment, RO chemicals, biocides, and industrial specialty chemicals.",
        knowsAbout: [
          "Water Treatment Chemicals",
          "Boiler Water Treatment",
          "Cooling Water Treatment",
          "Reverse Osmosis Chemicals",
          "Industrial Biocides",
          "Scale Inhibitors",
          "Corrosion Inhibitors",
          "Effluent Treatment Chemicals",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Chemical Products",
          itemListElement: [
            {
              "@type": "Product",
              name: "Water Treatment Polymers",
              description:
                "Flocculants and coagulants for industrial water treatment",
            },
            {
              "@type": "Product",
              name: "Industrial Biocides",
              description: "Microbiocides and algicides for water systems",
            },
            {
              "@type": "Product",
              name: "Cooling Water Treatment",
              description: "Scale and corrosion inhibitors for cooling towers",
            },
            {
              "@type": "Product",
              name: "Boiler Water Treatment",
              description: "Oxygen scavengers and alkalinity builders",
            },
          ],
        },
      },
      {
        "@type": "Organization",
        "@id": `${siteSEO.baseUrl}/#organization`,
        name: siteSEO.siteName,
        legalName: "Envichem",
        foundingDate: siteSEO.foundingYear,
        founder: {
          "@type": "Person",
          name: siteSEO.founder,
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: siteSEO.phone,
          contactType: "customer service",
          availableLanguage: ["English", "Hindi", "Marathi"],
        },
        sameAs: [
          // Add social media links if available
          // "https://www.linkedin.com/company/envichem",
          // "https://www.facebook.com/envichem",
        ],
      },
      ...schemas,
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
