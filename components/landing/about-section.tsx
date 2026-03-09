import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Clock, Users } from "lucide-react"

const values = [
  {
    icon: Award,
    title: "Certified Artist",
    description: "Professionally trained with international certifications.",
  },
  {
    icon: Users,
    title: "Client First",
    description: "Your vision and comfort are our top priority.",
  },
  {
    icon: Clock,
    title: "Always On Time",
    description: "Punctual service so your day runs smoothly.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-4/5 max-w-lg mx-auto">
              <Image
                src="/images/charles.JPG"
                alt="Professional makeup artist at work"
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Stats Card */}
            <div className="absolute -bottom-6 -right-6 lg:right-0 bg-card border border-border p-6 md:p-8 rounded-xl shadow-xl max-w-[200px]">
              <p className="font-serif text-4xl md:text-5xl font-semibold text-primary mb-1">8+</p>
              <p className="text-sm text-muted-foreground">Years of experience</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-medium">
              About Me
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 text-balance">
              The Artist Behind CharlesGLow
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              With over 8 years of experience in the beauty industry, I founded CharlesGLow to help clients feel confident and beautiful for life's most important moments.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              From intimate weddings to high-fashion editorials, I bring passion, precision, and creativity to every look I create. My mission is to enhance your natural beauty while making you feel like the best version of yourself.
            </p>

            {/* Values */}
            <div className="grid gap-6 mb-8">
              {values.map((value) => (
                <div key={value.title} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <value.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/90">
              Get In Touch
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
