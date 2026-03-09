import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { NewsletterSection } from '../newsletter-section'

describe('NewsletterSection', () => {
  it('renders section header', () => {
    render(<NewsletterSection />)
    expect(screen.getByText(/Stay Updated/i)).toBeInTheDocument()
  })

  it('renders description text', () => {
    render(<NewsletterSection />)
    expect(screen.getByText(/exclusive beauty tips/i)).toBeInTheDocument()
  })

  it('renders email input', () => {
    render(<NewsletterSection />)
    const emailInput = screen.getByPlaceholderText(/email/i)
    expect(emailInput).toBeInTheDocument()
    expect(emailInput).toHaveAttribute('type', 'email')
  })

  it('renders subscribe button', () => {
    render(<NewsletterSection />)
    const submitButton = screen.getByRole('button', { name: /subscribe/i })
    expect(submitButton).toBeInTheDocument()
  })

  it('allows email input', () => {
    render(<NewsletterSection />)
    const emailInput = screen.getByPlaceholderText(/email/i)
    
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    expect(emailInput).toHaveValue('test@example.com')
  })

  it('shows success message after submission', async () => {
    render(<NewsletterSection />)
    const emailInput = screen.getByPlaceholderText(/email/i)
    const submitButton = screen.getByRole('button', { name: /subscribe/i })
    
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.click(submitButton)
    
    // Should show success state
    const successMessage = await screen.findByText(/thank you/i)
    expect(successMessage).toBeInTheDocument()
  })

  it('has proper form structure', () => {
    render(<NewsletterSection />)
    const form = document.querySelector('form')
    expect(form).toBeInTheDocument()
  })

  it('displays privacy note', () => {
    render(<NewsletterSection />)
    expect(screen.getByText(/spam/i)).toBeInTheDocument()
  })
})
