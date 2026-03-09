import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { AboutSection } from '../about-section'

describe('AboutSection', () => {
  it('renders section header', () => {
    render(<AboutSection />)
    expect(screen.getByText('About Me')).toBeInTheDocument()
    expect(screen.getByText('The Artist Behind the Brush')).toBeInTheDocument()
  })

  it('renders about content', () => {
    render(<AboutSection />)
    expect(screen.getByText(/With over 8 years of experience/i)).toBeInTheDocument()
  })

  it('renders value propositions', () => {
    render(<AboutSection />)
    expect(screen.getByText('Certified Professional')).toBeInTheDocument()
    expect(screen.getByText('Premium Products')).toBeInTheDocument()
    expect(screen.getByText('Personalized Approach')).toBeInTheDocument()
  })

  it('renders about image', () => {
    render(<AboutSection />)
    const image = screen.getByAltText(/CharlesGLow/i)
    expect(image).toBeInTheDocument()
  })

  it('renders CTA button', () => {
    render(<AboutSection />)
    const ctaButton = screen.getByRole('button', { name: /learn more/i })
    expect(ctaButton).toBeInTheDocument()
  })

  it('has proper section id for navigation', () => {
    render(<AboutSection />)
    const section = document.getElementById('about')
    expect(section).toBeInTheDocument()
  })

  it('displays years of experience', () => {
    render(<AboutSection />)
    expect(screen.getByText(/8 years/i)).toBeInTheDocument()
  })
})
