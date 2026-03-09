import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { Header } from '../header'

describe('Header', () => {
  beforeEach(() => {
    // Reset scroll position
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true })
  })

  it('renders the logo', () => {
    render(<Header />)
    expect(screen.getByText('CharlesGLow')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Header />)
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('Gallery')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders book now button on desktop', () => {
    render(<Header />)
    const bookButton = screen.getByRole('button', { name: /book now/i })
    expect(bookButton).toBeInTheDocument()
  })

  it('toggles mobile menu when hamburger is clicked', () => {
    render(<Header />)
    const menuButton = screen.getByLabelText('Toggle menu')
    
    // Initially mobile menu should not show its nav items in the dropdown
    const mobileNav = screen.queryByRole('list')
    expect(mobileNav).not.toBeInTheDocument()
    
    // Click to open
    fireEvent.click(menuButton)
    
    // Now mobile menu should be visible
    const mobileNavOpen = screen.getByRole('list')
    expect(mobileNavOpen).toBeInTheDocument()
  })

  it('closes mobile menu when link is clicked', () => {
    render(<Header />)
    const menuButton = screen.getByLabelText('Toggle menu')
    
    // Open menu
    fireEvent.click(menuButton)
    
    // Click a link in the mobile menu
    const links = screen.getAllByText('Services')
    const mobileLink = links[links.length - 1] // Get the mobile menu link
    fireEvent.click(mobileLink)
    
    // Menu should close
    const mobileNav = screen.queryByRole('list')
    expect(mobileNav).not.toBeInTheDocument()
  })

  it('changes style when scrolled', () => {
    render(<Header />)
    const header = screen.getByRole('banner')
    
    // Initially should be transparent
    expect(header).toHaveClass('bg-transparent')
    
    // Simulate scroll
    Object.defineProperty(window, 'scrollY', { value: 100, writable: true })
    fireEvent.scroll(window)
    
    // Should now have background
    expect(header).toHaveClass('bg-background/95')
  })

  it('has correct href for navigation links', () => {
    render(<Header />)
    
    expect(screen.getByRole('link', { name: 'Services' })).toHaveAttribute('href', '#services')
    expect(screen.getByRole('link', { name: 'Gallery' })).toHaveAttribute('href', '#gallery')
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '#about')
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact')
  })

  it('logo links to home', () => {
    render(<Header />)
    const logoLink = screen.getByRole('link', { name: 'CharlesGLow' })
    expect(logoLink).toHaveAttribute('href', '/')
  })
})
