import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { HeroSection } from '../hero-section'

describe('HeroSection', () => {
  it('renders the main heading', () => {
    render(<HeroSection />)
    expect(screen.getByText('Elevate Your')).toBeInTheDocument()
    expect(screen.getByText('Natural Beauty')).toBeInTheDocument()
  })

  it('renders the subheading', () => {
    render(<HeroSection />)
    expect(screen.getByText(/Professional makeup artistry/i)).toBeInTheDocument()
  })

  it('renders the CTA buttons', () => {
    render(<HeroSection />)
    expect(screen.getByRole('button', { name: /book appointment/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /view services/i })).toBeInTheDocument()
  })

  it('renders statistics', () => {
    render(<HeroSection />)
    expect(screen.getByText('500+')).toBeInTheDocument()
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
    expect(screen.getByText('8+')).toBeInTheDocument()
    expect(screen.getByText('Years Experience')).toBeInTheDocument()
    expect(screen.getByText('100%')).toBeInTheDocument()
    expect(screen.getByText('Satisfaction')).toBeInTheDocument()
  })

  it('has background image', () => {
    render(<HeroSection />)
    const heroImage = screen.getByAltText('CharlesGLow makeup artistry')
    expect(heroImage).toBeInTheDocument()
    expect(heroImage).toHaveAttribute('src', '/images/hero-bg.jpg')
  })

  it('has proper section structure', () => {
    render(<HeroSection />)
    const section = document.querySelector('section')
    expect(section).toBeInTheDocument()
    expect(section).toHaveClass('relative')
  })

  it('renders decorative elements', () => {
    render(<HeroSection />)
    // Check for gradient overlays
    const overlays = document.querySelectorAll('.bg-gradient-to-r, .bg-gradient-to-t')
    expect(overlays.length).toBeGreaterThan(0)
  })
})
