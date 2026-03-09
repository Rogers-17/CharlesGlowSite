"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-background/70" />
      
      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-6 font-medium">
            Professional Makeup Artist
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight text-foreground mb-6 text-balance">
            Transform Your Look
            <span className="block italic text-primary">For Every Occasion</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            From bridal elegance to editorial glam, we create stunning makeup looks 
            that enhance your natural beauty and make you feel extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group px-8 py-6 text-base bg-primary text-primary-foreground hover:bg-primary/90">
              <Calendar className="mr-2 h-5 w-5" />
              Book Appointment
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-6 text-base border-primary/30 text-foreground hover:bg-primary/10">
              View Our Work
            </Button>
          </div>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-16 pt-16 border-t border-border/30 max-w-2xl mx-auto">
            <div className="flex flex-col items-center text-center min-w-[100px]">
              <p className="font-serif text-3xl md:text-4xl font-semibold text-primary">500+</p>
              <p className="text-sm text-muted-foreground mt-1">Happy Clients</p>
            </div>
            <div className="flex flex-col items-center text-center min-w-[100px]">
              <p className="font-serif text-3xl md:text-4xl font-semibold text-primary whitespace-nowrap">8+ Years</p>
              <p className="text-sm text-muted-foreground mt-1">Experience</p>
            </div>
            <div className="flex flex-col items-center text-center min-w-[100px]">
              <p className="font-serif text-3xl md:text-4xl font-semibold text-primary">100%</p>
              <p className="text-sm text-muted-foreground mt-1">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-border relative overflow-hidden">
          <div className="w-full h-4 bg-primary/50 absolute animate-bounce" />
        </div>
      </div>
    </section>
  )
}
