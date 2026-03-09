import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Footer } from '../footer'

describe('Footer', () => {
  it('renders the logo', () => {
    render(<Footer />)
    expect(screen.getByText('CharlesGLow')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /services/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /gallery/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<Footer />)
    // Email or phone should be present
    expect(screen.getByText(/contact/i)).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Footer />)
    // Check for social media links
    const socialLinks = document.querySelectorAll('a[href*="instagram"], a[href*="facebook"], a[href*="tiktok"]')
    expect(socialLinks.length).toBeGreaterThan(0)
  })

  it('renders copyright notice', () => {
    render(<Footer />)
    expect(screen.getByText(/2024|CharlesGLow|rights reserved/i)).toBeInTheDocument()
  })

  it('renders service links', () => {
    render(<Footer />)
    expect(screen.getByText(/bridal makeup/i)).toBeInTheDocument()
  })

  it('has proper footer element', () => {
    render(<Footer />)
    const footer = document.querySelector('footer')
    expect(footer).toBeInTheDocument()
  })

  it('renders working hours or booking info', () => {
    render(<Footer />)
    // Should have some contact/booking related info
    const bookingInfo = screen.queryByText(/book|hours|appointment/i)
    expect(bookingInfo).toBeInTheDocument()
  })

  it('has proper section id for navigation', () => {
    render(<Footer />)
    const contactSection = document.getElementById('contact')
    expect(contactSection).toBeInTheDocument()
  })
})
