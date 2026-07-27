// JSON-LD schema.org markup, sourced from "Schemas for all pages.md".

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareCompany",
  "@id": "https://www.cosmiccoder24.com/#organization",
  name: "Cosmic Coder 24",
  url: "https://www.cosmiccoder24.com",
  logo: "https://www.cosmiccoder24.com/logo.png",
  image: "https://www.cosmiccoder24.com/logo.png",
  description:
    "Cosmic Coder 24 is a software development and digital marketing company offering website development, SEO, Google Business Profile optimization, branding, and custom software solutions to help businesses grow online.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Guru Arjan Dev Colony, I-04",
    addressLocality: "Jabalpur",
    addressRegion: "Madhya Pradesh",
    postalCode: "482008",
    addressCountry: "IN",
  },
  areaServed: { "@type": "Country", name: "India" },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+919713990593",
    contactType: "customer support",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi"],
  },
  sameAs: [
    "https://www.instagram.com/cosmic_coder_24",
    "https://www.linkedin.com/company/cosmiccoder24",
  ],
};

function serviceSchema(serviceType, description, extra = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType,
    provider: {
      "@type": "SoftwareCompany",
      name: "Cosmic Coder 24",
      ...(extra.providerUrl !== false && { url: "https://www.cosmiccoder24.com" }),
    },
    ...(extra.areaServed && { areaServed: extra.areaServed }),
    description,
  };
}

export const serviceSchemas = {
  websiteDevelopment: serviceSchema(
    "Website Development",
    "We provide responsive, SEO-friendly website development services for businesses to build a strong online presence.",
    { areaServed: "India" }
  ),
  softwareDevelopment: serviceSchema(
    "Software Development",
    "Custom software development solutions including web applications, automation tools, and business software.",
    { areaServed: "India", providerUrl: false }
  ),
  socialMediaMarketing: serviceSchema(
    "Social Media Marketing",
    "Social media marketing services to grow your brand, increase engagement, and generate leads through platforms like Instagram and Facebook.",
    { providerUrl: false }
  ),
  seoServices: serviceSchema(
    "SEO Services",
    "Search Engine Optimization services to improve Google rankings, increase organic traffic, and grow business visibility.",
    { providerUrl: false }
  ),
  brandingLogoDesign: serviceSchema(
    "Branding and Logo Design",
    "Creative branding and logo design services to build a unique identity for your business.",
    { providerUrl: false }
  ),
  graphicsDesign: serviceSchema(
    "Graphics Design",
    "Professional graphic design services including social media creatives, banners, and marketing materials.",
    { providerUrl: false }
  ),
  packagingDesign: serviceSchema(
    "Packaging Design",
    "Attractive and functional packaging design solutions for products to enhance brand appeal and customer experience.",
    { providerUrl: false }
  ),
  videoEditing: serviceSchema(
    "Video Editing",
    "Professional video editing services for reels, ads, promotional and social media content.",
    { providerUrl: false }
  ),
};

function portfolioSchema(name, description) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name,
    creator: { "@type": "Organization", name: "Cosmic Coder 24" },
    description,
  };
}

export const portfolioSchemas = {
  websiteDevelopment: portfolioSchema(
    "Website Development Portfolio",
    "Portfolio showcasing website development projects completed by Cosmic Coder 24."
  ),
  graphicsDesigning: portfolioSchema(
    "Graphics Designing Portfolio",
    "Portfolio of graphic design work including creatives and branding designs."
  ),
  videoEditing: portfolioSchema(
    "Video Editing Portfolio",
    "Portfolio of video editing projects including reels, ads, and promotional videos."
  ),
  brandingLogoDesign: portfolioSchema(
    "Branding and Logo Design Portfolio",
    "Portfolio showcasing branding and logo design work."
  ),
};

export const seoResultsSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "@id": "https://www.cosmiccoder24.com/results/#casestudy",
  name: "SEO Results and Case Studies - Cosmic Coder 24",
  description:
    "Real SEO case studies showing ranking improvements, traffic growth, and lead generation results achieved by Cosmic Coder 24 for clients across India.",
  creator: {
    "@type": "Organization",
    name: "Cosmic Coder 24",
    url: "https://www.cosmiccoder24.com",
  },
  about: [
    { "@type": "Thing", name: "SEO Results" },
    { "@type": "Thing", name: "Google Ranking Improvement" },
    { "@type": "Thing", name: "Lead Generation Growth" },
  ],
  keywords: [
    "SEO results Jabalpur",
    "Google ranking improvement",
    "SEO case study India",
    "digital marketing results",
    "traffic growth SEO",
  ],
  audience: { "@type": "Audience", audienceType: "Business Owners" },
};

export const careersSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Cosmic Coder 24",
  url: "https://www.cosmiccoder24.com",
  description:
    "Explore career opportunities at Cosmic Coder 24 in digital marketing and software development.",
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.cosmiccoder24.com/#localbusiness",
  name: "Cosmic Coder 24",
  url: "https://www.cosmiccoder24.com",
  logo: "https://www.cosmiccoder24.com/logo.png",
  image: "https://www.cosmiccoder24.com/logo.png",
  description:
    "Cosmic Coder 24 is a software development and digital marketing company based in Jabalpur, offering website development, SEO, social media marketing, branding, and custom software solutions to help businesses grow online.",
  telephone: "+919713990593",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Guru Arjan Dev Colony, I-04",
    addressLocality: "Jabalpur",
    addressRegion: "Madhya Pradesh",
    postalCode: "482008",
    addressCountry: "IN",
  },
  areaServed: { "@type": "Country", name: "India" },
  sameAs: [
    "https://www.instagram.com/cosmic_coder_24",
    "https://www.linkedin.com/company/cosmiccoder24",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+919713990593",
    contactType: "customer support",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi"],
  },
};

export const delhiServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.cosmiccoder24.com/delhi#service",
  name: "Website Development Services in Delhi",
  serviceType: "Website Development",
  description:
    "Cosmic Coder 24 provides professional website development services in Delhi, including business websites, eCommerce websites, landing pages, portfolio websites, and custom web development solutions.",
  url: "https://www.cosmiccoder24.com/delhi",
  provider: {
    "@type": "SoftwareCompany",
    "@id": "https://www.cosmiccoder24.com/#organization",
    name: "Cosmic Coder 24",
    url: "https://www.cosmiccoder24.com",
    telephone: "+91 9713990593",
    logo: "https://www.cosmiccoder24.com/logo.png",
    sameAs: [
      "https://www.instagram.com/cosmic_coder_24",
      "https://www.linkedin.com/company/cosmiccoder24",
    ],
  },
  areaServed: { "@type": "City", name: "Delhi" },
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: "https://www.cosmiccoder24.com/delhi",
  },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "INR",
  },
};
