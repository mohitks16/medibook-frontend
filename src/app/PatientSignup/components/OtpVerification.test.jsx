import { render, screen, fireEvent } from '@testing-library/react'
import { describe, test, expect, vi, beforeEach } from 'vitest'
import OtpVerfication from './OtpVerfication'
import { verifySignupOtp } from '../actions'

vi.mock('../actions', () => ({
    verifySignupOtp: vi.fn(),
}))

describe('OtpVerfication Component (Signup)', () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    test('renders OTP verification form with email', () => {
        const testEmail = 'test@example.com'
        render(<OtpVerfication email={testEmail} />)

        expect(screen.getAllByText('Enter OTP').length).toBeGreaterThan(0)
        expect(screen.getByText(new RegExp(testEmail, 'i'))).toBeInTheDocument()
        expect(screen.getByPlaceholderText(/Enter the otp/i)).toBeInTheDocument()
        expect(screen.getByRole('button', { name: /Submit OTP/i })).toBeInTheDocument()
    })

    test('submits OTP and calls verifySignupOtp with email and otp', async () => {
        const testEmail = 'test@example.com'
        verifySignupOtp.mockResolvedValue({ status: true })

        render(<OtpVerfication email={testEmail} />)

        const otpInput = screen.getByPlaceholderText(/Enter the otp/i)
        const submitButton = screen.getByRole('button', { name: /Submit OTP/i })

        fireEvent.change(otpInput, { target: { value: '123456' } })
        fireEvent.click(submitButton)

        expect(verifySignupOtp).toHaveBeenCalledWith(testEmail, '123456')
    })
})
