import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import Header from './Header'

describe('Header', () => {

    test('renders the brand name "Medibook"', () => {
        render(<Header />)
        expect(screen.getByText('Medibook')).toBeInTheDocument()
    })

    test('renders the logo with correct alt text', () => {
        render(<Header />)
        expect(screen.getByAltText('Doctor Icon')).toBeInTheDocument()
    })

    test('renders all navigation links', () => {
        render(<Header />)
        expect(screen.getByText('Search Doctor')).toBeInTheDocument()
        expect(screen.getByText('Register as Doctor')).toBeInTheDocument()
        expect(screen.getByText('Doctor Login')).toBeInTheDocument()
        expect(screen.getByText('Patient Login / Signup')).toBeInTheDocument()
    })

    test('"Search Doctor" link points to correct route', () => {
        render(<Header />)
        const link = screen.getByText('Search Doctor').closest('a')
        expect(link).toHaveAttribute('href', '/PatientDashboard/123')
    })

    test('"Register as Doctor" link points to correct route', () => {
        render(<Header />)
        const link = screen.getByText('Register as Doctor').closest('a')
        expect(link).toHaveAttribute('href', '/RegisterAsDoctor')
    })

    test('"Doctor Login" link points to correct route', () => {
        render(<Header />)
        const link = screen.getByText('Doctor Login').closest('a')
        expect(link).toHaveAttribute('href', '/DoctorLogin')
    })

    test('"Patient Login / Signup" link points to correct route', () => {
        render(<Header />)
        const link = screen.getByText('Patient Login / Signup').closest('a')
        expect(link).toHaveAttribute('href', '/PatientLogin')
    })

})