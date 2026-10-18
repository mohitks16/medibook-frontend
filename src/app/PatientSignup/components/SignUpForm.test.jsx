import { render, screen, fireEvent } from '@testing-library/react'
import { describe, test, expect, vi, beforeEach } from 'vitest'
import SignUpForm from './SignUpForm'
import { requestSignupOtp } from '../actions'

vi.mock('../actions', () => ({
    requestSignupOtp: vi.fn(),
}))

describe('SignUpForm Component', () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    test('renders patient signup form elements correctly', () => {
        render(<SignUpForm onSuccess={() => {}} />)

        expect(screen.getByText('Patient Signup')).toBeInTheDocument()
        expect(screen.getByPlaceholderText(/Enter your full name/i)).toBeInTheDocument()
        expect(screen.getByPlaceholderText(/valid gmail id/i)).toBeInTheDocument()
        expect(screen.getByPlaceholderText(/phone number/i)).toBeInTheDocument()
        expect(screen.getByRole('button', { name: /Signup/i })).toBeInTheDocument()
        expect(screen.getByText(/Already have an account/i)).toBeInTheDocument()
    })

    test('submits form and calls onSuccess when requestSignupOtp succeeds', async () => {
        const mockOnSuccess = vi.fn()
        requestSignupOtp.mockResolvedValue({ status: true })

        render(<SignUpForm onSuccess={mockOnSuccess} />)

        const fullNameInput = screen.getByPlaceholderText(/Enter your full name/i)
        const emailInput = screen.getByPlaceholderText(/valid gmail id/i)
        const phoneInput = screen.getByPlaceholderText(/phone number/i)
        const submitButton = screen.getByRole('button', { name: /Signup/i })

        fireEvent.change(fullNameInput, { target: { value: 'John Doe' } })
        fireEvent.change(emailInput, { target: { value: 'john@example.com' } })
        fireEvent.change(phoneInput, { target: { value: '1234567890' } })
        fireEvent.click(submitButton)

        expect(requestSignupOtp).toHaveBeenCalledWith('John Doe', 'john@example.com', '1234567890')
    })
})
