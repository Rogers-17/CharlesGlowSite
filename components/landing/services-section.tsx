"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Sparkles } from "lucide-react"

const services = [
  {
    id: 1,
    name: "Bridal Makeup",
    description: "Your perfect wedding day look with a pre-wedding trial included. Long-lasting, photo-ready makeup.",
    price: 350,
    duration: "2-3 hours",
    popular: true,
    features: ["Trial Session", "Touch-up Kit", "False Lashes"],
    image: "/images/gal7.JPG",
  },
  {
    id: 2,
    name: "Birthday Glam",
    description: "Celebrate your special day looking absolutely stunning with a personalized glam look.",
    price: 120,
    duration: "1-1.5 hours",
    popular: false,
    features: ["Full Glam Look", "Lashes Included", "Setting Spray"],
    image: "/images/gal8.JPG",
  },
  {
    id: 3,
    name: "Occasion Makeup",
    description: "Perfect for parties, galas, graduations, or any special event you want to shine.",
    price: 150,
    duration: "1-2 hours",
    popular: false,
    features: ["Custom Look", "Skin Prep", "Lashes Included"],
    image: "/images/service-occasion.jpg",
  },
  {
    id: 4,
    name: "Photoshoot",
    description: "Camera-ready makeup designed for editorial, headshots, or professional photography.",
    price: 200,
    duration: "1.5-2 hours",
    popular: true,
    features: ["HD Ready", "Multi-Look Options", "Touch-ups"],
    image: "/images/gal3.jpg",
  },
  // {
  //   id: 5,
  //   name: "Editorial & Fashion",
  //   description: "Bold, creative looks for fashion shoots, magazines, and artistic projects.",
  //   price: 280,
  //   duration: "2-3 hours",
  //   popular: false,
  //   features: ["Creative Direction", "Multiple Looks", "Full Day Rate Available"],
  //   image: "/images/service-editorial.jpg",
  // },
  // {
  //   id: 6,
  //   name: "Soft Glam",
  //   description: "Natural, everyday glam perfect for dates, interviews, or when you want to look effortlessly beautiful.",
  //   price: 85,
  //   duration: "45 min - 1 hour",
  //   popular: false,
  //   features: ["Natural Finish", "Skin Focus", "Subtle Enhancement"],
  //   image: "/images/service-softglam.jpg",
  // },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-medium">
            What We Offer
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 text-balance">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From bridal beauty to editorial looks, we offer personalized makeup services for every occasion.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <article
              key={service.id}
              className="group relative bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
                    <Sparkles className="h-3 w-3" />
                    Popular
                  </div>
                )}
              </div>

              <div className="p-6 md:p-8">
                <div className="mb-4">
                  <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>{service.duration}</span>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <p className="text-xs text-muted-foreground">Starting from</p>
                    <p className="font-serif text-2xl font-semibold text-primary">${service.price}</p>
                  </div>
                  <Button variant="outline" size="sm" className="group/btn border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground">
                    Book Now
                    <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 p-8 md:p-12 bg-card border border-primary/20 rounded-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
          <div className="relative">
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-3">
              Need a Custom Package?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Planning a special event or need makeup for a group? Contact us for custom pricing and packages.
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Get Custom Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
