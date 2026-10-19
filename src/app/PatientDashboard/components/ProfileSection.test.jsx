import { render, screen, fireEvent } from '@testing-library/react'
import { describe, test, expect, vi, beforeEach } from 'vitest'
import ProfileSection from './ProfileSection'
import * as actions from '../actions'

// Mock actions
vi.mock('../actions', () => ({
    updateProfile: vi.fn(),
    uploadProfilePicture: vi.fn(),
}))

describe('ProfileSection Component', () => {
    const mockPatient = {
        fullName: 'John Doe',
        email: 'john@example.com',
        phoneNumber: '1234567890',
        dateOfBirth: '1990-01-01T00:00:00.000Z',
        gender: 'male',
        bloodGroup: 'O+',
        address: '123 Main St',
        allergies: 'None',
        medicalHistory: 'None',
        profilePicture: null,
    }

    beforeEach(() => {
        vi.clearAllMocks()
    })

    // Test 1: Basic UI Validation - ensures profile form elements and initial values render correctly
    test('renders profile form with patient data correctly', () => {
        render(<ProfileSection patient={mockPatient} />)

        expect(screen.getByText('Profile Information')).toBeInTheDocument()
        expect(screen.getByDisplayValue('John Doe')).toBeInTheDocument()
        expect(screen.getByDisplayValue('john@example.com')).toBeInTheDocument()
        expect(screen.getByDisplayValue('1234567890')).toBeInTheDocument()
        expect(screen.getByDisplayValue('1990-01-01')).toBeInTheDocument()
        expect(screen.getByDisplayValue('123 Main St')).toBeInTheDocument()
        expect(screen.getByRole('button', { name: /Save Profile/i })).toBeInTheDocument()
        expect(screen.getByRole('button', { name: /Upload/i })).toBeInTheDocument()
    })

    // Test 2: Renders initials avatar when profilePicture is missing
    test('renders initials avatar when profilePicture is not provided', () => {
        render(<ProfileSection patient={mockPatient} />)

        expect(screen.getByText('JD')).toBeInTheDocument()
    })

    // Test 3: Renders profile image when profilePicture is provided
    test('renders profile image when profilePicture exists', () => {
        const patientWithPic = { ...mockPatient, profilePicture: 'https://example.com/pic.jpg' }
        render(<ProfileSection patient={patientWithPic} />)

        const img = screen.getByAltText('Profile')
        expect(img).toBeInTheDocument()
        expect(img).toHaveAttribute('src', 'https://example.com/pic.jpg')
    })
})
