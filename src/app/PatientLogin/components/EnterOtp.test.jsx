import { render, screen, fireEvent } from '@testing-library/react'
import { describe, test, expect, vi, beforeEach } from 'vitest'
import EnterOtp from './EnterOtp'
import { verifyLoginOtp } from './actions'

vi.mock('./actions', () => ({
    verifyLoginOtp: vi.fn(),
}))

describe('EnterOtp Component (Login)', () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    test('renders login OTP verification form with email', () => {
        const testEmail = 'login@example.com'
        render(<EnterOtp email={testEmail} />)

        expect(screen.getAllByText('Enter OTP').length).toBeGreaterThan(0)
        expect(screen.getByText(new RegExp(testEmail, 'i'))).toBeInTheDocument()
        expect(screen.getByPlaceholderText(/Enter the otp/i)).toBeInTheDocument()
        expect(screen.getByRole('button', { name: /Submit OTP/i })).toBeInTheDocument()
    })

    test('submits OTP and calls verifyLoginOtp with email and otp', async () => {
        const testEmail = 'login@example.com'
        verifyLoginOtp.mockResolvedValue({ status: true })

        render(<EnterOtp email={testEmail} />)

        const otpInput = screen.getByPlaceholderText(/Enter the otp/i)
        const submitButton = screen.getByRole('button', { name: /Submit OTP/i })

        fireEvent.change(otpInput, { target: { value: '654321' } })
        fireEvent.click(submitButton)

        expect(verifyLoginOtp).toHaveBeenCalledWith(testEmail, '654321')
    })
})
