import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, test, expect, vi, beforeEach } from 'vitest'
import LoginForm from './LoginForm'
import { requestLoginOtp } from './actions'

vi.mock('./actions', () => ({
    requestLoginOtp: vi.fn(),
}))

describe('LoginForm Component (Login)', () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    test('renders patient login form elements correctly', () => {
        render(<LoginForm onSuccess={() => {}} />)

        expect(screen.getByText('Patient Login')).toBeInTheDocument()
        expect(screen.getByPlaceholderText(/Enter your email id/i)).toBeInTheDocument()
        expect(screen.getByRole('button', { name: /Request OTP/i })).toBeInTheDocument()
        expect(screen.getByText(/Don't have an account/i)).toBeInTheDocument()
    })

    test('submits login form and calls onSuccess when requestLoginOtp succeeds', async () => {
        const mockOnSuccess = vi.fn()
        requestLoginOtp.mockResolvedValue({ response: true })

        render(<LoginForm onSuccess={mockOnSuccess} />)

        const emailInput = screen.getByPlaceholderText(/Enter your email id/i)
        const submitButton = screen.getByRole('button', { name: /Request OTP/i })

        fireEvent.change(emailInput, { target: { value: 'user@example.com' } })
        fireEvent.click(submitButton)

        await waitFor(() => {
            expect(requestLoginOtp).toHaveBeenCalledWith('user@example.com')
            expect(mockOnSuccess).toHaveBeenCalledWith('user@example.com')
        })
    })
})
