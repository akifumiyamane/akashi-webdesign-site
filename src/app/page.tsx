import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyOnline from "@/components/WhyOnline";
import Services from "@/components/Services";
import Flow from "@/components/Flow";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: "明石市発のWeb制作（コーポレート5ページ・LP・Shopify EC）",
  description:
    "明石市発、全国オンライン対応。コーポレートサイト5ページ、LP、Shopify ECの制作と保守まで対応します。無料相談は48時間以内に返信。",
};

export default function Home() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "アカシWeb制作",
    url: siteUrl,
    areaServed: "JP",
    serviceType: ["Web制作", "LP制作", "Shopify EC構築", "Web保守"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "明石市",
      addressCountry: "JP",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "akashi.web.design1031@gmail.com",
      availableLanguage: ["Japanese"],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <WhyOnline />
        <Services />
        <Flow />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
