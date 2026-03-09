import { Header } from "@/components/landing/header"
import { HeroSection } from "@/components/landing/hero-section"
import { ServicesSection } from "@/components/landing/services-section"
import { GallerySection } from "@/components/landing/gallery-section"
import { AboutSection } from "@/components/landing/about-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { NewsletterSection } from "@/components/landing/newsletter-section"
import { Footer } from "@/components/landing/footer"
import { StructuredData } from "@/components/seo/structured-data"

export default function Home() {
  return (
    <main className="min-h-screen">
      <StructuredData />
      <Header />
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <AboutSection />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
