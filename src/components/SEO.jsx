import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, url, image, type = 'website', schema }) => {
    const siteTitle = "Shareat Foods | Premium Snack Micro Pellets Manufacturer & Exporter India";
    const defaultDescription = "Shareat Foods - Leading micropellets manufacturers and exporter of fry-ready Snack Micro Pellets (Potato, Corn, Rice, Lentil) from India. Top-rated micro pellets manufacturer serving global FMCG brands.";
    const defaultKeywords = "micropellets manufacturers, micro pellets manufacturer, Snack Micro Pellets, micropellets, Micro Pellets, Snack Pellets, Fry-ready pellets, Food Manufacturer India, Snack Exporter, Potato Pellets, Corn Pellets, Private Label Snacks";
    const siteUrl = "https://shareatfoods.com"; // Replace with actual domain
    const defaultImage = "/assets/home_hero_bg.png"; // Replace with actual default image URL

    const fullTitle = title ? `${title} | Shareat Foods` : siteTitle;

    // Default Organization Schema (Geo-Optimization)
    const orgSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Shareat Foods - A. Innovative Food Products Limited",
        "url": siteUrl,
        "logo": `${siteUrl}/logo.png`,
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-9876543210",
            "contactType": "sales",
            "areaServed": ["IN", "AE", "SA", "US", "GB", "EU", "ZA", "AU"],
            "availableLanguage": ["en", "hi", "gu"]
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Block No. 212/2, A Innovative Road, B/H Intas Pharma Unit 2, Matoda Patia",
            "addressLocality": "Ahmedabad",
            "addressRegion": "Gujarat",
            "postalCode": "382213",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "22.8778",
            "longitude": "72.2605"
        },
        "sameAs": [
            "https://www.facebook.com/Shareatfoodsindia",
            "https://www.instagram.com/shareatfoods/",
            "https://www.linkedin.com/company/a-innovative-food-products-limited-shareat/"
        ]
    };

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <meta name="keywords" content={keywords || defaultKeywords} />
            <link rel="canonical" href={url ? `${siteUrl}${url}` : siteUrl} />

            {/* Geo Tags */}
            <meta name="geo.region" content="IN-GJ" />
            <meta name="geo.placename" content="Ahmedabad" />
            <meta name="geo.position" content="22.8778;72.2605" />
            <meta name="ICBM" content="22.8778, 72.2605" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:url" content={url ? `${siteUrl}${url}` : siteUrl} />
            <meta property="og:image" content={image || defaultImage} />
            <meta property="og:site_name" content="Shareat Foods" />
            <meta property="og:locale" content="en_US" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description || defaultDescription} />
            <meta name="twitter:image" content={image || defaultImage} />

            {/* Schema.org JSON-LD */}
            <script type="application/ld+json">
                {JSON.stringify(schema || orgSchema)}
            </script>
        </Helmet>
    );
};

export default SEO;
