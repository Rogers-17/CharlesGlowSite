"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Check } from "lucide-react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
    }
  }

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-medium">
            Stay Connected
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 text-balance">
            Join Our Mailing List
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Subscribe to receive beauty tips, behind-the-scenes content, and be the first to know about special offers and availability.
          </p>

          {isSubscribed ? (
            <div className="flex items-center justify-center gap-3 p-4 bg-primary/10 border border-primary/30 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Check className="h-5 w-5 text-primary-foreground" />
              </div>
              <p className="text-foreground font-medium">
                Thank you for subscribing! We'll be in touch soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 px-4 bg-card border-border focus:border-primary"
                required
              />
              <Button type="submit" size="lg" className="h-12 px-6 group bg-primary text-primary-foreground hover:bg-primary/90">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          )}

          <p className="text-xs text-muted-foreground mt-4">
            By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  )
}
