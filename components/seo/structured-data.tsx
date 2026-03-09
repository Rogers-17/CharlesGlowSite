export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://charlesglow.com/#business",
    name: "CharlesGLow",
    description: "Professional makeup artist specializing in bridal, editorial, and special occasion makeup services",
    url: "https://charlesglow.com",
    logo: "https://charlesglow.com/images/logo.png",
    image: "https://charlesglow.com/images/hero-bg.jpg",
    sameAs: [
      "https://instagram.com/charlesglow",
      "https://facebook.com/charlesglow",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-234-567-890",
      contactType: "customer service",
      email: "hello@charlesglow.com",
      areaServed: "New York",
      availableLanguage: "English",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "New York",
      addressRegion: "NY",
      addressCountry: "US",
    },
    priceRange: "$$-$$$",
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "CharlesGLow",
    url: "https://charlesglow.com",
  }

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Makeup Artist Services",
    provider: {
      "@type": "LocalBusiness",
      name: "CharlesGLow",
    },
    areaServed: {
      "@type": "City",
      name: "New York",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Makeup Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bridal Makeup",
            description: "Complete wedding day makeup with trial session included",
          },
          price: "350",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Birthday Glam",
            description: "Celebratory makeup for your special day",
          },
          price: "120",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Occasion Makeup",
            description: "Perfect makeup for parties, galas, and special events",
          },
          price: "150",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Photoshoot Makeup",
            description: "Camera-ready makeup for professional photography",
          },
          price: "200",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Editorial & Fashion",
            description: "Bold, creative looks for fashion and magazines",
          },
          price: "280",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Soft Glam",
            description: "Natural everyday glam for a polished look",
          },
          price: "85",
          priceCurrency: "USD",
        },
      ],
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema),
        }}
      />
    </>
  )
}
