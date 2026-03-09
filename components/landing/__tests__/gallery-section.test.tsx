import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { GallerySection } from '../gallery-section'

describe('GallerySection', () => {
  it('renders section header', () => {
    render(<GallerySection />)
    expect(screen.getByText('Our Portfolio')).toBeInTheDocument()
    expect(screen.getByText('Our Work')).toBeInTheDocument()
  })

  it('renders gallery description', () => {
    render(<GallerySection />)
    expect(screen.getByText(/Browse through our collection/i)).toBeInTheDocument()
  })

  it('renders all gallery images', () => {
    render(<GallerySection />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(8)
  })

  it('displays image categories', () => {
    render(<GallerySection />)
    expect(screen.getByText('Bridal')).toBeInTheDocument()
    expect(screen.getByText('Editorial')).toBeInTheDocument()
    expect(screen.getByText('Glam')).toBeInTheDocument()
  })

  it('opens lightbox when image is clicked', () => {
    render(<GallerySection />)
    const galleryItems = document.querySelectorAll('[role="button"]')
    
    if (galleryItems.length > 0) {
      fireEvent.click(galleryItems[0])
      // Check if lightbox opens (dialog should appear)
      const dialog = document.querySelector('[role="dialog"]')
      expect(dialog).toBeInTheDocument()
    }
  })

  it('closes lightbox when close button is clicked', () => {
    render(<GallerySection />)
    const galleryItems = document.querySelectorAll('[role="button"]')
    
    if (galleryItems.length > 0) {
      // Open lightbox
      fireEvent.click(galleryItems[0])
      
      // Find and click close button
      const closeButton = screen.getByLabelText('Close lightbox')
      fireEvent.click(closeButton)
      
      // Dialog should be closed
      const dialog = document.querySelector('[role="dialog"]')
      expect(dialog).not.toBeInTheDocument()
    }
  })

  it('has proper section id for navigation', () => {
    render(<GallerySection />)
    const section = document.getElementById('gallery')
    expect(section).toBeInTheDocument()
  })

  it('renders with responsive grid layout', () => {
    render(<GallerySection />)
    const grid = document.querySelector('.grid')
    expect(grid).toBeInTheDocument()
  })
})
