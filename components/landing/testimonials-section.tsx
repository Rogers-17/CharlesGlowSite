"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    name: "Jessica Martinez",
    role: "Bride",
    content: "CharlesGLow made me feel like an absolute queen on my wedding day. The makeup lasted through tears of joy, dancing, and a 12-hour celebration. I couldn't have asked for a better experience!",
    rating: 5,
  },
  {
    id: 2,
    name: "Amanda Chen",
    role: "Birthday Client",
    content: "Booked CharlesGLow for my 30th birthday and WOW! Everyone kept complimenting my makeup. She listened to exactly what I wanted and elevated it beyond my expectations.",
    rating: 5,
  },
  {
    id: 3,
    name: "Rachel Thompson",
    role: "Fashion Photographer",
    content: "As a photographer, I work with many makeup artists. CharlesGLow stands out for her professionalism, creativity, and ability to create camera-perfect looks every single time.",
    rating: 5,
  },
  {
    id: 4,
    name: "Olivia Williams",
    role: "Bride",
    content: "From the trial to the big day, the experience was seamless. She understood my vision perfectly and made me look like the best version of myself. Highly recommend!",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-medium">
            Testimonials
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground text-balance">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Quote Icon */}
            <Quote className="absolute -top-8 left-0 h-16 w-16 text-primary/20" />
            
            {/* Testimonial Content */}
            <div className="text-center px-4 md:px-12">
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="font-serif text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed mb-8">
                &ldquo;{testimonials[activeIndex].content}&rdquo;
              </blockquote>
              <div>
                <p className="font-medium text-foreground text-lg">
                  {testimonials[activeIndex].name}
                </p>
                <p className="text-muted-foreground">
                  {testimonials[activeIndex].role}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-12">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full border-primary/30 hover:bg-primary/10"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all",
                      index === activeIndex
                        ? "bg-primary w-6"
                        : "bg-border hover:bg-primary/50"
                    )}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full border-primary/30 hover:bg-primary/10"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
