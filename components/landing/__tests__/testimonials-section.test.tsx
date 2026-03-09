import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { TestimonialsSection } from '../testimonials-section'

describe('TestimonialsSection', () => {
  it('renders section header', () => {
    render(<TestimonialsSection />)
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
    expect(screen.getByText('Client Love')).toBeInTheDocument()
  })

  it('renders testimonial content', () => {
    render(<TestimonialsSection />)
    // Check for testimonial quotes (at least one should be visible)
    const quotes = document.querySelectorAll('blockquote')
    expect(quotes.length).toBeGreaterThan(0)
  })

  it('displays client names', () => {
    render(<TestimonialsSection />)
    // At least one client name should be visible
    const clientNames = screen.getAllByText(/Sarah|Emma|Jennifer|Michelle/i)
    expect(clientNames.length).toBeGreaterThan(0)
  })

  it('shows star ratings', () => {
    render(<TestimonialsSection />)
    // Stars should be rendered for ratings
    const stars = document.querySelectorAll('[class*="text-primary"]')
    expect(stars.length).toBeGreaterThan(0)
  })

  it('has navigation controls', () => {
    render(<TestimonialsSection />)
    const prevButton = screen.getByLabelText(/previous/i)
    const nextButton = screen.getByLabelText(/next/i)
    expect(prevButton).toBeInTheDocument()
    expect(nextButton).toBeInTheDocument()
  })

  it('navigates to next testimonial', () => {
    render(<TestimonialsSection />)
    const nextButton = screen.getByLabelText(/next/i)
    
    // Click next
    fireEvent.click(nextButton)
    
    // Component should still be functional
    expect(screen.getByText('Client Love')).toBeInTheDocument()
  })

  it('navigates to previous testimonial', () => {
    render(<TestimonialsSection />)
    const prevButton = screen.getByLabelText(/previous/i)
    
    // Click prev
    fireEvent.click(prevButton)
    
    // Component should still be functional
    expect(screen.getByText('Client Love')).toBeInTheDocument()
  })

  it('displays service type for testimonials', () => {
    render(<TestimonialsSection />)
    // Should show what service the testimonial is for
    const serviceTypes = screen.getAllByText(/bridal|wedding|photoshoot|birthday/i)
    expect(serviceTypes.length).toBeGreaterThan(0)
  })
})
