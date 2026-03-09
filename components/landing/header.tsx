"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg shadow-black/20 py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo - First on all screens */}
          <Link href="/" className="flex items-center gap-2 order-1 lg:order-1">
            <span className="font-serif text-2xl md:text-3xl font-semibold tracking-tight text-primary drop-shadow-[0_0_10px_rgba(180,150,100,0.3)]">
              CharlesGLow
            </span>
          </Link>

          {/* Navigation - Desktop Center */}
          <nav className="hidden lg:flex items-center gap-10 order-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium tracking-wide text-foreground/70 hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3 order-3">
            <Button 
              variant="outline" 
              size="sm" 
              className="hidden md:flex gap-2 border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Phone className="h-4 w-4" />
              Book Now
            </Button>
            
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-primary" />
              ) : (
                <Menu className="h-6 w-6 text-primary" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md border-b border-primary/20 overflow-hidden transition-all duration-300 ease-in-out",
            isMobileMenuOpen 
              ? "max-h-[400px] opacity-100" 
              : "max-h-0 opacity-0 pointer-events-none"
          )}
        >
          <nav className="container mx-auto px-4 py-6">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={cn(
                      "block py-3 px-4 text-lg font-medium text-foreground/70 hover:text-primary hover:bg-primary/5 rounded-lg transition-all",
                      isMobileMenuOpen && "animate-in fade-in slide-in-from-left-4"
                    )}
                    style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'both' }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4 mt-2 border-t border-primary/10">
                <Button 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Book Now
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
