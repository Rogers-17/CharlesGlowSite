import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ServicesSection } from '../services-section'

describe('ServicesSection', () => {
  it('renders section header', () => {
    render(<ServicesSection />)
    expect(screen.getByText('What We Offer')).toBeInTheDocument()
    expect(screen.getByText('Our Services')).toBeInTheDocument()
  })

  it('renders all services', () => {
    render(<ServicesSection />)
    expect(screen.getByText('Bridal Makeup')).toBeInTheDocument()
    expect(screen.getByText('Birthday Glam')).toBeInTheDocument()
    expect(screen.getByText('Occasion Makeup')).toBeInTheDocument()
    expect(screen.getByText('Photoshoot Makeup')).toBeInTheDocument()
    expect(screen.getByText('Editorial & Fashion')).toBeInTheDocument()
    expect(screen.getByText('Soft Glam')).toBeInTheDocument()
  })

  it('displays service prices', () => {
    render(<ServicesSection />)
    expect(screen.getByText('$350')).toBeInTheDocument() // Bridal
    expect(screen.getByText('$120')).toBeInTheDocument() // Birthday
    expect(screen.getByText('$150')).toBeInTheDocument() // Occasion
    expect(screen.getByText('$200')).toBeInTheDocument() // Photoshoot
    expect(screen.getByText('$280')).toBeInTheDocument() // Editorial
    expect(screen.getByText('$85')).toBeInTheDocument()  // Soft Glam
  })

  it('displays service durations', () => {
    render(<ServicesSection />)
    expect(screen.getByText('2-3 hours')).toBeInTheDocument()
    expect(screen.getByText('1-1.5 hours')).toBeInTheDocument()
    expect(screen.getByText('45 min - 1 hour')).toBeInTheDocument()
  })

  it('shows popular badges for popular services', () => {
    render(<ServicesSection />)
    const popularBadges = screen.getAllByText('Popular')
    expect(popularBadges).toHaveLength(2) // Bridal and Photoshoot
  })

  it('renders service features', () => {
    render(<ServicesSection />)
    expect(screen.getByText('Trial Session')).toBeInTheDocument()
    expect(screen.getByText('Touch-up Kit')).toBeInTheDocument()
    expect(screen.getByText('HD Ready')).toBeInTheDocument()
  })

  it('renders book now buttons for each service', () => {
    render(<ServicesSection />)
    const bookButtons = screen.getAllByRole('button', { name: /book now/i })
    expect(bookButtons).toHaveLength(6)
  })

  it('renders service images', () => {
    render(<ServicesSection />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(6)
  })

  it('renders custom quote CTA section', () => {
    render(<ServicesSection />)
    expect(screen.getByText('Need a Custom Package?')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /get custom quote/i })).toBeInTheDocument()
  })

  it('has proper section id for navigation', () => {
    render(<ServicesSection />)
    const section = document.getElementById('services')
    expect(section).toBeInTheDocument()
  })
})
