import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Home from '../page'

describe('Home Page', () => {
  it('renders the header', () => {
    render(<Home />)
    expect(screen.getByText('CharlesGLow')).toBeInTheDocument()
  })

  it('renders the hero section', () => {
    render(<Home />)
    expect(screen.getByText('Elevate Your')).toBeInTheDocument()
  })

  it('renders the services section', () => {
    render(<Home />)
    expect(screen.getByText('Our Services')).toBeInTheDocument()
  })

  it('renders the gallery section', () => {
    render(<Home />)
    expect(screen.getByText('Our Work')).toBeInTheDocument()
  })

  it('renders the about section', () => {
    render(<Home />)
    expect(screen.getByText('The Artist Behind the Brush')).toBeInTheDocument()
  })

  it('renders the testimonials section', () => {
    render(<Home />)
    expect(screen.getByText('Client Love')).toBeInTheDocument()
  })

  it('renders the newsletter section', () => {
    render(<Home />)
    expect(screen.getByText(/Stay Updated/i)).toBeInTheDocument()
  })

  it('renders the footer', () => {
    render(<Home />)
    const footer = document.querySelector('footer')
    expect(footer).toBeInTheDocument()
  })

  it('has main element for accessibility', () => {
    render(<Home />)
    const main = document.querySelector('main')
    expect(main).toBeInTheDocument()
  })

  it('includes structured data for SEO', () => {
    render(<Home />)
    const scripts = document.querySelectorAll('script[type="application/ld+json"]')
    expect(scripts.length).toBeGreaterThan(0)
  })
})
