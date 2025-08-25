export function StructuredData() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "럿지네 과일 장수",
    "alternateName": "Rutjine Fruits",
    "url": "https://www.junilgong.com",
    "description": "농장에서 직접 가져온 신선한 과일을 당일 배송으로 제공하는 프리미엄 과일 전문점입니다.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.junilgong.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "럿지네 과일 장수",
    "url": "https://www.junilgong.com",
    "logo": "https://www.junilgong.com/logo.png",
    "image": "https://www.junilgong.com/hero-background.jpeg",
    "description": "2015년부터 시작된 럿지네 과일 장수는 전국 50+ 농장과 직접 계약하여 당일 배송으로 신선한 과일을 제공합니다.",
    "foundingDate": "2015",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "서울시 강남구 과일로 123",
      "addressLocality": "서울",
      "addressRegion": "서울특별시",
      "postalCode": "06234",
      "addressCountry": "KR"
    },
    "telephone": "+82-2-1234-5678",
    "email": "info@rutjine.co.kr",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "08:00",
      "closes": "22:00"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "럿지네 과일 장수",
    "image": "https://www.junilgong.com/hero-background.jpeg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "서울시 강남구 과일로 123",
      "addressLocality": "서울",
      "addressRegion": "서울특별시",
      "postalCode": "06234",
      "addressCountry": "KR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 37.5665,
      "longitude": 126.9780
    },
    "url": "https://www.junilgong.com",
    "telephone": "+82-2-1234-5678",
    "email": "info@rutjine.co.kr",
    "priceRange": "₩₩",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "08:00",
        "closes": "22:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "234"
    }
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "프리미엄 딸기",
    "image": "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&h=300&fit=crop&crop=center",
    "description": "농장에서 직접 가져온 달콤하고 신선한 프리미엄 딸기입니다.",
    "brand": {
      "@type": "Brand",
      "name": "럿지네 과일 장수"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://www.junilgong.com",
      "priceCurrency": "KRW",
      "price": "12000",
      "priceValidUntil": "2024-12-31",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "럿지네 과일 장수"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "234"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "홈",
        "item": "https://www.junilgong.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "과일",
        "item": "https://www.junilgong.com/fruits"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
