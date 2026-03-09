import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { StructuredData } from '../structured-data'

describe('StructuredData', () => {
  it('renders JSON-LD scripts', () => {
    render(<StructuredData />)
    const scripts = document.querySelectorAll('script[type="application/ld+json"]')
    expect(scripts.length).toBeGreaterThan(0)
  })

  it('contains Organization schema', () => {
    render(<StructuredData />)
    const scripts = document.querySelectorAll('script[type="application/ld+json"]')
    let hasOrganization = false
    
    scripts.forEach(script => {
      if (script.textContent?.includes('"@type":"Organization"')) {
        hasOrganization = true
      }
    })
    
    expect(hasOrganization).toBe(true)
  })

  it('contains LocalBusiness schema', () => {
    render(<StructuredData />)
    const scripts = document.querySelectorAll('script[type="application/ld+json"]')
    let hasLocalBusiness = false
    
    scripts.forEach(script => {
      if (script.textContent?.includes('LocalBusiness') || script.textContent?.includes('BeautySalon')) {
        hasLocalBusiness = true
      }
    })
    
    expect(hasLocalBusiness).toBe(true)
  })

  it('contains Service schema', () => {
    render(<StructuredData />)
    const scripts = document.querySelectorAll('script[type="application/ld+json"]')
    let hasService = false
    
    scripts.forEach(script => {
      if (script.textContent?.includes('"@type":"Service"')) {
        hasService = true
      }
    })
    
    expect(hasService).toBe(true)
  })

  it('includes business name', () => {
    render(<StructuredData />)
    const scripts = document.querySelectorAll('script[type="application/ld+json"]')
    let hasName = false
    
    scripts.forEach(script => {
      if (script.textContent?.includes('CharlesGLow')) {
        hasName = true
      }
    })
    
    expect(hasName).toBe(true)
  })

  it('includes service prices', () => {
    render(<StructuredData />)
    const scripts = document.querySelectorAll('script[type="application/ld+json"]')
    let hasPrices = false
    
    scripts.forEach(script => {
      if (script.textContent?.includes('priceRange') || script.textContent?.includes('price')) {
        hasPrices = true
      }
    })
    
    expect(hasPrices).toBe(true)
  })

  it('has valid JSON structure', () => {
    render(<StructuredData />)
    const scripts = document.querySelectorAll('script[type="application/ld+json"]')
    
    scripts.forEach(script => {
      expect(() => {
        JSON.parse(script.textContent || '{}')
      }).not.toThrow()
    })
  })
})
