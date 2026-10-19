import { render, screen, fireEvent } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import DashboardShell from './DashboardShell'

describe('DashboardShell Component', () => {
    const mockPatient = {
        fullName: 'Jane Doe',
        email: 'jane@example.com',
    }

    // Test 1: Renders patient greeting and navigation tabs
    test('renders patient greeting and tabs correctly', () => {
        render(<DashboardShell patient={mockPatient} />)

        expect(screen.getByText('Hello, Jane Doe')).toBeInTheDocument()
        expect(screen.getByText('Find and book appointments with top specialists')).toBeInTheDocument()
        expect(screen.getByRole('button', { name: /Find Doctors/i })).toBeInTheDocument()
        expect(screen.getByRole('button', { name: /My Profile/i })).toBeInTheDocument()
        expect(screen.getByRole('button', { name: /Bookings/i })).toBeInTheDocument()
    })

    // Test 2: Renders ProfileSection by default (since initial tab is "profile")
    test('renders profile section by default', () => {
        render(<DashboardShell patient={mockPatient} />)

        expect(screen.getByText('Profile Information')).toBeInTheDocument()
        expect(screen.getByDisplayValue('Jane Doe')).toBeInTheDocument()
    })

    // Test 3: Switches to Bookings tab when clicked
    test('switches to Bookings tab when Bookings button is clicked', () => {
        render(<DashboardShell patient={mockPatient} />)

        const bookingsButton = screen.getByRole('button', { name: /Bookings/i })
        fireEvent.click(bookingsButton)

        // Verify booking filter buttons appear
        expect(screen.getByRole('button', { name: /^all$/i })).toBeInTheDocument()
        expect(screen.getByRole('button', { name: /^upcoming$/i })).toBeInTheDocument()
        expect(screen.getByRole('button', { name: /^past$/i })).toBeInTheDocument()
        expect(screen.getByText('Completed')).toBeInTheDocument()
    })
})
